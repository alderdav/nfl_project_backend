import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity("team_colors")
export class Team_Colors {
    @PrimaryColumn()
    team_id!: number;

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