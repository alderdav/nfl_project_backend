import express, {Application, NextFunction, Request, Response} from 'express';
import { ApplicationDataSource } from './db/ApplicationDataSource';
import { CacheManager } from "./db/CacheManager";
import { Router } from './api/routes/Router';

const app: Application = express();
const port = 3000;
ApplicationDataSource.getInstance().initializeDataSource()
    .then(result => {
        console.log(result);
    });

CacheManager.getCacheInstance().intializeCacheClient()

// Container.getInstance();

// app.use(express.json())

export const checkCache = async (req: Request, res: Response, next: NextFunction) => {
    const cache = CacheManager.getCacheInstance().getCacheClient();
    const cachedData = await cache.get('cachedData');

    if(cachedData) {
        res.send(JSON.parse(cachedData));
    } else {
        next(); // Continue to route handler if data is not in cache
    }
}

//Still need to understand app.use() and the middleware
app.use((req: Request, res: Response, next: Function) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'Accept, Content-Type, Authorization, X-Requested-With'
    });
    next();
});

app.use('/', Router);

app.get('/cache', checkCache, async (req: Request, res: Response) => {
    const cache = CacheManager.getCacheInstance().getCacheClient();
    const value = 'not in cache'
    res.send(value);
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});