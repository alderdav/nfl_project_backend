import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team_Colors {
    @Column()
    team_id: number;

    @Column()
    color: string

    @Column()
    color2: string

    @Column()
    color3: string

    @Column()
    color4: string

}