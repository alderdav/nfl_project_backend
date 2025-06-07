import { Service } from "../services/Service";
import { Response, Request } from "express";
import { Cache } from "../cache/Cache";

export class Controller {
    
    private service: Service;
    private cache: Cache;

    constructor() {
        this.service = new Service();
        this.cache = new Cache();
    }

    async getAllTeams(req: Request, res: Response) { // I want to find out the correct interface for req, res
        let season: number = Number(req.params.season);
        const teams = await this.service.getAllTeams(season);
        this.cache.setCacheValue(req.url, JSON.stringify(teams), 0)
        .then(data => {
            console.log('Here is the data', data)
        })
        res.json(teams);
    }

    getAllSeasons(req: Request, res: Response) {
        this.service.getAllSeasons()
        .then(seasons => {
            this.cache.setCacheValue(req.url, JSON.stringify(seasons), 0)
            .then(data => {
                console.log('Here is the data', data)
            })
            res.json(seasons);
        })
    }

    //I should optimize this so that I am not calling two different cachin
    getGames(req: any, res: any) {
        let season: number = req.params.season;
        let teamsQueryPararm: string | undefined = req.query.teams;
        let games = {}
        if(teamsQueryPararm) {
            let teamsList = teamsQueryPararm.split(',');
            this.service.getGamesPerSeasonPerTeam(season, teamsList)
                .then(gamesResponse => {
                    games = gamesResponse
                })
        } else {
            this.service.getGamesPerSeason(season)
            .then(gamesResponse => {
                games = gamesResponse
            })
        }

        this.cache.setCacheValue(req.url, JSON.stringify(games), 0)
        .then(data => {
            console.log('Here is the data', data)
        })

        res.send(games);
    }

    getRoster(req: any, res: any) {
        let season: number = req.params.season;
        let team: string = req.params.team;
        this.service.getRoster(season, team)
            .then(players => {
                this.cache.setCacheValue(req.url, JSON.stringify(players), 0)
                .then(data => {
                    console.log('Here is the data', data)
                })
                res.json(players);
            })
    }

    getPlayerProfile(req: any, res: any) {
        let playerId: string = req.params.player_id;
        this.service.getPlayerProfile(playerId)
            .then(playerProfile => {
                this.cache.setCacheValue(req.url, JSON.stringify(playerProfile), 0)
                .then(data => {
                    console.log('Here is the data', data)
                })
                res.json(playerProfile);
            })
    }

}