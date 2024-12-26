import { DataSource, DataSourceOptions } from "typeorm";
import { Team_Colors } from "../entities/Team_Colors";

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
                entities: [Team_Colors]
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