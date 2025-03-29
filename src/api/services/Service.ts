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

    getGames(): Promise<Games[]> {
        return this.dao.getGames();
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