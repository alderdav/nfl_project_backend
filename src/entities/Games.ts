import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Games {
    @PrimaryColumn()
    game_id?: string;

    @Column()
    week!: number;

    @Column()
    gameday!: Date;

    @Column()
    weekday!: string;

    @Column()
    gametime!: string;

    @Column()
    away_team!: string;

    @Column()
    away_score!: number;

    @Column()
    home_team!: string;

    @Column()
    home_score!: string;

    @Column()
    location!: string;

    @Column()
    result!: number;

    @Column()
    total!: number;

    @Column()
    overtime!: number;

    @Column()
    old_game_id!: string;

    @Column()
    gsis!: string;

    @Column()
    nfl_detail_id!: string;

    @Column()
    pfr!: string;

    @Column()
    pff!: string;

    @Column()
    espn!: string;

    @Column()
    ftn!: string;

    @Column()
    away_rest!: number;

    @Column()
    home_rest!: number;

    @Column()
    away_moneyline!: string;

    @Column()
    spread_line!: number;

    @Column()
    away_spread_odds!: string;

    @Column()
    home_spread_odds!: string;

    @Column()
    total_line!: number;

    @Column()
    under_odds!: string;

    @Column()
    over_odds!: string;

    @Column()
    div_game!: number;

    @Column()
    roof!: string;

    @Column()
    surface!: string;

    @Column()
    temp!: number;

    @Column()
    wind!: number;

    @Column()
    away_qb_id!: string;

    @Column()
    home_qb_id!: string;

    @Column()
    away_qb_name!: string;

    @Column()
    home_qb_name!: string;

    @Column()
    away_coach!: string;

    @Column()
    home_coach!: string;

    @Column()
    referee!: string;

    @Column()
    stadium_id!: string;

    @Column()
    stadium!: string;
}