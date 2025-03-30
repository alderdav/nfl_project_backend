import { Entity, Column, PrimaryColumn, JoinColumn, OneToMany, ManyToOne, Relation, ManyToMany, JoinTable } from "typeorm";

@Entity("logos")
export class Logos {
    @PrimaryColumn()
    team?: string;

    @Column()
    team_logo!: string;

    // @OneToMany(() => Team, team => team.abbr)
    // @JoinColumn()
    // teams!: Relation<Team[]>;
}