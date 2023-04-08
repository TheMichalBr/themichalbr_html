<!-- <h1>CS2 Settings</h1>

<table>
<tr><td><b>MM & WM Rank</b></td><td><b>Danger Zone Rank</b></td><td><b>FACEIT Level (www.faceit.com/en/players/michalbr-)</b></td><td><b>ESPORTAL Level (www.esportal.com/en/profile/michalbr)</b></td></tr>
<tr><td><small><img src="https://totalcsgo.com/image/ranks/skillgroup18.png">Global Elite</small></td><td><small><img src="https://csgo-ranks.com/wp-content/uploads/sites/12/2020/07/danger-zone-rank-timber-wolf.png" weight="62" height="62"> Timber Wolf</small></td><td><small> <img src="https://fluvi.s3.eu-central-1.amazonaws.com/3OV-XYBHhEq.png" weight="65" height="65"> Level 7 (1500+)</small></td><td><small> <img src="https://broomingboost.net/wp-content/uploads/2021/08/esportal-boost.png" weight="65" height="65"> Elite 1</small></td></tr>
</table>

<h3>My settings (still no cs2, but looks like cfg will be soon just history)</h3>
<details>
<summary>autoexec.cfg - Personal config (exec autoexec.cfg in console)</summary>
<h6></h6>
  
