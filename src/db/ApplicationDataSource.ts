import { DataSource, DataSourceOptions } from "typeorm";
import { Team_Colors } from "../entities/Team_Colors";

export class ApplicationDataSource {

    private static instance: ApplicationDataSource;
    private static dataSource: DataSource;
    private static dataSourceOptions: DataSourceOptions = {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "password",
        database: "nfl_db",
        schema: 'nfl'
    }


    private constructor() {

    }

    public static getInstance() {
        if(!ApplicationDataSource.instance) {
            this.instance = new ApplicationDataSource();
            this.dataSource = new DataSource(this.dataSourceOptions)
        }
        return this.instance;
    }

    public static async connect(): Promise<void> {
        if(!ApplicationDataSource.dataSource.isInitialized) {
            await ApplicationDataSource.dataSource.initialize();
        }
    }

}