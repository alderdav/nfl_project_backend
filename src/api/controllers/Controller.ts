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