```ruby
// Crosshair ( CSGO-Z2DdF-fjDA5-QHVPd-3uBWQ-CrrBE )

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
<h6></h6>
</details>

<details>
<summary>practice.cfg - Config for practice (exec practice.cfg in console)</summary>
<h6></h6>
  
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
<h6></h6>
</details>

<table>
<tr><td><b>Crosshair</b></td><td><b>Viewmodel</b></td><td><b>Binds</b></td><td><b>Launch options</b></td></tr>
<tr><td><small>CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D</small></td><td><small>viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2; cl_righthand 1; viewmodel_presetpos 0</small></td><td><small>bind f "use weapon_smokegrenade"; bind v "use weapon_flashbang"; bind = "holdpos"; bind "alt" "toggle cl_righthand 0 1"; r_cleardecals"; (Using MOUSE4 for player ping and MOUSE5 for use microphone)</small></td><td><small>-high -threads 8 -novid -nojoy -freq 270 -console -tickrate 128 +fps_max 500 +fps_max_menu 144 +cl_updaterate 128 -cl_cmdrate 128 -rate 786432 +cl_interp_ratio 1 +cl_interp 0 -dxlevel 81 -language bananagaming +exec autoexec.cfg</small></td></tr>
</table>

<table>
<tr><td><b>HUD</b></td><td><b>Radar</b></td><td><b>cl_bob</b></td></tr>
<tr><td><small>hud_scaling 0.896259; cl_hud_color 0; cl_hud_playercount_showcount 0; cl_hud_playercount_pos 0; cl_showloadout 0; cl_hud_healthammo_style 0; cl_hud_background_alpha 0.5; cl_hud_bomb_under_radar 1; safezonex 0.993978; safezoney 0.993978</small></td><td><small>cl_hud_radar_scale 1.15; cl_radar_scale 0.4; cl_radar_always_centered 1; cl_radar_rotate 1; cl_radar_icon_scale_min 0.4</small></td><td><small>cl_viewmodel_shift_left_amt 0.5;cl_viewmodel_shift_right_amt 0.25;viewmodel_recoil 0;cl_bob_lower_amt 5;cl_bobamt_lat 0.1;cl_bobamt_vert 0.1</small></td></tr>
</table>

<h3>Video and audio settings</h3>
<table>
<tr><td><b>Resolution</b></td><td><b>Brigthness</b></td><td><b>Master Volume</b></td></tr>
<tr><td><small>1280x1024, 4:3 - Stretched-Fullscreen, 270Hz </small></td><td><small>Režim barev - Počítačový monitor - 125%</small></td><td><small>25% (VOIP: 40%)</small></td></tr>
</table>

```
Souhrnná kvalita stínů
Velmi nízká
Kvalita modelů/textur
Nízká
Streamování textur
Vypnuto
Kvalita efektů
Nízká
Kvalita shaderu
Nízká
Navýšení kontrastu postav
Vypnuto
Vícejádrové renderování
Zapnuto
Režim vyhlazování typu multisampling
Žádné
FXAA vyhlazování
Vypnuto
Režim filtrování textur
Bilineární
Vertikální synchronizace
Vypnuto
Rozmazání pohybu
Vypnuto
Režim pro tři monitory
Vypnuto
Uber shadery
Zapnuto
```

<h3>Keyboard and mouse settings</h3>
<table>
<tr><td><b>DPI</b></td><td><b>Hz</b></td><td><b>Pointer speed (Win)</b></td><td><b>In-Game sensitivity</b></td><td><b>In-Game scope sensitivity</b></td></tr>
<tr><td><small>400</small></td><td><small>1000</small></td><td><small>6/11</small></td><td><small>2,4</small></td><td><small>1</small></td></tr>
</table>

```
bots bind na =
Nastavení klávesnice
Kruhová nabídka zbraní
Výběr předchozí zbraně
MWHEELUP
Výběr další zbraně
MWHEELDOWN
Vyvolání konzole`
`
Ukazovátko
MOUSE4
Mikrofon - K
MOUSE5
Chat. kolečko 1
MOUSE3
r_cleardecals
```

<br>
<h1>Valorant Settings</h1>

<table>
<tr><td><b>Rank</b></td><td><b>Crosshair</b></td><td><b>In-Game sensitivity</b></td><td><b>Resolution and graphic settings</b></td><td><b>Misc.</b></td></tr>
<tr><td><small><img src="https://legendboost.com/images/valorant/ranks/rank-5-1-fc0f86e94fd8494b796161d92c9cf66b.png?vsn=d" weight="95" height="95"></img> Platinum II</small></td><td><small>  </small></td><td><small>0.82 / 1 / 1</small></td><td><small>1920x1080 / All Graphic set to low, only Bloom and MT ON</small></td><td><small>Only FPS Counter enabled</small></td></tr>
</table>

<h3>Basic (Video, radar, sound and mouse):</h3>
<ul>
  <img src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOTb8QrQxj1AI-O3USeBVaemsYGPXxOl2VKEaS4UrtJoj2WFc8t5HW_dEbDdc95MgxQrexcP6Wd6mlBgYYLcVYYp5Oar1Q=w1920-h961"></img>
  <img src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gOBFyo2UkPrGUf96FJDIv-m4uSlLDzoB_KwB5kSRGR8jvlzPsEj-QaxJ-u4c3AvCVx6QWQ5QhQNd_burm2yRG4N7jP_Zw=w1543-h653"></img>
  <img src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gMPTIyrexcy6Nll2NP9wYKKUXbzTGtjMHDzoavMzcnuEmcm1nSJfx7EFA-wCekXF9PHkCCCBxu0UbYfuNUgv9RCyvDkQA=w1543-h653"></img>
</ul>

<br>

<h1> Other settings / platforms-socials </h1>

XXXXXXXXXXXXX - other COMMING SOON - XXXXXXXXXXXXXXXXXX

<h6>• My Steam account: https://steamcommunity.com/id/misakbr2/</h6>
<h6>• My Riot account: MichalBr#UwU</h6>
<h6>• My settings.gg (non-active): https://settings.gg/misakbr2 and mb4 acc</h6>
<br>
<h1> Reviews (Recenze) </h1>
<b>Herní a ostatní recenze: https://www.metacritic.com/user/MichalBr</b><br>
<b>NOVÁ DOOM ETERNAL RECENZE! https://steamcommunity.com/id/misakbr2/recommended/782330/</b><br>
