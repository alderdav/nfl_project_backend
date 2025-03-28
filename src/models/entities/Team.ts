import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('teams')
export class Team {
    @PrimaryColumn()
    season?: number;

    @PrimaryColumn()
    teamId?: number;

    @Column()
    abbr!: string;

    @Column()
    cityState!: string;

    @Column()
    fullName!: string;

    @Column()
    nick!: string;

    @Column()
    conferenceAbbr!: number;

    @Column()
    divisionAbbr!: string;

    // @ManyToOne(() => Logos, logos => logos.team)
    // logo!: Relation<Logos>;
}