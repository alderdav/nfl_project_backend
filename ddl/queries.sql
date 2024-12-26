select team_colors.team_id, team_colors.team, team_colors.color, team_colors.color2, team_colors.color3, team_colors.color4, logos.team_logo
from team_colors
join logos on team_colors.team = logos.team;

select *
from player_stats
join players on player_stats.player_id = players.gsis_id;

-- I can link together games to qbs by games.away_qb_id or games.home_qb_id to players.gsis_id.
-- I can link teams to games by team name.