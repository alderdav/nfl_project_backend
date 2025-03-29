import { Service } from "../services/Service";

export class Controller {
    
    private service: Service;

    constructor() {
        this.service = new Service();
    }

    getAllTeams(req: any, res: any) { // I want to find out the correct interface for req, res
        let season: number = req.params.season;
        this.service.getAllTeams(season)
            .then(teams => {
                res.send(teams);
            })
    }

    getAllSeasons(req: any, res: any) {
        this.service.getAllSeasons()
            .then(seasons => {
                res.send(seasons)
            })
    }

    getGames(req: any, res: any) {
        this.service.getGames()
            .then(data => {
                res.send(data);
            })
    }

    getPlayerStats(req: any, res: any) {
        this.service.getPlayerStats()
            .then(data => {
                res.send(data);
            })
    }

    getPlayerInfo(req: any, res: any) {
        this.service.getPlayerInfo()
            .then(data => {
                res.send(data);
            })
    }

    getTeamColors(req: any, res: any) {
        this.service.getTeamColors()
            .then(data => {
                res.send(data);
            })
    }
}