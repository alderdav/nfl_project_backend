import { Games } from "../../models/entities/Games";
import { ApplicationDataSource } from "../../db/ApplicationDataSource";
import { Any, DataSource } from "typeorm";
import { Player_Stats } from "../../models/entities/Player_Stats";
import { Players } from "../../models/entities/Players";
import { Team_Info } from "../../models/views/Team_Info";
import { Team } from "../../models/domain-objects/Team";
import { DAOFormatter } from "./formatter/DOAFormatter";
import { Seasons } from "../../models/domain-objects/Seasons";
import { Seasons as vSeasons } from "../../models/views/Seasons";
import { Roster } from "../../models/domain-objects/Roster";
import { PlayerProfile } from "../../models/domain-objects/PlayerProfile";
import { SeasonStats } from "../../models/domain-objects/SeasonStats";

export class DataAccessObject {

    private dataSource: DataSource;
    private daoFormatter: DAOFormatter;

    constructor() {
        this.dataSource = ApplicationDataSource.getInstance().getDataSource();
        this.daoFormatter = new DAOFormatter();
    }

    getAllTeams(season: number): Promise<Team[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Team_Info).findBy({
                season: season
            })
            .then((team_info: Team_Info[]) => {
                const teams: Team[] = this.daoFormatter.createTeamDomainObjects(team_info);
                resolve(teams)
            })
        })
    }

    getAllSeasons(): Promise<Seasons> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(vSeasons).find({
                order: {
                    season: "ASC"
                }
            })
            .then((arrSeasons: vSeasons[]) => {
                const seasons: Seasons = this.daoFormatter.createSeasonsDomainObject(arrSeasons);
                resolve(seasons)
            })
        })
    }

    //I need to make this more flexible, include filter by team
    getGamesPerSeason(season: number): Promise<Games[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Games).findBy({
                season: season
            })
            .then((arrGames: Games[]) => {
                resolve(arrGames);
            })
        })
    }

    getGamesPerSeasonPerTeam(season: number, teams: string[]): Promise<Games[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Games).findBy({
                season: season,
                away_team: Any(teams)
            })
            .then((arrAwayGames: Games[]) => {
                this.dataSource.getRepository(Games).findBy({
                    season: season,
                    home_team: Any(teams)
                })
                .then((arrHomeGames: Games[]) => {
                    const arrTotalGames: Games[] = [...arrAwayGames, ...arrHomeGames];
                    resolve(arrTotalGames);
                })
            })
        })
    }

    getRoster(season: number, team: string): Promise<Roster> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Player_Stats)
                .createQueryBuilder('player_stats')
                .where({
                    season: season,
                    recent_team: team
                })
                .distinctOn(['player_stats.player_id'])
                .getMany()
            .then(arrPlayers => {
                const players = this.daoFormatter.createRosterDomainObject(arrPlayers);
                resolve(players);
            })

        })
    }

    // CREATE REAL CATCHE EXCEPTIONS - THIS IS A HACK
    getPlayerProfile(playerId: string): Promise<PlayerProfile> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Players).findBy({
                gsis_id: playerId
            })
            .then((playerInfo: Players[]) => {
                if(playerInfo === null) {
                    reject('Failed to find player profile due to incorrect playerid')
                }
                const playerProfile: PlayerProfile = this.daoFormatter.createPlayerProfile(playerInfo[0]);
                this.dataSource.getRepository(Player_Stats).find({
                    where: {
                        player_id: playerId
                    },
                    order: {
                        season: "ASC",
                        week: "ASC"
                    }
                })
                .then((arrPlayerGameStats: Player_Stats[]) => {
                    const stats: SeasonStats[] = this.daoFormatter.createSeasonStats(arrPlayerGameStats);
                    playerProfile.stats = stats;
                    resolve(playerProfile)
                })
                
            })
            .catch(error => {
                throw new Error("coulnd find playerid => " + error);
            })
        })
    }

}