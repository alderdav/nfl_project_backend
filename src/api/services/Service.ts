import { Games } from "../../models/entities/Games";
import { DataAccessObject } from "../dao/DataAccessObject";
import { Team } from "../../models/domain-objects/Team";
import { Seasons } from "../../models/domain-objects/Seasons";
import { Roster } from "../../models/domain-objects/Roster";
import { PlayerProfile } from "../../models/domain-objects/PlayerProfile";

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

    getRoster(season: number, team: string): Promise<Roster> {
        return this.dao.getRoster(season, team);
    }

    getPlayerProfile(playerId: string): Promise<PlayerProfile> {
        return this.dao.getPlayerProfile(playerId);
    }

}