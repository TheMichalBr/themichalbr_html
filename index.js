/*


<!DOCTYPE dev.html>
    <head lang="cs-cz">
        <meta charset="utf-8">
        <link rel="stylesheet" href="d_main.css">
        <link rel="icon" href="icon.png" type="image/x-icon">
        <title>MichalBr.dev</title>
    </head>
    <style>
        body {
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: auto;
    background: linear-gradient(315deg, rgb(131, 15, 123) 3%, rgb(30, 97, 163) 38%, rgb(20, 170, 160) 68%, rgb(18, 155, 109) 98%);
    animation: gradient 17s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    }
    @keyframes gradient {
    0% {
        background-position: 0% 0%;
    }

    50% {
        background-position: 100% 100%;
    }

    100% {
        background-position: 0% 0%;
    }
}

body,
.signin {
  background-color: #d3d3d3;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
}

.login {
  position: relative;
  height: 560px;
  width: 405px;
  margin: auto;
  padding: 60px 60px;
  background: url(https://picsum.photos/id/1004/5616/3744) no-repeat   center center #505050;   
  background-size: cover;
  box-shadow: 0px 30px 60px -5px #000;
}

form {
  padding-top: 80px;
}

.active {
  border-bottom: 2px solid #1161ed;
}

.nonactive {
  color: rgba(255, 255, 255, 0.2);
}

h2 {
  padding-left: 12px;
  font-size: 22px;
  text-transform: uppercase;
  padding-bottom: 5px;
  letter-spacing: 2px;
  display: inline-block;
  font-weight: 100;
}

h2:first-child {
  padding-left: 0px;
}

span {
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.4; 
  display: inline-block;
  position: relative;
  top: -65px;
  transition: all 0.5s ease-in-out;
}

.text {
  border: none;
  width: 89%;
  padding: 10px 20px;
  display: block;
  height: 15px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0);
  overflow: hidden;
  margin-top: 15px;
  transition: all 0.5s ease-in-out;
}

.text:focus {
  outline: 0;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  background: rgba(0, 0, 0, 0);
}

.text:focus + span {
  opacity: 0.6;
}

input[type="text"],
input[type="password"] {
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}

input {
  display: inline-block;
  padding-top: 20px;
  font-size: 14px;
}

h2,
span,
.custom-checkbox {
  margin-left: 20px;
}

.custom-checkbox {
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  top: 6px;
}

.custom-checkbox:checked {
  background-color: rgba(17, 97, 237, 1);
}

.custom-checkbox:checked:after {
  content: '\2714';
  font-size: 10px;
  position: absolute;
  top: 1px;
  left: 4px;
  color: #fff;
}

.custom-checkbox:focus {
  outline: none;
}

label {
  display: inline-block;
  padding-top: 10px;
  padding-left: 5px;
}

.signin {
  background-color: #1161ed;
  color: #FFF;
  width: 100%;
  padding: 10px 20px;
  display: block;
  height: 39px;
  border-radius: 20px;
  margin-top: 30px;
  transition: all 0.5s ease-in-out;
  border: none;
  text-transform: uppercase;
}

.signin:hover {
  background: #4082f5;
  box-shadow: 0px 4px 35px -5px #4082f5;
  cursor: pointer;
}

.signin:focus {
  outline: none;
}

hr {
  border: 1px solid rgba(255, 255, 255, 0.1);
  top: 85px;
  position: relative;
}

a {
  text-align: center;
  display: block;
  top: 120px;
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.2);
}
</style>

    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    
    <div class="login">
        <h2 class="active"> Přihlášení</h2>
        <form>
            <input type="text" class="text" name="username">
            <span>Uživatelské jméno</span>
            <br>
            <br>
            <input type="password" class="text" name="password">
            <span>Heslo</span>
            <br>
            <br>
            <button class="signin">
                Přihlásit se
            </button>
            <hr>
            <a href="#">test dev version v.0.0.1dev</a>
        </form>
    </div>

<!-- 
CS CONFIG - IMP TO INDEX

// CROSSHAIR
CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D

// VIEWMODEL AND BOB
viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2; 
cl_righthand 1; viewmodel_presetpos 0; cl_viewmodel_shift_left_amt 0.5; 
cl_viewmodel_shift_right_amt 0.25; viewmodel_recoil 0;
cl_bob_lower_amt 5; cl_bobamt_lat 0.1; cl_bobamt_vert 0.1;

// RADAR
cl_hud_radar_scale 1.15; cl_radar_scale 0.4; cl_radar_always_centered 1; cl_radar_rotate 1; 
cl_radar_icon_scale_min 0.4; cl_radar_square_with_scoreboard 1; cl_radar_icon_scale_min 0.25;

// BINDS (Using - MOUSE4 for pings, MOUSE5 for microphone)
bind "alt" "toggle cl_righthand 0 1"; bind = "holdpos"; bind v "use weapon_smokegrenade";

// HUD
hud_scaling 0.896259; cl_hud_color 0; cl_hud_playercount_showcount 0; 
cl_hud_playercount_pos 0; cl_showloadout 0; cl_hud_healthammo_style 0; 
cl_hud_background_alpha 0.5; cl_hud_bomb_under_radar 1; 
safezonex 0.993978; safezoney 0.993978;

// OTHER (SLO = -high -threads 8 -refresh 270 -console +exec autoexec.cfg) (OLD: -language bananagaming)
fps_max "400"; fps_max_ui "120"; rate "786432"; tickrate "128";

// PRACTICE COMMANDS AND BINDS (Exec in offline game to load practice)
sv_cheats 1; mp_warmup_end 1; mp_startmoney 16000; mp_freezetime 0; mp_limitteams 0; 
mp_autoteambalance 0; mp_roundtime_defuse 60; mp_roundtime_hostage 60; mp_limitteams 0; 
mp_autoteambalance 0; bot_stop 1; mp_solid_teammates 1; mp_maxmoney 99999; god; 
mp_startmoney 99999; ammo_grenade_limit_total 6; sv_grenade_trajectory_thickness 1; 
sv_showimpacts 1; mp_buy_anywhere 1; mp_roundtime 60; sv_grenade_trajectory_time 10;
sv_showbullethits 1; sv_infinite_ammo 1; mp_restartgame 1; mp_humanteam any; 
bot_kick; sv_grenade_trajectory 1; sv_showimpacts_time 10; 
bot_mimic_yaw_offset 0; mp_buytime 1337;

bind "c" "sv_rethrow_last_grenade"; bind "x" "noclip";

// SETTINGS (2560:1440 270Hz High 125%, 45%/35%, 400DPI 1000Hz 6/11 2.4/1)

clear;

echo #### MichalBr's CS2 config loaded! ####;

<body>
    <style>
        body {
            overflow: overlay;
        }

        ::-webkit-scrollbar {
            width: 10px;
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: white;
            border-radius: 2px;
        }
    </style>
    <main class="page-content">
        <div class="card">
            <div class="content">
                <h2 class="title">CS settings</h2>
                &emsp;<button class="btn"><a href="h_gamesother.html" class="btn btn-primary">MORE</a></button>&emsp;
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">Games & Other</h2>
                &emsp;<button class="btn"><a href="h_gamesother.html" class="btn btn-primary">MORE</a></button>&emsp;
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">Equipment</h2>
                &emsp;<button class="btn"><a href="h_equipment.html" class="btn btn-primary">MORE</a></button>&emsp;
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">About me</h2>
                &emsp;<button class="btn"><a href="h_aboutme.html" class="btn btn-primary">MORE</a></button>&emsp;
            </div>
        </div>
        <p><b><a href="https://steamcommunity.com/id/misakbr2/recommended/782330/"
                    data-replace="Nová DOOM Eternal recenze" class="odkaz"><span>↺ Novinkové centrum (in CZ)</span></a>
        </p></b>
    </main>
</body>
<style>

* {
    scrollbar-width: auto;
    scrollbar-color: transparent transparent;
}

*::-webkit-scrollbar {
    width: 17px;
}

*::-webkit-scrollbar-track {
    background: #ffffff;
}

*::-webkit-scrollbar-thumb {
    background-color: #005661;
    border-radius: 20px;
    border: 4px solid #ffffff;
}

@import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");

:root {
    --d: 1420ms;
    --e: cubic-bezier(0.19, 1, 0.22, 1);
    --font-sans: "Rubik", sans-serif;
    --font-serif: "Cardo", serif;
}

* {
    box-sizing: border-box;
}

.center {
    margin-left: auto;
    margin-right: auto;
}

html,
body {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
}

.b1 {
    color: white;
}

body {
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
}

.page-content {
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    max-width: 1024px;
    margin: 0 auto;
    font-family: var(--font-sans);
}

@media (min-width: 600px) {
    .page-content {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 800px) {
    .page-content {
        grid-template-columns: repeat(4, 1fr);
    }
}

.card {
    position: relative;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    padding: 1.1rem;
    width: 100%;
    text-align: center;
    border-radius: 16px;
    color: whitesmoke;
    background-color: whitesmoke;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
}

@media (min-width: 600px) {
    .card {
        height: 420px;
        /*(def 350px)*
        ;
    }
}

.card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(var(--d) * 1.5) var(--e);
    pointer-events: none;
}

.card:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
    transform: translateY(-50%);
    transition: transform calc(var(--d) * 2) var(--e);
}

.card:nth-child(1):before {
    background-image: url(p_cs.png);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-position: left;
    filter: blur(0.8px);
}

.card:nth-child(2):before {
    background-image: url(p_w.png);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-position: center;
    filter: blur(0.8px);
}

.card:nth-child(3):before {
    background-image: url(p_pc.jpg);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-position: left;
    filter: blur(0.8px);
}

.card:nth-child(4):before {
    background-image: url(p_me.jpg);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-position: center;
    filter: blur(0.8px);
}

.content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: transform var(--d) var(--e);
    z-index: 1;
}

.content>*+* {
    margin-top: 1rem;
}

.title {
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
}

.copy {
    font-family: var(--font-serif);
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
}

.btn {
    cursor: pointer;
    padding: 0.42rem 1.45rem;
    font-size: 0.85rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: white;
    background-color: black;
    border: none;
    border-radius: 12px;

}

.btn:hover {
    background-color: #0d0d0d;
}

.btn:focus {
    outline: 1px dashed rgb(0, 0, 0);
    outline-offset: 3px;
}

@media (hover: hover) and (min-width: 600px) {
    .card:after {
        transform: translateY(0);
    }

    .content {
        transform: translateY(calc(100% - 4.5rem));
    }

    .content>*:not(.title) {
        opacity: 0;
        transform: translateY(1rem);
        transition: transform var(--d) var(--e), opacity var(--d) var(--e);
    }

    .card:hover,
    .card:focus-within {
        align-items: center;
    }

    .card:hover:before,
    .card:focus-within:before {
        transform: translateY(-4%);
    }

    .card:hover:after,
    .card:focus-within:after {
        transform: translateY(-50%);
    }

    .card:hover .content,
    .card:focus-within .content {
        transform: translateY(0);
    }

    .card:hover .content>*:not(.title),
    .card:focus-within .content>*:not(.title) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(var(--d) / 8);
    }

    .card:focus-within:before,
    .card:focus-within:after,
    .card:focus-within .content,
    .card:focus-within .content>*:not(.title) {
        transition-duration: 0s;
    }
}

Dev pro index.html: Stále vychytat rozložení, fonty, funkčnost, obsah a ostatní.. vše atd....

a:link {
    color: rgb(76, 189, 255);
}

a:visited {
    color: rgb(255, 255, 255);
}

a:hover {
    color: rgb(26, 167, 202);
}

a:active {
    color: rgb(18, 78, 168);
}

a {
    text-shadow: 0.85px 0.85px 0.85px black;
    overflow: hidden;
    position: relative;
    display: inline-block;
    /*display: block;
    width: 120px;
    height: 32px;
    z-index: 0;
    padding: 0em;
    margin: 0em;
}

a::before,
a::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
}

a::before {
    background-color: rgb(76, 189, 255);
    height: 2px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
    color: #cebb15;

}

a:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
}

a:hover::after {
    transform: translate3d(0, 0, 0);
}

a span {
    display: inline-block;
    transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
    transform: translate3d(-200%, 0, 0);
}

-- old styleso
body{
    text-align: center;
    align-items: center;
    align-self: auto;
    background-size: flex; 
}
h1{
    text-align: center;
    color: white;
    font-weight: bold;
    font-family: Arial CE, sans-serif;
    text-shadow: 4px 3px 4px black
}
h3{
    text-align: center;
    color: white;
    font-family: Arial CE, sans-serif;
    text-shadow: 3px 2px 3px black
}
ul{
    text-align: center;
    align-items: center;
    align-self: auto;
    align-content: center;
    align-tracks: center;
    margin: 0 auto;
    color: white;
    font-family: Arial CE, sans-serif;
    text-shadow: 2px 3px 1px black
}
b{
    text-align: center;
    align-items: center;
    align-self: auto;
    align-content: center;
    align-tracks: center;
    color: whitesmoke;
    font-family: Arial CE, sans-serif;
    text-shadow: 1px 1px 1px black;
}
table{
    text-align: center;
    align-items: center;
    align-self: auto;
    align-content: center;
    align-tracks: center;
}
.center {
    margin-left: auto;
    margin-right: auto;
}



History: https://github.com/TheMichalBr/themichalbr / https: //github.com/TheMichalBr/themichalbr/commits/main?before=c05dec6810127cf299e7965ce3e81f0658db8c18+140&branch=main&qualified_name=refs%2Fheads%2Fmain
https://github.com/TheMichalBr/themichalbr/tree/c5155d966d6c9644e480a8de71d664b9b779d8f1
https: //refined-github-html-preview.kidonng.workers.dev/TheMichalBr/themichalbr/raw/c5155d966d6c9644e480a8de71d664b9b779d8f1/index.html
-------------------------------------------------------------
                        Developer                                       
                        Developer                               
----------------------------------------------------------------

------------------------------------ OLD GAMES --------------------------------------------------

pozn. stare gamesother a about me a equipment obsah je bud zde nebo pouzit a cele ui bylo scrapnuto proztoze jako vypadalo v pohode ale melo nejake mouchy

<h1>Valorant Settings</h1>
<table border="1">
    <tr>
        <td><b>Crosshair</b></td>
        <td><b>In-Game sensitivity</b></td>
        <td><b>Resolution and quality settings</b></td>
        <td><b>Misc.</b></td>
    </tr>
    <tr>
        <td><img src="https://legendboost.com/images/valorant/ranks/rank-5-1-fc0f86e94fd8494b796161d92c9cf66b.png?vsn=d"
                weight="95" height="95"></img> <b>Platinum II</b> – MichalBr#UwU</td>
        <td><small>Cyan - Static</small></td>
        <td><small>0.82 / 1 / 1</small></td>
        <td><small>2560x1440 270Hz, FPS limit - 500, All graphic set to low, only Bloom, MT and NVRB are ON/small></td>
        <td><small>FPS counter - enabled, Enemy highlight color - red, Map rotate - On (1.16 0.72)</small></td>
    </tr>
</table>

<h3>Personal settings</h3>
<h6>You can find my config in <a href="https://github.com/TheMichalBr/mweb/tree/main/config_cs">mweb/config_cs</a> or on
    <a href="https://settings.gg/misakbr2">settings.gg (non-active)</a> or mb4.
</h6>
<table border="1">
    <tr>
        <td><b>Crosshair</b></td>
        <td><b>Viewmodel</b></td>
        <td><b>Binds</b></td>
    </tr>
    <tr>
        <td><small>CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D / CSGO-Z2DdF-fjDA5-QHVPd-3uBWQ-CrrBE /
                CSGO-2YZW3-mQNd5-u5Wiu-Di5xO-NGL9P / CSGO-oLKsQ-kVRsV-LVnSm-6TjZM-d4izO // CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D
CSGO-94yFf-NEJtd-yNLtE-qPtuY-O2syM
CSGO-8Gkvb-aphzt-aB9Au-uAMUG-CrrBE
CSGO-kuLez-W4DAQ-fxLtc-QDy7a-tUfOQ
CSGO-oLKsQ-kVRsV-LVnSm-6TjZM-d4izO
CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D
CSGO-94yFf-NEJtd-yNLtE-qPtuY-O2syM
CSGO-8Gkvb-aphzt-aB9Au-uAMUG-CrrBE
CSGO-kuLez-W4DAQ-fxLtc-QDy7a-tUfOQ
CSGO-oLKsQ-kVRsV-LVnSm-6TjZM-d4izO
cl_crosshairstyle 4;cl_crosshairsize 1.2;cl_crosshairgap -4;cl_crosshairthickness 0.5;cl_crosshair_drawoutline 0;cl_crosshairdot 0;cl_crosshaircolor 1;cl_crosshairusealpha 1;cl_crosshairalpha 250;cl_crosshairgap_useweaponvalue 0;cl_crosshair_t 0</small></td>
        <td><small>viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2; cl_righthand 1;
                viewmodel_presetpos 0 / viewmodel_fov 68;viewmodel_offset_x 1;viewmodel_offset_y 2;viewmodel_offset_z
                -2;cl_righthand 1;viewmodel_presetpos 0 // viewmodel_fov 68;viewmodel_offset_x 2;viewmodel_offset_y 2;viewmodel_offset_z -2;cl_righthand 1;viewmodel_presetpos 0
viewmodel_fov 60;viewmodel_offset_x 1;viewmodel_offset_y 1;viewmodel_offset_z -1;cl_righthand 1;viewmodel_presetpos 1
viewmodel_fov 68;viewmodel_offset_x 2;viewmodel_offset_y 2;viewmodel_offset_z -2;cl_righthand 1;viewmodel_presetpos 0
viewmodel_fov 60;viewmodel_offset_x 1;viewmodel_offset_y 1;viewmodel_offset_z -1;cl_righthand 1;viewmodel_presetpos 1
viewmodel_fov 68;viewmodel_offset_x 1;viewmodel_offset_y 2;viewmodel_offset_z -2;cl_righthand
1;viewmodel_presetpos 0</small></td>
        <td><small>bind f "use weapon_smokegrenade"; bind v "use weapon_flashbang"; bind = "holdpos"; bind "alt" "toggle
                cl_righthand 0 1"; r_cleardecals"; (Using MOUSE4 for player ping and MOUSE5 for use microphone)</small>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td><b>Launch options</b></td>
        <td><b>X</b></td>
    </tr>
    <tr>
        <td><small>-high -threads 8 -novid -nojoy -freq 144 -console -tickrate 128 +fps_max 500 +fps_max_menu 144
                +cl_updaterate 128 +cl_interp_ratio 1 +cl_interp 0 +cl_forcepreload 1 -language bananagaming +exec
                autoexec.cfg</small></td>
        <td><small> </small></td>
    </tr>
</table>
<table border="1">
    <tr>
        <td><b>HUD</b></td>
        <td><b>Radar</b></td>
        <td><b>cl_bob</b></td>
    </tr>
    <tr>
        <td><small>hud_scaling 0.896259; cl_hud_color 0; cl_hud_playercount_showcount 0; cl_hud_playercount_pos 0;
                cl_showloadout 0; cl_hud_healthammo_style 0; cl_hud_background_alpha 0.5; cl_hud_bomb_under_radar 1;
                safezonex 0.993978; safezoney 0.993978</small></td>
        <td><small>cl_hud_radar_scale 1.15; cl_radar_scale 0.4; cl_radar_always_centered 1; cl_radar_rotate 1;
                cl_radar_icon_scale_min 0.4</small></td>
        <td><small>cl_viewmodel_shift_left_amt 0.5;cl_viewmodel_shift_right_amt 0.25;viewmodel_recoil 0;cl_bob_lower_amt
                5;cl_bobamt_lat 0.1;cl_bobamt_vert 0.1</small></td>
    </tr>
</table>

<h3>Video and audio settings</h3>
<table>
    <tr>
        <td><b>Resolution</b></td>
        <td><b>Brigthness</b></td>
        <td><b>Master Volume</b></td>
    </tr>
    <tr>
        <td><small>1280x1024 /960, 4:3 - Stretched, 144Hz </small></td>
        <td><small>130%</small></td>
        <td><small>25% (VOIP: 40%)</small></td> all low
    </tr>
</table>

<h3>Keyboard and mouse settings</h3>
<table border="1">
    <tr>
        <td><b>DPI</b></td>
        <td><b>Hz</b></td>
        <td><b>Pointer speed (Win)</b></td>
        <td><b>In-Game sensitivity</b></td>
        <td><b>In-Game scope sensitivity</b></td>
    </tr>
    <tr>
        <td><small>400</small></td>
        <td><small>1000</small></td>
        <td><small>6/11</small></td>
        <td><small>2,4</small></td>
        <td><small>1</small></td>
    </tr>
</table>

&emsp;
Další inspirace
https://codepen.io/aaroniker/pen/yLEPJXj
https://codepen.io/tin-fung-hk/pen/rNpEPpM
https://konect.gg/michalbr
https://settings.gg/player/154866313 mb4
settings.gg/misakbr2
overwatch a fornite
https://query.hicoria.com/query.php?user=mcx_379915
https://codepen.io/TheMichalBr


Bude zájem i o další herní, neherní recenze?
<h1>Other platforms</h1>
• My Steam account: https://steamcommunity.com/id/misakbr2/
• My Riot account: MichalBr#UwU https://www.metacritic.com/user/MichalBr
<img src="https://query.hicoria.com/query.php?user=mcx_379915" alt="server status">
INTERA. ODKAZ <p><b><a href="https://steamcommunity.com/id/misakbr2/recommended/782330/" data-replace="Nová DOOM Eternal recenze" class="odkaz"><span>↺ Novinkové centrum (in CZ)</span></a></p></b>
</section>
<br></body></html>

<h1>Valorant Settings</h1><table border="1"><tr><td><b>Rank</b></td><td><b>Crosshair</b></td><td><b>In-Game sensitivity</b></td><td><b>Resolution and quality settings</b></td><td><b>Misc.</b></td></tr><tr><td><img src="https://legendboost.com/images/valorant/ranks/rank-5-1-fc0f86e94fd8494b796161d92c9cf66b.png?vsn=d"
weight="95" height="95"></img><b>Platinum II</b>– MichalBr#UwU</td><td><small>Cyan - Static</small></td><td><small>0.82 / 1 / 1</small></td><td><small>2560x1440 270Hz,
FPS limit - 500,
All graphic set to low,
only Bloom,
MT and NVRB are ON/small></td><td><small>FPS counter - enabled,
Enemy highlight color - red,
Map rotate - On (1.16 0.72)</small></td></tr></table><h3>Personal settings</h3><h6>You can find my config in <a href="https://github.com/TheMichalBr/mweb/tree/main/config_cs">mweb/config_cs</a>or on <a href="https://settings.gg/misakbr2">settings.gg (non-active)</a>or mb4. </h6><table border="1"><tr><td><b>Crosshair</b></td><td><b>Viewmodel</b></td><td><b>Binds</b></td></tr><tr><td><small>CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D / CSGO-Z2DdF-fjDA5-QHVPd-3uBWQ-CrrBE / CSGO-2YZW3-mQNd5-u5Wiu-Di5xO-NGL9P / CSGO-oLKsQ-kVRsV-LVnSm-6TjZM-d4izO // CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D
CSGO-94yFf-NEJtd-yNLtE-qPtuY-O2syM CSGO-8Gkvb-aphzt-aB9Au-uAMUG-CrrBE CSGO-kuLez-W4DAQ-fxLtc-QDy7a-tUfOQ CSGO-oLKsQ-kVRsV-LVnSm-6TjZM-d4izO CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D CSGO-94yFf-NEJtd-yNLtE-qPtuY-O2syM CSGO-8Gkvb-aphzt-aB9Au-uAMUG-CrrBE CSGO-kuLez-W4DAQ-fxLtc-QDy7a-tUfOQ CSGO-oLKsQ-kVRsV-LVnSm-6TjZM-d4izO cl_crosshairstyle 4;
cl_crosshairsize 1.2;
cl_crosshairgap -4;
cl_crosshairthickness 0.5;
cl_crosshair_drawoutline 0;
cl_crosshairdot 0;
cl_crosshaircolor 1;
cl_crosshairusealpha 1;
cl_crosshairalpha 250;
cl_crosshairgap_useweaponvalue 0;
cl_crosshair_t 0</small></td><td><small>viewmodel_fov 68;
viewmodel_offset_x 2;
viewmodel_offset_y 2;
viewmodel_offset_z -2;
cl_righthand 1;
viewmodel_presetpos 0 / viewmodel_fov 68;
viewmodel_offset_x 1;
viewmodel_offset_y 2;
viewmodel_offset_z -2;
cl_righthand 1;
viewmodel_presetpos 0 // viewmodel_fov 68;viewmodel_offset_x 2;viewmodel_offset_y 2;viewmodel_offset_z -2;cl_righthand 1;viewmodel_presetpos 0
viewmodel_fov 60;
viewmodel_offset_x 1;
viewmodel_offset_y 1;
viewmodel_offset_z -1;
cl_righthand 1;
viewmodel_presetpos 1 viewmodel_fov 68;
viewmodel_offset_x 2;
viewmodel_offset_y 2;
viewmodel_offset_z -2;
cl_righthand 1;
viewmodel_presetpos 0 viewmodel_fov 60;
viewmodel_offset_x 1;
viewmodel_offset_y 1;
viewmodel_offset_z -1;
cl_righthand 1;
viewmodel_presetpos 1 viewmodel_fov 68;
viewmodel_offset_x 1;
viewmodel_offset_y 2;
viewmodel_offset_z -2;
cl_righthand 1;
viewmodel_presetpos 0</small></td><td><small>bind f "use weapon_smokegrenade";
bind v "use weapon_flashbang";
bind="holdpos";
bind "alt" "toggle
cl_righthand 0 1"; r_cleardecals";
(Using MOUSE4 for player ping and MOUSE5 for use microphone)</small></td></tr></table><table border="1"><tr><td><b>Launch options</b></td><td><b>X</b></td></tr><tr><td><small>-high -threads 8 -novid -nojoy -freq 144 -console -tickrate 128+fps_max 500+fps_max_menu 144+cl_updaterate 128+cl_interp_ratio 1+cl_interp 0+cl_forcepreload 1 -language bananagaming+exec autoexec.cfg</small></td><td><small></small></td></tr></table><table border="1"><tr><td><b>HUD</b></td><td><b>Radar</b></td><td><b>cl_bob</b></td></tr><tr><td><small>hud_scaling 0.896259;
cl_hud_color 0;
cl_hud_playercount_showcount 0;
cl_hud_playercount_pos 0;
cl_showloadout 0;
cl_hud_healthammo_style 0;
cl_hud_background_alpha 0.5;
cl_hud_bomb_under_radar 1;
safezonex 0.993978;
safezoney 0.993978</small></td><td><small>cl_hud_radar_scale 1.15;
cl_radar_scale 0.4;
cl_radar_always_centered 1;
cl_radar_rotate 1;
cl_radar_icon_scale_min 0.4</small></td><td><small>cl_viewmodel_shift_left_amt 0.5;
cl_viewmodel_shift_right_amt 0.25;
viewmodel_recoil 0;
cl_bob_lower_amt 5;
cl_bobamt_lat 0.1;
cl_bobamt_vert 0.1</small></td></tr></table><h3>Video and audio settings</h3><table><tr><td><b>Resolution</b></td><td><b>Brigthness</b></td><td><b>Master Volume</b></td></tr><tr><td><small>1280x1024 /960,
4:3 - Stretched,
144Hz </small></td><td><small>130%</small></td><td><small>25% (VOIP: 40%)</small></td>all low </tr></table><h3>Keyboard and mouse settings</h3><table border="1"><tr><td><b>DPI</b></td><td><b>Hz</b></td><td><b>Pointer speed (Win)</b></td><td><b>In-Game sensitivity</b></td><td><b>In-Game scope sensitivity</b></td></tr><tr><td><small>400</small></td><td><small>1000</small></td><td><small>6/11</small></td><td><small>2,
4</small></td><td><small>1</small></td></tr></table>&emsp;
Další inspirace https: //codepen.io/aaroniker/pen/yLEPJXj
https: //codepen.io/tin-fung-hk/pen/rNpEPpM
https: //konect.gg/michalbr
https: //settings.gg/player/154866313 mb4
overwatch a fornite https: //query.hicoria.com/query.php?user=mcx_379915

<table border="1"><tr><td><b>COVER</b></td><td><b>Game</b></td><td><b>Developer</b></td><td><b>Score</b></td></tr><tr><td><small><img src="https://static.metacritic.com/images/products/games/9/562c989431810e6aac45b6164ae0bfca-53.jpg"></small></td><td><b>The Witcher 3: Wild Hunt</b></td><td>CD Project RED</td><td><b>10 / 10</b></td></tr><tr><td><small><img src="https://static.metacritic.com/images/products/games/9/e6f3e91d6de4757b3a81886b520b5739-53.jpg"></small></td><td><b>Cyberpunk 2077</b></td><td>CD Project RED</td><td><b>10 / 10</b></td></tr></table>Bude zájem i o další herní,
neherní recenze? <h1>Other platforms</h1>• My Steam account: https: //steamcommunity.com/id/misakbr2/
• My Riot account: MichalBr#UwU https: //www.metacritic.com/user/MichalBr
<img src="https://query.hicoria.com/query.php?user=mcx_379915" alt="server status"></section><br></body></html>


@media screen and (max-width: 1024px) {
    body {
        padding: 50px;
    }

    body article header .lower-header .subtitle {
        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    body article header .lower-header .title {
        word-break: break-all;
    }

    body article .summary {
        flex-direction: column;
    }

    body article .summary .summary-item:not(:last-child) {
        padding-bottom: 30px;
    }

    body article .main-article .gallery {
        grid-template-areas: "img1 img1" "img1 img1" "img2 img3" "img4 img5";
    }
}

@media screen and (max-width: 425px) {
    body {
        padding: 25px;
    }

    body article header .upper-header .date-since {
        display: none;
    }
}

.sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    background-color: black;
    border-radius: 16px;
    width: 1000px;
    height: 200px;
}

.sci ul {
    display: contents;
}

.sci ul li {
    list-style: none;
}

.sci ul li a {
    text-decoration: none;
    display: inline-block;
    margin: 0 39px;
}

.sci ul li a img {
    filter: invert(1);
    max-width: 40px;
}

.sci ul li a:hover img {
    opacity: 0.5;
}

.wrapper {
    position: relative;
    padding-bottom: 56.25%;

    padding-top: 0px;
    height: 520;
    width: 960;
}

.wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

iframe {
    border-radius: 16px;
    border-color: black;
}

------------------------------------ OLD INDEX --------------------------------------------------

<!DOCTYPE html>
<head lang="cs-cz">
<meta charset="utf-8">
<link rel="stylesheet" href="index.css">
<link rel="icon" href="./pictures/icon.png" type="image/x-icon">
<title>MichalBr</title></head>
<script type="text/javascript">
    function f1() {
        if (document.all) { return false; }
    }
    function f2(e) {
        if (document.layers || (document.getElementById & !document.all)) {
            if (e.which == 2 || e.which == 3) { return false; }
        }
    }
    if (document.layers) {
        document.captureEvents(Event.MOUSEDOWN);
        document.onmousedown = f1;
    }
    else {
        document.onmouseup = f2;
        document.oncontextmenu = f1;
    }
</script>
<body>
    <style>
        body {
            overflow: overlay;
        }
        ::-webkit-scrollbar {
            width: 10px;
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: white;
            border-radius: 2px;
        }
    </style>
    <main class="page-content">
        <div class="card">
            <div class="content">
                <h2 class="title">CS settings</h2>
                &emsp;<button class="btn"><a href="" class="btn btn-primary">WIP</a></button>&emsp;
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">Games & Other</h2>
                &emsp;<button class="btn"><a href="" class="btn btn-primary">WIP</a></button>&emsp;
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">Equipment</h2>
                &emsp;<button class="btn"><a href="" class="btn btn-primary">WIP</a></button>&emsp;
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">About me</h2>
                &emsp;<button class="btn"><a href="" class="btn btn-primary">WIP</a></button>&emsp;
            </div>
        </div>
    </main>
    </body>
    
    </html>
    
    @import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");
    :root {
    --d: 1420ms;
    --e: cubic-bezier(0.19, 1, 0.22, 1);
    --font-sans: "Rubik", sans-serif;
    --font-serif: "Cardo", serif;
    }
    * {
    box-sizing: border-box;
    }
    .center {
    margin-left: auto;
    margin-right: auto;
    }
    html,
    body {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    }
    .b1 {
    color: white;
    }
    body {
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    }
    .page-content {
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    max-width: 1024px;
    margin: 0 auto;
    font-family: var(--font-sans);
    }
    @media (min-width: 600px) {
    .page-content {
    grid-template-columns: repeat(2, 1fr);
    }
    }
    @media (min-width: 800px) {
    .page-content {
    grid-template-columns: repeat(4, 1fr);
    }
    }
    .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: transform var(--d) var(--e);
    z-index: 1;
    }
    .content>*+* {
    margin-top: 1rem;
    }
    .title {
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
    }
    .copy {
    font-family: var(--font-serif);
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
    }
    .btn {
    cursor: pointer;
    padding: 0.42rem 1.45rem;
    font-size: 0.85rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: white;
    background-color: black;
    border: none;
    border-radius: 12px;
    }
    .btn:hover {
    background-color: #0d0d0d;
    }
    .btn:focus {
    outline: 1px dashed rgb(0, 0, 0);
    outline-offset: 3px;
    }
    body {
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: auto;
    background: linear-gradient(315deg, rgb(131, 15, 123) 3%, rgb(30, 97, 163) 38%, rgb(20, 170, 160) 68%, rgb(18, 155, 109)
    98%);
    animation: gradient 17s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    }
    @keyframes gradient {
    0% {
    background-position: 0% 0%;
    }
    50% {
    background-position: 100% 100%;
    }
    100% {
    background-position: 0% 0%;
    }
    }
    a:link {
    color: rgb(76, 189, 255);
    }
    a:visited {
    color: rgb(255, 255, 255);
    }
    a:hover {
    color: rgb(26, 167, 202);
    }
    a:active {
    color: rgb(18, 78, 168);
    }
    a {
    text-shadow: 0.85px 0.85px 0.85px black;
    overflow: hidden;
    position: relative;
    display: inline-block;
    /*display: block;
    width: 120px;
    height: 32px;
    z-index: 0;
    padding: 0em;
    margin: 0em;
    }
    a::before,
    a::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    }
    a::before {
    background-color: rgb(76, 189, 255);
    height: 2px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
    }
    a::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
    color: #cebb15;
    }
    a:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
    }
    a:hover::after {
    transform: translate3d(0, 0, 0);
    }
    a span {
    display: inline-block;
    transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
    }
    a:hover span {
    transform: translate3d(-200%, 0, 0);
    }

</style>
<style></style>
<script></script>
</html>



*/