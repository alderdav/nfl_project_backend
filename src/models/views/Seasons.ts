import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('v_seasons')
export class Seasons {
    @PrimaryColumn()
    season!: number;
}