import express, {Application, Request, Response} from 'express';
import { DataSource, EntityManager } from 'typeorm';
import { ApplicationDataSource } from './db/ApplicationDataSource';
import { Container } from './containers/Container';
import { TeamDetailsRouter as teamDetailsRouter} from './routes/TeamDetailsRouter';
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
    });

Container.getInstance();

app.use('/team-details', teamDetailsRouter);

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