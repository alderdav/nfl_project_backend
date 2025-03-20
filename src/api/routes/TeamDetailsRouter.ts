import express from 'express';
import { ApplicationDataSource } from '../db/ApplicationDataSource';
import { Logos } from '../entities/Logos';
import { DataSource } from 'typeorm';

const router = express.Router();


router.get('/hi', async (req, res) => {
    console.log('made it here');
    const dataSource: DataSource = ApplicationDataSource.getInstance().getDataSource();
    const team = await dataSource.getRepository(Logos).findOneBy({ team: 'BUF' });
    console.log(team);
    res.send(team);
});


export { router as TeamDetailsRouter }