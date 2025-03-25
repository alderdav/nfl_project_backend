import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Logos {
    @PrimaryColumn()
    team?: string;

    @Column()
    team_logo!: string;
}