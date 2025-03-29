import { Team } from "../../../models/domain-objects/Team";
import { Team_Info } from "../../../models/views/Team_Info";

export class DAOFormatter {

    constructor() {

    }

    createTeamDomainObjects(teamInfo: Team_Info[]): Team[] {
        let teams: Team[] = [];
        teamInfo.forEach(singleTeamInfo => {
            let colors: string[] = [singleTeamInfo.color, singleTeamInfo.color2, singleTeamInfo.color3, singleTeamInfo.color4];
            let team: Team = {
                teamId: singleTeamInfo.teamId,
                team: singleTeamInfo.team,
                city: singleTeamInfo.city,
                fullName: singleTeamInfo.fullName,
                nickName: singleTeamInfo.nickName,
                conference: singleTeamInfo.conference,
                division: singleTeamInfo.division,
                team_logo: singleTeamInfo.team_logo,
                colors: colors
            }
            teams.push(team);
        })
        return teams;
    }
}