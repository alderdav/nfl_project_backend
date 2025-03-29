import { Games } from "../../models/entities/Games";
import { ApplicationDataSource } from "../../db/ApplicationDataSource";
import { DataSource } from "typeorm";
import { Player_Stats } from "../../models/entities/Player_Stats";
import { Players } from "../../models/entities/Players";
import { Team_Colors } from "../../models/entities/Team_Colors";
import { Team_Info } from "../../models/views/Team_Info";
import { Team } from "../../models/domain-objects/Team";
import { DAOFormatter } from "./formatter/DOAFormatter";

export class DataAccessObject {

    private dataSource: DataSource;
    private daoFormatter: DAOFormatter;

    constructor() {
        this.dataSource = ApplicationDataSource.getInstance().getDataSource();
        this.daoFormatter = new DAOFormatter();
    }

    getTeams(): Promise<Team[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Team_Info).findBy({
                season: 2019
            })
                .then(data => {
                    const teams: Team[] = this.daoFormatter.createTeamDomainObjects(data);
                    resolve(teams)
                })
        })
    }

    getGames(): Promise<Games[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Games).findBy({
                game_id: "1999_01_BUF_IND"
            })
            .then((data) => {
                resolve(data);
            })
        })
    }

    getPlayerStats(): Promise<Player_Stats[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Player_Stats).findBy({
                player_id: '00-0005363'
            })
            .then((data) => {
                resolve(data);
            })
        })
    }

    getPlayerInfo(): Promise<Players[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Players).findBy({
                gsis_id: '00-0005363'
            })
            .then((data) => {
                resolve(data);
            })
        })
    }

    getTeamColors(): Promise<Team_Colors[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Team_Colors).find()
            .then((data) => {
                resolve(data);
            })
        })
    }
}