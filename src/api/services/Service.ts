import { Player_Stats } from "../../models/entities/Player_Stats";
import { Games } from "../../models/entities/Games";
import { DataAccessObject } from "../dao/DataAccessObject";
import { Players } from "../../models/entities/Players";
import { Team_Colors } from "../../models/entities/Team_Colors";
import { Team } from "../../models/domain-objects/Team";
import { Seasons } from "../../models/domain-objects/Seasons";

export class Service {

    private dao: DataAccessObject;

    constructor() {
        this.dao = new DataAccessObject();
    }

    getAllTeams(season: number): Promise<Team[]> {
        return this.dao.getAllTeams(season);
    }

    getAllSeasons(): Promise<Seasons> {
        return this.dao.getAllSeasons();
    }

    getGamesPerSeason(season: number): Promise<Games[]> {
        return this.dao.getGamesPerSeason(season);
    }

    getGamesPerSeasonPerTeam(season: number, teams: string[]): Promise<Games[]> {
        return this.dao.getGamesPerSeasonPerTeam(season, teams);
    }

    getPlayerStats(): Promise<Player_Stats[]> {
        return this.dao.getPlayerStats();
    }

    getPlayerInfo(): Promise<Players[]> {
        return this.dao.getPlayerInfo();
    }

    getTeamColors(): Promise<Team_Colors[]> {
        return this.dao.getTeamColors();
    }
}