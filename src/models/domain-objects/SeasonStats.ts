import { Player_Stats } from "../entities/Player_Stats";

// This is used to show all of the stats for a player in a given year, the stats are given on a per game basis
export interface SeasonStats {
    stats: Player_Stats[];
}