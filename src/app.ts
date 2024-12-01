import express, {Application, Request, Response} from 'express';
import { DataSource, EntityManager } from 'typeorm';
import { ApplicationDataSource } from './db/ApplicationDataSource';
const app: Application = express();
const port = 3000;
const dataSource = ApplicationDataSource.getInstance();
dataSource.initializeDataSource()
    .then(result => {
        console.log(result);
    })
    .then(() => {
        queryDatabase(dataSource.getDataSource())
            .then(result => {
                console.log(result);
            })
    })

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

function queryDatabase(ds: DataSource): Promise<any> {
    return new Promise((resolve, reject) => {
        ds.query('Select * from nfl.team_colors')
            .then(result => {
                resolve(result);
            })
    })
}