create view nfl.v_teams_info as
select t."teamId", t."cityState", t."fullName", t."nick", t."conferenceAbbr", t."divisionAbbr", t."season", l.team, l.team_logo, tc.color, tc.color2, tc.color3, tc.color4
from team_colors tc 
join logos l on l.team = tc.team
join teams t on l.team = t.abbr
order by l.team asc;

create view nfl.v_seasons as
select distinct season from teams;