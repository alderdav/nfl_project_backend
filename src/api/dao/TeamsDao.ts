import { Games } from "../../models/entities/Games";
import { ApplicationDataSource } from "../../db/ApplicationDataSource";
import { Logos } from "../../models/entities/Logos";
import { DataSource } from "typeorm";
import { Player_Stats } from "../../models/entities/Player_Stats";
import { Players } from "../../models/entities/Players";
import { Team_Colors } from "../../models/entities/Team_Colors";

export class TeamsDao {

    private dataSource: DataSource;

    constructor() {
        this.dataSource = ApplicationDataSource.getInstance().getDataSource();
    }

    getTeams(): Promise<Logos[]> {
        return new Promise((resolve, reject) => {
            this.dataSource.getRepository(Logos).find()
                .then(data => {
                    resolve(data);
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