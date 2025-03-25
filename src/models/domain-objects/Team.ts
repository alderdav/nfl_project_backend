export interface Team {
    teamId: number;
    city: string;
    fullName: string;
    nickName: string;
    conference: string; 
    division: string;
    team: string; //This is what is being used to join nfl.logos, nfl.team_colors, nfl-play-by-play.teams
    team_logo: string;
    colors: string[];
}