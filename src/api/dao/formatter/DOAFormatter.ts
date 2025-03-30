import { Seasons } from "../../../models/domain-objects/Seasons";
import { Team } from "../../../models/domain-objects/Team";
import { Team_Info } from "../../../models/views/Team_Info";
import { Seasons as vSeasons } from "../../../models/views/Seasons";
import { Player_Stats } from "../../../models/entities/Player_Stats";
import { Roster } from "../../../models/domain-objects/Roster";
import { Roster_Player } from "../../../models/domain-objects/Roster_Player";
import { PlayerProfile } from "../../../models/domain-objects/PlayerProfile";
import { Players } from "../../../models/entities/Players";
import { SeasonStats } from "../../../models/domain-objects/SeasonStats";
import { GameStats } from "../../../models/domain-objects/GameStats";

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

    createSeasonsDomainObject(arrSeasons: vSeasons[]): Seasons {
        let seasonsObj: Seasons = {seasons: []};
        arrSeasons.forEach(vSeason => {
            seasonsObj.seasons.push(vSeason.season)
        })
        return seasonsObj;
    }

    createRosterDomainObject(arrPlayer_Stats: Player_Stats[]): Roster {
        let roster: Roster = {team: arrPlayer_Stats[0].recent_team, season: arrPlayer_Stats[0].season, players: []};
        arrPlayer_Stats.forEach(player => {
            let rosterPlayer: Roster_Player = {playerId: player.player_id, name: player.player_display_name, position: player.position}
            roster.players.push(rosterPlayer);
        })
        return roster;
    }

    createPlayerProfile(playerInfo: Players): PlayerProfile {
        let playerProfile: PlayerProfile = {
            gsis_id: playerInfo.gsis_id,
            displayName: playerInfo.display_name,
            firstName: playerInfo.first_name,
            lastName: playerInfo.last_name,
            birthDate: playerInfo.birth_date,
            position: playerInfo.position,
            height: playerInfo.height,
            weight: playerInfo.weight,
            headshot: playerInfo.headshot,
            college_name: playerInfo.college_name,
            rookieSeason: playerInfo.rookie_season,
            lastSeason: playerInfo.last_season,
            lastTeam: playerInfo.last_name,
            years: playerInfo.years_of_experience,
            draft: playerInfo.draft_year,
            pick: playerInfo.draft_pick,
            draftTeam: playerInfo.draft_team,
            number: playerInfo.jersey_number,
            round: playerInfo.draft_round,
            stats: []
        }
        return playerProfile;
    }

    createSeasonStats(arrPlayer_Stats: Player_Stats[]): SeasonStats[] {
        let seasonStats: SeasonStats[] = [];
        arrPlayer_Stats.forEach(playerStats => {
            const gameStats: GameStats = this.createGameStats(playerStats);
            const matchingSeason = seasonStats.filter(seasonStat => {
                if(seasonStat.season === playerStats.season) {
                    return true;
                }
            })

            if(matchingSeason.length === 0) {
                const seasonStat: SeasonStats = {season: playerStats.season, stats: [gameStats]};
                seasonStats.push(seasonStat)
            } else {
                matchingSeason[0].stats.push(gameStats);
            }
        })
        return seasonStats;
    }

    createGameStats(playerStat: Player_Stats): GameStats {
        const gameStats: GameStats = {
            week: playerStat.week,
            opponent: playerStat.opponent_team,
            completions: playerStat.completions,
            attempts: playerStat.attempts,
            passing_yards: playerStat.passing_yards,
            passing_tds: playerStat.passing_tds,
            interceptions: playerStat.interceptions,
            sacks: playerStat.sacks,
            sack_yards: playerStat.sack_yards,
            sack_fumbles: playerStat.sack_fumbles,
            sack_fumbles_lost: playerStat.sack_fumbles_lost,
            passing_air_yards: playerStat.passing_air_yards,
            passing_yards_after_catch: playerStat.passing_yards_after_catch,
            passing_first_downs: playerStat.passing_first_downs,
            passing_epa: playerStat.passing_epa,
            passing_2pt_conversions: playerStat.passing_2pt_conversions,
            pacr: playerStat.pacr,
            dakota: playerStat.dakota,
            carries: playerStat.carries,
            rushing_yards: playerStat.rushing_yards,
            rushing_tds: playerStat.rushing_tds,
            rushing_fumbles: playerStat.rushing_fumbles,
            rushing_fumbles_lost: playerStat.rushing_fumbles_lost,
            rushing_first_downs: playerStat.rushing_first_downs,
            rushing_epa: playerStat.rushing_epa,
            rushing_2pt_conversions: playerStat.rushing_2pt_conversions,
            receptions: playerStat.receptions,
            targets: playerStat.targets,
            receiving_yards: playerStat.receiving_yards,
            receiving_tds: playerStat.receiving_tds,
            receiving_fumbles: playerStat.receiving_fumbles,
            receiving_fumbles_lost: playerStat.receiving_fumbles_lost,
            receiving_air_yards: playerStat.receiving_air_yards,
            receiving_yards_after_catch: playerStat.receiving_yards_after_catch,
            receiving_first_downs: playerStat.receiving_first_downs,
            receiving_epa: playerStat.receiving_epa,
            receiving_2pt_conversions: playerStat.receiving_2pt_conversions,
            racr: playerStat.racr,
            target_share: playerStat.target_share,
            air_yards_share: playerStat.air_yards_share,
            wopr: playerStat.wopr,
            special_teams_tds: playerStat.special_teams_tds,
            fantasy_points: playerStat.fantasy_points,
            fantasy_points_ppr: playerStat.fantasy_points_ppr
        }
        return gameStats;
    }
}