import express, {Request, response, Response} from 'express';
import { Controller } from '../controllers/Controller';

const router = express.Router();

// Get all teams and their info
router.get('/season/:season/teams/all-teams', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getAllTeams(req, res);
})

// Get all possible seasons with data on it
router.get('/season/all-seasons', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getAllSeasons(req, res);
})

// (1) Get all of the games in a season
// (2) Get all of the games for a particular team(s) in a season
router.get('/season/:season/games', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getGames(req, res);
})

// Get Roster for a particular team
router.get('/season/:season/team/:team/roster', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getRoster(req, res);
})

// Get Player Details and Stats
router.get('/player/:player_id/player_profile', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getPlayerProfile(req, res);
})

export {router as Router};