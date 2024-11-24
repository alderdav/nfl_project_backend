import express, {Application, Request, Response} from 'express';
import pg from 'pg';
const { Client } = pg;
const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

const client = new Client({
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'nfl_db',
});

await client.connect();

const result = await client.query('select * from nfl_stats.otc_players limit 10')
console.log(result)
 
await client.end()