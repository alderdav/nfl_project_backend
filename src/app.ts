import express, {Application, Request, Response} from 'express';
import { ApplicationDataSource } from './db/ApplicationDataSource';
import { Container } from './containers/Container';
import { TeamsDao } from './api/dao/TeamsDao';

const app: Application = express();
const port = 3000;
ApplicationDataSource.getInstance().initializeDataSource()
    .then(result => {
        console.log(result);
    });

// Container.getInstance();

app.use(express.json())

app.get('/teams', (req, res) => {
    let teamsDao = new TeamsDao();
    let teamsPromise = teamsDao.getTeams();
    teamsPromise.then(data => {
        res.send(data);
    })
});

app.get('/games', (req, res) => {
    let teamsDao = new TeamsDao();
    let gamesPromise = teamsDao.getGames();
    gamesPromise.then((data) => {
        res.send(data);
    })
});

app.get('/player_stats', (req, res) => {
    let teamsDao = new TeamsDao();
    let playerStatsPromise = teamsDao.getPlayerStats();
    playerStatsPromise.then((data) => {
        res.send(data);
    })
})

app.get('/player_info', (req, res) => {
    let teamsDao = new TeamsDao();
    let playerInfoPromise = teamsDao.getPlayerInfo();
    playerInfoPromise.then((data) => {
        res.send(data);
    })
});

app.get('/team_colors', (req, res) => {
    let teamsDao = new TeamsDao();
    let teamColorsPromise = teamsDao.getTeamColors();
    teamColorsPromise.then((data) => {
        res.send(data);
    })
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});