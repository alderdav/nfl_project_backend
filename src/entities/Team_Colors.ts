import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Team_Colors {
    @PrimaryColumn()
    team_id?: number;

    @Column()
    team!: string;

    @Column()
    color!: string

    @Column()
    color2!: string

    @Column()
    color3!: string

    @Column()
    color4!: string

}