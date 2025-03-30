import { Roster_Player } from "./Roster_Player";

export interface Roster {
    team: string;
    season: number;
    players: Roster_Player[];
}