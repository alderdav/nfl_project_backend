import { Service } from "../services/Service";

export class Controller {
    
    private service: Service;

    constructor() {
        this.service = new Service();
    }

    getTeams(req: any, res: any) { // I want to find out the correct interface for req, res
        this.service.getTeams()
            .then(data => {
                res.send(data);
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