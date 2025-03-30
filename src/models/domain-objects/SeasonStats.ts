import { Player_Stats } from "../entities/Player_Stats";
import { GameStats } from "./GameStats";

// This is used to show all of the stats for a player in a given year, the stats are given on a per game basis
export interface SeasonStats {
    season: number;
    stats: GameStats[];
}