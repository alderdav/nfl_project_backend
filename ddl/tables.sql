CREATE TABLE otc_players (
	otc_id serial primary key,
	nfl_player_id varchar(25),
	esbid varchar(25),
	gsis_id varchar(25),
	gsis_it_id varchar(25),
	pff_id varchar(25)
);

CREATE TABLE players (
	gsis_id varchar(25) primary key,
	display_name varchar(50),
	common_first_name varchar(50),
	first_name varchar(50),
	last_name varchar(50),
	esb_id varchar(50),
	pfr_id varchar(50),
	otc_id varchar(50),
	espn_id varchar(50),
	smart_id varchar(50),
	birth_date Date,
	position_group varchar(10),
	position varchar(10),
	height int8,
	weight int8,
	headshot varchar(500),
	college_name varchar(250),
	rookie_season int4,
	last_season int4,
	last_team varchar(50),
	status varchar(50),
	years_of_experience int2,
	pff_position varchar(50),
	pff_status varchar(10),
	draft_year int4,
	draft_pick int4,
	draft_team varchar(50)
);

-- Try to create a table with new column player_stats_id that is made for every row
CREATE TABLE nfl_stats.player_stats (
	player_name varchar(50),
	player_display_name varchar(50),
	position varchar(10),
	position_group varchar(10),
	headshot_url varchar(500),
	recent_team varchar(50),
	season int4,
	week int2,
	season_type varchar(10),
	opponent_team varchar(10),
	completions int4,
	attempts int4,
	passing_yards int4,
	passing_tds int4,
	interceptions int4,
	sacks int4,
	sack_yards int4,
	sack_fumbles int4,
	sack_fumbles_lost int4,
	passing_air_yards int4,
	passing_yards_after_catch int4,
	passing_first_downs int4,
	passing_epa decimal,
	passing_2pt_conversions int4,
	pacr decimal,
	dakota decimal,
	carries int4,
	rushing_yards int4,
	rushing_tds int4,
	rushing_fumbles int4,
	rushing_fumbles_lost int4,
	rushing_first_downs int4,
	rushing_epa decimal,
	rushing_2pt_conversions int4,
	receptions int4,
	targets int4,
	receiving_yards int4,
	receiving_tds int4,
	receiving_fumbles int4,
	receiving_fumbles_lost int4,
	receiving_air_yards int4,
	receiving_yards_after_catch int4,
	receiving_first_downs int4,
	receiving_epa int4,
	receiving_2pt_conversions int4,
	racr decimal,
	target_share decimal,
	air_yards_share decimal,
	wopr decimal,
	special_teams_tds int4,
	fantasy_points decimal,
	fantasy_points_ppr decimal
);

CREATE TABLE logos (
	team varchar(3),
	team_logo varchar(500)
);

CREATE TABLE team_colors (
	team_id int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	team varchar(3),
	color varchar(7),
	color2 varchar(7),
	color3 varchar(7),
	color4 varchar(7)
);