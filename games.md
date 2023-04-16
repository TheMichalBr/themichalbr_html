<h1>CS Settings</h1>

| MM & WM Rank | FACEIT | ESPORTAL |
| :------------: | :------------: | :------------: |
| <img src="https://totalcsgo.com/image/ranks/skillgroup18.png" weight="65" height="65"> | <img src="https://fluvi.s3.eu-central-1.amazonaws.com/3OV-XYBHhEq.png" weight="65" height="65"> | <img src="https://user-images.githubusercontent.com/51486174/230768322-5f77778f-56a9-4b1f-a251-b87eef041a5d.png" weight="65" height="65"> |
| Global Elite - https://steamcommunity.com/id/misakbr2/ | Level 7 - https://faceit.com/en/players/michalbr- | Elite 1 - https://esportal.com/en/profile/michalbr |

| Resolution and Brigthness | Volume | Quality settings | Mouse settings | In-Game sensitivity and scope sensitivity |
| :------------: | :------------: | :------------: | :------------: | :------------: |
| 1280x1024 270Hz, 4:3 - Stretched-Fullscreen, Computer Monitor - 125% | 25% (VOIP: 35%) | Almost everything is set to LOW, except for multithreaded rendering ON and shadows HIGH | 400 DPI, 1000Hz, 6/11 | 2,4 / 1 |

| Crosshair | Viewmodel | Binds | Launch options | HUD | Radar | cl_bob |
| :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: |
| CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D | viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2; cl_righthand 1; viewmodel_presetpos 0 | bind f "use weapon_smokegrenade"; bind v "use weapon_flashbang"; bind = "holdpos"; bind "alt" "toggle cl_righthand 0 1"; r_cleardecals"; (Using MOUSE4 for player ping and MOUSE5 for use microphone and MOUSE3) | -high -threads 8 -novid -nojoy -freq 270 -tickrate 128 +fps_max 500 +fps_max_menu 144 +cl_updaterate 128 -cl_cmdrate 128 -rate 786432 +cl_interp_ratio 1 +cl_interp 0 -dxlevel 81 -language bananagaming +exec autoexec.cfg | hud_scaling 0.896259; cl_hud_color 0; cl_hud_playercount_showcount 0; cl_hud_playercount_pos 0; cl_showloadout 0; cl_hud_healthammo_style 0; cl_hud_background_alpha 0.5; cl_hud_bomb_under_radar 1; safezonex 0.993978; safezoney 0.993978 | cl_hud_radar_scale 1.15; cl_radar_scale 0.4; cl_radar_always_centered 1; cl_radar_rotate 1; cl_radar_icon_scale_min 0.4 | cl_viewmodel_shift_left_amt 0.5;cl_viewmodel_shift_right_amt 0.25;viewmodel_recoil 0;cl_bob_lower_amt 5;cl_bobamt_lat 0.1;cl_bobamt_vert 0.1 |

<h5>autoexec.cfg</h5>
  
```ruby
// Crosshair - CSGO-Z2DdF-fjDA5-QHVPd-3uBWQ-CrrBE

// Viewmodel
viewmodel_fov 68;viewmodel_offset_x 1;viewmodel_offset_y 2;viewmodel_offset_z -2;cl_righthand 1;viewmodel_presetpos 0;
  
viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2; cl_righthand 1; viewmodel_presetpos 0

// Weapon Movement
cl_viewmodel_shift_left_amt 0.5;cl_viewmodel_shift_right_amt 0.25;viewmodel_recoil 0;
cl_bob_lower_amt 5;cl_bobamt_lat 0.1;cl_bobamt_vert 0.1;

// Radar
cl_radar_scale 0.4; cl_radar_always_centered 1; cl_hud_radar_scale 1.15; cl_radar_icon_scale_min 0.25;
cl_radar_rotate 1; cl_radar_square_with_scoreboard 1;

// Binds
bind "alt" "+speed; r_cleardecals";bind "alt" "toggle cl_righthand 0 1";bind f "use weapon_smokegrenade";
bind v "use weapon_flashbang"; bind = "holdpos"; bind "alt" "toggle cl_righthand 0 1"; r_cleardecals";
bind "kp_pgdn" "buy awp; buy vesthelm; buy vest; buy defuser;"
bind "kp_downarrow" "buy m4a1; buy ak47; buy defuser; buy vesthelm; buy vest;"

// Other
cl_autohelp "0";cl_showhelp "0";cl_cmdrate "128";cl_updaterate "128";

clear;
echo #### MichalBr's config loaded! ####;
```

<h5>practice.cfg</h5>
  
```ruby
// Commands
sv_cheats 1;mp_warmup_end 1;mp_startmoney 16000;mp_freezetime 0;mp_limitteams 0;mp_autoteambalance 0;
mp_roundtime_defuse 60;mp_roundtime_hostage 60;mp_limitteams 0;mp_autoteambalance 0;bot_stop 1;
mp_solid_teammates 1;mp_maxmoney 99999;god;mp_startmoney 99999;ammo_grenade_limit_total 6;
sv_grenade_trajectory_thickness 1;sv_showimpacts 1;mp_buy_anywhere 1;mp_roundtime 60;
sv_grenade_trajectory_time 10;sv_showbullethits 1;sv_infinite_ammo 1;
mp_restartgame 1;mp_humanteam any;bot_kick;sv_grenade_trajectory 1;
sv_showimpacts_time 10;bot_mimic_yaw_offset 0;mp_buytime 1337;

// Binds
bind "c" "sv_rethrow_last_grenade";bind "x" "noclip";

clear;
Say #### MichalBr's practice config loaded! ####;
```
