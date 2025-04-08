import express, {Application, Request, Response} from 'express';
import { ApplicationDataSource } from './db/ApplicationDataSource';
import { Container } from './containers/Container';
import { Router } from './api/routes/Router';

const app: Application = express();
const port = 3000;
ApplicationDataSource.getInstance().initializeDataSource()
    .then(result => {
        console.log(result);
    });

// Container.getInstance();

// app.use(express.json())

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

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});