import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('v_teams_info')
export class Team_Info {
    @PrimaryColumn()
    teamId!: number; //teams.teamId (nfl-play-by-play)
    
    @PrimaryColumn({name: "cityState"})
    city!: string; //teams.cityState

    @Column()
    fullName!: string; //teams.fullName

    @Column({name: "nick"})
    nickName!: string; // teams.nick

    @Column({name: "conferenceAbbr"})
    conference!: string; // teams.conferenceAbbr
    
    @Column({name: "divisionAbbr"})
    division!: string; // teams.divisionAbbr

    @Column()
    season!: number; //teams.season
    
    @Column()
    team!: string; // logos.team -> This is what is being used to join nfl.logos, nfl.team_colors, nfl-play-by-play.teams
    
    @Column()
    team_logo!: string; // logos.team_logo
    
    @Column()
    color!: string; // team_colors.color

    @Column()
    color2!: string; // team_colors.color

    @Column()
    color3!: string; // team_colors.color

    @Column()
    color4!: string; // team_colors.color
}