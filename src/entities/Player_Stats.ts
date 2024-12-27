import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity()
export class Player_Stats {
    @PrimaryColumn()
    id?: number;

    @Column()
    player_id!: string;

    @Column()
    player_name!: string;

    @Column()
    player_display_name!: string;

    @Column()
    position!: string;

    @Column()
    position_group!: string;

    @Column()
    headshot_url!: string;

    @Column()
    recent_team!: string;

    @Column()
    season!: number;

    @Column()
    week!: number;

    @Column()
    season_type!: string;

    @Column()
    opponent_team!: string;

    @Column()
    completions!: number;

    @Column()
    attempts!: number;

    @Column()
    passing_yards!: number;

    @Column()
    passing_tds!: number;

    @Column()
    interceptions!: number;

    @Column()
    sacks!: number;

    @Column()
    sack_yards!: number;

    @Column()
    sack_fumbles!: number;

    @Column()
    sack_fumbles_lost!: number;

    @Column()
    passing_air_yards!: number;

    @Column()
    passing_yards_after_catch!: number;

    @Column()
    passing_first_downs!: number;

    @Column()
    passing_epa!: number;

    @Column()
    passing_2pt_conversions!: number;

    @Column()
    pacr!: number;

    @Column()
    dakota!: number;

    @Column()
    carries!: number;

    @Column()
    rushing_yards!: number;

    @Column()
    rushing_tds!: number;

    @Column()
    rushing_fumbles!: number;

    @Column()
    rushing_fumbles_lost!: number;

    @Column()
    rushing_first_downs!: number;

    @Column()
    rushing_epa!: number;

    @Column()
    rushing_2pt_conversions!: number;

    @Column()
    receptions!: number;

    @Column()
    targets!: number;

    @Column()
    receiving_yards!: number;

    @Column()
    receiving_tds!: number;

    @Column()
    receiving_fumbles!: number;

    @Column()
    receiving_fumbles_lost!: number;

    @Column()
    receiving_air_yards!: number;

    @Column()
    receiving_yards_after_catch!: number;

    @Column()
    receiving_first_downs!: number;

    @Column()
    receiving_epa!: number;

    @Column()
    receiving_2pt_conversions!: number;

    @Column()
    racr!: number;

    @Column()
    target_share!: number;

    @Column()
    air_yards_share!: number;

    @Column()
    wopr!: number;

    @Column()
    special_teams_tds!: number;

    @Column()
    fantasy_points!: number;

    @Column()
    fantasy_points_ppr!: number;

}