export interface Team {
    teamId: number; //teams.teamId (nfl-play-by-play)
    city: string; //teams.cityState
    fullName: string; //teams.fullName
    nickName: string; // teams.nick
    conference: string; // teams.conferenceAbbr
    division: string; // teams.divisionAbbr
    team: string; // logos.team -> This is what is being used to join nfl.logos, nfl.team_colors, nfl-play-by-play.teams
    team_logo: string; // logos.team_logo
    colors: string[]; // team_colors.color - team_colors.color4
}

// select t."teamId", t."cityState", t."fullName", t."nick", t."conferenceAbbr", t."divisionAbbr", l.team, l.team_logo, tc.color, tc.color2, tc.color3, tc.color4
// from team_colors tc 
// join logos l on l.team = tc.team
// join "nfl-play-by-play".teams t on l.team = t.abbr
// where t.season = 2019
// order by l.team asc;