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

app.use(express.json())
app.use('/', Router)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});