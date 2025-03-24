import { Entity, Column, PrimaryColumn } from "typeorm";
import { Url } from "url";

@Entity()
export class Players {
    @PrimaryColumn()
    gsis_id!: string;

    @Column()
    display_name!: string;

    @Column()
    common_first_name!: string;

    @Column()
    first_name!: string;

    @Column()
    last_name!: string;

    @Column()
    birth_date!: Date;

    @Column()
    position_group!: string;

    @Column()
    position!: string;

    @Column()
    height!: number;

    @Column()
    weight!: number;

    @Column()
    headshot!: string;

    @Column()
    college_name!: string;

    @Column()
    rookie_season!: number;

    @Column()
    last_season!: number;

    @Column()
    last_team!: string;

    @Column()
    status!: string;

    @Column()
    years_of_experience!: number;

    @Column()
    pff_position!: string;

    @Column()
    pff_status!: string;

    @Column()
    draft_year!: number;

    @Column()
    draft_pick!: number;

    @Column()
    draft_round!: number;

    @Column()
    jersey_number!: number;
}