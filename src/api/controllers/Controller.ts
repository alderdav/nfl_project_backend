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

    async getAllTeams(req: any, res: any) { // I want to find out the correct interface for req, res
        let season: number = req.params.season;
        const teams = await this.service.getAllTeams(season);
        res.send(teams);
    }

    getAllSeasons(req: Request, res: Response) {
        const cacheKey = req.url;
        if(this.cache.checkCache(cacheKey)) {
            this.cache.grabCacheValue(cacheKey)
            .then((cacheValue) => {
                res.send(cacheValue);
            })
        } else {
            this.service.getAllSeasons()
            .then(seasons => {
                this.cache.setCacheValue(cacheKey, seasons, 0)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log('There was an issue setting value in cache. Error => ', err)
                })
                res.send(seasons)
            })
        }
    }

    getGames(req: any, res: any) {
        let season: number = req.params.season;
        let teamsQueryPararm: string | undefined = req.query.teams;
        if(teamsQueryPararm) {
            let teamsList = teamsQueryPararm.split(',');
            this.service.getGamesPerSeasonPerTeam(season, teamsList)
                .then(games => {
                    res.send(games);
                })
        } else {
            this.service.getGamesPerSeason(season)
            .then(games => {
                res.send(games);
            })
        }
    }

    getRoster(req: any, res: any) {
        let season: number = req.params.season;
        let team: string = req.params.team;
        this.service.getRoster(season, team)
            .then(players => {
                res.send(players);
            })
    }

    getPlayerProfile(req: any, res: any) {
        let playerId: string = req.params.player_id;
        this.service.getPlayerProfile(playerId)
            .then(playerProfile => {
                res.send(playerProfile);
            })
    }

}