import express, {Application, Request, Response} from 'express';
import { DataSource, EntityManager } from 'typeorm';
import { ApplicationDataSource } from './db/ApplicationDataSource';
const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "nfl_db",
    schema: 'nfl'
})

await dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
const manager: EntityManager = dataSource.manager;
const data = await dataSource.query('Select * from nfl.team_colors');
console.log(data);