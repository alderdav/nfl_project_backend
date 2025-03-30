import { DataSource, DataSourceOptions } from "typeorm";
import { Team_Colors } from "../models/entities/Team_Colors";
import { Players } from "../models/entities/Players";
import { Player_Stats } from "../models/entities/Player_Stats";
import { Games } from "../models/entities/Games";
import { Logos } from "../models/entities/Logos";
import { Team_Info } from "../models/views/Team_Info";
import { Seasons } from "../models/views/Seasons";

export class ApplicationDataSource {

    private static instance: ApplicationDataSource;
    private dataSource!: DataSource;

    private constructor() {
        // Singleton
    }

    public static getInstance(): ApplicationDataSource {
        if(!ApplicationDataSource.instance) {
            this.instance = new ApplicationDataSource();
        }
        return this.instance;
    }

    public initializeDataSource(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.dataSource = new DataSource({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "password",
                database: "nfl_db",
                schema: 'nfl',
                entities: [Team_Colors, Players, Player_Stats, Games, Logos, Team_Info, Seasons]
            });
            this.dataSource.initialize()
                .then(() => {
                    resolve('Datasource Initialized Successfully!')
                }, rejection => {
                    throw new Error(rejection);
                })
                .catch((err) => {
                    reject("Error during Data Source Initalization. Error => " + err);
                })
        })
    }

    public getDataSource(): DataSource {
        return this.dataSource;
    }

}