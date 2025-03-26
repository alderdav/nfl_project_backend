// This will be all the details about a player and their stats, combining the players (player info) and player_stats (player_stats per week) table

import { SeasonStats } from "./SeasonStats";

// we map the tables together by mapping player_stats.player_id = players.gsis_id
interface PlayerProfile {
    gsis_id: string; //players.gsis_id
    displayName: string; //players.display_name
    firstName: string;  //players.first_name
    lastName: string; //players.last_name
    birthDate: Date; //players.birth_date
    position: string; //players.position
    height: number; //players.height
    weight: number; //players.weight
    headshot: string; //players.headshot
    college_name: string; //players.college_name
    rookieSeason: number; //players.rookie_season
    lastSeason: number; //players.last_season
    lastTeam: string; //players.last_team
    years: number; //players.years_of_experience
    draft: number; //players.draft_year
    pick: number; //players.draft_pick
    draftTeam: string; //players.draft_team
    number: number; //players.jersey_number;
    round: number; //players.draft_round;
    stats: SeasonStats[];
}