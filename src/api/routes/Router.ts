import express from 'express';
import { Controller } from '../controllers/Controller';

const router = express.Router();

router.get('/teams', (req, res) => {
    const controller = new Controller();
    controller.getTeams(req, res);
})

router.get('/games', (req, res) => {
    const controller = new Controller();
    controller.getGames(req, res);
})

router.get('/player_stats', (req, res) => {
    const controller = new Controller();
    controller.getPlayerStats(req, res);
})

router.get('/player_info', (req, res) => {
    const controller = new Controller();
    controller.getPlayerInfo(req, res);
})

router.get('/team_colors', (req, res) => {
    const controller = new Controller();
    controller.getTeamColors(req, res);
})

export {router as Router};