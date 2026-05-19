
/*
 * Mundo Mágico • Build privado @toucabr
 * Assinatura pública mínima: @toucabr
 * Marcas internas distribuídas para rastreio de cópia não autorizada.
 */
(function(){
  try{
    var __tc_sig_a = "TOUCABR::MUNDO_MAGICO::PRIVATE_BUILD::2026";
    var __tc_sig_b = ["@","t","o","u","c","a","b","r"].join("");
    var __tc_sig_c = "MM_LOBBY_DUO_CANVAS_PWA__TOUCABR";
    var __tc_hash_seed = 0;
    for(var i=0;i<__tc_sig_a.length;i++) __tc_hash_seed = ((__tc_hash_seed<<5)-__tc_hash_seed)+__tc_sig_a.charCodeAt(i);
    Object.defineProperty(window,"__TOUCABR_BUILD__",{value:{owner:__tc_sig_b,mark:__tc_sig_c,seed:__tc_hash_seed,ts:"2026-05-18"},writable:false,configurable:false});
    window.addEventListener("load",function(){
      try{
        document.documentElement.setAttribute("data-mm-owner",__tc_sig_b);
        document.documentElement.setAttribute("data-mm-build","toucabr-private");
        localStorage.setItem("mm_owner_mark",__tc_sig_b);
      }catch(e){}
    });
    setTimeout(function(){
      try{
        if(!window.__TOUCABR_BUILD__ || window.__TOUCABR_BUILD__.owner !== "@toucabr"){
          localStorage.setItem("mm_integrity_flag","owner-mark-missing");
          console.warn("Mundo Mágico: marca interna ausente.");
        }
      }catch(e){}
    },2500);
  }catch(e){}
})();

const TOUCABR_INTERNAL_WATERMARK='MUNDO_MAGICO__@toucabr__Edu_Dok__visual_text_safe_build';

(()=>{'use strict';

const BUILD_VERSION='1.0.0-final-github';
const SAVE_KEY='cc2_save';
const MP_MAX_PLAYERS=4;
const MP_ROOM_TTL_MS=5*60*1000;
const MM_NICK_STORAGE_KEY='cc2_nick';
function isSecretTesterNick(n){return false}
function isSecretTesterMode(){return false}
function applySecretTesterUnlock(){return false}
function defaultSave(){return{
coins:0,hiScore:0,lang:'pt',
bgm:true,sfx:true,shake:true,blood:true,
owned:['axe_default','skin_pink','skin_shyest','skin_longhair','skin_omni','skin_sinistro'],
equipped:{weapon:'axe_default',skin:'skin_pink'},
unlockedStages:[0],completedStages:[],stageStars:{},
selectedStage:0,
currentDimension:1,unlockedDimension:1,dimensionClears:{1:0,2:0,3:0},
missions:{daily:[],weekly:[],story:[]},
missionProgress:{kills:0,stageClear:0,comboMax:0,dashKills:0,coins:0,bossKills:0},
lastMissionReset:0
}}
let save=defaultSave();
function loadSave(){try{const d=localStorage.getItem(SAVE_KEY);if(d){const p=JSON.parse(d);save=Object.assign(defaultSave(),p||{});save.owned=[...new Set(save.owned||[])];['skin_shyest','skin_longhair','skin_omni','skin_sinistro'].forEach(id=>{if(!save.owned.includes(id))save.owned.push(id)});['skin_boy_blue','skin_boy_green','skin_boy_purple','skin_boy_orange'].forEach(id=>{save.owned=save.owned.filter(x=>x!==id)});if(['skin_boy_blue','skin_boy_green','skin_boy_purple','skin_boy_orange'].includes(save.equipped&&save.equipped.skin))save.equipped.skin='skin_shyest';save.unlockedStages=[...new Set(save.unlockedStages||[0])];save.completedStages=[...new Set(save.completedStages||[])];save.selectedStage=Math.max(0,Math.min(+save.selectedStage||0,99));save.equipped=Object.assign(defaultSave().equipped,save.equipped||{});}}catch(e){save=defaultSave();}}
function writeSave(){try{save.version=BUILD_VERSION;localStorage.setItem(SAVE_KEY,JSON.stringify(save))}catch(e){}}
loadSave();
ensureMissions();

let LANG=(save.lang==='en'?'en':'pt');
const T={
pt:{play:'▶ JOGAR',map:'🗺 MAPA',shop:'🛒 LOJA',missions:'📋 MISSÕES',inv:'🎒 INVENTÁRIO',
settings:'⚙ OPÇÕES',back:'← VOLTAR',coins:'moedas',
worlds:['MUNDO 1: TERRA MÁGICA','MUNDO 2: ABISMO SOMBRIO','MUNDO 3: DIMENSÃO PROIBIDA'],
levels:[

'Floresta Mágica','Pântano Tóxico','Circo Brutal','Terra do Gelo',
'Reino Doce','Floresta Viva','Castelo Elétrico','Dimensão Espelho',

'Vulcão Maldito','Mar de Sombras','Cripta dos Esquecidos','Templo Neon',
'Deserto de Sal','Gruta Cristalina','Torre dos Ventos','Coração das Trevas',

'Espaço Partido','Fábrica Caótica','Labirinto Orgânico','Vazio Eterno'
],
bosses:{queen:'Rainha Elétrica',barb:'Brutamontes',slug:'Rei Lesma',mushking:'Rei Cogumelo',
clown:'Palhaço Boss',caramel:'Duque Caramelo',treeking:'Rei Árvore',mirror:'Espelho Sombrio',
volcanic:'Lorde Vulcânico',krakenette:'Krakeneta',lich:'Lich Esquecida',neonGod:'Deus Neon',
saltGolem:'Golem de Sal',crystalQueen:'Rainha Cristal',windPhantom:'Fantasma dos Ventos',darkCore:'Núcleo Sombrio',
voidBeast:'Besta do Vazio',mechaBoss:'Chefe Mecânico',organicTitan:'Titã Orgânico',nullKing:'Rei Nulo'},
mana:'MANA',kills:'ABATES',died:'VOCÊ PERDEU',restart:'↻ REINICIAR',
victory:'FASE COMPLETA!',life:'+1 VIDA',dashReady:'DASH!',
powerHeal:'CURA!',powerMana:'MANA!',powerSpeed:'VELOZ!',powerDamage:'PODER!',powerCoins:'MOEDAS!',
combo:['','INTENSO','INCRÍVEL','BRUTAL','DEVASTADOR','LENDÁRIO'],
shopSkins:'Skins',shopWeapons:'Armas',shopItems:'Itens',
tag:'✦ AÇÃO CARTOON · INDIE',title:'MUNDO MÁGICO',
desc:'Aventura mágica de ação rápida, fases curtas, combos e chefões em um mundo cartoon.',
controls:'<b>Mobile:</b> Botões na tela. Toque duplo → = dash.',
points:'pts', selectedStage:'▶ JOGAR FASE SELECIONADA',
shopTitle:'🛒 LOJA',missionsTitle:'📋 MISSÕES',invTitle:'🎒 INVENTÁRIO',settingsTitle:'⚙ OPÇÕES',
tabs:{daily:'☀ Diárias',weekly:'📅 Semanais',story:'📖 História'},
equipped:'✓ EQUIPADO',owned:'✓ COMPRADO',claim:'RESGATAR',noMissions:'Sem missões disponíveis',
invHint:'Equipado ativo aparece discreto no jogo. Toque para equipar/desequipar.',
invWeapons:'ARMAS',invSkins:'SKINS',invItems:'ITENS ESPECIAIS',
bgmTitle:'🎵 Música de Fundo',bgmSub:'Toca o arquivo musica.mp3 em loop',sfxTitle:'🔊 Efeitos Sonoros',sfxSub:'Sons de combate e ações',
shakeTitle:'💥 Shake de Câmera',shakeSub:'Tremida ao tomar dano',bloodTitle:'🩸 Efeitos de Sangue',bloodSub:'Partículas de combate',
langTitle:'🌐 Idioma',langSub:'Português BR / English',reset:'↻ Atualizar',resetConfirm:'Atualizar o jogo agora?',
},
en:{play:'▶ PLAY',map:'🗺 MAP',shop:'🛒 SHOP',missions:'📋 MISSIONS',inv:'🎒 BAG',
settings:'⚙ OPTIONS',back:'← BACK',coins:'coins',
worlds:['WORLD 1: MAGIC LAND','WORLD 2: DARK ABYSS','WORLD 3: FORBIDDEN DIMENSION'],
levels:[
'Magic Forest','Toxic Swamp','Brutal Circus','Ice Land',
'Candy Kingdom','Living Forest','Electric Castle','Mirror Dimension',
'Cursed Volcano','Sea of Shadows','Forgotten Crypt','Neon Temple',
'Salt Desert','Crystal Grotto','Wind Tower','Heart of Darkness',
'Shattered Space','Chaos Factory','Organic Maze','The Eternal Void'
],
bosses:{queen:'Electric Queen',barb:'Brute',slug:'Slug King',mushking:'Shroom King',
clown:'Clown Boss',caramel:'Caramel Duke',treeking:'Tree King',mirror:'Dark Mirror',
volcanic:'Volcanic Lord',krakenette:'Krakenette',lich:'Forgotten Lich',neonGod:'Neon God',
saltGolem:'Salt Golem',crystalQueen:'Crystal Queen',windPhantom:'Wind Phantom',darkCore:'Dark Core',
voidBeast:'Void Beast',mechaBoss:'Mech Boss',organicTitan:'Organic Titan',nullKing:'Null King'},
mana:'MANA',kills:'KILLS',died:'YOU LOST',restart:'↻ RESTART',
victory:'STAGE CLEAR!',life:'+1 LIFE',dashReady:'DASH!',
powerHeal:'HEAL!',powerMana:'MANA!',powerSpeed:'SPEED!',powerDamage:'POWER!',powerCoins:'COINS!',
combo:['','INTENSE','AMAZING','BRUTAL','DEVASTATING','LEGENDARY'],
shopSkins:'Skins',shopWeapons:'Weapons',shopItems:'Items',
tag:'✦ CARTOON ACTION · INDIE',title:'MAGIC WORLD',
desc:'A fast magical action adventure with short stages, combos, and cartoon bosses.',
controls:'<b>Mobile:</b> On-screen buttons. Double tap → = dash.',
points:'pts', selectedStage:'▶ PLAY SELECTED STAGE',
shopTitle:'🛒 SHOP',missionsTitle:'📋 MISSIONS',invTitle:'🎒 BAG',settingsTitle:'⚙ OPTIONS',
tabs:{daily:'☀ Daily',weekly:'📅 Weekly',story:'📖 Story'},
equipped:'✓ EQUIPPED',owned:'✓ OWNED',claim:'CLAIM',noMissions:'No missions available',
invHint:'Equipped items appear subtly in-game. Tap to equip/unequip.',
invWeapons:'WEAPONS',invSkins:'SKINS',invItems:'SPECIAL ITEMS',
bgmTitle:'🎵 Background Music',bgmSub:'Loops the musica.mp3 file',sfxTitle:'🔊 Sound Effects',sfxSub:'Combat and action sounds',
shakeTitle:'💥 Camera Shake',shakeSub:'Shake when taking damage',bloodTitle:'🩸 Blood Effects',bloodSub:'Combat particles',
langTitle:'🌐 Language',langSub:'Português BR / English',reset:'↻ Update',resetConfirm:'Update the game now?',
}
};
function tr(k){const p=k.split('.');let v=T[LANG];for(const s of p)v=v&&v[s];return v??k}
const SHOP_I18N={
en:{
skin_pink:['Classic Pink','Original skin'],skin_shyest:['Bravo','Gratuita'],skin_longhair:['Hank','Gratuita'],skin_omni:['Duck','Gratuita'],skin_sinistro:['Lopes','Gratuita'],skin_dark:['Shadow','+10% melee damage'],skin_gold:['Golden','+20% collected coins'],skin_cyber:['Cyber','Dash recharges 30% faster'],skin_ghost:['Ghost','Dash invincibility +0.1s'],skin_strange:['Strange','+15% fire damage'],
axe_default:['Default Axe','Faithful companion'],axe_blood:['Blood Axe','+2 damage, life on hit'],staff_fire:['Fire Staff','Fire +3 damage, -20% mana'],blade_wind:['Wind Blade','Area dash + knockback'],hammer_thunder:['Thunder Hammer','+5 damage, slower attack'],wand_crystal:['Crystal Wand','Projectiles ricochet'],scythe_spider:['Spider Scythe','Web projectile slows enemies'],orb_witch:['Witch Orb','Curved magic pierces weak monsters'],lance_dragon:['Dragon Lance','Long fire blast, higher mana cost'],blade_void:['Alien Blade','High damage unstable void shot'],vulcan_mg:['Volcanic Machine Gun','Legendary automatic volcanic burst'],
item_shield:['Runic Shield','Blocks 1 hit every 30s'],item_boot:['Fast Boots','Speed +15%'],item_ring:['Mana Ring','Mana regenerates 50% faster'],item_amulet:['Lucky Amulet','Double power-up chance'],item_bomb:['Magic Bomb','Q ability: area explosion'],item_wings:['Fairy Wings','Triple jump unlocked']
}
};
const MISSION_I18N={
en:{
d1:['Daily Warrior','Kill 20 enemies'],d2:['Speedster','Use dash 10 times'],d3:['Precision','Clear 1 stage without taking damage'],
w1:['Weekly Hunt','Kill 150 enemies'],w2:['Pyromaniac','Kill 30 enemies with fire'],w3:['Boss Hunter','Defeat 5 bosses'],
s1:['Explorer','Complete World 1 (8 stages)'],s2:['Legendary','Reach combo x10'],s3:['Collector','Buy 3 shop items'],s4:['Conqueror','Complete World 2'],s5:['Absolute','Complete every world']
}
};
function shopName(item){return SHOP_I18N[LANG]?.[item.id]?.[0]||item.name}
function shopDesc(item){return SHOP_I18N[LANG]?.[item.id]?.[1]||item.desc}
function missionName(m){return MISSION_I18N[LANG]?.[m.id]?.[0]||m.name}
function missionDesc(m){return MISSION_I18N[LANG]?.[m.id]?.[1]||m.desc}
function setText(id,txt){const el=document.getElementById(id);if(el)el.textContent=txt}
function setHTML(id,html){const el=document.getElementById(id);if(el)el.innerHTML=html}
function refreshTexts(){
document.documentElement.lang=LANG==='pt'?'pt-BR':'en';
document.title=tr('title');
setText('uiTag',tr('tag')); const logo=document.querySelector('h1.logo');if(logo)logo.textContent=tr('title'); setText('uiDesc',tr('desc')); setHTML('uiControls',tr('controls'));
setText('btnPlay',tr('play')); setText('btnMap',tr('map')); setText('btnShop',tr('shop')); setText('btnMissions',tr('missions')); setText('btnInv',tr('inv')); setText('btnSettings',tr('settings'));
setText('btnMapPlay',tr('selectedStage')); ['btnMapBack','btnShopBack','btnMissionsBack','btnInvBack','btnSettingsBack'].forEach(id=>setText(id,tr('back')));
setText('btnResetSave',tr('reset')); setText('settingsLang',LANG==='pt'?'PT 🇧🇷':'EN 🇺🇸');
document.querySelector('#mapScreen .map-title')&&(document.querySelector('#mapScreen .map-title').textContent=tr('map'));
document.querySelector('#shopScreen .panel-title')&&(document.querySelector('#shopScreen .panel-title').textContent=tr('shopTitle'));
document.querySelector('#missionsScreen .panel-title')&&(document.querySelector('#missionsScreen .panel-title').textContent=tr('missionsTitle'));
document.querySelector('#invScreen .panel-title')&&(document.querySelector('#invScreen .panel-title').textContent=tr('invTitle'));
document.querySelector('#settingsScreen .panel-title')&&(document.querySelector('#settingsScreen .panel-title').textContent=tr('settingsTitle'));
document.querySelector('[data-tab="skins"]')&&(document.querySelector('[data-tab="skins"]').textContent='👗 '+tr('shopSkins'));
document.querySelector('[data-tab="weapons"]')&&(document.querySelector('[data-tab="weapons"]').textContent='⚔ '+tr('shopWeapons'));
document.querySelector('[data-tab="items"]')&&(document.querySelector('[data-tab="items"]').textContent='🧪 '+tr('shopItems'));
document.querySelector('[data-tab="daily"]')&&(document.querySelector('[data-tab="daily"]').textContent=tr('tabs.daily'));
document.querySelector('[data-tab="weekly"]')&&(document.querySelector('[data-tab="weekly"]').textContent=tr('tabs.weekly'));
document.querySelector('[data-tab="story"]')&&(document.querySelector('[data-tab="story"]').textContent=tr('tabs.story'));
const rows=document.querySelectorAll('#settingsScreen .toggle-row');
if(rows[0]){rows[0].querySelector('.toggle-label').textContent=tr('bgmTitle');rows[0].querySelector('.toggle-sub').textContent=tr('bgmSub')}
if(rows[1]){rows[1].querySelector('.toggle-label').textContent=tr('sfxTitle');rows[1].querySelector('.toggle-sub').textContent=tr('sfxSub')}
if(rows[2]){rows[2].querySelector('.toggle-label').textContent=tr('shakeTitle');rows[2].querySelector('.toggle-sub').textContent=tr('shakeSub')}
if(rows[3]){rows[3].querySelector('.toggle-label').textContent=tr('bloodTitle');rows[3].querySelector('.toggle-sub').textContent=tr('bloodSub')}
if(rows[4]){rows[4].querySelector('.toggle-label').textContent=tr('langTitle');rows[4].querySelector('.toggle-sub').textContent=tr('langSub')}
const invScreen=document.getElementById('invScreen');
if(invScreen){const ds=invScreen.querySelectorAll('div[style*="font-size:10px"],div[style*="font-size:11px"]'); if(ds[0])ds[0].textContent=tr('invHint'); if(ds[1])ds[1].textContent=tr('invWeapons'); if(ds[2])ds[2].textContent=tr('invSkins'); if(ds[3])ds[3].textContent=tr('invItems')}
}
function setLang(l){LANG=l;save.lang=l;writeSave();refreshMenu();
setTimeout(()=>{socialInit();socialRenderRanking()},700);if(activeScreen==='map')buildMap();if(activeScreen==='shop')buildShop(document.querySelector('#shopTabs .tab.active')?.dataset.tab||'skins');if(activeScreen==='missions')buildMissions(document.querySelector('#missionTabs .tab.active')?.dataset.tab||'daily');if(activeScreen==='inv')buildInv()}

const SHOP_ITEMS=(window.GAME_DATA&&window.GAME_DATA.shop)?window.GAME_DATA.shop:{
skins:[
{id:'skin_pink',name:'Rosa Clássica',desc:'A skin original',icon:'👧',price:0,bonus:{}},
{id:'skin_shyest',name:'Bravo',desc:'Gratuita',icon:'🥷',price:0,bonus:{}},
{id:'skin_longhair',name:'Hank',desc:'Gratuita',icon:'🧑‍🦱',price:0,bonus:{}},
{id:'skin_omni',name:'Duck',desc:'Gratuita',icon:'🦸',price:0,bonus:{}},
{id:'skin_sinistro',name:'Lopes',desc:'Gratuita',icon:'🟨',price:0,bonus:{}},
{id:'skin_dark',name:'Sombria',desc:'+10% dano corpo a corpo',icon:'🖤',price:300,bonus:{meleeMult:1.1}},
{id:'skin_gold',name:'Dourada',desc:'+20% moedas coletadas',icon:'✨',price:600,bonus:{coinMult:1.2}},
{id:'skin_cyber',name:'Cyber',desc:'Dash recarrega 30% mais rápido',icon:'🤖',price:800,bonus:{dashCDMult:0.7}},
{id:'skin_ghost',name:'Fantasma',desc:'Invencibilidade ao dar dash +0.1s',icon:'👻',price:1200,bonus:{dashInvBonus:0.1}},
{id:'skin_strange',name:'estranha',desc:'+15% dano de fogo',icon:'😈',price:1500,bonus:{fireMult:1.15}},
],
weapons:[
{id:'axe_default',name:'Machado Padrão',desc:'Fiel companheiro',icon:'🪓',price:0,bonus:{},dmg:5,fireDmg:4},
{id:'axe_blood',name:'Machado de Sangue',desc:'+2 dano, vidas ao acertar',icon:'🩸',price:400,bonus:{meleeDmg:2,lifeSteal:1},dmg:7,fireDmg:4},
{id:'staff_fire',name:'Cajado de Fogo',desc:'Fogo +3 dano, -20% mana',icon:'🔥',price:500,bonus:{fireDmg:3,manaCost:0.8},dmg:5,fireDmg:7},
{id:'blade_wind',name:'Lâmina do Vento',desc:'Dash em área + knockback',icon:'💨',price:700,bonus:{dashArea:1},dmg:5,fireDmg:4},
{id:'hammer_thunder',name:'Martelo Trovão',desc:'+5 dano, ataque mais lento',icon:'🔨',price:900,bonus:{meleeDmg:5,atkDelay:0.15},dmg:10,fireDmg:4},
{id:'wand_crystal',name:'Varinha Cristal',desc:'Projéteis ricocheteiam',icon:'🔮',price:1100,bonus:{ricochet:1},dmg:5,fireDmg:6},
{id:'scythe_spider',name:'Foice Aracnídea',desc:'Projétil de teia que prende inimigos',icon:'🕷️',price:1800,bonus:{webSlow:1},dmg:8,fireDmg:7},
{id:'orb_witch',name:'Orbe da Bruxa',desc:'Magia curva que atravessa monstros fracos',icon:'🧙',price:2400,bonus:{pierce:1},dmg:7,fireDmg:9},
{id:'lance_dragon',name:'Lança do Dragão',desc:'Rajada longa de fogo, alto custo de mana',icon:'🐉',price:3200,bonus:{manaCost:1.25,burnTrail:1},dmg:9,fireDmg:12},
{id:'blade_void',name:'Lâmina Alienígena',desc:'Dano alto e projétil sombrio instável',icon:'🛸',price:4200,bonus:{meleeDmg:4,voidCrit:1},dmg:12,fireDmg:10},
],
items:[
{id:'item_shield',name:'Escudo Rúnico',desc:'Bloqueia 1 hit a cada 30s',icon:'🛡',price:350,bonus:{shield:30}},
{id:'item_boot',name:'Botas Velozes',desc:'Velocidade +15%',icon:'👟',price:400,bonus:{speedMult:1.15}},
{id:'item_ring',name:'Anel de Mana',desc:'Mana regenera 50% mais rápido',icon:'💍',price:500,bonus:{manaRegen:1.5}},
{id:'item_amulet',name:'Amuleto da Sorte',desc:'Chance dobrada de power-up',icon:'🧿',price:600,bonus:{luckMult:2}},
{id:'item_bomb',name:'Bomba Mágica',desc:'Habilidade Q: explosão em área',icon:'💣',price:800,bonus:{hasBomb:1}},
{id:'item_wings',name:'Asas de Fada',desc:'Triplo pulo desbloqueado',icon:'🦋',price:1000,bonus:{tripleJump:1}},
]
};
if(window.GAME_DATA){
if(Array.isArray(window.GAME_DATA.extraSkins)) SHOP_ITEMS.skins=SHOP_ITEMS.skins.concat(window.GAME_DATA.extraSkins);
if(Array.isArray(window.GAME_DATA.extraWeapons)) SHOP_ITEMS.weapons=SHOP_ITEMS.weapons.concat(window.GAME_DATA.extraWeapons);
if(Array.isArray(window.GAME_DATA.extraItems)) SHOP_ITEMS.items=SHOP_ITEMS.items.concat(window.GAME_DATA.extraItems);
}
function dedupeShopCategory(list){
const seen=new Set();
return (list||[]).filter(item=>{
if(!item||!item.id||seen.has(item.id))return false;
seen.add(item.id);
return true;
});
}
SHOP_ITEMS.skins=dedupeShopCategory(SHOP_ITEMS.skins);
SHOP_ITEMS.weapons=dedupeShopCategory(SHOP_ITEMS.weapons);
SHOP_ITEMS.items=dedupeShopCategory(SHOP_ITEMS.items);

function makeDailyMissions(){return[
{id:'d1',icon:'⚔',name:'Guerreira Diária',desc:'Mate 20 inimigos',goal:'kills',target:20,reward:80,claimed:false},
{id:'d2',icon:'💨',name:'Velocista',desc:'Use o dash 10 vezes',goal:'dash',target:10,reward:60,claimed:false},
{id:'d3',icon:'🎯',name:'Precisão',desc:'Complete 1 fase sem tomar dano',goal:'stageClear',target:1,reward:120,claimed:false},
]}
function makeWeeklyMissions(){return[
{id:'w1',icon:'💀',name:'Matança Semanal',desc:'Mate 150 inimigos',goal:'kills',target:150,reward:400,claimed:false},
{id:'w2',icon:'🔥',name:'Piromaníaca',desc:'Mate 30 inimigos com fogo',goal:'fireKills',target:30,reward:300,claimed:false},
{id:'w3',icon:'👑',name:'Caçadora de Chefes',desc:'Derrote 5 chefes',goal:'bossKills',target:5,reward:500,claimed:false},
]}
function makeStoryMissions(){return[
{id:'s1',icon:'🗺',name:'Exploradora',desc:'Complete o Mundo 1 (8 fases)',goal:'world1',target:8,reward:800,claimed:false},
{id:'s2',icon:'⚡',name:'Lendária',desc:'Alcance combo x10',goal:'comboMax',target:10,reward:600,claimed:false},
{id:'s3',icon:'🏆',name:'Colecionadora',desc:'Compre 3 itens da loja',goal:'shopBuys',target:3,reward:500,claimed:false},
{id:'s4',icon:'🌍',name:'Conquistadora',desc:'Complete o Mundo 2',goal:'world2',target:8,reward:1500,claimed:false},
{id:'s5',icon:'💎',name:'Absoluta',desc:'Complete todos os mundos',goal:'worldAll',target:20,reward:3000,claimed:false},
]}
function ensureMissions(){
const now=Date.now(),day=86400000,week=7*day;
if(!save.missions.daily||now-save.lastMissionReset>day){save.missions.daily=makeDailyMissions();save.lastMissionReset=now;writeSave()}
if(!save.missions.weekly||save.missions.weekly.length===0)save.missions.weekly=makeWeeklyMissions();
if(!save.missions.story||save.missions.story.length===0)save.missions.story=makeStoryMissions();
}
function getMissionProgress(goal){
const mp=save.missionProgress;
if(goal==='kills')return mp.kills||0;
if(goal==='fireKills')return mp.fireKills||0;
if(goal==='bossKills')return mp.bossKills||0;
if(goal==='comboMax')return mp.comboMax||0;
if(goal==='world1')return Math.min(save.completedStages.filter(i=>i<8).length,8);
if(goal==='world2')return Math.min(save.completedStages.filter(i=>i>=8&&i<16).length,8);
if(goal==='worldAll')return save.completedStages.length;
if(goal==='shopBuys')return (save.owned.length-2);
if(goal==='dash')return mp.dashUses||0;
if(goal==='stageClear')return mp.flawlessStages||0;
return 0;
}

const STAGE_DATA=(window.GAME_DATA&&window.GAME_DATA.stages)?window.GAME_DATA.stages:[

{id:0,icon:'🌲',theme:'forest',world:0,enemies:[['mush',380],['mush',580],['mush',820],['mush',1080],['mush',1320],['mushking',1660]],width:2100,ground:198,goal:1920,coinBonus:60},
{id:1,icon:'🌿',theme:'swamp',world:0,enemies:[['mush',380],['mush',640],['slug',900],['mush',1200],['slug',1480]],width:2050,ground:199,goal:1850,coinBonus:70},
{id:2,icon:'🎪',theme:'circus',world:0,enemies:[['clownlet',440],['clownlet',720],['mush',980],['clownlet',1260],['clown',1580]],width:2200,ground:198,goal:2010,coinBonus:80},
{id:3,icon:'❄',theme:'snow',world:0,enemies:[['mush',450],['mush',760],['mush',1060],['barb',1380]],width:2050,ground:200,goal:1870,coinBonus:75},
{id:4,icon:'🍭',theme:'candy',world:0,enemies:[['candyImp',440],['candyImp',720],['mush',1000],['candyImp',1260],['caramel',1600]],width:2240,ground:197,goal:2040,coinBonus:85},
{id:5,icon:'🌳',theme:'living',world:0,enemies:[['rootling',480],['rootling',780],['mush',1080],['rootling',1340],['treeking',1620]],width:2250,ground:198,goal:2060,coinBonus:90},
{id:6,icon:'⚡',theme:'castle',world:0,enemies:[['mush',520],['mush',820],['mush',1120],['queen',1600]],width:2300,ground:199,goal:2100,coinBonus:95},
{id:7,icon:'🪞',theme:'glitch',world:0,enemies:[['mirror',1550]],width:2350,ground:198,goal:2140,coinBonus:120},

{id:8,icon:'🌋',theme:'volcano',world:1,enemies:[['pyrefiend',420],['pyrefiend',680],['lavaBrute',980],['pyrefiend',1260],['volcanic',1600]],width:2400,ground:200,goal:2200,coinBonus:130},
{id:9,icon:'🌊',theme:'deep',world:1,enemies:[['deepDrifter',440],['deepDrifter',700],['abyssWorm',980],['deepDrifter',1280],['krakenette',1600]],width:2350,ground:198,goal:2150,coinBonus:140},
{id:10,icon:'💀',theme:'crypt',world:1,enemies:[['boneling',400],['boneling',650],['ghostKnight',900],['boneling',1150],['boneling',1350],['lich',1640]],width:2400,ground:199,goal:2200,coinBonus:150},
{id:11,icon:'🔆',theme:'neon',world:1,enemies:[['neonDrone',450],['neonDrone',720],['glitchFiend',1000],['neonDrone',1280],['neonGod',1600]],width:2450,ground:198,goal:2240,coinBonus:160},
{id:12,icon:'🏜',theme:'salt',world:1,enemies:[['dustDevil',430],['dustDevil',700],['sandGolem',960],['dustDevil',1240],['saltGolem',1600]],width:2350,ground:200,goal:2140,coinBonus:145},
{id:13,icon:'💎',theme:'crystal',world:1,enemies:[['shardling',460],['shardling',740],['crystalBrute',1020],['shardling',1300],['crystalQueen',1640]],width:2400,ground:198,goal:2200,coinBonus:155},
{id:14,icon:'💨',theme:'wind',world:1,enemies:[['windWraith',450],['windWraith',730],['stormKnight',1010],['windWraith',1290],['windPhantom',1620]],width:2450,ground:198,goal:2240,coinBonus:165},
{id:15,icon:'🌑',theme:'dark',world:1,enemies:[['shadowFiend',480],['shadowFiend',760],['darkKnight',1040],['darkCore',1650]],width:2500,ground:199,goal:2300,coinBonus:200},

{id:16,icon:'🌌',theme:'space',world:2,enemies:[['starSpawn',460],['starSpawn',750],['cosmicBrute',1050],['starSpawn',1350],['voidBeast',1680]],width:2600,ground:198,goal:2400,coinBonus:250},
{id:17,icon:'⚙',theme:'factory',world:2,enemies:[['gearling',440],['gearling',720],['steamBrute',1000],['gearling',1280],['gearling',1480],['mechaBoss',1720]],width:2600,ground:200,goal:2420,coinBonus:260},
{id:18,icon:'🦠',theme:'organic',world:2,enemies:[['blobTwin',460],['blobTwin',750],['muscleMass',1050],['blobTwin',1350],['organicTitan',1700]],width:2650,ground:198,goal:2440,coinBonus:280},
{id:19,icon:'⬛',theme:'void',world:2,enemies:[['nullFiend',480],['nullFiend',780],['nullFiend',1080],['nullFiend',1380],['nullKing',1750]],width:2700,ground:199,goal:2480,coinBonus:400},
];

const screens={
menu:document.getElementById('menuScreen'),
map:document.getElementById('mapScreen'),
shop:document.getElementById('shopScreen'),
missions:document.getElementById('missionsScreen'),
inv:document.getElementById('invScreen'),
settings:document.getElementById('settingsScreen'),
multiplayer:document.getElementById('multiplayerScreen'),
};
let activeScreen='menu';
let uiHistoryLock=false,uiHistoryBoot=false;
function showScreen(name,skipHistory=false){
const prevScreen=activeScreen||'';
Object.values(screens).forEach(s=>s.classList.add('hidden'));
Object.values(screens).forEach(s=>s.classList.remove('sheet-screen'));
if(name==='menu'){
screens.menu.classList.remove('hidden');
}else if(name&&screens[name]){
screens.menu.classList.remove('hidden');
screens[name].classList.add('sheet-screen');
screens[name].classList.remove('hidden');
}
activeScreen=name||'';
if(!skipHistory&&uiHistoryBoot&&prevScreen!==activeScreen&&activeScreen){
try{history.pushState({mmScreen:activeScreen},'',location.href)}catch(e){}
}
}
function closeCurrentScreenByBack(){
if(started&&activeScreen===''){try{hardExitToMenu()}catch(e){showScreen('menu',true)}return}
if(activeScreen&&activeScreen!=='menu'){showScreen('menu',true);refreshMenu();return}
}
try{history.replaceState({mmScreen:'menu'},'',location.href);uiHistoryBoot=true;window.addEventListener('popstate',e=>{closeCurrentScreenByBack()})}catch(e){uiHistoryBoot=true}
showScreen('menu',true);

const gameMiniMenu=document.getElementById('gameMiniMenu');
const gameMenuBtn=document.getElementById('gameMenuBtn');
const gameExitPanel=document.getElementById('gameExitPanel');
const gameExitBtn=document.getElementById('gameExitBtn');
const defeatRestartBtn=document.getElementById('defeatRestartBtn');
function updateGameplayMenu(){
const inGame=!!started&&activeScreen==='';
if(gameMiniMenu)gameMiniMenu.style.display=inGame?'block':'none';
if(!inGame&&gameExitPanel)gameExitPanel.style.display='none';
const lost=inGame&&gameOver&&!victory;
const allowSoloRestart=lost&&!(typeof MP!=='undefined'&&MP&&MP.on);
if(defeatRestartBtn)defeatRestartBtn.style.display=allowSoloRestart?'block':'none';
}
function hardExitToMenu(){
try{if(typeof mpLeaveRoom==='function'&&MP&&MP.on)mpLeaveRoom()}catch(e){}
try{started=false;gameOver=false;victory=false;showScreen('menu');activeScreen='menu';refreshMenu()}catch(e){}
try{if(gameExitPanel)gameExitPanel.style.display='none';if(gameMiniMenu)gameMiniMenu.style.display='none';if(defeatRestartBtn)defeatRestartBtn.style.display='none'}catch(e){}
}
if(gameMenuBtn)gameMenuBtn.onclick=e=>{e.preventDefault();e.stopPropagation();if(gameExitPanel)gameExitPanel.style.display=(gameExitPanel.style.display==='block')?'none':'block'};
if(gameExitBtn)gameExitBtn.onclick=e=>{e.preventDefault();e.stopPropagation();hardExitToMenu()};
if(defeatRestartBtn)defeatRestartBtn.onclick=e=>{e.preventDefault();e.stopPropagation();if(typeof MP!=='undefined'&&MP&&MP.on){say(LANG==='pt'?'Aguarde o outro jogador terminar a fase ou perder.':'Wait for the other player to clear the stage or lose.',1.4,'#60d0ff');return}if(started)startGame(li)};

const firebaseConfig={apiKey:"AIzaSyBZvxl3BKYS4WIA0Ov1xQ7xLwLRrJm7SwU",authDomain:"mundo-magico-online.firebaseapp.com",databaseURL:"https://mundo-magico-online-default-rtdb.firebaseio.com",projectId:"mundo-magico-online",storageBucket:"mundo-magico-online.firebasestorage.app",messagingSenderId:"495535078197",appId:"1:495535078197:web:6f86b82c22f3492e802a7c"};
let fbApp=null,fbDb=null,fbAuth=null,fbUser=null,fbAuthStarting=false;
let AUTH_UID=null;
try{
if(window.firebase){
fbApp=firebase.initializeApp(firebaseConfig);
fbDb=firebase.database();
if(firebase.auth){
fbAuth=firebase.auth();
fbAuth.onAuthStateChanged(u=>{fbUser=u||null;AUTH_UID=u&&u.uid?u.uid:null;});
fbAuthStarting=true;
fbAuth.signInAnonymously().catch(e=>{console.warn('Firebase anonymous auth failed',e)}).finally(()=>{fbAuthStarting=false});
}
}
}catch(e){
try{
fbApp=firebase.app();
fbDb=firebase.database();
if(firebase.auth){
fbAuth=firebase.auth();
fbAuth.onAuthStateChanged(u=>{fbUser=u||null;AUTH_UID=u&&u.uid?u.uid:null;});
fbAuthStarting=true;
fbAuth.signInAnonymously().catch(e=>{console.warn('Firebase anonymous auth failed',e)}).finally(()=>{fbAuthStarting=false});
}
}catch(_){}
}
function fbEnsureAuth(cb){
if(!fbAuth){cb&&cb(null);return}
if(fbUser){cb&&cb(fbUser);return}
if(!fbAuthStarting){
fbAuthStarting=true;
fbAuth.signInAnonymously().catch(e=>{console.warn('Firebase anonymous auth failed',e)}).finally(()=>{fbAuthStarting=false});
}
setTimeout(()=>fbEnsureAuth(cb),120);
}
const MP={on:false,room:'',playerId:'',role:'',nick:'',roomRef:null,playerRef:null,lobbyRef:null,players:{},enemyStates:{},shotStates:{},hazardStates:{},lastSend:0,lastWorldSend:0,eventSeq:0,worldReady:false,lastRestart:0,lastStageSeen:null,knownPlayers:{},joinToast:'',joinToastT:0,lastGoalReq:0,restarting:false,remoteSmooth:{},remoteFx:[],lastPlayerEventKey:'',remoteKillCredit:null,roomCreatedAt:0,started:false};
function mpId(){let id=localStorage.getItem('cc2_player_id');if(!id){id='p_'+Math.random().toString(36).slice(2,10);localStorage.setItem('cc2_player_id',id)}return id}
function mpCode(){return Math.random().toString(36).replace(/[^a-z0-9]/g,'').slice(2,8).toUpperCase()}
const MM_INVISIBLE_CHARS=/[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF]/g;
const MM_BAD_PUBLIC_NAMES=['toucabr','admin','adm','moderador','mod','suporte','staff','oficial','official','sexo','sex','sexy','porno','porn','xxx','hentai','nude','nudes','pelado','pelada','nua','nu','boquete','oral','anal','gozar','gozo','gozada','gozei','goza','punheta','masturba','masturbacao','siririca','tesao','tesudo','tesuda','putaria','suruba','orgia','fetiche','incesto','estupr','assedi','pedof','lolicon','shotacon','pica','piroca','penis','pau','rola','buceta','bct','xota','xoxota','vagina','clitoris','cu','cuzinho','anus','bunda','peito','teta','seio','mamilo','ejacula','esperma','semen','chupo','chupar','sentar','sentada','safado','safada','tarado','tarada','vagabunda','vagabundo','puta','puto','prostituta','prostituto','vadia','cadela','caralho','porra','foder','foda','fodase','fdp','filhadaputa','filhodaputa','arrombado','arrombada','desgraca','desgracado','desgracada','merda','bosta','lixo','otario','otaria','idiota','burro','burra','imbecil','retardado','retardada','mongol','mongoloide','doente','corno','corna','viado','veado','bicha','boiola','traveco','nazista','nazi','hitler','fascista','racista','racismo','macaco','macaca','terrorista','isis','kkk','matar','morte','assassino','assassina','suicida','suicidio','http','https','www','discord','telegram','whatsapp','pix'];
function mmAsciiFold(v){return String(v||'').replace(MM_INVISIBLE_CHARS,'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/0/g,'o').replace(/1/g,'i').replace(/3/g,'e').replace(/4/g,'a').replace(/5/g,'s').replace(/7/g,'t').replace(/8/g,'b').replace(/9/g,'g')}
function mmPublicClean(v,max=18){if(isSecretTesterNick(v))return SECRET_TEST_NICK;v=String(v||'').replace(MM_INVISIBLE_CHARS,'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9 _-]/g,' ').replace(/\s+/g,' ').trim();v=v.replace(/(.)\1{4,}/g,'$1$1$1');return v.slice(0,max).trim()}
function mmPublicHard(v){return mmAsciiFold(v).replace(/[^a-z0-9]/g,'')}
function mmPublicBlocked(v){const hard=mmPublicHard(v),plain=mmAsciiFold(v);if(!hard)return true;if(/(.)\1{7,}/.test(hard))return true;if(/https?|www|\.com|\.gg|\.io|\.net/.test(plain))return true;return MM_BAD_PUBLIC_NAMES.some(w=>hard.includes(mmPublicHard(w))||plain.includes(String(w).toLowerCase()))}
function mpCleanNick(n){return mmPublicClean(n,14)||''}
function mpStatus(s){const el=document.getElementById('mpStatus');if(el)el.textContent=s}

function characterPalette(skin){return{
dress:{skin_pink:'#ff75b8',skin_shyest:'#1c3f78',skin_longhair:'#58b7ff',skin_omni:'#d93838',skin_sinistro:'#111111',skin_dark:'#442244',skin_gold:'#dda800',skin_cyber:'#0088ff',skin_ghost:'rgba(200,220,255,.62)',skin_strange:'#aa0022'}[skin]||'#ff75b8',
hair:{skin_pink:'#22d856',skin_shyest:'#101622',skin_longhair:'#08090e',skin_omni:'#2b1a14',skin_sinistro:'#050505',skin_dark:'#220044',skin_gold:'#ffcc00',skin_cyber:'#00ffcc',skin_ghost:'#ccddff',skin_strange:'#ff2200'}[skin]||'#22d856',
accent:{skin_pink:'#ffd13b',skin_shyest:'#d6a72a',skin_longhair:'#ffd84a',skin_omni:'#6fc2ff',skin_sinistro:'#e6b91d',skin_dark:'#9a5cff',skin_gold:'#fff06a',skin_cyber:'#00fff0',skin_ghost:'#ffffff',skin_strange:'#ff5660'}[skin]||'#ffd13b'
}}
function squadVisualSkin(pl,i){return (pl&&pl.skin)||'skin_pink'}

const MM_SKIN_VARIANT_META={
 skin_shyest:{kind:'shyest',body:'slim',mask:true,cape:false,eye:'#ffe95b'},
 skin_longhair:{kind:'longhair',body:'hero',hairLong:true,cape:false,eye:'#52cfff'},
 skin_omni:{kind:'omni',body:'tank',cape:true,capeColor:'#8f1212',capeWeight:1.0,eye:'#e7fbff'},
 skin_sinistro:{kind:'sinistro',body:'athletic',cape:true,capeColor:'#b08a11',capeWeight:0.55,eye:'#ffd942'}
};
function mmVariantMeta(skin){return MM_SKIN_VARIANT_META[skin]||null}

function mmDrawVariantPlayer(g,skin,wep,walk,state){
state=state||{};const pal=characterPalette(skin),meta=mmVariantMeta(skin)||{};const t=typeof gTime==='number'?gTime:performance.now()/1000;
const dressCol=pal.dress,hairCol=pal.hair,accentCol=pal.accent||'#ffd13b';
const capeSwing=Math.sin(t*2.2)*3, hairSwing=Math.sin(t*4.0)*2;
function rr2(x,y,w,h,r){g.beginPath();if(g.roundRect)g.roundRect(x,y,w,h,r);else g.rect(x,y,w,h)}
function niceFace(cx,cy,mask){
 if(mask){g.fillStyle='#101622';g.strokeStyle='#05070b';g.lineWidth=2.5;rr2(cx-13,cy-12,26,22,8);g.fill();g.stroke();g.fillStyle=meta.eye||'#ffe95b';g.beginPath();g.ellipse(cx-5,cy-2,3.8,2.4,0,0,7);g.ellipse(cx+5,cy-2,3.8,2.4,0,0,7);g.fill();g.strokeStyle=accentCol;g.lineWidth=2;g.beginPath();g.arc(cx,cy+6,5,.25,Math.PI-.25);g.stroke();return;}
 g.fillStyle='#ffd0bd';g.strokeStyle='#250d21';g.lineWidth=3;g.beginPath();g.ellipse(cx,cy,12,12.5,-.04,0,7);g.fill();g.stroke();
 g.fillStyle='#fff';g.beginPath();g.ellipse(cx-5,cy-3,4.4,4.9,-.18,0,7);g.ellipse(cx+5,cy-3,4.4,4.9,.18,0,7);g.fill();
 g.fillStyle=meta.eye||'#4ebbe7';g.beginPath();g.arc(cx-4.5,cy-2,2,0,7);g.arc(cx+5.5,cy-2,2,0,7);g.fill();
 g.fillStyle='#111';g.beginPath();g.arc(cx-4.1,cy-1.8,1.05,0,7);g.arc(cx+5.9,cy-1.8,1.05,0,7);g.fill();
 g.strokeStyle='#7b1730';g.lineWidth=1.9;g.lineCap='round';g.beginPath();g.arc(cx,cy+5.5,5.4,.18,Math.PI-.18);g.stroke();
}
function drawCape(){if(!meta.cape)return;g.save();g.globalAlpha=.94;g.fillStyle=meta.capeColor||'#8f1212';g.strokeStyle='rgba(35,0,0,.78)';g.lineWidth=2.4;g.beginPath();
 const heavy=meta.kind==='omni';
 g.moveTo(3,15);g.bezierCurveTo(-11+capeSwing,24,-13-capeSwing,43,-1+capeSwing,57);g.lineTo(30-capeSwing,57);g.bezierCurveTo(42+capeSwing,42,39-capeSwing,23,27,15);g.closePath();g.fill();g.stroke();
 g.globalAlpha=.35;g.strokeStyle='#fff';g.lineWidth=heavy?1.3:1;for(let i=0;i<3;i++){g.beginPath();g.moveTo(8+i*6,19);g.bezierCurveTo(3+i*7+capeSwing*.4,32,6+i*6,44,7+i*7,55);g.stroke()}g.restore();}
drawCape();
// pernas diferentes por silhueta
let shoulder=25, waist=30, bodyTop=18, bodyBottom=39, legShift=0;
if(meta.kind==='shyest'){shoulder=18;waist=24;bodyBottom=40;legShift=-1}
if(meta.kind==='omni'){shoulder=34;waist=36;bodyBottom=40}
if(meta.kind==='sinistro'){shoulder=28;waist=32;bodyBottom=39}
if(meta.kind==='longhair'){shoulder=24;waist=29;bodyBottom=39}
// pernas
 g.lineCap='round';g.strokeStyle='#210b20';g.lineWidth=5.4;g.beginPath();g.moveTo(10,31);g.lineTo(6+walk*3+legShift,45);g.moveTo(19,31);g.lineTo(23-walk*3-legShift,45);g.stroke();
 g.strokeStyle=meta.kind==='sinistro'?accentCol:'#fff';g.lineWidth=3.3;g.beginPath();g.moveTo(9,36);g.lineTo(6+walk*3+legShift,43);g.moveTo(20,36);g.lineTo(23-walk*3-legShift,43);g.stroke();
 g.strokeStyle='#3b143f';g.lineWidth=5.5;g.beginPath();g.moveTo(6+walk*3+legShift,45);g.lineTo(0+walk*3+legShift,47);g.moveTo(23-walk*3-legShift,45);g.lineTo(30-walk*3-legShift,47);g.stroke();
// corpo
 g.fillStyle=dressCol;g.strokeStyle='#250d21';g.lineWidth=3;g.beginPath();g.moveTo(15-shoulder/2,bodyTop);g.lineTo(15+shoulder/2,bodyTop);g.lineTo(15+waist/2,bodyBottom);g.lineTo(15-waist/2,bodyBottom);g.closePath();g.fill();g.stroke();
 if(meta.kind==='omni'){g.fillStyle=accentCol;g.strokeStyle='#16384f';g.lineWidth=1.6;rr2(8,20,14,18,3);g.fill();g.stroke();}
 else if(meta.kind==='sinistro'){g.fillStyle=accentCol;g.beginPath();g.moveTo(15,20);g.lineTo(27,37);g.lineTo(3,37);g.closePath();g.fill();}
 else if(meta.kind==='shyest'){g.fillStyle=accentCol;g.beginPath();g.moveTo(5,25);g.lineTo(25,25);g.lineTo(22,31);g.lineTo(8,31);g.closePath();g.fill();}
 else {g.fillStyle=accentCol;rr2(7,25,16,6,3);g.fill();}
// braços
 const holdingVulcan=wep==='vulcan_mg';const gunKick=holdingVulcan?((state.mgKick||0)*.45):0;
 g.strokeStyle='#ffd1c4';g.lineWidth=5.4;g.lineCap='round';g.beginPath();
 if(meta.kind==='shyest'){g.moveTo(7,22);g.lineTo(state.atk?-9:4,30);g.moveTo(23,22);g.lineTo(state.atk?35:26,30);} 
 else if(holdingVulcan){g.moveTo(7,22);g.lineTo(23-gunKick,27);g.moveTo(23,22);g.lineTo(37-gunKick,25+Math.sin(t*42)*(state.mgFiring>0?1.6:.3));}
 else{g.moveTo(7,22);g.lineTo(state.atk?-12:1,29);g.moveTo(23,22);g.lineTo(state.atk?38:29,27);}g.stroke();
// cabeça/cabelo
 if(meta.kind==='longhair'){g.fillStyle=hairCol;g.strokeStyle='#050509';g.lineWidth=2.2;g.beginPath();g.ellipse(15,11,17,21,0,0,7);g.fill();g.stroke();for(let i=0;i<7;i++){g.beginPath();g.ellipse(1+i*5,26+Math.sin(t*3+i)*2,4.2,15,Math.sin(t+i)*.14,0,7);g.fill();g.stroke();}niceFace(15,10,false);}
 else if(meta.kind==='shyest'){g.fillStyle=hairCol;g.strokeStyle='#05070b';g.lineWidth=2.2;for(let i=0;i<5;i++){g.beginPath();g.arc(6+i*4.5,-1+Math.sin(t*4+i)*.7,5,0,7);g.fill();g.stroke();}niceFace(15,10,true);}
 else if(meta.kind==='omni'){g.fillStyle=hairCol;g.strokeStyle='#0b0704';g.lineWidth=2.2;for(let i=0;i<7;i++){g.beginPath();g.arc(2+i*4.6,-1+Math.sin(t*3+i)*.7,5.8,0,7);g.fill();g.stroke();}niceFace(15,10,false);}
 else if(meta.kind==='sinistro'){g.fillStyle=hairCol;g.strokeStyle='#000';g.lineWidth=2.2;for(let i=0;i<5;i++){g.beginPath();g.moveTo(1+i*6,6);g.lineTo(4+i*5,-8-Math.sin(t*4+i)*1.4);g.lineTo(8+i*5,6);g.closePath();g.fill();g.stroke();}niceFace(15,10,false);}
 else niceFace(15,10,false);
// arma simplificada mas visível
 const attacking=!!state.atk;const ax=wep==='vulcan_mg'?35:(attacking?35:27),ay=wep==='vulcan_mg'?25:(attacking?12:25);let rot=attacking?-.72:.23;if(wep==='vulcan_mg')rot=-.04;if(wep==='staff_fire')rot=attacking?-.98:.12;
 g.save();g.translate(ax,ay);g.rotate(rot);
 if(wep==='vulcan_mg'){g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(-2,0);g.lineTo(55,0);g.stroke();g.strokeStyle='#3b3333';g.lineWidth=4;g.beginPath();g.moveTo(0,0);g.lineTo(54,0);g.stroke();g.fillStyle='#ff5b19';g.beginPath();g.arc(15,0,5,0,7);g.fill();if(state.mgFiring||state.fire){g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,150,40,.85)';g.beginPath();g.ellipse(62,0,17,7,0,0,7);g.fill();g.globalCompositeOperation='source-over';}}
 else if(wep==='staff_fire'){g.strokeStyle='#8b4513';g.lineWidth=5;g.beginPath();g.moveTo(0,30);g.lineTo(0,-26);g.stroke();g.globalCompositeOperation='lighter';g.fillStyle='#ff8a00';g.beginPath();g.arc(0,-30,11+Math.sin(t*8)*2,0,7);g.fill();g.globalCompositeOperation='source-over';}
 else{g.strokeStyle='#4a2730';g.lineWidth=4.5;g.lineCap='round';g.beginPath();g.moveTo(-3,1);g.lineTo(29,24);g.stroke();g.fillStyle='#dce8f4';g.strokeStyle='#3d1421';g.lineWidth=2.2;g.beginPath();g.moveTo(25,16);g.lineTo(47,2);g.lineTo(43,29);g.lineTo(28,29);g.lineTo(20,38);g.lineTo(18,10);g.closePath();g.fill();g.stroke();}
 g.restore();
}

function skinDisplayName(id){const it=(SHOP_ITEMS.skins||[]).find(x=>x.id===id);return it?it.name:({skin_pink:'Rosa Clássica',skin_shyest:'Bravo',skin_longhair:'Hank',skin_omni:'Duck',skin_sinistro:'Lopes',skin_dark:'Sombria',skin_gold:'Dourada',skin_cyber:'Cyber',skin_ghost:'Fantasma',skin_strange:'Estranha'}[id]||id||'Rosa Clássica')}
function drawEquippedCharacter(ctx,opt={}){
const skin=opt.skin||save.equipped.skin||'skin_pink', wep=opt.weapon||save.equipped.weapon||'axe_default';
const t=(opt.t==null?performance.now()/1000:opt.t), dir=opt.dir||1;
const pal=characterPalette(skin), dressCol=pal.dress, hairCol=pal.hair, accentCol=pal.accent||'#ffd13b', vMeta=mmVariantMeta(skin);
const W=ctx.canvas.width,H=ctx.canvas.height;
ctx.clearRect(0,0,W,H);
ctx.save();ctx.translate(W*.50,H*.78);ctx.scale((opt.scale||Math.min(W,H)/82)*dir,(opt.scale||Math.min(W,H)/82));ctx.translate(-15,-47);
const walk=Math.sin(t*6)*.75, bob=Math.sin(t*4)*1.15, atk=Math.sin(t*2.6)>.50, firing=wep==='vulcan_mg'&&Math.sin(t*8)>0;
const rr2=(x,y,w,h,r,fill,stroke)=>{ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x,y,w,h,r);else ctx.rect(x,y,w,h);if(fill)ctx.fill();if(stroke)ctx.stroke();};

ctx.globalAlpha=.27;ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(15,50,24,5,0,0,7);ctx.fill();ctx.globalAlpha=1;
ctx.translate(0,bob);

ctx.fillStyle=hairCol;ctx.strokeStyle='#06220f';ctx.lineWidth=2.4;
if(vMeta&&vMeta.cape){const sw=Math.sin(t*2.2)*3;ctx.fillStyle=vMeta.capeColor;ctx.strokeStyle='rgba(30,0,0,.75)';ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(4,16);ctx.bezierCurveTo(-8+sw,25,-9-sw,42,2+sw,55);ctx.lineTo(28-sw,55);ctx.bezierCurveTo(39+sw,42,38-sw,25,26,16);ctx.closePath();ctx.fill();ctx.stroke();}
if(vMeta&&vMeta.kind==='longhair'){
 ctx.fillStyle=hairCol;ctx.strokeStyle='#050509';ctx.lineWidth=2.2;ctx.beginPath();ctx.ellipse(15,11,17,20,0,0,7);ctx.fill();ctx.stroke();
 for(let i=0;i<6;i++){ctx.beginPath();ctx.ellipse(3+i*5,25+Math.sin(t*3+i)*2,4,15,Math.sin(t+i)*.16,0,7);ctx.fill();ctx.stroke();}
}else if(vMeta&&vMeta.kind==='shyest'){
 ctx.fillStyle='#101622';ctx.strokeStyle='#05070b';ctx.lineWidth=2.2;ctx.beginPath();ctx.roundRect?ctx.roundRect(1,-4,28,21,8):ctx.rect(1,-4,28,21);ctx.fill();ctx.stroke();
}else if(vMeta&&vMeta.kind==='omni'){
 ctx.fillStyle=hairCol;ctx.strokeStyle='#0b0704';for(let i=0;i<6;i++){ctx.beginPath();ctx.arc(5+i*4.4,-1+Math.sin(t*3+i)*.7,5.5,0,7);ctx.fill();ctx.stroke();}
}else if(vMeta&&vMeta.kind==='sinistro'){
 ctx.fillStyle=hairCol;ctx.strokeStyle='#000';for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(1+i*6,5);ctx.lineTo(4+i*5,-9-Math.sin(t*4+i)*1.4);ctx.lineTo(8+i*5,6);ctx.closePath();ctx.fill();ctx.stroke();}
}else{
 for(let i=0;i<12;i++){const side=i<6?-1:1,idx=i%6;ctx.beginPath();ctx.arc(15+side*(10+idx*2.8)+Math.sin(t*5+i)*1.4,7+Math.sin(idx)*5+idx*.4,6.8+(idx%3),0,7);ctx.fill();ctx.stroke()}
}

ctx.lineCap='round';ctx.strokeStyle='#210b20';ctx.lineWidth=5.4;ctx.beginPath();ctx.moveTo(10,31);ctx.lineTo(6+walk*3,45);ctx.moveTo(19,31);ctx.lineTo(23-walk*3,45);ctx.stroke();
ctx.strokeStyle='#fff';ctx.lineWidth=3.3;ctx.beginPath();ctx.moveTo(9,36);ctx.lineTo(6+walk*3,43);ctx.moveTo(20,36);ctx.lineTo(23-walk*3,43);ctx.stroke();
ctx.strokeStyle='#8c214c';ctx.lineWidth=2.8;ctx.beginPath();ctx.moveTo(8,40);ctx.lineTo(5+walk*3,46);ctx.moveTo(21,40);ctx.lineTo(24-walk*3,46);ctx.stroke();
ctx.strokeStyle='#3b143f';ctx.lineWidth=5.5;ctx.beginPath();ctx.moveTo(6+walk*3,45);ctx.lineTo(0+walk*3,47);ctx.moveTo(23-walk*3,45);ctx.lineTo(30-walk*3,47);ctx.stroke();

ctx.fillStyle=dressCol;ctx.strokeStyle='#250d21';ctx.lineWidth=3;ctx.beginPath();
if(vMeta&&vMeta.kind==='shyest'){ctx.moveTo(7,18);ctx.lineTo(23,18);ctx.lineTo(27,39);ctx.lineTo(3,39);} 
else if(vMeta&&vMeta.kind==='omni'){ctx.moveTo(1,18);ctx.lineTo(29,18);ctx.lineTo(33,39);ctx.lineTo(-3,39);} 
else if(vMeta&&vMeta.kind==='sinistro'){ctx.moveTo(3,18);ctx.lineTo(27,18);ctx.lineTo(31,38);ctx.lineTo(-1,38);} 
else {ctx.moveTo(5,18);ctx.lineTo(25,18);ctx.lineTo(30,38);ctx.lineTo(0,38);} 
ctx.closePath();ctx.fill();ctx.stroke();
if(vMeta&&vMeta.kind==='omni'){ctx.fillStyle=accentCol;ctx.fillRect(8,20,14,18);ctx.strokeRect(8,20,14,18)}
if(vMeta&&vMeta.kind==='sinistro'){ctx.fillStyle=accentCol;ctx.beginPath();ctx.moveTo(15,20);ctx.lineTo(27,37);ctx.lineTo(3,37);ctx.closePath();ctx.fill();}
ctx.fillStyle=accentCol;ctx.beginPath();ctx.moveTo(1,34);for(let i=0;i<6;i++)ctx.lineTo(4+i*5,38+(i%2)*3);ctx.lineTo(30,34);ctx.lineTo(30,40);ctx.lineTo(0,40);ctx.closePath();ctx.fill();
ctx.fillStyle=accentCol;ctx.strokeStyle='#7c3d00';ctx.lineWidth=1.5;ctx.fillRect(4,25,23,5);ctx.strokeRect(4,25,23,5);

const holdingVulcan=wep==='vulcan_mg';const gunKick=holdingVulcan?(firing?1.2:.25):0;
ctx.strokeStyle='#ffd1c4';ctx.lineWidth=5.4;ctx.lineCap='round';ctx.beginPath();
if(holdingVulcan){ctx.moveTo(7,22);ctx.lineTo(23-gunKick,27);ctx.moveTo(23,22);ctx.lineTo(37-gunKick,25+Math.sin(t*42)*(firing?1.6:.3));}
else{ctx.moveTo(7,22);ctx.lineTo(atk?-12:1,29);ctx.moveTo(23,22);ctx.lineTo(atk?38:29,27);}
ctx.stroke();

ctx.fillStyle='#ffd0bd';ctx.strokeStyle='#250d21';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(15,10,12,12.5,-.04,0,7);ctx.fill();ctx.stroke();
ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(10,7,4.7,5.2,-.25,0,7);ctx.ellipse(20,7,4.9,5.2,.25,0,7);ctx.fill();
ctx.fillStyle=(vMeta&&vMeta.eye)||'#4ebbe7';ctx.beginPath();ctx.arc(11,8,2.2,0,7);ctx.arc(21,8,2.2,0,7);ctx.fill();
if(vMeta&&vMeta.kind==='shyest'){ctx.fillStyle='#172035';ctx.strokeStyle='#03050b';ctx.lineWidth=1.5;ctx.beginPath();ctx.roundRect?ctx.roundRect(4,5,23,12,5):ctx.rect(4,5,23,12);ctx.fill();ctx.stroke();ctx.fillStyle=vMeta.eye;ctx.beginPath();ctx.ellipse(10.5,10,4,2.3,0,0,7);ctx.ellipse(20.5,10,4,2.3,0,0,7);ctx.fill();}
ctx.fillStyle='#101010';ctx.beginPath();ctx.arc(11.5,8.3,1.2,0,7);ctx.arc(21.5,8.3,1.2,0,7);ctx.fill();
ctx.strokeStyle='#3a0a1a';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(6,1);ctx.lineTo(13,4);ctx.moveTo(24,1);ctx.lineTo(17,4);ctx.stroke();
ctx.save();ctx.strokeStyle='#7b1730';ctx.lineWidth=2.6;ctx.lineCap='round';ctx.beginPath();ctx.arc(16,13.2,7.2,.18,Math.PI-.18);ctx.stroke();ctx.fillStyle='rgba(255,255,255,.96)';ctx.beginPath();ctx.roundRect?ctx.roundRect(11.2,15.2,9.6,3.2,1.4):ctx.rect(11.2,15.2,9.6,3.2);ctx.fill();ctx.strokeStyle='rgba(80,20,35,.35)';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(16,15.2);ctx.lineTo(16,18.3);ctx.stroke();ctx.restore()

ctx.fillStyle='#ffd441';ctx.strokeStyle='#7c3d00';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(12,-1);ctx.lineTo(-5,-13);ctx.lineTo(3,3);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(18,-1);ctx.lineTo(35,-13);ctx.lineTo(27,3);ctx.closePath();ctx.fill();ctx.stroke();rr2(12,-5,7,5,2.5,true,true);
ctx.fillStyle=hairCol;ctx.strokeStyle='#06220f';ctx.lineWidth=2.2;if(!(vMeta&&['longhair','shyest','sinistro','omni'].includes(vMeta.kind))){for(let i=0;i<7;i++){ctx.beginPath();ctx.arc(2+i*4.6,-1+Math.sin(t*4+i)*1.2,5.5+(i%2),0,7);ctx.fill();ctx.stroke()}}

const attacking=atk&&wep!=='vulcan_mg';const ax=wep==='vulcan_mg'?35:(attacking?35:27),ay=wep==='vulcan_mg'?25:(attacking?12:25);let rot=attacking?-.72:.23;if(wep==='vulcan_mg')rot=-.04;if(wep==='staff_fire')rot=attacking?-.98:.12;if(wep==='blade_wind')rot=attacking?-1.02:.08;if(wep==='hammer_thunder')rot=attacking?-.58:.34;if(wep==='wand_crystal')rot=attacking?-.82:.04;
ctx.save();ctx.translate(ax,ay);ctx.rotate(rot+Math.sin(t*3)*.025);
if(wep==='vulcan_mg'){
ctx.translate(-gunKick,0);ctx.fillStyle='#252126';ctx.strokeStyle='#060304';ctx.lineWidth=2.4;rr2(-4,-8,42,17,5,true,true);ctx.fillStyle='#1c1718';ctx.beginPath();ctx.moveTo(4,8);ctx.lineTo(20,8);ctx.lineTo(15,21);ctx.lineTo(2,20);ctx.closePath();ctx.fill();ctx.stroke();ctx.strokeStyle='#0b0707';ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(32,-2);ctx.lineTo(64,-2);ctx.stroke();ctx.strokeStyle='#423436';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(33,-2);ctx.lineTo(63,-2);ctx.stroke();ctx.fillStyle='#ff5b19';for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(2+i*7,-7);ctx.lineTo(7+i*7,-7);ctx.lineTo(4+i*7,-1);ctx.closePath();ctx.fill()}if(firing){ctx.globalCompositeOperation='lighter';ctx.fillStyle='rgba(255,180,50,.85)';ctx.beginPath();ctx.ellipse(70,-2,18,7,0,0,7);ctx.fill();ctx.globalCompositeOperation='source-over'}
}else if(wep==='hammer_thunder'||wep==='hammer_big'){
ctx.strokeStyle='#3a230e';ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-3,2);ctx.lineTo(20,34);ctx.stroke();ctx.fillStyle='#4b5664';ctx.strokeStyle='#101820';ctx.lineWidth=3;rr2(-17,-11,36,18,4,true,true);ctx.fillStyle='#778899';rr2(-10,-17,26,14,4,true,true);ctx.globalCompositeOperation='lighter';ctx.strokeStyle='#ffe060';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(-7,-16);ctx.lineTo(0,-5);ctx.lineTo(-5,-5);ctx.lineTo(5,9);ctx.stroke();ctx.globalCompositeOperation='source-over';
}else if(wep==='staff_fire'||wep==='wand_magic'){
ctx.strokeStyle='#3b1708';ctx.lineWidth=5.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,34);ctx.lineTo(0,-28);ctx.stroke();ctx.fillStyle='#ffb000';ctx.strokeStyle='#5a1600';ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,-31,8,0,7);ctx.fill();ctx.stroke();ctx.globalCompositeOperation='lighter';ctx.fillStyle='rgba(255,80,15,.5)';ctx.beginPath();ctx.ellipse(0,-34,16,22,0,0,7);ctx.fill();ctx.globalCompositeOperation='source-over';
}else if(wep==='wand_crystal'){
ctx.strokeStyle='#5b2e91';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,25);ctx.lineTo(0,-13);ctx.stroke();ctx.globalCompositeOperation='lighter';ctx.fillStyle='#d49cff';ctx.strokeStyle='#fff';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(0,-25);ctx.lineTo(9,-12);ctx.lineTo(0,-3);ctx.lineTo(-9,-12);ctx.closePath();ctx.fill();ctx.stroke();ctx.globalCompositeOperation='source-over';
}else if(wep==='blade_wind'||wep==='sword_basic'||wep==='dagger_fast'){
ctx.strokeStyle='rgba(160,245,255,.95)';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-3,28);ctx.lineTo(28,-18);ctx.stroke();ctx.globalCompositeOperation='lighter';ctx.strokeStyle='rgba(100,210,255,.42)';ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(-5,30);ctx.lineTo(31,-20);ctx.stroke();ctx.globalCompositeOperation='source-over';
}else if(wep==='axe_blood'){
ctx.strokeStyle='#2c0710';ctx.lineWidth=5.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-4,2);ctx.lineTo(30,25);ctx.stroke();ctx.fillStyle='#620014';ctx.strokeStyle='#160006';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(25,13);ctx.lineTo(52,-3);ctx.lineTo(48,31);ctx.lineTo(29,31);ctx.lineTo(18,43);ctx.lineTo(16,7);ctx.closePath();ctx.fill();ctx.stroke();
}else if(wep==='scythe_spider'){
ctx.strokeStyle='#1d0724';ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-6,28);ctx.lineTo(22,-18);ctx.stroke();ctx.strokeStyle='rgba(235,220,255,.8)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(24,-18,20,-.5,2.8);ctx.stroke();
}else if(wep==='orb_witch'){
ctx.strokeStyle='#311044';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,24);ctx.lineTo(12,-16);ctx.stroke();ctx.globalCompositeOperation='lighter';ctx.fillStyle='#baff6a';ctx.beginPath();ctx.arc(16,-18,13+Math.sin(t*8)*2,0,7);ctx.fill();ctx.globalCompositeOperation='source-over';
}else if(wep==='lance_dragon'){
ctx.strokeStyle='#5a140b';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-6,25);ctx.lineTo(42,-22);ctx.stroke();ctx.fillStyle='#ff7338';ctx.beginPath();ctx.moveTo(42,-22);ctx.lineTo(58,-18);ctx.lineTo(47,-5);ctx.closePath();ctx.fill();
}else if(wep==='blade_void'){
ctx.strokeStyle='#1b0030';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-4,26);ctx.lineTo(36,-20);ctx.stroke();ctx.globalCompositeOperation='lighter';ctx.strokeStyle='#9b4dff';ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(8,12);ctx.lineTo(42,-26);ctx.stroke();ctx.globalCompositeOperation='source-over';
}else{
ctx.strokeStyle='#4a2730';ctx.lineWidth=4.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-3,1);ctx.lineTo(29,24);ctx.stroke();const metal=ctx.createLinearGradient(20,0,48,30);metal.addColorStop(0,'#ffffff');metal.addColorStop(.55,'#b8cad8');metal.addColorStop(1,'#f4f7ff');ctx.fillStyle=metal;ctx.strokeStyle='#3d1421';ctx.lineWidth=2.2;ctx.beginPath();ctx.moveTo(25,16);ctx.lineTo(47,2);ctx.lineTo(43,29);ctx.lineTo(28,29);ctx.lineTo(20,38);ctx.lineTo(18,10);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#bfcbd3';ctx.beginPath();ctx.arc(28,23,3,0,7);ctx.fill();ctx.stroke();
}
ctx.restore();ctx.restore();
}
function mpActivePlayers(){
try{return Object.entries((MP&&MP.players)||{}).filter(([id,pl])=>pl&&pl.online!==false).sort((a,b)=>{const ar=a[1].role==='host'?0:1,br=b[1].role==='host'?0:1;return ar-br})}catch(e){return []}
}
function ensureHomeSquadLayer(){
let layer=document.getElementById('homeSquadLobby');
if(!layer){
 const stage=document.querySelector('.hm-char-stage')||document.querySelector('.hm-center');
 if(stage){layer=document.createElement('div');layer.id='homeSquadLobby';layer.className='home-squad-lobby';layer.setAttribute('aria-hidden','true');stage.appendChild(layer)}
}
return layer;
}
function drawHomeSquadCanvas(c,pl,i,total){
try{const ctx=c.getContext('2d');const scale=total>=4?2.05:2.25;drawEquippedCharacter(ctx,{skin:c.dataset.skin||pl.skin||'skin_pink',weapon:c.dataset.weapon||pl.weapon||'axe_default',t:performance.now()/1000+(i*.09),dir:+c.dataset.dir||1,scale})}catch(e){}
}
function renderHomeSquadLobby(){
const layer=ensureHomeSquadLayer();
const solo=document.getElementById('homePlayerCanvas');
const soloNick=document.getElementById('homeNickAbove');
const badge=document.getElementById('hmSkinBadge');
if(!layer)return;
const entries=mpActivePlayers().slice(0,MP_MAX_PLAYERS);
if(!MP||!MP.on||!entries.length){
 layer.style.display='none';
 if(solo)solo.style.display='block';
 if(soloNick)soloNick.style.display='';
 if(badge)badge.style.display='';
 return;
}
layer.style.display='block';
if(solo)solo.style.display='none';
if(soloNick)soloNick.style.display='none';
if(badge)badge.style.display='none';
const total=entries.length;
layer.className='home-squad-lobby squad-'+total;
const sig=entries.map(([id,pl],i)=>[id,pl.nick,pl.role,squadVisualSkin(pl,i),pl.weapon,pl.dead,MP.started,MP.role,MP.playerId].join('|')).join('§');
if(layer.dataset.sig!==sig){
 layer.dataset.sig=sig;
 layer.innerHTML=entries.map(([id,pl],i)=>{
  const role=pl.role==='host'?'CRIADOR':'JOGADOR';
  const ready=MP.started?'EM JOGO':'NA SALA';
  const canKick=MP&&MP.role==='host'&&id!==MP.playerId&&!MP.started;
  const kick=canKick?`<button class="squad-kick-btn" data-kick-player="${String(id)}" data-kick-nick="${mpCleanNick(pl.nick||'Jogador')}" type="button">expulsar</button>`:'';
  return `<div class="home-squad-member m${i+1} ${pl.role==='host'?'host':'client'}">${kick}<div class="home-squad-name">${mpCleanNick(pl.nick||'Jogador')}${pl.dead?' ☠':''}</div><canvas data-home-squad="1" data-skin="${String(squadVisualSkin(pl,i))}" data-weapon="${String(pl.weapon||'axe_default')}" data-dir="${i%2?-1:1}" width="190" height="170"></canvas><div class="home-squad-role">${role} · ${ready}</div></div>`
 }).join('');
 layer.querySelectorAll('[data-kick-player]').forEach(btn=>{btn.onclick=(ev)=>{ev.preventDefault();ev.stopPropagation();mpKickPlayer(btn.dataset.kickPlayer,btn.dataset.kickNick||'Jogador')}});
}
layer.querySelectorAll('canvas[data-home-squad]').forEach((c,i)=>{const pl=entries[i]&&entries[i][1];if(pl)drawHomeSquadCanvas(c,pl,i,total)});
}
function mpKickPlayer(playerId,nick){
try{
 if(!MP||!MP.on||MP.role!=='host'||!MP.roomRef||!playerId||playerId===MP.playerId)return;
 MP.roomRef.child('players/'+playerId).remove().then(()=>{
  mpStatus((nick?mpCleanNick(nick):'Jogador')+' foi removido da sala.');
  const active=Math.max(1,Object.values(MP.players||{}).filter(pl=>pl&&pl.online!==false).length-1);
  if(MP.lobbyRef)MP.lobbyRef.update({playersCount:active,status:'open',updatedAt:firebase.database.ServerValue.TIMESTAMP});
 }).catch(()=>mpStatus('Não foi possível expulsar esse jogador.'));
}catch(e){mpStatus('Erro ao expulsar jogador.')}
}
function mpHandleKickedFromRoom(){
try{
 if(!MP||!MP.on)return;
 if(MP.roomRef){MP.roomRef.child('players').off();MP.roomRef.child('meta').off();MP.roomRef.child('enemies').off();MP.roomRef.child('shots').off();MP.roomRef.child('hazards').off();MP.roomRef.child('events').off();MP.roomRef.child('chat').off()}
}catch(e){}
MP.on=false;MP.started=false;MP.roomCreatedAt=0;MP.room='';MP.players={};MP.enemyStates={};MP.shotStates={};MP.hazardStates={};MP.worldReady=false;MP.restarting=false;MP.knownPlayers={};MP.remoteSmooth={};MP.remoteFx=[];MP.chat={};MP.chatRef=null;MP.playerRef=null;MP.roomRef=null;MP.lobbyRef=null;
try{document.getElementById('mpChatBox')?.classList.remove('open');document.getElementById('btnHomeChat')?.classList.remove('open','has-msg');document.getElementById('mpCodeBox').style.display='none'}catch(e){}
mpStatus('Você foi removido da sala.');mpLobbyText();mpUpdateStartButton();socialRenderRooms();renderHomeSquadLobby();
}
function startHomeCharacterPreview(){
const c=document.getElementById('homePlayerCanvas');if(!c||c.dataset.livePreview)return;c.dataset.livePreview='1';const ctx=c.getContext('2d');
const tick=()=>{try{
const skin=(save&&save.equipped&&save.equipped.skin)||'skin_pink';
const weapon=(save&&save.equipped&&save.equipped.weapon)||'axe_default';
if(!MP||!MP.on)drawEquippedCharacter(ctx,{skin,weapon,t:performance.now()/1000,dir:1,scale:3.55});
const b=document.getElementById('hmSkinBadge');if(b)b.textContent='✨ '+skinDisplayName(skin);
const n=document.getElementById('homeNickAbove');if(n){const nick=(typeof getGlobalNickValue==='function'&&getGlobalNickValue())||localStorage.getItem('cc2_nick')||'Jogador';n.textContent=String(nick).slice(0,14)}
renderHomeSquadLobby();
}catch(e){}requestAnimationFrame(tick)};tick();
}
function renderMpLobbyAvatars(){renderHomeSquadLobby()}
document.addEventListener('DOMContentLoaded',()=>{startHomeCharacterPreview();setInterval(renderHomeSquadLobby,1000/10);setInterval(()=>{try{if(MP&&MP.on&&!MP.started)mpLobbyText()}catch(e){}},1000)});

function mpLobbyText(){
const el=document.getElementById('mpLobby');if(!el)return;
const entries=mpActivePlayers();
const count=Math.min(entries.length,MP_MAX_PLAYERS);
let ttl='';
if(MP.on&&!MP.started&&MP.roomCreatedAt){const left=Math.max(0,MP_ROOM_TTL_MS-(Date.now()-MP.roomCreatedAt));const m=Math.floor(left/60000),sec=Math.floor((left%60000)/1000);ttl=`<span class="mp-lobby-timer">limite de tempo para iniciar ${m}:${String(sec).padStart(2,'0')}</span>`}
if(!entries.length){el.innerHTML='<div class="mp-lobby-head">Crie uma sala ou escolha uma sala pela lista.</div>';mpUpdateStartButton();renderHomeSquadLobby();return}
el.innerHTML=`<div class="mp-lobby-head">Sala ${count}/${MP_MAX_PLAYERS} ${ttl}</div><div class="mp-lobby-note">Os jogadores aparecem como squad na tela inicial.</div>`;
mpUpdateStartButton();renderHomeSquadLobby();
}

function mpRenderChat(){const box=document.getElementById('mpChatMessages');const arr=Object.values(MP.chat||{}).sort((a,b)=>(+a.at||0)-(+b.at||0)).slice(-16);const badge=document.getElementById('btnHomeChat');if(badge){badge.classList.toggle('has-msg',arr.length>0);badge.title=arr.length?('Chat da sala: '+arr.length+' mensagens'):'Chat da sala'}if(!box)return;box.innerHTML=arr.length?arr.map(m=>`<div class="mp-chat-msg"><b>${mpCleanNick(m.nick||'Jogador')}:</b> ${mpCleanNick(m.text||'')}</div>`).join(''):'<div class="mp-chat-empty">Chat da sala vazio.</div>';box.scrollTop=box.scrollHeight}
function mpSetupChat(){try{if(!MP.roomRef)return;MP.chat={};if(MP.chatRef)try{MP.chatRef.off()}catch(e){}MP.chatRef=MP.roomRef.child('chat');MP.chatRef.limitToLast(16).on('value',snap=>{MP.chat=snap.val()||{};mpRenderChat()});mpRenderChat()}catch(e){}}
function mpPublishEquipped(){try{if(MP&&MP.on&&MP.playerRef){MP.playerRef.update({skin:(save.equipped&&save.equipped.skin)||'skin_pink',weapon:(save.equipped&&save.equipped.weapon)||'axe_default',updated:firebase.database.ServerValue.TIMESTAMP});renderHomeSquadLobby();}}catch(e){}}

function mpToggleHomeChat(){
try{
 const box=document.getElementById('mpChatBox');
 const btn=document.getElementById('btnHomeChat');
 if(!box)return;
 const active=!box.classList.contains('open');
 box.classList.toggle('open',active);
 if(btn)btn.classList.toggle('open',active);
 if(active){
   if(!MP.on)mpStatus('Crie ou entre em uma sala para usar o chat.');
   const inp=document.getElementById('mpChatInput');
   setTimeout(()=>{try{inp&&inp.focus()}catch(e){}},80);
 }
}catch(e){}
}

function mpSendChat(){
try{
 if(!MP||!MP.on||!MP.roomRef){mpStatus('Entre em uma sala para usar o chat.');return false}
 const inp=document.getElementById('mpChatInput')||document.querySelector('.mp-chat-input');
 if(!inp){mpStatus('Campo do chat não encontrado.');return false}
 const f=mpChatFilterText(inp.value||'');
 if(!f.ok){mpStatus(f.msg||'Mensagem inválida.');return false}
 const uid=String(AUTH_UID||MP.playerId||mpId()||'anon');
 const nick=String(MP.nick||SOCIAL.nick||getGlobalNickValue()||mmNickStored()||'Jogador').slice(0,20);
 const msg={uid:uid,nick:nick,text:String(f.text).slice(0,120),at:firebase.database.ServerValue.TIMESTAMP};
 inp.value='';
 const msgRef=MP.roomRef.child('chat').push();
 msgRef.set(msg).then(()=>{mpRenderChat();}).catch(err=>{
   try{inp.value=f.text}catch(e){}
   console.warn('chat send failed',err);
   mpStatus('Chat bloqueado pelas regras Firebase.');
 });
 return true;
}catch(e){console.warn('mpSendChat error',e);mpStatus('Erro ao enviar mensagem.');return false}
}
function mpUpdateStartButton(){const b=document.getElementById('btnMpStart');if(!b)return;if(!MP.on){b.style.display='none';return}b.style.display='block';if(MP.role==='host'){b.disabled=false;b.textContent='▶ INICIAR PARTIDA'}else{b.disabled=true;b.textContent='AGUARDANDO CRIADOR'}}
function mpToast(s,life=2.8,col='#60d0ff'){texts.push({x:cam.x+W/2,y:58,s,life,max:life,col,big:1});mpStatus(s)}
function mpPassKey(v){return String(v||'').trim().slice(0,18)}
function mpRoomNameClean(v){v=mmPublicClean(v||'',22);if(!v)v='Sala de '+(SOCIAL.nick||'Jogador');if(mmPublicBlocked(v)){mpStatus('Nome da sala inválido.');return ''}return v}
function mpLobbyRef(room){return fbDb?fbDb.ref('roomsLobby/'+room):null}
function mpCleanupOwnOpenRooms(done){try{if(!fbDb){done&&done();return}const uid=mpId(),dev=socialDeviceId();fbDb.ref('roomsLobby').once('value').then(snap=>{const lobbyUp={},roomCodes=[];snap.forEach(ch=>{const r=ch.val()||{},code=ch.key;if((r.hostUid===uid||r.deviceId===dev)&&r.status!=='closed'){lobbyUp['roomsLobby/'+code]=null;roomCodes.push(code)}});const finish=()=>{roomCodes.forEach(code=>{try{fbDb.ref('rooms/'+code).remove()}catch(e){}});done&&done()};const keys=Object.keys(lobbyUp);if(keys.length){fbDb.ref().update(lobbyUp).then(finish).catch(finish)}else finish()}).catch(()=>done&&done())}catch(e){done&&done()}}
function mpVisibleRoomEntries(){const q=(document.getElementById('roomSearchInput')?.value||'').trim().toLowerCase(),nowMs=Date.now();return Object.entries(SOCIAL.rooms||{}).filter(([code,r])=>{if(!r)return false;const fresh=nowMs-(+r.updatedAt||0)<90000;if(!fresh||r.status==='closed')return false;const waiting=!r.started&&r.status!=='playing';const age=nowMs-(+r.createdClientAt||+r.createdAt||nowMs);if(waiting&&age>300000)return false;const txt=(code+' '+(r.name||'')+' '+(r.hostNick||'')).toLowerCase();return !q||txt.includes(q)}).sort((a,b)=>(+b[1].updatedAt||0)-(+a[1].updatedAt||0)).slice(0,30)}
function mpEnsureRoomLiveWatchers(){try{if(!fbDb)return;if(!SOCIAL.roomLiveCounts)SOCIAL.roomLiveCounts={};if(!SOCIAL.roomLiveRefs)SOCIAL.roomLiveRefs={};Object.keys(SOCIAL.rooms||{}).slice(0,40).forEach(code=>{if(SOCIAL.roomLiveRefs[code])return;const ref=fbDb.ref('rooms/'+code+'/players');SOCIAL.roomLiveRefs[code]=ref;ref.on('value',snap=>{let active=0;const ps=snap.val()||{};Object.values(ps).forEach(pl=>{if(pl&&pl.online!==false)active++});SOCIAL.roomLiveCounts[code]=active;const r=SOCIAL.rooms&&SOCIAL.rooms[code];if(r){r.playersCount=active;r.status=active>=2?'full':(r.started?'playing':'open')}socialRenderRooms();});});Object.keys(SOCIAL.roomLiveRefs||{}).forEach(code=>{if(!(SOCIAL.rooms||{})[code]){try{SOCIAL.roomLiveRefs[code].off()}catch(e){}delete SOCIAL.roomLiveRefs[code];if(SOCIAL.roomLiveCounts)delete SOCIAL.roomLiveCounts[code];}})}catch(e){}}
function mpRoomDisplayCount(code,r){const live=SOCIAL.roomLiveCounts&&SOCIAL.roomLiveCounts[code];if(typeof live==='number')return Math.max(0,live);return Math.max(0,+r.playersCount||0)}
function socialRenderRooms(){const box=document.getElementById('roomsListBox');if(!box)return;mpEnsureRoomLiveWatchers();const entries=mpVisibleRoomEntries();const count=document.getElementById('onlineFriendsCount');if(count)count.textContent=entries.length+' salas disponíveis';if(!entries.length){box.innerHTML='<div class="social-sub" style="text-align:center;padding:10px 4px">Nenhuma sala disponível.</div>';return}box.innerHTML=entries.map(([code,r])=>{const lock=r.isPrivate?'🔒':'🌐';const pcount=mpRoomDisplayCount(code,r);const max=+r.maxPlayers||MP_MAX_PLAYERS;const players=pcount+'/'+max;const full=pcount>=max;return `<div class="social-row"><div class="social-name">${lock} ${mpCleanNick(r.name||'Sala')}</div><div class="social-sub">Criador: ${mpCleanNick(r.hostNick||'Jogador')}</div><div class="social-sub"><b>${players}</b> ${r.isPrivate?'· privada':'· pública'}</div><button class="social-btn blue" data-joinroom="${String(code).toUpperCase()}" data-private="${r.isPrivate?1:0}" ${full?'disabled':''}>${full?'CHEIA':'ENTRAR'}</button></div>`}).join('');box.querySelectorAll('[data-joinroom]').forEach(b=>b.onclick=()=>{
  const inp=document.getElementById('mpRoomInput');if(inp)inp.value=b.dataset.joinroom;
  // Entrar pela lista não abre mais a aba de criar sala: entra direto na sala escolhida.
  mpJoinRoom(b.dataset.joinroom, b.dataset.private==='1');
})}
function mpOpen(){if(fbAuth&&!fbUser){mpStatus('Conectando com segurança...');fbEnsureAuth(()=>mpOpen());return}syncNickFields(getGlobalNickValue()||mmNickStored()||'');socialInit();socialGo('play');socialRenderRooms();if(MP.room){document.getElementById('mpCodeBox').style.display='none';mpStatus('Sala conectada.')}mpLobbyText();mpUpdateStartButton()}
function mpConnectRoom(room,role,lobbyInfo){
if(fbAuth&&!fbUser){mpStatus('Conectando com segurança...');fbEnsureAuth(()=>mpConnectRoom(room,role,lobbyInfo));return false}
if(!fbDb){mpStatus('Firebase não carregou. Publique/abra com internet.');return false}
socialUpdatePresence();if(!SOCIAL.nickOk){mpStatus(SOCIAL.nickMsg||'Escolha outro nick.');return false}
MP.on=true;MP.room=room;MP.role=role;MP.playerId=mpId();MP.nick=SOCIAL.nick;MP.started=false;MP.roomCreatedAt=+((lobbyInfo&&lobbyInfo.createdClientAt)||Date.now());localStorage.setItem('cc2_nick',MP.nick);
MP.roomRef=fbDb.ref('rooms/'+room);MP.playerRef=MP.roomRef.child('players/'+MP.playerId);MP.lobbyRef=mpLobbyRef(room);
try{MP.playerRef.onDisconnect().remove()}catch(e){}
if(role==='host'){try{MP.roomRef.onDisconnect().remove();MP.lobbyRef.onDisconnect().remove()}catch(e){}}
const joinIndex=Math.min(role==='host'?0:(+((lobbyInfo&&lobbyInfo.playersCount)||Object.keys(MP.players||{}).length)||0),MP_MAX_PLAYERS-1);const spawnOffsets=[{x:0,y:0},{x:70,y:0},{x:-70,y:0},{x:0,y:70}];const sp=spawnOffsets[joinIndex]||spawnOffsets[0];MP.playerRef.set({nick:MP.nick,role,authUid:AUTH_UID||'',deviceId:socialDeviceId(),skin:save.equipped.skin||'skin_pink',weapon:save.equipped.weapon||'axe_default',hp:8,x:78+sp.x,y:120+sp.y,dir:1,stage:save.selectedStage,online:true,updated:firebase.database.ServerValue.TIMESTAMP,lastSeen:firebase.database.ServerValue.TIMESTAMP});
const metaPatch={code:room,stage:save.selectedStage,updated:firebase.database.ServerValue.TIMESTAMP,started:false,maxPlayers:MP_MAX_PLAYERS,createdClientAt:MP.roomCreatedAt};
if(role==='host'){metaPatch.host=MP.playerId;metaPatch.creator=MP.nick||SOCIAL.nick||'Jogador';metaPatch.hostAuthUid=AUTH_UID||'';MP.roomRef.child('meta').update(metaPatch);}
MP.roomRef.child('players').on('value',snap=>{const old=MP.players||{};MP.players=snap.val()||{};if(MP.on&&MP.role!=='host'&&MP.playerId&&!MP.players[MP.playerId]){mpHandleKickedFromRoom();return}const active=Object.values(MP.players).filter(pl=>pl&&pl.online!==false).length;if(MP.lobbyRef)MP.lobbyRef.update({playersCount:active,updatedAt:firebase.database.ServerValue.TIMESTAMP,status:MP.started?'playing':(active>=MP_MAX_PLAYERS?'full':'open'),started:!!MP.started});if(active<=0&&MP.role==='host'){MP.roomRef.remove();if(MP.lobbyRef)MP.lobbyRef.remove();return}for(const [id,pl] of Object.entries(MP.players)){if(id!==MP.playerId&&!MP.knownPlayers[id]){const nm=mpCleanNick(pl.nick||'');MP.joinToast='~'+nm+' entrou na sala';MP.joinToastT=3.2;mpStatus(MP.joinToast)}}MP.knownPlayers=Object.assign({},MP.players);mpHostProcessPlayerActions();mpLobbyText();socialRenderRooms();});
MP.roomRef.child('meta').on('value',snap=>{const m=snap.val()||{};const st=m.stage;MP.started=!!m.started;if(!MP.on||MP.role==='host')return;if(m.started&&typeof st==='number'){const restart=+m.restartToken||0;if(started&&typeof li==='number'&&li!==st)mpFinalizeClientStageOnce('advance_'+li+'_'+restart);if(!started||li!==st||restart!==MP.lastRestart){MP.lastRestart=restart;startGame(st)}}});
MP.roomRef.child('enemies').on('value',snap=>{MP.enemyStates=snap.val()||{};if(MP.on&&MP.role!=='host')mpApplyEnemyStates(0)});
MP.roomRef.child('shots').on('value',snap=>{MP.shotStates=snap.val()||{};if(MP.on&&MP.role!=='host')mpApplyShotStates(0)});
MP.roomRef.child('hazards').on('value',snap=>{MP.hazardStates=snap.val()||{};if(MP.on&&MP.role!=='host')mpApplyHazardStates(0)});
MP.roomRef.child('events').limitToLast(60).on('child_added',snap=>{const ev=snap.val();if(!ev||ev.stage!==li)return;mpVisualRemoteEvent(ev);if(role==='host'&&ev.from!==MP.playerId)mpApplyRemoteEvent(ev,snap.key)});mpSetupChat();
MP.playerRef.child('inbox').limitToLast(20).on('child_added',snap=>{const ev=snap.val();if(ev)mpApplyPlayerInbox(ev,snap.key)});
document.getElementById('mpCodeBox').style.display='none';
try{showScreen('multiplayer',true)}catch(e){}
mpStatus(role==='host'?('Sala criada. A partida expira se não iniciar em 5 minutos.'):('Entrou na sala. Aguarde o criador iniciar a partida.'));mpLobbyText();mpUpdateStartButton();return true;
}
function mpCreateRoom(){requireNickThen(()=>{if(MP.on){mpStatus('Você já está em uma sala. Saia dela antes de criar outra.');return}const name=mpRoomNameClean(document.getElementById('mpRoomName')?.value||'');if(!name){mpStatus('Use outro nome de sala.');return}const pass=mpPassKey(document.getElementById('mpRoomPass')?.value||''),created=Date.now();mpCleanupOwnOpenRooms(()=>{const room=mpCode();const lobby={roomId:room,name,hostUid:mpId(),deviceId:socialDeviceId(),hostNick:SOCIAL.nick,isPrivate:!!pass,password:pass,playersCount:1,maxPlayers:MP_MAX_PLAYERS,status:'open',started:false,createdClientAt:created,createdAt:firebase.database.ServerValue.TIMESTAMP,updatedAt:firebase.database.ServerValue.TIMESTAMP};mpLobbyRef(room).set(lobby).then(()=>mpConnectRoom(room,'host',lobby)).catch(()=>mpStatus('Não foi possível criar a sala. Verifique as regras Firebase.'))})})}
function mpJoinRoom(forcedRoom,forcePassword){validateAndClaimNick(ok=>{if(!ok)return;const room=(forcedRoom||(document.getElementById('mpRoomInput').value||'')).trim().toUpperCase();if(room.length<4){mpStatus('Digite o código da sala ou escolha uma sala na lista.');return}mpLobbyRef(room).once('value').then(snap=>{const r=snap.val();if(!r){mpStatus('Sala não encontrada ou já fechada.');return}if((+r.playersCount||0)>=(+r.maxPlayers||MP_MAX_PLAYERS)){mpStatus('Sala cheia.');return}if(!r.started&&Date.now()-(+r.createdClientAt||+r.createdAt||Date.now())>300000){mpStatus('Sala expirada. Atualize a lista.');try{mpLobbyRef(room).remove();fbDb.ref('rooms/'+room).remove()}catch(e){}return}let pass='';if(r.isPrivate){pass=prompt('Senha da sala:')||'';if(mpPassKey(pass)!==mpPassKey(r.password||'')){mpStatus('Senha incorreta.');return}}mpConnectRoom(room,'client',r)}).catch(()=>mpStatus('Erro ao entrar na sala.'))})}
function mpLeaveRoom(){try{if(MP.playerRef)MP.playerRef.remove();if(MP.roomRef){MP.roomRef.child('players').off();MP.roomRef.child('meta').off();MP.roomRef.child('enemies').off();MP.roomRef.child('shots').off();MP.roomRef.child('hazards').off();MP.roomRef.child('events').off();MP.roomRef.child('chat').off();if(MP.role==='host'){MP.roomRef.remove();if(MP.lobbyRef)MP.lobbyRef.remove()}else if(MP.lobbyRef){MP.lobbyRef.update({playersCount:1,status:'open',updatedAt:firebase.database.ServerValue.TIMESTAMP})}}}catch(e){}MP.on=false;MP.started=false;MP.roomCreatedAt=0;MP.room='';MP.players={};MP.enemyStates={};MP.shotStates={};MP.hazardStates={};MP.worldReady=false;MP.restarting=false;MP.knownPlayers={};MP.remoteSmooth={};MP.remoteFx=[];MP.chat={};MP.chatRef=null;MP.playerRef=null;MP.roomRef=null;MP.lobbyRef=null;try{document.getElementById('mpChatBox')?.classList.remove('open');document.getElementById('btnHomeChat')?.classList.remove('open','has-msg')}catch(e){}document.getElementById('mpCodeBox').style.display='none';mpStatus('Saiu da sala.');mpLobbyText();mpUpdateStartButton();socialRenderRooms();}

const SOCIAL={uid:'',nick:'',base:null,online:{},rooms:{},ranking:{},tab:'play',ready:false,nickOk:false,nickMsg:''};
function socialWeekId(){const d=new Date(),onejan=new Date(d.getFullYear(),0,1),week=Math.ceil((((d-onejan)/86400000)+onejan.getDay()+1)/7);return d.getFullYear()+'-W'+String(week).padStart(2,'0')}
function socialSafeNick(n){return mpCleanNick(n||'')}
function socialRawNick(n){return mmPublicClean(n,14)}
function socialNickKey(n){return socialRawNick(n).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9_]/g,'')}
function socialNickHardKey(n){return socialNickKey(n).replace(/[._\-\s]/g,'').replace(/0/g,'o').replace(/1/g,'i').replace(/3/g,'e').replace(/4/g,'a').replace(/5/g,'s').replace(/7/g,'t').replace(/8/g,'b').replace(/9/g,'g')}
const SOCIAL_BAD_NICKS=['toucabr','sexo','sex','sexy','porno','porn','xxx','hentai','nude','nudes','pelado','pelada','nua','nu','boquete','oral','anal','gozar','gozo','gozada','gozei','goza','punheta','masturba','masturbacao','siririca','tesao','tesudo','tesuda','putaria','suruba','orgia','fetiche','incesto','estupr','assedi','pedof','lolicon','shotacon','pica','piroca','penis','pau','rola','buceta','bct','xota','xoxota','vagina','clitoris','cu','cuzinho','anus','bunda','peito','teta','seio','mamilo','ejacula','esperma','semen','chupo','chupar','sentar','sentada','safado','safada','tarado','tarada','vagabunda','vagabundo','puta','puto','prostituta','prostituto','vadia','cadela','caralho','porra','foder','foda','fodase','fdp','filhadaputa','filhodaputa','arrombado','arrombada','desgraca','desgraçado','desgracado','desgraçada','desgracada','merda','bosta','lixo','otario','otaria','idiota','burro','burra','imbecil','retardado','retardada','mongol','mongoloide','doente','corno','corna','viado','veado','bicha','boiola','gayzista','traveco','nazista','nazi','hitler','fascista','racista','racismo','macaco','macaca','pretoimundo','branquelo','terrorista','isis','kkk','matar','morte','assassino','assassina','suicida','suicidio','admin','adm','moderador','mod','suporte','staff','oficial'];
function socialNickValid(n){const clean=socialRawNick(n),key=socialNickKey(clean),hard=socialNickHardKey(clean);if(!clean)return{ok:false,msg:'Digite seu nick.'};if(clean.length<3)return{ok:false,msg:'Nick muito curto.'};if(clean.length>14)return{ok:false,msg:'Nick muito longo.'};if(hard==='toucabr')return{ok:false,msg:'Nick reservado.'};if(mmPublicBlocked(clean)||SOCIAL_BAD_NICKS.some(w=>hard.includes(w)||key.includes(w)))return{ok:false,msg:'Nick inválido.'};return{ok:true,key,clean}}
function socialFormatScore(n){return Math.round(n||0).toLocaleString('pt-BR')}
function socialPath(p){return fbDb?fbDb.ref('rooms/_social/'+p):null}

function socialDeviceId(){let id=localStorage.getItem('cc2_device_id');if(!id){id='d_'+Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-5);localStorage.setItem('cc2_device_id',id)}return id}
function socialCanUseNickKey(key){return{ok:true}}
function socialHeartbeat(){try{if(!fbDb||!SOCIAL.uid||!SOCIAL.nickOk||!SOCIAL.nick)return;const key=SOCIAL.nickKey||localStorage.getItem('cc2_nick_key')||socialNickKey(SOCIAL.nick);socialPath('playersOnline/'+SOCIAL.uid).update({nick:SOCIAL.nick,nickKey:key,deviceId:socialDeviceId(),online:true,lastSeen:firebase.database.ServerValue.TIMESTAMP})}catch(e){}}
function socialSetOffline(){try{if(!fbDb)return;const uid=(SOCIAL&&SOCIAL.uid)||mpId();if(uid)socialPath('playersOnline/'+uid).update({online:false,lastSeen:firebase.database.ServerValue.TIMESTAMP})}catch(e){}}
function mpRoomHeartbeat(){try{if(!MP||!MP.on)return;const active=Object.values(MP.players||{}).filter(pl=>pl&&pl.online!==false).length||1;if(MP.role==='host'&&!MP.started&&MP.roomCreatedAt&&Date.now()-MP.roomCreatedAt>300000){mpStatus('Sala expirada por ficar 5 minutos sem iniciar.');mpLeaveRoom();return}if(MP.playerRef)MP.playerRef.update({online:true,skin:(save.equipped&&save.equipped.skin)||'skin_pink',weapon:(save.equipped&&save.equipped.weapon)||'axe_default',updated:firebase.database.ServerValue.TIMESTAMP,lastSeen:firebase.database.ServerValue.TIMESTAMP});if(MP.lobbyRef)MP.lobbyRef.update({updatedAt:firebase.database.ServerValue.TIMESTAMP,status:MP.started?'playing':(active>=MP_MAX_PLAYERS?'full':'open'),started:!!MP.started,playersCount:active});if(MP.role==='host'&&MP.roomRef)MP.roomRef.child('meta').update({updated:firebase.database.ServerValue.TIMESTAMP,host:MP.playerId,hostAuthUid:AUTH_UID||''})}catch(e){}}

function globalNickInput(){return document.getElementById('globalNickInput')}
function globalNickStatus(msg,col){
const el=document.getElementById('globalNickStatus');
if(el){el.textContent=msg||'';el.style.color=col||'rgba(255,220,240,.58)'}
}
function mmNickRemember(v){try{v=String(v||'').trim();if(v)localStorage.setItem(MM_NICK_STORAGE_KEY,v)}catch(e){}}
function mmNickStored(){try{return String(localStorage.getItem(MM_NICK_STORAGE_KEY)||'').trim()}catch(e){return ''}}
function syncNickFields(v){
v=String(v||'').trim();
const g=globalNickInput(),m=document.getElementById('mpNick');
if(g&&document.activeElement!==g)g.value=v;
if(m&&document.activeElement!==m)m.value=v;
}
function getGlobalNickValue(){
const g=globalNickInput(),m=document.getElementById('mpNick');
const live=(g&&g.value.trim())||(m&&m.value.trim())||'';
if(live)return live;
return mmNickStored();
}
function requireMultiplayerNickValue(){
const raw=getGlobalNickValue();
if(!raw){syncNickFields('');globalNickStatus('Digite um nick para jogar multiplayer.','rgba(255,120,120,.9)');mpStatus('Digite um nick para criar ou entrar em sala.');return ''}
return raw;
}
function makeDisposableNick(){return ''}
function ensureMultiplayerNick(){return requireMultiplayerNickValue()}
function validateAndClaimNick(cb){
if(!fbDb){globalNickStatus('Firebase não carregou.','rgba(255,120,120,.9)');cb&&cb(false);return}
const raw=requireMultiplayerNickValue();
if(!raw){cb&&cb(false);return}
const v=socialNickValid(raw);
if(!v.ok){SOCIAL.nickOk=false;SOCIAL.nickMsg=v.msg;globalNickStatus(v.msg,'rgba(255,120,120,.9)');cb&&cb(false);return}
const lock=socialCanUseNickKey(v.key);if(!lock.ok){SOCIAL.nickOk=false;SOCIAL.nickMsg=lock.msg;globalNickStatus(lock.msg,'rgba(255,120,120,.9)');cb&&cb(false);return}
SOCIAL.uid=mpId();
const oldKey=SOCIAL.nickKey||localStorage.getItem('cc2_nick_key')||'';
if(oldKey&&oldKey!==v.key){try{socialPath('nicks/'+oldKey).transaction(cur=>cur===SOCIAL.uid?null:cur)}catch(e){}}
socialPath('nicks/'+v.key).transaction(cur=>{if(cur&&cur!==SOCIAL.uid)return;return SOCIAL.uid},(err,committed)=>{
if(err||!committed){SOCIAL.nickOk=false;SOCIAL.nickMsg='Esse nick já está em uso.';globalNickStatus(SOCIAL.nickMsg,'rgba(255,120,120,.9)');cb&&cb(false);return}
SOCIAL.nickOk=true;SOCIAL.nickMsg='';SOCIAL.nick=v.clean;SOCIAL.nickKey=v.key;
localStorage.setItem('cc2_nick',v.clean);localStorage.setItem('cc2_nick_key',v.key);mmNickRemember(v.clean);applySecretTesterUnlock();
syncNickFields(v.clean);globalNickStatus('Nick ativo: '+v.clean+' · multiplayer liberado.','rgba(157,255,189,.9)');
if(oldKey&&oldKey!==v.key)socialPath('nicks/'+oldKey).transaction(cur=>cur===SOCIAL.uid?null:cur);
socialPath('playersOnline/'+SOCIAL.uid).update({nick:v.clean,nickKey:v.key,deviceId:socialDeviceId(),online:true,lastSeen:firebase.database.ServerValue.TIMESTAMP});
socialUpdateRanking();
cb&&cb(true);
});
}
function requireNickThen(fn){
validateAndClaimNick(ok=>{if(ok)fn&&fn()});
}

function socialInit(){
if(!fbDb)return;if(fbAuth&&!fbUser){fbEnsureAuth(()=>socialInit());return}SOCIAL.uid=mpId();SOCIAL.nick=localStorage.getItem('cc2_nick')||'';syncNickFields(SOCIAL.nick);SOCIAL.base=socialPath('');
if(SOCIAL.ready){socialUpdatePresence();socialUpdateRanking();socialHeartbeat();return}
SOCIAL.ready=true;
const onlineRef=socialPath('playersOnline/'+SOCIAL.uid);
onlineRef.onDisconnect().update({online:false,lastSeen:firebase.database.ServerValue.TIMESTAMP});
if(getGlobalNickValue())validateAndClaimNick();
socialPath('playersOnline').on('value',s=>{SOCIAL.online=s.val()||{};socialRenderAll()});
if(fbDb)fbDb.ref('roomsLobby').on('value',s=>{SOCIAL.rooms=s.val()||{};socialRenderRooms()});
socialPath('weeklyRanking/'+socialWeekId()).orderByChild('score').limitToLast(20).on('value',s=>{SOCIAL.ranking=s.val()||{};socialRenderRanking()});
socialUpdateRanking();
}
function socialUpdatePresence(){
if(!fbDb)return;SOCIAL.uid=mpId();
const input=document.getElementById('mpNick'),wanted=getGlobalNickValue();
if(!wanted){SOCIAL.nickOk=false;SOCIAL.nickMsg='';if(input)input.setCustomValidity('');return}
const v=socialNickValid(wanted);
if(!v.ok){SOCIAL.nickOk=false;SOCIAL.nickMsg=v.msg;if(input)input.setCustomValidity(v.msg==='Digite seu nick.'?'':v.msg);return}
const lock=socialCanUseNickKey(v.key);if(!lock.ok){SOCIAL.nickOk=false;SOCIAL.nickMsg=lock.msg;if(input)input.setCustomValidity(lock.msg);mpStatus(lock.msg);return}
const oldKey=SOCIAL.nickKey||localStorage.getItem('cc2_nick_key')||'';
SOCIAL.nick=v.clean;SOCIAL.nickKey=v.key;if(input){input.setCustomValidity('');input.value=v.clean}
if(oldKey&&oldKey!==v.key){try{socialPath('nicks/'+oldKey).transaction(cur=>cur===SOCIAL.uid?null:cur)}catch(e){}}
const nickRef=socialPath('nicks/'+v.key);
nickRef.transaction(cur=>{if(cur&&cur!==SOCIAL.uid)return;return SOCIAL.uid;},(err,committed)=>{
if(err||!committed){SOCIAL.nickOk=false;SOCIAL.nickMsg='Esse nick já está em uso.';if(input)input.setCustomValidity(SOCIAL.nickMsg);mpStatus(SOCIAL.nickMsg);return}
SOCIAL.nickOk=true;SOCIAL.nickMsg='';localStorage.setItem('cc2_nick',v.clean);localStorage.setItem('cc2_nick_key',v.key);mmNickRemember(v.clean);applySecretTesterUnlock();
socialPath('playersOnline/'+SOCIAL.uid).update({nick:SOCIAL.nick,nickKey:v.key,deviceId:socialDeviceId(),online:true,lastSeen:firebase.database.ServerValue.TIMESTAMP});
});
}
function socialUpdateRanking(){return}
function socialGo(tab){SOCIAL.tab=tab;document.querySelectorAll('.online-tab').forEach(b=>b.classList.toggle('active',b.dataset.onlineTab===tab));['play','friends'].forEach(t=>{const el=document.getElementById('onlinePane'+t[0].toUpperCase()+t.slice(1));if(el)el.classList.toggle('active',t===tab)});socialRenderAll();socialRenderRooms()}
function socialFriendIds(){return []}
function socialIsOnline(pl){return pl&&pl.online&&Date.now()-(+pl.lastSeen||0)<120000}
function socialRenderAll(){socialRenderRooms();socialRenderRanking();const c=document.getElementById('onlineFriendsCount');if(c&&SOCIAL.tab!=='friends')c.textContent=mpVisibleRoomEntries().length+' salas disponíveis'}
function socialRenderFriends(){socialRenderRooms()}
function socialRemoveFriend(id){}
function socialRenderRequests(){}
function socialSearch(){socialRenderRooms()}
function socialRequest(target){}
function socialAccept(id){}
function socialReject(id){}
function socialInvite(id){}
function socialRenderInvites(){}

function socialRenderRanking(){const arr=Object.values(SOCIAL.ranking||{}).filter(r=>socialNickValid(r.nick||'').ok).sort((a,b)=>(b.score||0)-(a.score||0)).slice(0,10),top=document.getElementById('homeRankTop3');if(top){if(!arr.length)top.innerHTML='<div class="home-rank-item">Sem ranking ainda</div>';else top.innerHTML=arr.slice(0,3).map((r,i)=>`<div class="home-rank-item r${i+1}">${['🥇','🥈','🥉'][i]} ${mpCleanNick(r.nick||'')} - ${socialFormatScore(r.score)}</div>`).join('')}const full=document.getElementById('rankFullList');if(full){if(!arr.length)full.textContent='Ranking vazio esta semana.';else full.innerHTML=arr.map((r,i)=>`<div class="rank-full-row r${i+1}"><div>${i+1}º</div><div>${mpCleanNick(r.nick||'')}</div><div class="rank-full-score">${socialFormatScore(r.score)}</div></div>`).join('')}}

function mpStartGame(){if(!MP.on){mpStatus('Crie ou entre em uma sala primeiro.');return}if(MP.role!=='host'){mpStatus('Apenas o criador da sala pode iniciar. Aguarde.');return}const count=Object.values(MP.players||{}).filter(pl=>pl&&pl.online).length;if(count<2)mpStatus('Partida iniciada. Se quiser coop, espere o amigo entrar.');startGame(save.selectedStage);MP.started=true;if(MP.lobbyRef)MP.lobbyRef.update({started:true,status:'playing',updatedAt:firebase.database.ServerValue.TIMESTAMP});if(MP.roomRef)MP.roomRef.child('meta').update({stage:save.selectedStage,started:true,restartToken:Date.now(),updated:firebase.database.ServerValue.TIMESTAMP})}
function mpPublishStage(){if(MP.on&&MP.role==='host'&&MP.roomRef)MP.roomRef.child('meta').update({stage:li,started:true,updated:firebase.database.ServerValue.TIMESTAMP})}
function mpTick(dt){
if(!MP.on||!MP.playerRef||!started)return;
MP.lastSend-=dt;
if(MP.lastSend<=0){
MP.lastSend=.07;
MP.playerRef.update({nick:MP.nick,skin:save.equipped.skin||'skin_pink',weapon:save.equipped.weapon||'axe_default',x:Math.round(p.x),y:Math.round(p.y),vx:Math.round(p.vx),vy:Math.round(p.vy),dir:p.dir,hp:p.hp,mp:Math.round(p.mp),stage:li,atk:p.atk>0,fire:(p.fire>0||p.mgFiring>0),dashing:p.dashing>0,dead:gameOver,updated:firebase.database.ServerValue.TIMESTAMP});
}
if(MP.joinToastT>0){MP.joinToastT-=dt;if(MP.joinToastT>0&&Math.random()<dt*2){} }
if(MP.role==='host'){mpSyncWorld(dt);mpCheckCoopState(dt)}else{mpApplyEnemyStates(dt);mpApplyShotStates(dt);mpApplyHazardStates(dt)}mpUpdateRemoteFx(dt);
}
function mpEnemyKey(i,e){return e.id||('e'+li+'_'+i+'_'+(e.type||'enemy'))}
function mpSerializeEnemy(e){return {id:e.id,type:e.type,x:Math.round(e.x),y:Math.round(e.y),vx:Math.round(e.vx||0),vy:Math.round(e.vy||0),dir:e.dir||1,hp:Math.max(0,Math.round(e.hp||0)),maxHp:e.maxHp||e.hp||1,dead:!!e.dead,death:e.death||0,boss:!!e.boss,stage:li,updated:firebase.database.ServerValue.TIMESTAMP}}
function mpIsEnemyShot(s){return s&&!isPlayerShotType(s)}
function mpShotKey(i,s){return s.id||('s'+li+'_'+i+'_'+(s.type||'shot'))}
function mpSerializeShot(s){return {id:s.id,type:s.type,x:Math.round(s.x),y:Math.round(s.y),vx:Math.round(s.vx||0),vy:Math.round(s.vy||0),w:s.w||14,h:s.h||10,dir:s.dir||1,damage:s.damage||1,life:Math.max(0,+s.life||0),stage:li,updated:firebase.database.ServerValue.TIMESTAMP}}
function mpIsSyncedHazard(h){return h&&h.type==='boss_shot'}
function mpHazardKey(i,h){return h.id||('h'+li+'_'+i+'_'+(h.type||'hazard'))}
function mpSerializeHazard(h){return {id:h.id,type:h.type,x:Math.round(h.x),y:Math.round(h.y),vx:Math.round(h.vx||0),vy:Math.round(h.vy||0),w:h.w||46,h:h.h||46,life:Math.max(0,+h.life||0),warn:Math.max(0,+h.warn||0),rot:+h.rot||0,spin:+h.spin||0,meteor:!!h.meteor,stage:li,updated:firebase.database.ServerValue.TIMESTAMP}}
function mpSyncWorld(dt){
if(!MP.on||MP.role!=='host'||!MP.roomRef||!started)return;
MP.lastWorldSend-=dt;if(MP.lastWorldSend>0)return;MP.lastWorldSend=.10;
const pack={};enemies.forEach((e,i)=>{if(!e.id)e.id=mpEnemyKey(i,e);pack[e.id]=mpSerializeEnemy(e)});
const shotPack={};shots.forEach((sh,i)=>{if(mpIsEnemyShot(sh)){if(!sh.id)sh.id=mpShotKey(i,sh);shotPack[sh.id]=mpSerializeShot(sh)}});
const hazardPack={};hazards.forEach((hz,i)=>{if(mpIsSyncedHazard(hz)){if(!hz.id)hz.id=mpHazardKey(i,hz);hazardPack[hz.id]=mpSerializeHazard(hz)}});
MP.roomRef.child('enemies').set(pack);MP.roomRef.child('shots').set(shotPack);MP.roomRef.child('hazards').set(hazardPack);
MP.roomRef.child('world').update({stage:li,enemyAlive:enemies.filter(e=>!e.dead).length,playerDead:gameOver,updated:firebase.database.ServerValue.TIMESTAMP});
}
function mpApplyEnemyStates(dt=0){
if(!MP.on||MP.role==='host'||!started||!MP.enemyStates)return;
const states=MP.enemyStates;
const byId={};enemies.forEach((e,i)=>{if(!e.id)e.id=mpEnemyKey(i,e);byId[e.id]=e});
for(const [id,st] of Object.entries(states)){
let e=byId[id];
if(!e){e=makeEnemy(st.type||'mush',st.x||80);e.id=id;enemies.push(e);byId[id]=e}
const tvx=+st.vx||0,tvy=+st.vy||0,rx=(+st.x||e.x),ry=(+st.y||e.y);
e.vx=tvx;e.vy=tvy;e.dir=st.dir||e.dir;

if(typeof e.drawX!=='number'){e.drawX=rx;e.drawY=ry}
e.x=rx;e.y=ry;
const follow=st.dead?.75:.10;
if(dt>0&&!st.dead){e.drawX+=(tvx||0)*dt;e.drawY+=(tvy||0)*dt}
e.drawX=lerp(e.drawX,rx,follow);e.drawY=lerp(e.drawY,ry,follow);
e.hp=typeof st.hp==='number'?st.hp:e.hp;e.maxHp=st.maxHp||e.maxHp;e.dead=st.dead?1:0;e.death=st.death||e.death||.7;e.boss=!!st.boss;
if(!st.dead&&dt>0&&Math.random()<.32){
const typ=String(e.type||st.type||'').toLowerCase();
const moving=Math.abs(tvx)+Math.abs(tvy)>25;
if(typ.includes('slug')||typ.includes('slime')||typ.includes('toxic')||typ.includes('acid')||typ.includes('kraken')){
addPart(e.x+e.w/2,e.y+e.h-4,'acid',1,{life:.28,s:5,vx:rnd(-12,12),vy:rnd(-18,2)});
}else if(moving){
addPart(e.x+e.w/2,e.y+e.h-6,'spark',1,{col:e.boss?'#ff5ab8':'#60d0ff',life:.16,s:3,vx:rnd(-18,18),vy:rnd(-20,0)});
}
}
}
enemies=enemies.filter(e=>!e.id||states[e.id]||e.death>0);
}

function mpApplyShotStates(dt=0){
if(!MP.on||MP.role==='host'||!started)return;
const states=MP.shotStates||{};
const localPlayerShots=shots.filter(isPlayerShotType);
const byId={};shots.filter(mpIsEnemyShot).forEach((s,i)=>{if(!s.id)s.id=mpShotKey(i,s);byId[s.id]=s});
const remote=[];
for(const [id,st] of Object.entries(states)){
let sh=byId[id]||{id,type:st.type||'acid',x:+st.x||0,y:+st.y||0,w:st.w||14,h:st.h||10,vx:+st.vx||0,vy:+st.vy||0,life:+st.life||1,damage:st.damage||1,dir:st.dir||1};
sh.type=st.type||sh.type;sh.w=st.w||sh.w;sh.h=st.h||sh.h;sh.vx=+st.vx||0;sh.vy=+st.vy||0;sh.dir=st.dir||sh.dir;sh.damage=st.damage||sh.damage;sh.life=+st.life||sh.life;
const rx=(+st.x||sh.x),ry=(+st.y||sh.y);
if(typeof sh.drawX!=='number'){sh.drawX=rx;sh.drawY=ry}
sh.x=rx;sh.y=ry;
if(dt>0){sh.drawX+=(sh.vx||0)*dt;sh.drawY+=(sh.vy||0)*dt}
sh.drawX=lerp(sh.drawX,rx,.16);sh.drawY=lerp(sh.drawY,ry,.16);
remote.push(sh);
}
shots=localPlayerShots.concat(remote);
}

function mpApplyHazardStates(dt=0){
if(!MP.on||MP.role==='host'||!started)return;
const states=MP.hazardStates||{};
const byId={};hazards.filter(mpIsSyncedHazard).forEach((h,i)=>{if(!h.id)h.id=mpHazardKey(i,h);byId[h.id]=h});
const synced=[];
for(const [id,st] of Object.entries(states)){
let h=byId[id]||{id,type:'boss_shot',x:+st.x||0,y:+st.y||0,w:st.w||46,h:st.h||46,life:+st.life||1,warn:+st.warn||0,rot:+st.rot||0,spin:+st.spin||0,meteor:1};
h.type=st.type||'boss_shot';h.w=st.w||h.w;h.h=st.h||h.h;h.vx=+st.vx||0;h.vy=+st.vy||0;h.life=+st.life||h.life;h.warn=Math.max(0,+st.warn||0);h.rot=+st.rot||h.rot||0;h.spin=+st.spin||h.spin||0;h.meteor=1;h.damage=0;h.decorative=1;
const rx=(+st.x||h.x),ry=(+st.y||h.y);
if(typeof h.drawX!=='number'){h.drawX=rx;h.drawY=ry}
h.x=rx;h.y=ry;
if(dt>0){h.drawX+=(h.vx||0)*dt;h.drawY+=(h.vy||0)*dt;h.rot=(h.rot||0)+(h.spin||2)*dt}
h.drawX=lerp(h.drawX,rx,.16);h.drawY=lerp(h.drawY,ry,.16);
synced.push(h);
}
hazards=hazards.filter(h=>!mpIsSyncedHazard(h)).concat(synced);
}

function mpSendEvent(kind,data={}){
if(!MP.on||!MP.roomRef||!started)return;
const ev=Object.assign({kind,from:MP.playerId,authUid:AUTH_UID||'',stage:li,x:Math.round(p.x),y:Math.round(p.y),dir:p.dir,t:Date.now(),seq:++MP.eventSeq},data);
try{
  if(MP.role==='client'&&MP.playerRef){
    MP.playerRef.update({action:ev,actionSeq:ev.seq,actionAt:Date.now(),updated:Date.now()});
  }else{
    MP.roomRef.child('events').push(ev);
  }
}catch(e){
  try{MP.roomRef.child('events').push(ev)}catch(_e){}
}
}
function mpVisualRemoteEvent(ev){
if(!MP.on||!started||!ev||ev.from===MP.playerId||ev.stage!==li)return;
if(ev.kind==='attack'||ev.kind==='fire'||ev.kind==='bomb'||ev.kind==='vulcan'){
const lf=ev.kind==='attack'?.22:ev.kind==='fire'?.42:ev.kind==='vulcan'?.22:.35;
MP.remoteFx.push({kind:ev.kind,x:+ev.x||0,y:+ev.y||0,dir:ev.dir||1,life:lf,max:lf,weapon:ev.weapon||'axe_default'});
}
}
function mpUpdateRemoteFx(dt){
if(!MP.remoteFx)return;
for(const fx of MP.remoteFx){fx.life-=dt;if(fx.kind==='fire'||fx.kind==='vulcan'){const fake={x:fx.x+(fx.dir>0?38:-12),y:fx.y+18,dir:fx.dir,type:fx.kind==='vulcan'?'vulcan_bullet':weaponShotType(fx.weapon||'axe_default')};trailWeaponShot(fake,fx.kind==='vulcan'?2:1)}}
MP.remoteFx=MP.remoteFx.filter(fx=>fx.life>0);
}
function mpDrawRemoteFx(){
if(!MP.on||!started)return;
for(const fx of MP.remoteFx){const a=clamp(fx.life/fx.max,0,1);g.save();g.globalAlpha=.25+.75*a;g.translate(fx.x+14,fx.y+30);g.scale(fx.dir,1);
if(fx.kind==='attack'){
g.strokeStyle=fx.weapon==='staff_fire'?'#ff8a00':'#fff';g.lineWidth=6;g.beginPath();g.arc(12,-8,38,-1.05,.62);g.stroke();g.strokeStyle='#ff274b';g.lineWidth=3;g.beginPath();g.arc(16,-5,42,-.9,.45);g.stroke();
}else if(fx.kind==='fire'){
const fake={x:44,y:-8,dir:fx.dir,type:weaponShotType(fx.weapon||'axe_default')};
drawShot(fake);
}else if(fx.kind==='vulcan'){
const fake={x:50+Math.sin(gTime*80)*4,y:-8,dir:fx.dir,type:'vulcan_bullet'};drawShot(fake);
g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,100,20,.55)';g.beginPath();g.ellipse(58,-8,18*a,9*a,0,0,7);g.fill();
}else if(fx.kind==='bomb'){
g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,160,0,.55)';g.beginPath();g.arc(12,0,42*a,0,7);g.fill();
}
g.restore();
}
}
function mpApplyPlayerInbox(ev,key){
if(!MP.on||!started||!ev)return;
if(ev.stage!==li)return;
if(ev.kind==='stageComplete'){
mpFinalizeClientStageOnce('inbox_'+(key||ev.t||li));
}else if(ev.kind==='hurt'){
hurtPlayer(ev.damage||1,ev.k||0,true);
}else if(ev.kind==='heal'){
p.hp=clamp(p.hp+(ev.amount||1),0,p.maxHp);texts.push({x:p.x+p.w/2,y:p.y-18,s:tr('life'),life:.9,max:.9,col:'#ff7ab5',big:0});
}else if(ev.kind==='killReward'){
const sc=Math.max(0,Math.round(ev.score||0)),cn=Math.max(0,Math.round(ev.coins||0));
if(sc){runScore+=sc;texts.push({x:p.x+p.w/2,y:p.y-28,s:'+'+sc,life:.8,max:.8,col:'#ffe060',big:0})}
if(cn){runCoins+=cn;texts.push({x:p.x+p.w/2,y:p.y-42,s:'🪙'+cn,life:.85,max:.85,col:'#ffe060',big:0});snd.coin()}
p.kills++;sessionKills++;if(ev.boss)sessionBossKills++;if(ev.fire)sessionFireKills++;
if(ev.heal)p.hp=clamp(p.hp+(ev.heal||1),0,p.maxHp);
if(ev.power){
const pw={type:ev.power};
if(pw.type==='heal')p.hp=clamp(p.hp+3,0,p.maxHp);
else if(pw.type==='mana')p.mp=p.maxMp;
else if(pw.type==='speed')p.speedBoost=4;
else if(pw.type==='damage')p.damageBoost=4;
else if(pw.type==='coins'){runCoins+=Math.max(1,Math.round(ev.powerCoins||12));snd.coin()}
const names={heal:tr('powerHeal'),mana:tr('powerMana'),speed:tr('powerSpeed'),damage:tr('powerDamage'),coins:tr('powerCoins')};
const cols={heal:'#ff7ac8',mana:'#21ff4b',speed:'#ffe060',damage:'#ff5500',coins:'#ffe060'};
say(names[pw.type]||'+',.9,cols[pw.type]||'#fff');snd.powerup();
}else if(ev.heal){texts.push({x:p.x+p.w/2,y:p.y-18,s:tr('life'),life:.9,max:.9,col:'#ff7ab5',big:0})}
}else if(ev.kind==='toast'){
say(ev.text||'',1.2,'#60d0ff');
}
try{if(key&&MP.playerRef)MP.playerRef.child('inbox/'+key).remove()}catch(e){}
}
function mpHurtRemotePlayer(id,damage,k){
if(!MP.on||MP.role!=='host'||!MP.roomRef||!id)return;
MP.roomRef.child('players/'+id+'/inbox').push({kind:'hurt',stage:li,damage:damage||1,k:Math.round(k||0),t:Date.now()});
}
function mpHealRemotePlayer(id,amount=1){
if(!MP.on||MP.role!=='host'||!MP.roomRef||!id)return;
const cur=MP.players&&MP.players[id]?Math.max(0,+MP.players[id].hp||0):0;
MP.roomRef.child('players/'+id).update({hp:clamp(cur+amount,0,8),updated:firebase.database.ServerValue.TIMESTAMP});
MP.roomRef.child('players/'+id+'/inbox').push({kind:'heal',stage:li,amount,t:Date.now()});
}
function mpRewardRemotePlayer(id,data={}){
if(!MP.on||MP.role!=='host'||!MP.roomRef||!id)return;
const cur=MP.players&&MP.players[id]?Math.max(0,+MP.players[id].hp||0):0;
if(data.heal)MP.roomRef.child('players/'+id).update({hp:clamp(cur+(data.heal||0),0,8),updated:firebase.database.ServerValue.TIMESTAMP});
MP.roomRef.child('players/'+id+'/inbox').push(Object.assign({kind:'killReward',stage:li,t:Date.now()},data));
}
function mpEnemyHitRemotePlayers(e,damage,k){
if(!MP.on||MP.role!=='host'||!started||!e||e.dead)return;
e.mpHitCD=e.mpHitCD||{};
for(const [id,pl] of Object.entries(MP.players||{})){
if(id===MP.playerId||!pl||pl.stage!==li||pl.dead)continue;
e.mpHitCD[id]=(e.mpHitCD[id]||0)-0.016;
const box={x:+pl.x||0,y:+pl.y||0,w:28,h:48};
if(e.mpHitCD[id]<=0&&aabb(e,box)){
e.mpHitCD[id]=.85;
mpHurtRemotePlayer(id,damage||e.damage||1,k||((e.dir||1)*150));
}
}
}

function mpHostProcessPlayerActions(){
try{
 if(!MP.on||MP.role!=='host'||!started||!MP.players)return;
 if(!MP.lastActionSeq)MP.lastActionSeq={};
 for(const [id,pl] of Object.entries(MP.players||{})){
  if(id===MP.playerId||!pl||!pl.action)continue;
  const seq=+pl.actionSeq||+pl.action.seq||0;
  if(!seq||MP.lastActionSeq[id]===seq)continue;
  MP.lastActionSeq[id]=seq;
  const ev=Object.assign({},pl.action,{from:id,stage:+pl.action.stage||li});
  if(ev.stage!==li)continue;
  mpVisualRemoteEvent(ev);
  mpApplyRemoteEvent(ev,null);
 }
}catch(e){try{console.warn('mpHostProcessPlayerActions error',e)}catch(_e){}}
}
function mpApplyRemoteEvent(ev,key){
if(!MP.on||MP.role!=='host'||!started||ev.stage!==li)return;
if(ev.kind==='attack'){
const box={x:ev.dir>0?ev.x+18:ev.x-58,y:ev.y+4,w:68,h:42};
MP.remoteKillCredit=ev.from;for(const e of enemies)if(!e.dead&&aabb(box,e))dmg(e,ev.power||5,ev.dir*(e.boss?130:205),-75,false,true);MP.remoteKillCredit=null;
}else if(ev.kind==='fire'){
const box={x:ev.x+(ev.dir>0?18:-42),y:ev.y+6,w:82,h:34};
MP.remoteKillCredit=ev.from;for(const e of enemies)if(!e.dead&&aabb(box,e))dmg(e,ev.power||4,ev.dir*90,-35,true,true);MP.remoteKillCredit=null;
}else if(ev.kind==='bomb'){
MP.remoteKillCredit=ev.from;for(const e of enemies)if(!e.dead&&Math.abs((e.x+e.w/2)-(ev.x+14))<120&&Math.abs((e.y+e.h/2)-(ev.y+24))<90)dmg(e,12,ev.dir*(e.boss?80:170),-90,false,true);MP.remoteKillCredit=null;
}else if(ev.kind==='vulcan'){

}else if(ev.kind==='hitEnemy'){
const e=enemies.find(en=>en.id===ev.enemyId);
if(e&&!e.dead){MP.remoteKillCredit=ev.from;dmg(e,ev.power||4,ev.kx||0,ev.ky||-60,!!ev.isFire,true);MP.remoteKillCredit=null;}
}else if(ev.kind==='goal'){
mpTryCompleteStage('remoteGoal');
}
try{if(key&&MP.roomRef)MP.roomRef.child('events/'+key).remove()}catch(e){}
}
function mpAnyRemoteAtGoal(){if(!MP.on||MP.role!=='host'||!L)return false;for(const [id,pl] of Object.entries(MP.players||{})){if(id===MP.playerId||pl.stage!==li||pl.dead)continue;if((+pl.x||0)>L.goal)return true}return false}
function mpPrimaryAliveRemote(){
if(!MP.on||MP.role!=='host')return null;
let best=null,bestD=Infinity;
for(const [id,pl] of Object.entries(MP.players||{})){
if(id===MP.playerId||!pl||!pl.online||pl.stage!==li||pl.dead)continue;
const x=+pl.x||0,y=+pl.y||0;
const d=Math.abs(x-p.x)+Math.abs(y-p.y);
if(d<bestD){bestD=d;best={id,x,y,w:28,h:48,dir:pl.dir||1,hp:pl.hp||8,mp:pl.mp||100}}
}
return best;
}
function mpAllPlayersDead(){if(!MP.on)return gameOver;const ps=Object.entries(MP.players||{}).filter(([id,pl])=>pl&&pl.online&&pl.stage===li);if(!ps.length)return gameOver;let localDead=gameOver;let all=true;for(const [id,pl] of ps){const dead=(id===MP.playerId)?localDead:!!pl.dead;if(!dead)all=false}return all}
function mpCheckCoopState(dt){if(!MP.on||MP.role!=='host'||!started||victory)return;if(mpAllPlayersDead()){mpRestartStage()}else if(stageReadyToComplete()&&(p.x>L.goal||mpAnyRemoteAtGoal()))mpTryCompleteStage('goal')}
function mpTryCompleteStage(reason){if(!started||victory||!stageReadyToComplete())return;if(MP.on&&MP.role==='client'){const now=Date.now();if(now-MP.lastGoalReq>900){MP.lastGoalReq=now;mpSendEvent('goal',{reason})}say('Aguardando avanço da fase...',1.2,'#60d0ff');return}victory=true;snd.stageClr();completeStage()}
function mpRestartStage(){if(!MP.on||MP.role!=='host'||!MP.roomRef||!started||MP.restarting)return;MP.restarting=true;say('Os dois morreram. Reiniciando fase...',2.2,'#ff7ab5');const tok=Date.now();MP.roomRef.child('meta').update({stage:li,started:true,restartToken:tok,updated:firebase.database.ServerValue.TIMESTAMP});setTimeout(()=>{MP.restarting=false;if(started)startGame(li)},900)}
function mpFinalizeClientStageOnce(token){
if(!MP.on||MP.role!=='client')return;
const k=String(token||('stage_'+li));
if(MP.lastClientFinalize===k)return;
MP.lastClientFinalize=k;
if(started&&!victory&&!gameOver){
save.missionProgress.kills=(save.missionProgress.kills||0)+sessionKills;
save.missionProgress.bossKills=(save.missionProgress.bossKills||0)+sessionBossKills;
save.missionProgress.fireKills=(save.missionProgress.fireKills||0)+sessionFireKills;
save.missionProgress.dashUses=(save.missionProgress.dashUses||0)+sessionDash;
save.missionProgress.comboMax=Math.max(save.missionProgress.comboMax||0,sessionMaxCombo);
save.coins+=runCoins;
if(runScore>save.hiScore)save.hiScore=runScore;
writeSave();refreshMenu();
say((LANG==='pt'?'Recompensa salva: ':'Reward saved: ')+'🪙 '+runCoins,1.4,'#ffe060');
}
}
function mpTargetForEnemy(e){

const cx=e.x+e.w/2;let target=null,best=Infinity;
function consider(t){if(!t)return;const d=Math.abs((t.x+t.w/2)-cx);if(d<best){best=d;target=t}}
if(!gameOver)consider(p);
if(MP.on&&MP.role==='host')for(const [id,pl] of Object.entries(MP.players||{})){
if(id===MP.playerId||pl.stage!==li||pl.dead)continue;
consider({x:+pl.x||0,y:+pl.y||0,w:28,h:48,dir:pl.dir||1,remoteId:id});
}
return target||p;
}
function mpTargetX(t){return t&&typeof t.x==='number'?t.x:p.x}
function mpDrawNick(x,y,nick){
nick=mpCleanNick(nick);g.save();g.font='900 10px Verdana, Arial, sans-serif';g.textAlign='center';g.textBaseline='middle';const w=Math.max(42,g.measureText(nick).width+14),h=17;g.fillStyle='rgba(0,0,0,.68)';g.fillRect(Math.round(x-w/2),Math.round(y-h/2),w,h);g.lineWidth=2;g.strokeStyle='rgba(0,0,0,.85)';g.strokeText(nick,Math.round(x),Math.round(y+.5));g.fillStyle='#fff';g.fillText(nick,Math.round(x),Math.round(y+.5));g.restore();
}
function mpDrawRemotePlayer(pl,id){
if(!pl||pl.stage!==li)return;const tx=+pl.x||0,ty=+pl.y||0;let sm=MP.remoteSmooth[id]||(MP.remoteSmooth[id]={x:tx,y:ty});sm.x=lerp(sm.x,tx,.14);sm.y=lerp(sm.y,ty,.14);

const x=Math.round(sm.x),y=Math.round(sm.y),dir=pl.dir||1,skin=pl.skin||'skin_pink';
const pal=characterPalette(skin),dressCol=pal.dress,hairCol=pal.hair,accentCol=pal.accent||'#ffd13b';
g.save();g.globalCompositeOperation='source-over';g.shadowBlur=0;g.filter='none';g.globalAlpha=pl.dead?.45:1;g.translate(x+14,y+48);g.scale(dir,1);g.translate(-14,-48);
g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(14,51,19,5,0,0,7);g.fill();
if(mmVariantMeta(skin)){mmDrawVariantPlayer(g,skin,pl.weapon||'axe_default',Math.sin(gTime*10)*.6,{atk:pl.atk,fire:pl.fire});g.restore();mpDrawNick(x+14,y-10,pl.nick||'Player');return;}
g.fillStyle=dressCol;g.strokeStyle='#250d21';g.lineWidth=3;g.beginPath();g.moveTo(4,20);g.lineTo(24,20);g.lineTo(29,39);g.lineTo(0,39);g.closePath();g.fill();g.stroke();
g.strokeStyle='#ffd1c4';g.lineWidth=5;g.lineCap='round';g.beginPath();g.moveTo(6,24);g.lineTo(pl.atk?-11:0,30);g.moveTo(23,24);g.lineTo(pl.atk?38:29,28);g.stroke();
g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.moveTo(9,37);g.lineTo(5,47);g.moveTo(20,37);g.lineTo(25,47);g.stroke();
g.fillStyle='#ffd0bd';g.strokeStyle='#250d21';g.lineWidth=3;g.beginPath();g.ellipse(14,11,12,12.5,0,0,7);g.fill();g.stroke();
g.fillStyle=hairCol;g.strokeStyle='#06220f';g.lineWidth=2;for(let i=0;i<7;i++){g.beginPath();g.arc(2+i*4.5,0+Math.sin(gTime*4+i)*1.2,5.4+(i%2),0,7);g.fill();g.stroke()}
g.fillStyle='#fff';g.beginPath();g.ellipse(10,8,4,4.6,0,0,7);g.ellipse(19,8,4,4.6,0,0,7);g.fill();g.fillStyle='#111';g.beginPath();g.arc(10.5,8.5,1.3,0,7);g.arc(19.5,8.5,1.3,0,7);g.fill();g.strokeStyle='#7b1730';g.lineWidth=1.7;g.lineCap='round';g.beginPath();g.arc(14.5,13.2,5,.15,Math.PI-.15);g.stroke();
if(pl.weapon==='vulcan_mg'){g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(27,26);g.lineTo(59,23);g.stroke();g.strokeStyle='#3b3333';g.lineWidth=4;g.beginPath();g.moveTo(28,25);g.lineTo(58,22);g.stroke();g.fillStyle='#ff5b19';g.beginPath();g.arc(38,24,5,0,7);g.fill();if(pl.fire){g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,120,35,.75)';g.beginPath();g.ellipse(64,22,13,6,0,0,7);g.fill();g.globalCompositeOperation='source-over';}}else{g.strokeStyle=pl.weapon==='staff_fire'?'#ff6600':'#ddd';g.lineWidth=4;g.beginPath();g.moveTo(29,25);g.lineTo(42,4);g.stroke();}
g.restore();
mpDrawNick(x+14,y-10,pl.nick||'Player');
}
function mpDrawPlayers(){
if(!MP.on||!started)return;mpDrawNick(p.x+p.w/2,p.y-10,MP.nick||'Você');for(const [id,pl] of Object.entries(MP.players||{})){if(id===MP.playerId)continue;mpDrawRemotePlayer(pl,id)}
}

function refreshMenu(){
document.getElementById('menuCoins').textContent=save.coins;
document.getElementById('menuHi').textContent=save.hiScore;
{const bl=document.getElementById('btnLang'); if(bl) bl.textContent=LANG==='pt'?'🌐 PT':'🌐 EN';}
const coinsTxt=LANG==='pt'?'moedas':tr('coins');
const cb=document.querySelector('#menuScreen .coins-bar');if(cb)cb.childNodes[2].textContent=' '+coinsTxt+'  ·  🏆 ';
refreshTexts();
}
refreshMenu();
syncNickFields(mmNickStored());

document.getElementById('btnPlay').addEventListener('click',()=>{
  try{
    if(typeof MP!=='undefined'&&MP&&MP.on&&!MP.started){
      if(MP.role==='host'){mpStartGame();}
      else{mpStatus('Aguardando o criador da sala iniciar.');say('Aguardando o criador da sala iniciar.',1.4,'#60d0ff');}
      return;
    }
  }catch(e){}
  startGame(save.selectedStage);
});
document.getElementById('btnMap').addEventListener('click',()=>{buildMap();showScreen('map')});
document.getElementById('btnShop').addEventListener('click',()=>{buildShop('skins');showScreen('shop')});
document.getElementById('btnMissions').addEventListener('click',()=>{buildMissions('daily');showScreen('missions')});
document.getElementById('btnInv').addEventListener('click',()=>{buildInv();showScreen('inv')});
document.getElementById('btnSettings').addEventListener('click',()=>{showScreen('settings')});
document.getElementById('btnMultiplayer').addEventListener('click',()=>{mpOpen();showScreen('multiplayer')});

document.querySelectorAll('.online-tab').forEach(b=>b.addEventListener('click',()=>socialGo(b.dataset.onlineTab)));
document.getElementById('btnRoomSearch')?.addEventListener('click',()=>socialRenderRooms());
document.getElementById('roomSearchInput')?.addEventListener('input',()=>socialRenderRooms());
document.getElementById('roomSearchInput')?.addEventListener('keydown',e=>{if(e.key==='Enter')socialRenderRooms()});
document.getElementById('btnRefreshRooms')?.addEventListener('click',()=>{const keep=getGlobalNickValue();if(keep){mmNickRemember(keep);syncNickFields(keep)}socialInit();socialRenderRooms();setTimeout(()=>syncNickFields(getGlobalNickValue()),50)});
document.getElementById('mpNick')?.addEventListener('input',()=>{const v=document.getElementById('mpNick').value;const g=globalNickInput();if(g)g.value=v;mmNickRemember(v);SOCIAL.nickOk=false;globalNickStatus('')});

document.getElementById('globalNickInput')?.addEventListener('input',()=>{const v=document.getElementById('globalNickInput').value;const m=document.getElementById('mpNick');if(m)m.value=v;mmNickRemember(v);SOCIAL.nickOk=false;globalNickStatus('')});

document.getElementById('homeRankMore')?.addEventListener('click',()=>{socialInit();socialRenderRanking();const m=document.getElementById('rankModal');if(m)m.style.display='flex'});
document.getElementById('rankCloseBtn')?.addEventListener('click',()=>{const m=document.getElementById('rankModal');if(m)m.style.display='none'});
document.getElementById('rankModal')?.addEventListener('click',e=>{if(e.target.id==='rankModal')e.currentTarget.style.display='none'});

document.getElementById('btnMpBack').addEventListener('click',()=>showScreen('menu'));
document.getElementById('btnCreateRoom').addEventListener('click',()=>mpCreateRoom());
document.getElementById('btnJoinRoom').addEventListener('click',()=>mpJoinRoom());
document.getElementById('btnMpLeave').addEventListener('click',()=>mpLeaveRoom());
document.getElementById('btnMpStart').addEventListener('click',()=>mpStartGame());
document.getElementById('btnMpChatSend')?.addEventListener('click',()=>mpSendChat());
document.getElementById('btnHomeChat')?.addEventListener('click',()=>mpToggleHomeChat());
document.getElementById('mpChatInput')?.addEventListener('keydown',e=>{if(e.key==='Enter')mpSendChat()});
{const bl=document.getElementById('btnLang'); if(bl) bl.addEventListener('click',()=>setLang(LANG==='pt'?'en':'pt'));}
document.getElementById('btnMapBack').addEventListener('click',()=>showScreen('menu'));
document.getElementById('btnShopBack').addEventListener('click',()=>showScreen('menu'));
document.getElementById('btnMissionsBack').addEventListener('click',()=>showScreen('menu'));
document.getElementById('btnInvBack').addEventListener('click',()=>showScreen('menu'));
document.getElementById('btnSettingsBack').addEventListener('click',()=>showScreen('menu'));
document.getElementById('btnMapPlay').addEventListener('click',()=>startGame(save.selectedStage));
document.getElementById('settingsLang').addEventListener('click',()=>setLang(LANG==='pt'?'en':'pt'));
document.getElementById('btnResetSave').addEventListener('click',()=>{
if(confirm(tr('resetConfirm'))){
try{if('serviceWorker' in navigator)navigator.serviceWorker.getRegistrations().then(rs=>rs.forEach(r=>r.update&&r.update()))}catch(e){}
try{if(window.caches)caches.keys().then(keys=>keys.forEach(k=>caches.delete(k)))}catch(e){}
setTimeout(()=>location.reload(),120);
}
});

function makeToggle(id,key){
const btn=document.getElementById(id);
btn.className='toggle-btn '+(save[key]?'on':'off');
btn.addEventListener('click',()=>{save[key]=!save[key];btn.className='toggle-btn '+(save[key]?'on':'off');writeSave();if(key==='bgm'){save[key]?startMusic():stopMusic()}});
}
makeToggle('toggleBgm','bgm');makeToggle('toggleSfx','sfx');makeToggle('toggleShake','shake');makeToggle('toggleBlood','blood');

document.getElementById('shopTabs').addEventListener('click',e=>{
const tab=e.target.closest('[data-tab]');if(!tab)return;
document.querySelectorAll('#shopTabs .tab').forEach(t=>t.classList.remove('active'));
tab.classList.add('active');buildShop(tab.dataset.tab);
});
document.getElementById('missionTabs').addEventListener('click',e=>{
const tab=e.target.closest('[data-tab]');if(!tab)return;
document.querySelectorAll('#missionTabs .tab').forEach(t=>t.classList.remove('active'));
tab.classList.add('active');buildMissions(tab.dataset.tab);
});

function buildMap(){
applySecretTesterUnlock();
document.getElementById('mapCoins').textContent=save.coins;
document.getElementById('mapHi').textContent=save.hiScore;
const worlds=[0,1,2];const namesKey=['worlds'];
const container=document.getElementById('mapContent');container.innerHTML='';
worlds.forEach(w=>{
const wLabel=document.createElement('div');wLabel.className='world-label';
wLabel.textContent=tr('worlds')[w];container.appendChild(wLabel);
const grid=document.createElement('div');grid.className='map-grid';
STAGE_DATA.filter(s=>s.world===w).forEach(stage=>{
const unlocked=save.unlockedStages.includes(stage.id);
const completed=save.completedStages.includes(stage.id);
const current=save.selectedStage===stage.id;
const stars=save.stageStars[stage.id]||0;
const node=document.createElement('div');
node.className='map-node '+(unlocked?(completed?'completed':'unlocked'):'locked')+(current?' current':'');
node.innerHTML=`<div class="map-icon">${unlocked?stage.icon:'🔒'}</div><div class="map-name">${tr('levels')[stage.id]||'???'}</div><div class="map-stars">${unlocked?'★'.repeat(stars)+'☆'.repeat(Math.max(0,3-stars)):''}</div>`;
if(unlocked){node.addEventListener('click',()=>{save.selectedStage=stage.id;writeSave();buildMap()})}
grid.appendChild(node);
});
container.appendChild(grid);
});
}

function buildShop(tab){
applySecretTesterUnlock();
document.getElementById('shopCoins').textContent=save.coins;
const shopBar=document.querySelector('#shopScreen .coins-bar');if(shopBar)shopBar.childNodes[2].textContent=' '+tr('coins');
const grid=document.getElementById('shopGrid');grid.innerHTML='';
const items=SHOP_ITEMS[tab]||[];
items.forEach(item=>{
const owned=save.owned.includes(item.id);
const equipped=save.equipped.weapon===item.id||save.equipped.skin===item.id;
const div=document.createElement('div');
div.className='shop-item'+(owned?' owned':'')+(equipped?' equipped':'');
div.innerHTML=`<div class="shop-icon">${item.icon}</div><div class="shop-name">${shopName(item)}</div><div class="shop-desc">${shopDesc(item)}</div>${owned?(equipped?`<div class="shop-equipped">${tr('equipped')}</div>`:`<div class="shop-owned">${tr('owned')}</div>`):`<div class="shop-price">🪙 ${item.price}</div>`}`;
div.addEventListener('click',()=>{
if(owned){
if(tab==='skins'){save.equipped.skin=item.id; mpPublishEquipped&&mpPublishEquipped();}
else if(tab==='weapons')save.equipped.weapon=item.id;
else{if(!save.equipped.item1)save.equipped.item1=item.id;else save.equipped.item2=item.id}
writeSave();mpPublishEquipped();buildShop(tab);buildInv();
} else if(save.coins>=item.price){
save.coins-=item.price;save.owned.push(item.id);
save.missionProgress.shopBuys=(save.missionProgress.shopBuys||0)+1;
writeSave();buildShop(tab);refreshMenu();
}
});
grid.appendChild(div);
});
}

function buildMissions(tab){
const list=document.getElementById('missionList');list.innerHTML='';
const missions=save.missions[tab]||[];
missions.forEach((m,i)=>{
const prog=getMissionProgress(m.goal);
const pct=Math.min(1,prog/m.target);
const done=prog>=m.target;
const div=document.createElement('div');
div.className='mission-item'+(done?' done':'')+(m.claimed?' claimed':'');
div.innerHTML=`<div class="mission-icon">${m.icon}</div><div class="mission-info"><div class="mission-name">${missionName(m)}</div><div class="mission-desc">${missionDesc(m)}</div><div class="progress-bar"><div class="progress-fill" style="width:${pct*100}%"></div></div><div class="mission-progress">${Math.min(prog,m.target)} / ${m.target}</div></div><div class="mission-reward">🪙 ${m.reward}${done&&!m.claimed?`<br><button style="margin-top:4px;background:#ffe060;color:#400;border:0;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:900;cursor:pointer">${tr('claim')}</button>`:''}</div>`;
if(done&&!m.claimed){
div.querySelector('button')?.addEventListener('click',e=>{
e.stopPropagation();
m.claimed=true;save.coins+=m.reward;writeSave();buildMissions(tab);refreshMenu();
});
}
list.appendChild(div);
});
if(missions.length===0){list.innerHTML=`<div style="text-align:center;padding:20px;color:rgba(200,180,220,.4);font-size:12px">${tr('noMissions')}</div>`}
}

function buildInv(){
function fillGrid(containerId,category){
const el=document.getElementById(containerId);el.innerHTML='';
const owned=save.owned.filter(id=>SHOP_ITEMS[category]?.some(i=>i.id===id));
const cat=SHOP_ITEMS[category]||[];

for(let i=0;i<Math.max(4,owned.length+1);i++){
const id=owned[i];const item=cat.find(x=>x.id===id);
const isEquipped=id&&(save.equipped.weapon===id||save.equipped.skin===id||save.equipped.item1===id||save.equipped.item2===id);
const slot=document.createElement('div');
slot.className='inv-slot'+(item?' has-item':'')+(isEquipped?' active':'');
slot.innerHTML=item?`<div class="inv-slot-icon">${item.icon}</div><div class="inv-slot-name">${shopName(item)}</div>`:'<div style="font-size:14px;opacity:.2">+</div>';
if(item){slot.addEventListener('click',()=>{
if(category==='weapons')save.equipped.weapon=id;
else if(category==='skins'){save.equipped.skin=id; mpPublishEquipped&&mpPublishEquipped();}
writeSave();mpPublishEquipped();buildInv();
})}
el.appendChild(slot);
}
}
fillGrid('invWeapons','weapons');fillGrid('invSkins','skins');fillGrid('invItems','items');
}

const cv=document.getElementById('game'),ctx=cv.getContext('2d',{alpha:false});
const W=480,H=270,vc=document.createElement('canvas');
vc.width=W;vc.height=H;
const g=vc.getContext('2d',{alpha:false});g.imageSmoothingEnabled=false;
let scaleX=1,scaleY=1;
const WORLD_ZOOM=.86,WORLD_PAD=320;
function resize(){const d=Math.min(devicePixelRatio||1,2);cv.width=innerWidth*d;cv.height=innerHeight*d;ctx.imageSmoothingEnabled=false;scaleX=cv.width/W;scaleY=cv.height/H}
addEventListener('resize',resize);resize();
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t,rnd=(a,b)=>a+Math.random()*(b-a);

let AC=null,masterGain=null,bgmTrack=null,bgmTrackReady=false;
function ensureMusicTrack(){
if(bgmTrack)return bgmTrack;
bgmTrack=new Audio('musica.mp3');
bgmTrack.loop=true;bgmTrack.preload='auto';bgmTrack.volume=.45;
bgmTrack.addEventListener('canplaythrough',()=>bgmTrackReady=true,{once:true});
bgmTrack.addEventListener('error',()=>{bgmTrackReady=false});
return bgmTrack;
}
function startMusic(){
const m=ensureMusicTrack();
if(!save.bgm)return;
const playPromise=m.play();
if(playPromise&&playPromise.catch)playPromise.catch(()=>{});
}
function stopMusic(){if(bgmTrack)bgmTrack.pause()}
function audio(){if(!AC){const Ctx=window.AudioContext||window.webkitAudioContext;if(Ctx){AC=new Ctx();masterGain=AC.createGain();masterGain.gain.value=.6;masterGain.connect(AC.destination)}}ensureMusicTrack();startMusic()}
function blip(f=440,d=.12,type='square',vol=.12,slide=0,delay=0){if(!AC||!save.sfx)return;const t=AC.currentTime+delay,o=AC.createOscillator(),q=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(35,f+slide),t+d*.92);q.gain.setValueAtTime(.001,t);q.gain.exponentialRampToValueAtTime(vol,t+d*.12);q.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(q);q.connect(masterGain);o.start(t);o.stop(t+d+.03)}
function cNoise(d=.07,vol=.15,cut=700,delay=0){if(!AC||!save.sfx)return;const t=AC.currentTime+delay,n=Math.floor(AC.sampleRate*d),b=AC.createBuffer(1,n,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=(Math.random()*2-1)*(1-i/n);const s=AC.createBufferSource(),q=AC.createGain(),f=AC.createBiquadFilter();s.buffer=b;f.type='lowpass';f.frequency.value=cut;q.gain.setValueAtTime(vol,t);q.gain.exponentialRampToValueAtTime(.001,t+d);s.connect(f);f.connect(q);q.connect(masterGain);s.start(t);s.stop(t+d+.02)}
function girlLaugh(){if(!AC||!save.sfx)return;[760,940,690,1020,830].forEach((f,i)=>blip(f,.08,'triangle',.07,-f*.28,i*.065));cNoise(.10,.035,2200,.02)}
const snd={
jump:()=>{blip(360,.075,'triangle',.15,230);blip(520,.045,'sine',.04,120,.035)},
land:()=>{cNoise(.055,.14,420);blip(80,.055,'sine',.045,-20)},
axe:()=>{cNoise(.06,.27,850);blip(74,.11,'sawtooth',.34,-32)},
hit:()=>{cNoise(.10,.36,390);blip(92,.075,'square',.33,-42)},
fire:()=>{blip(270,.13,'sawtooth',.16,520);blip(980,.07,'triangle',.07,-380,.02)},
vulcan:()=>{cNoise(.075,.18,520);blip(95,.055,'sawtooth',.17,-18);blip(132,.045,'square',.08,-20,.045);blip(180,.035,'sawtooth',.055,-30,.085)},
hurt:()=>{blip(128,.15,'square',.27,-65);cNoise(.045,.13,380)},
kill:()=>{blip(180,.08,'square',.17,230);cNoise(.12,.30,300);girlLaugh()},
boss:()=>{blip(52,.42,'sawtooth',.34,-10);cNoise(.18,.18,360)},
dash:()=>{blip(440,.05,'triangle',.18,-220);cNoise(.04,.09,2200)},
powerup:()=>{[523,659,784,1047].forEach((f,i)=>blip(f,.12,'triangle',.14,0,i*.08))},
coin:()=>{blip(880,.06,'triangle',.1,200)},
stageClr:()=>{[392,523,659,784,1047].forEach((f,i)=>blip(f,.18,'triangle',.20,0,i*.12))},
bomb:()=>{cNoise(.25,.4,300);blip(60,.3,'sawtooth',.3,-20)},
};
let bgmTimer=0,bgmStep=0,bgmBass=0;
const bgmScales={
world0:[196,196,233,262,196,174,220,196,155,174,196,233],
world1:[220,220,261,293,220,196,246,220,174,196,220,261],
world2:[146,146,174,196,146,130,164,146,116,130,146,174],
};
function bgm(dt,worldIdx){
if(!started||!save.bgm)return;
if(bgmTrack&&!bgmTrack.paused&&!bgmTrack.error)return;
if(!AC)return;
const scale=bgmScales['world'+worldIdx]||bgmScales.world0;
bgmTimer-=dt;bgmBass-=dt;
if(bgmTimer<=0){bgmTimer=.16;const n=scale[bgmStep++%scale.length];blip(n,.07,'triangle',.020,0);if(bgmStep%4===0)blip(n*1.5,.04,'square',.008,-90)}
if(bgmBass<=0){bgmBass=.64;const b=[49,55,65,73][Math.floor(bgmStep/4)%4];blip(b,.22,'sine',.032,-8)}
}

const keys={left:0,right:0,jump:0,atk:0,fire:0,dash:0,bomb:0},prev={};
let enterHeld=0;
const BTN_Y=H-47;
const bts=[
['left','◀',10,BTN_Y,44,41],['right','▶',60,BTN_Y,44,41],
['dash','💨',W-220,BTN_Y,44,41],['jump','↑',W-170,BTN_Y,44,41],
['atk','🪓',W-118,BTN_Y,50,41],['fire','🔥',W-62,BTN_Y,44,41],
];
const touches=new Map();
let lastTapTime=0,lastTapBtn='';
function s2g(e){const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)*(cv.width/r.width),y=(e.clientY-r.top)*(cv.height/r.height);return{x:x/scaleX,y:y/scaleY}}
function hbtn(pt){for(const b of bts)if(pt.x>=b[2]&&pt.x<=b[2]+b[4]&&pt.y>=b[3]&&pt.y<=b[3]+b[5])return b[0];return null}
function setK(id,v){if(id in keys)keys[id]=v?1:0}
cv.addEventListener('pointerdown',e=>{
const pt=s2g(e),id=hbtn(pt);if(!started)return;
if(id){
const now=performance.now();
if(id===lastTapBtn&&now-lastTapTime<280&&id==='right'){keys.dash=1;setTimeout(()=>keys.dash=0,80)}
lastTapBtn=id;lastTapTime=now;touches.set(e.pointerId,id);setK(id,1);e.preventDefault()}
});
cv.addEventListener('pointerup',e=>{const id=touches.get(e.pointerId);if(id){setK(id,0);touches.delete(e.pointerId)}});
cv.addEventListener('pointercancel',e=>{const id=touches.get(e.pointerId);if(id){setK(id,0);touches.delete(e.pointerId)}});
cv.addEventListener('pointermove',e=>{const old=touches.get(e.pointerId),id=hbtn(s2g(e));if(old!==id){if(old)setK(old,0);if(id){setK(id,1);touches.set(e.pointerId,id)}else touches.delete(e.pointerId)}});
addEventListener('keydown',e=>{if(!started)return;
if(['a','A','ArrowLeft'].includes(e.key))keys.left=1;
if(['d','D','ArrowRight'].includes(e.key))keys.right=1;
if(['w','W','ArrowUp',' '].includes(e.key)){keys.jump=1;e.preventDefault()}
if(e.key==='Enter'){keys.atk=1;e.preventDefault()}
if(['k','K'].includes(e.key))keys.fire=1;
if(['Shift','ShiftLeft','ShiftRight'].includes(e.key)){keys.dash=1;e.preventDefault()}
if(['q','Q'].includes(e.key))keys.bomb=1;
if(e.key==='Escape')returnToMenu();
});
addEventListener('keyup',e=>{
if(['a','A','ArrowLeft'].includes(e.key))keys.left=0;
if(['d','D','ArrowRight'].includes(e.key))keys.right=0;
if(['w','W','ArrowUp',' '].includes(e.key))keys.jump=0;
if(e.key==='Enter'){if(enterHeld<.18)keys.fire=1;keys.atk=0;setTimeout(()=>keys.fire=0,55);enterHeld=0}
if(['k','K'].includes(e.key))keys.fire=0;
if(['Shift','ShiftLeft','ShiftRight'].includes(e.key))keys.dash=0;
if(['q','Q'].includes(e.key))keys.bomb=0;
});

const BLOOD_COLS=['#b60025','#ff274b','#760014'];
const MICRO={hitstopSm:.04,hitstopBoss:.065,bloodFloorLife:8};

function getBonus(){
const b={meleeMult:1,coinMult:1,dashCDMult:1,dashInvBonus:0,fireMult:1,speedMult:1,manaRegen:1,luckMult:1,hasBomb:0,tripleJump:0,lifeSteal:0,ricochet:0,dashArea:0};
const eq=[save.equipped.weapon,save.equipped.skin,save.equipped.item1,save.equipped.item2];
eq.filter(Boolean).forEach(id=>{
const all=[...SHOP_ITEMS.skins,...SHOP_ITEMS.weapons,...SHOP_ITEMS.items];
const item=all.find(i=>i.id===id);
if(item?.bonus)Object.keys(item.bonus).forEach(k=>b[k]=typeof b[k]==='number'?(b[k]*(item.bonus[k]??1)||b[k]+item.bonus[k]):(item.bonus[k]));
});

const wep=SHOP_ITEMS.weapons.find(i=>i.id===save.equipped.weapon);
if(wep){b.baseMeleeDmg=wep.dmg||5;b.baseFireDmg=wep.fireDmg||4}
else{b.baseMeleeDmg=5;b.baseFireDmg=4}
return b;
}

let started=false,gTime=0,last=performance.now(),gameHitStop=0;
let li=0,L=null,stageObj=null,cam={x:0,y:0},shake=0,shakeT=0;
let particles=[],shots=[],hazards=[],texts=[],enemies=[],decals=[],frontMist=[],powerups=[];
let gameOver=false,victory=false,stageFlash=0,stageAdvanceTimer=null;
let combo=0,comboTimer=0,cinZoom=0,impactFlash=0,impactDir=1,ambTick=0;

let expansionWaveDone=false, expansionWaveArmed=false;
function getDimensionForStage(idx){return Math.min(3,Math.floor((idx||0)/8)+1)}
function getDifficultyScale(){
const dim=getDimensionForStage(li), stageInDim=(li%8);
const mp=MP&&MP.on?1.22:1;
return {
dim, hp:(1+stageInDim*.10+(dim-1)*.42)*mp,
dmg:1+(stageInDim*.055)+(dim-1)*.30+(MP&&MP.on?.18:0),
spd:1+(stageInDim*.035)+(dim-1)*.16+(MP&&MP.on?.10:0),
pressure:1+stageInDim*.08+(dim-1)*.45+(MP&&MP.on?.35:0)
};
}
function applyExpansionDifficulty(e){
const s=getDifficultyScale();
e.dimension=s.dim;
e.hp=Math.max(1,Math.ceil(e.hp*s.hp)); e.maxHp=e.hp;
e.damage=Math.max(1,Math.ceil((e.damage||1)*s.dmg));
if(e.speed)e.speed=Math.ceil(e.speed*s.spd);
e.score=Math.ceil((e.score||100)*(1+.16*(s.dim-1)));
return e;
}
function expansionExtraWaveTypes(dim){
if(dim===2)return ['spider_woman','zombie','skeleton','witch'];
return ['spider_woman','zombie','giant','skeleton','witch','dragon','alien_mage','void_matron'];
}
function spawnExpansionWave(){
if(expansionWaveDone||!stageObj)return false;
const dim=getDimensionForStage(li);
if(dim<2)return false;
expansionWaveDone=true;
const types=expansionExtraWaveTypes(dim);
const count=Math.min(types.length,Math.ceil(2+(li%8)*.5+(dim-2)*3+(MP&&MP.on?2:0)));
const base=Math.max(p.x+280,cam.x+W*.72);
for(let i=0;i<count;i++){
const type=types[(i+li)%types.length];
const x=clamp(base+i*110+rnd(-35,35),120,L.width-170);
const e=applyExpansionDifficulty(makeEnemy(type,x));
e.id='dx'+li+'_'+Date.now()+'_'+i+'_'+type;
enemies.push(e);
}
say((LANG==='pt'?'Onda dimensional!':'Dimensional wave!'),1.4,'#d49cff');
if(MP&&MP.on&&MP.role==='host'&&MP.roomRef){
const pack={};enemies.forEach((e,i)=>{if(!e.id)e.id=mpEnemyKey(i,e);pack[e.id]=mpSerializeEnemy(e)});
MP.roomRef.child('enemies').set(pack);
}
return true;
}
function stageReadyToComplete(){
const clear=enemies.every(e=>e.dead);
if(clear&&getDimensionForStage(li)>=2&&!expansionWaveDone){
if(!MP.on||MP.role==='host')spawnExpansionWave();
return false;
}
return clear;
}
function expansionCoinReward(base){
const dim=getDimensionForStage(li);
return Math.max(1,Math.ceil(base*(dim===1?.58:dim===2?.48:.42)));
}
let transitionT=0,transitionName='',slowMoT=0,execHintT=0;
let runScore=0,runCoins=0,runFlawless=true;
let dashTrail=[];
let shieldCD=0,bombCD=0;
let sessionKills=0,sessionFireKills=0,sessionBossKills=0,sessionDash=0,sessionMaxCombo=0;

const p={x:80,y:120,w:28,h:48,vx:0,vy:0,dir:1,hp:8,maxHp:8,mp:100,maxMp:100,on:0,jumps:0,inv:0,hurt:0,atk:0,fire:0,kills:0,walk:0,walkT:0,dashing:0,dashCD:0,speedBoost:0,damageBoost:0};

function gy(x){const b=L?.ground||198;const t=stageObj?.theme||'forest';
if(t==='forest')return b+Math.sin(x*.018)*5+Math.sin(x*.055)*2;
if(t==='swamp')return b+Math.sin(x*.014)*7+Math.sin(x*.041)*3;
if(t==='snow')return b+Math.sin(x*.016)*4;
if(t==='circus')return b+Math.sin(x*.022)*7+Math.sin(x*.071)*3;
if(t==='candy')return b+Math.sin(x*.016)*6+Math.sin(x*.038)*5;
if(t==='living')return b+Math.sin(x*.012+Math.sin(gTime*.8))*8+Math.sin(x*.052)*3;
if(t==='glitch')return b+Math.sin(x*.019+Math.floor(gTime*3)*.22)*6+Math.sin(x*.084)*2;
if(t==='volcano')return b+Math.sin(x*.014)*6+Math.sin(x*.038)*3;
if(t==='deep')return b+Math.sin(x*.01)*4+Math.sin(x*.07)*2;
if(t==='crypt')return b+Math.sin(x*.02)*3;
if(t==='neon')return b+Math.sin(x*.015)*5+Math.sin(x*.06)*3;
if(t==='salt')return b+Math.sin(x*.012)*4;
if(t==='crystal')return b+Math.sin(x*.018)*6+Math.sin(x*.05)*3;
if(t==='wind')return b+Math.sin(x*.016+gTime*.4)*5;
if(t==='dark')return b+Math.sin(x*.01)*3;
if(t==='space')return b+Math.sin(x*.02)*6+Math.sin(x*.05)*2;
if(t==='factory')return b+Math.sin(x*.01)*2;
if(t==='organic')return b+Math.sin(x*.015+Math.sin(gTime))*8+Math.sin(x*.06)*4;
if(t==='void')return b;
return b+Math.sin(x*.01)*2;
}

function makeEnemy(type,x){
const base={type,x,y:0,w:30,h:36,vx:0,vy:0,dir:-1,hp:4,maxHp:4,dead:0,hurt:0,cool:0,t:0,on:0,damage:1,score:100};
const e=Object.assign({},base);const gyx=gy(x);

if(type==='mush')Object.assign(e,{y:gyx-36,w:29,h:36,hp:5,maxHp:5,speed:50,damage:1,score:100});
if(type==='mushking')Object.assign(e,{y:gyx-72,w:78,h:72,hp:38,maxHp:38,spore:.9,jump:1.2,boss:1,damage:1,score:800});
if(type==='slug')Object.assign(e,{y:gyx-58,w:76,h:58,hp:42,maxHp:42,jump:1.3,spit:1.0,damage:1,boss:1,score:600});
if(type==='barb')Object.assign(e,{y:gyx-88,w:58,h:88,hp:54,maxHp:54,slam:1.2,charge:0,damage:2,boss:1,score:700});
if(type==='queen')Object.assign(e,{y:gyx-88,w:58,h:88,hp:74,maxHp:74,bolt:4.2,tp:2,kick:1.1,phase:0,damage:2,boss:1,score:900});
if(type==='clownlet')Object.assign(e,{y:gyx-42,w:32,h:42,hp:8,maxHp:8,speed:65,bomb:1.4,damage:1,score:150});
if(type==='clown')Object.assign(e,{y:gyx-82,w:66,h:82,hp:60,maxHp:60,boss:1,bomb:.75,leap:1.6,damage:2,score:750});
if(type==='candyImp')Object.assign(e,{y:gyx-38,w:31,h:38,hp:8,maxHp:8,speed:78,shot:1.1,damage:1,score:150});
if(type==='caramel')Object.assign(e,{y:gyx-86,w:62,h:86,hp:64,maxHp:64,boss:1,shot:.8,pool:1.5,jump:1.7,damage:2,score:800});
if(type==='rootling')Object.assign(e,{y:gyx-48,w:34,h:48,hp:10,maxHp:10,speed:44,root:.9,damage:1,score:150});
if(type==='treeking')Object.assign(e,{y:gyx-116,w:92,h:116,hp:72,maxHp:72,boss:1,root:.65,slam:1.5,spawn:2.8,damage:2,score:850});
if(type==='mirror')Object.assign(e,{y:gyx-54,w:36,h:54,hp:82,maxHp:82,boss:1,fire:.65,dash:1.1,clone:2.4,damage:2,phase:0,score:999});

if(type==='pyrefiend')Object.assign(e,{y:gyx-40,w:30,h:40,hp:9,maxHp:9,speed:55,fireCool:1.4,damage:1,score:180});
if(type==='lavaBrute')Object.assign(e,{y:gyx-54,w:46,h:54,hp:22,maxHp:22,speed:32,slam:1.6,damage:2,score:260});
if(type==='volcanic')Object.assign(e,{y:gyx-100,w:74,h:100,hp:90,maxHp:90,boss:1,eruption:.8,slam:1.4,phase:0,damage:3,score:1200});
if(type==='deepDrifter')Object.assign(e,{y:gyx-38,w:32,h:38,hp:10,maxHp:10,speed:42,ink:1.6,damage:1,score:180});
if(type==='abyssWorm')Object.assign(e,{y:gyx-52,w:56,h:52,hp:28,maxHp:28,burrow:1.8,damage:2,score:280});
if(type==='krakenette')Object.assign(e,{y:gyx-88,w:80,h:88,hp:88,maxHp:88,boss:1,tentacle:.7,ink:1.2,phase:0,damage:2,score:1100});
if(type==='boneling')Object.assign(e,{y:gyx-40,w:26,h:40,hp:8,maxHp:8,speed:58,throw:1.4,damage:1,score:160});
if(type==='ghostKnight')Object.assign(e,{y:gyx-52,w:38,h:52,hp:18,maxHp:18,speed:36,phase:0,damage:2,score:240});
if(type==='lich')Object.assign(e,{y:gyx-90,w:60,h:90,hp:85,maxHp:85,boss:1,beam:.9,summon:3.0,phase:0,damage:2,score:1150});
if(type==='neonDrone')Object.assign(e,{y:gyx-34,w:28,h:34,hp:9,maxHp:9,speed:70,laser:1.2,damage:1,score:180});
if(type==='glitchFiend')Object.assign(e,{y:gyx-46,w:34,h:46,hp:20,maxHp:20,teleport:1.4,damage:2,score:260});
if(type==='neonGod')Object.assign(e,{y:gyx-96,w:70,h:96,hp:92,maxHp:92,boss:1,laser:.6,dash:1.0,phase:0,damage:2,score:1300});
if(type==='dustDevil')Object.assign(e,{y:gyx-44,w:32,h:44,hp:10,maxHp:10,speed:62,spin:1.3,damage:1,score:180});
if(type==='sandGolem')Object.assign(e,{y:gyx-60,w:52,h:60,hp:30,maxHp:30,slam:1.5,damage:2,score:300});
if(type==='saltGolem')Object.assign(e,{y:gyx-104,w:80,h:104,hp:94,maxHp:94,boss:1,shatter:.8,summon:2.8,damage:3,score:1200});
if(type==='shardling')Object.assign(e,{y:gyx-38,w:30,h:38,hp:9,maxHp:9,speed:50,split:1,damage:1,score:170});
if(type==='crystalBrute')Object.assign(e,{y:gyx-58,w:50,h:58,hp:26,maxHp:26,slam:1.4,damage:2,score:270});
if(type==='crystalQueen')Object.assign(e,{y:gyx-92,w:66,h:92,hp:88,maxHp:88,boss:1,shard:.7,crystal:2.2,phase:0,damage:2,score:1250});
if(type==='windWraith')Object.assign(e,{y:gyx-40,w:28,h:40,hp:8,maxHp:8,speed:80,gust:1.2,damage:1,score:180});
if(type==='stormKnight')Object.assign(e,{y:gyx-54,w:44,h:54,hp:24,maxHp:24,charge:1.4,damage:2,score:280});
if(type==='windPhantom')Object.assign(e,{y:gyx-84,w:62,h:84,hp:80,maxHp:80,boss:1,tornado:.8,dash:1.0,phase:0,damage:2,score:1150});
if(type==='shadowFiend')Object.assign(e,{y:gyx-42,w:30,h:42,hp:11,maxHp:11,speed:60,shadow:1.2,damage:1,score:200});
if(type==='darkKnight')Object.assign(e,{y:gyx-56,w:46,h:56,hp:28,maxHp:28,slash:1.3,block:2,damage:2,score:310});
if(type==='darkCore')Object.assign(e,{y:gyx-80,w:64,h:80,hp:100,maxHp:100,boss:1,ray:.7,orbit:1.5,phase:0,damage:3,score:1400});

if(type==='starSpawn')Object.assign(e,{y:gyx-38,w:30,h:38,hp:12,maxHp:12,speed:55,beam:1.3,damage:1,score:220});
if(type==='cosmicBrute')Object.assign(e,{y:gyx-56,w:48,h:56,hp:32,maxHp:32,slam:1.3,damage:2,score:330});
if(type==='voidBeast')Object.assign(e,{y:gyx-90,w:72,h:90,hp:110,maxHp:110,boss:1,void:.7,charge:1.1,phase:0,damage:3,score:1600});
if(type==='gearling')Object.assign(e,{y:gyx-38,w:32,h:38,hp:12,maxHp:12,speed:48,saw:1.2,damage:1,score:210});
if(type==='steamBrute')Object.assign(e,{y:gyx-60,w:52,h:60,hp:34,maxHp:34,slam:1.2,steam:1.8,damage:2,score:340});
if(type==='mechaBoss')Object.assign(e,{y:gyx-110,w:88,h:110,hp:120,maxHp:120,boss:1,missile:.6,laser:1.2,phase:0,damage:3,score:1800});
if(type==='blobTwin')Object.assign(e,{y:gyx-40,w:32,h:40,hp:14,maxHp:14,speed:44,split:1,puddle:1.8,damage:1,score:220});
if(type==='muscleMass')Object.assign(e,{y:gyx-62,w:54,h:62,hp:36,maxHp:36,slam:1.1,damage:2,score:360});
if(type==='organicTitan')Object.assign(e,{y:gyx-120,w:94,h:120,hp:130,maxHp:130,boss:1,spore:.6,slam:1.3,spawn:2.5,damage:3,score:2000});
if(type==='nullFiend')Object.assign(e,{y:gyx-44,w:32,h:44,hp:15,maxHp:15,speed:65,null:1.0,phase:0,damage:2,score:250});
if(type==='nullKing')Object.assign(e,{y:gyx-100,w:78,h:100,hp:150,maxHp:150,boss:1,voidRay:.5,null:1.0,phase:0,damage:4,score:2500});

if(type==='spider_woman')Object.assign(e,{y:gyx-62,w:54,h:62,hp:28,maxHp:28,speed:74,web:1.0,jump:.9,damage:2,score:420});
if(type==='zombie')Object.assign(e,{y:gyx-50,w:34,h:50,hp:34,maxHp:34,speed:30,grab:.8,damage:2,score:320});
if(type==='giant')Object.assign(e,{y:gyx-118,w:82,h:118,hp:110,maxHp:110,speed:24,slam:1.2,boss:1,damage:4,score:1500});
if(type==='skeleton')Object.assign(e,{y:gyx-54,w:34,h:54,hp:24,maxHp:24,speed:66,throw:1.2,damage:2,score:360});
if(type==='witch')Object.assign(e,{y:gyx-66,w:42,h:66,hp:38,maxHp:38,speed:42,hex:.8,tp:2.0,damage:2,score:520});
if(type==='dragon')Object.assign(e,{y:gyx-145,w:86,h:62,hp:70,maxHp:70,fly:1,flame:.65,speed:78,boss:1,damage:3,score:1600});
if(type==='alien_mage')Object.assign(e,{y:gyx-58,w:46,h:58,hp:46,maxHp:46,speed:54,orb:.75,phase:0,damage:2,score:640});
if(type==='void_matron')Object.assign(e,{y:gyx-105,w:74,h:105,hp:145,maxHp:145,boss:1,spawn:2.0,voidRay:.7,phase:0,damage:4,score:2600});
return e;
}

function startGame(stageIdx){applySecretTesterUnlock();setTimeout(updateGameplayMenu,60);
if(stageAdvanceTimer){clearTimeout(stageAdvanceTimer);stageAdvanceTimer=null}
audio();startMusic();
stageObj=STAGE_DATA[stageIdx];
if(!stageObj)stageObj=STAGE_DATA[0];
li=stageIdx;
L={name:tr('levels')[stageIdx]||'???',ground:stageObj.ground,width:stageObj.width,goal:stageObj.goal,theme:stageObj.theme,coinBonus:stageObj.coinBonus||50};
expansionWaveDone=false; expansionWaveArmed=false;
enemies=stageObj.enemies.map((a,i)=>{const e=applyExpansionDifficulty(makeEnemy(a[0],a[1]));e.id='e'+stageIdx+'_'+i+'_'+a[0];return e});
particles=[];shots=[];hazards=[];texts=[];powerups=[];decals=[];frontMist=[];dashTrail=[];
cam.x=cam.y=0;shake=0;gameOver=false;victory=false;stageFlash=1;
combo=0;comboTimer=0;cinZoom=.08;transitionT=1.2;transitionName=L.name;
runScore=0;runCoins=0;runFlawless=true;
sessionKills=0;sessionFireKills=0;sessionBossKills=0;sessionDash=0;sessionMaxCombo=0;
gTime=0;gameHitStop=0;shieldCD=0;bombCD=0;
const bon=getBonus();
Object.assign(p,{x:78,vx:0,vy:0,on:0,jumps:0,inv:.4,atk:0,fire:0,hurt:0,dashing:0,dashCD:0,speedBoost:0,damageBoost:0,
hp:8,maxHp:8,mp:100,maxMp:100,kills:0,walk:0,walkT:0});
if(MP.on&&MP.playerRef)MP.playerRef.update({dead:false,hp:8,stage:stageIdx,x:78,y:Math.round(gy(78)-p.h-2),updated:firebase.database.ServerValue.TIMESTAMP});
p.y=gy(78)-p.h-2;
started=true;
if(MP.on)MP.restarting=false;
mpPublishStage();
if(MP.on&&MP.role==='host'&&MP.roomRef){const pack={};enemies.forEach((e,i)=>{if(!e.id)e.id=mpEnemyKey(i,e);pack[e.id]=mpSerializeEnemy(e)});MP.roomRef.child('enemies').set(pack);MP.roomRef.child('events').remove();MP.roomRef.child('world').set({stage:li,enemyAlive:enemies.length,updated:firebase.database.ServerValue.TIMESTAMP});}
showScreen(null);
say(L.name,1.4,'#fff27a');
if(enemies.some(e=>e.boss))setTimeout(()=>snd.boss(),400);
}

function returnToMenu(){updateGameplayMenu();
if(stageAdvanceTimer){clearTimeout(stageAdvanceTimer);stageAdvanceTimer=null}
started=false;
showScreen('menu');
refreshMenu();
}

function scheduleNextStage(nextId){
const last=nextId>=STAGE_DATA.length;
const canAdvance=!MP.on||MP.role==='host';
if(stageAdvanceTimer){clearTimeout(stageAdvanceTimer);stageAdvanceTimer=null}
if(last){
say(LANG==='pt'?'Campanha completa!':'Campaign complete!',4,'#ffd74f');
stageAdvanceTimer=setTimeout(()=>{if(victory)returnToMenu()},5200);
return;
}
if(!canAdvance){
say(LANG==='pt'?'Aguardando o host avançar...':'Waiting for host...',3.5,'#60d0ff');
return;
}
say((LANG==='pt'?'Próxima fase: ':'Next stage: ')+(tr('levels')[nextId]||('Fase '+(nextId+1))),3,'#60d0ff');
stageAdvanceTimer=setTimeout(()=>{
if(!victory)return;
if(MP.on&&MP.role==='host'&&MP.roomRef){
MP.roomRef.child('meta').update({stage:nextId,started:true,advance:true,restartToken:Date.now(),updated:firebase.database.ServerValue.TIMESTAMP});
}
startGame(nextId);
},2600);
}

function aabb(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}
function say(s,life=.9,col='#fff27a'){texts.push({x:cam.x+W/2,y:74,s,life,max:life,col,big:1})}
function addPart(x,y,type,n=1,opts={}){
const cap=260;if(particles.length>cap)particles.splice(0,particles.length-cap);
n=Math.min(n,18);
for(let i=0;i<n;i++)particles.push({x:x+rnd(-3,3),y:y+rnd(-3,3),type,life:opts.life||rnd(.22,.8),max:opts.life||.8,vx:opts.vx??rnd(-120,120),vy:opts.vy??rnd(-180,40),s:opts.s||rnd(2,6),rot:rnd(-3,3),col:opts.col||''})
}
function blood(x,y,n=12,pow=1){
if(!save.blood){for(let i=0;i<n;i++)addPart(x,y,'spark',1,{col:'#ff3060',life:.3,s:4});return}
for(let i=0;i<n;i++){const a=rnd(-Math.PI*.88,-Math.PI*.12);particles.push({x,y,type:'blood',life:rnd(.35,1.1),max:1.1,vx:Math.cos(a)*rnd(70,280)*pow,vy:Math.sin(a)*rnd(80,220)*pow-25,s:rnd(2,7),rot:rnd(-2,2)})}
for(let i=0;i<Math.max(1,Math.floor(n/12));i++)decals.push({x:x+rnd(-16,16),y:gy(x)+rnd(-3,3),s:rnd(5,18),life:MICRO.bloodFloorLife+rnd(0,5),rot:rnd(0,6.28),col:BLOOD_COLS[Math.floor(rnd(0,3))]});
if(decals.length>160)decals.splice(0,decals.length-160);
}
function green(x,y,n=8){addPart(x,y,'green',Math.min(n,12),{life:.5,s:7,vx:rnd(-35,35),vy:rnd(-80,-10)})}
function addScore(n,x,y){runScore+=n;texts.push({x,y:y-10,s:'+'+n,life:.8,max:.8,col:'#ffe060',big:0})}
function addCoin(n,x,y){
const bon=getBonus();const actual=Math.floor(n*(bon.coinMult||1));
runCoins+=actual;texts.push({x,y:y-10,s:'🪙'+actual,life:.75,max:.75,col:'#ffe060',big:0});snd.coin();
}
function spawnPowerup(x,y,forced){
const bon=getBonus();const chance=forced?1:(0.3*(bon.luckMult||1));
if(Math.random()>chance&&!forced)return;
const types=['heal','mana','speed','damage','coins'];
const type=types[Math.floor(Math.random()*types.length)];
powerups.push({x:x+rnd(-20,20),y:y-20,w:16,h:16,type,life:8,bob:rnd(0,7)});
}
function hurtPlayer(n,k=0,fromRemote=false){
if((p.inv>0||p.dashing>0)&&!fromRemote||gameOver||victory)return;

if(shieldCD<=0&&(save.equipped.item1==='item_shield'||save.equipped.item2==='item_shield')){shieldCD=30;say('🛡 BLOQUEADO',.6,'#60d0ff');return}
runFlawless=false;
p.hp-=n;p.inv=.9;p.hurt=.23;p.vx+=k;p.vy=-135;
if(save.shake){shake=10;shakeT=.35}
snd.hurt();blood(p.x+p.w/2,p.y+22,12,1.1);
if(p.hp<=0){
gameOver=true;
if(defeatRestartBtn)defeatRestartBtn.style.display='none';
if(runScore>save.hiScore){save.hiScore=runScore;writeSave()}
say(MP.on?(LANG==='pt'?'Você caiu. Aguarde o parceiro.':'You are down. Wait for your partner.'):tr('died'),3,'#ff3a6e');
if(!MP.on)endRun();
}
}
function endRun(){

save.missionProgress.kills=(save.missionProgress.kills||0)+sessionKills;
save.missionProgress.bossKills=(save.missionProgress.bossKills||0)+sessionBossKills;
save.missionProgress.fireKills=(save.missionProgress.fireKills||0)+sessionFireKills;
save.missionProgress.dashUses=(save.missionProgress.dashUses||0)+sessionDash;
save.missionProgress.comboMax=Math.max(save.missionProgress.comboMax||0,sessionMaxCombo);
if(runFlawless)save.missionProgress.flawlessStages=(save.missionProgress.flawlessStages||0)+1;
save.coins+=runCoins;
writeSave();
}
function dmg(e,n,kx=0,ky=-70,isFireDmg=false,fromRemote=false){
if(e.dead)return;
if(MP.on&&MP.role==='client'&&!fromRemote){if(e.id)mpSendEvent('hitEnemy',{enemyId:e.id,power:Math.ceil(n),isFire:!!isFireDmg,kx:Math.round(kx),ky:Math.round(ky)});e.hurt=.16;blood(e.x+e.w/2,e.y+e.h*.43,e.boss?10:6,e.boss?1.2:.8);snd.hit();return;}
const bon=getBonus();
const mult=isFireDmg?(bon.fireMult||1):(bon.meleeMult||1);
if(p.damageBoost>0)n*=2;
e.hp-=Math.ceil(n*mult);e.hurt=.16;e.vx+=kx;e.vy+=ky;
gameHitStop=e.boss?MICRO.hitstopBoss:MICRO.hitstopSm;
if(save.shake){shake=Math.max(shake,e.boss?9:5);shakeT=Math.max(shakeT,.25)}
snd.hit();blood(e.x+e.w/2,e.y+e.h*.43,e.boss?20:13,e.boss?1.7:1.2);
impactFlash=.18;impactDir=p.dir;cinZoom=Math.max(cinZoom,e.boss?.13:.075);
if(e.hp<=0){
e.dead=1;e.death=.7;snd.kill();
const killer=MP.on&&MP.role==='host'&&MP.remoteKillCredit?MP.remoteKillCredit:MP.playerId;
const sc=e.score*(1+Math.floor(combo/2));
const coinReward=expansionCoinReward(Math.ceil((stageObj?.coinBonus||50)*(1+combo*.1)));
const remoteKill=MP.on&&MP.role==='host'&&killer&&killer!==MP.playerId;
if(remoteKill){
const pTypes=['heal','mana','speed','damage','coins'];
const power=(e.boss||Math.random()<.32)?pTypes[Math.floor(Math.random()*pTypes.length)]:'';
mpRewardRemotePlayer(killer,{score:sc,coins:coinReward,heal:1,boss:!!e.boss,fire:!!isFireDmg,power,powerCoins:expansionCoinReward(15)});
texts.push({x:e.x,y:e.y-20,s:'COOP +'+sc,life:.9,max:.9,col:'#60d0ff',big:0});
}else{
p.kills++;sessionKills++;
if(e.boss)sessionBossKills++;if(isFireDmg)sessionFireKills++;
addScore(sc,e.x+e.w/2,e.y);
addCoin(coinReward,e.x+e.w/2,e.y-14);
p.hp=clamp(p.hp+1,0,p.maxHp);
texts.push({x:e.x,y:e.y-20,s:tr('life'),life:.9,max:.9,col:'#ff7ab5',big:0});
spawnPowerup(e.x+e.w/2,e.y+e.h*.5,e.boss);
}
blood(e.x+e.w/2,e.y+e.h*.45,e.boss?55:28,e.boss?2.3:1.8);
addPart(e.x+e.w/2,e.y+e.h/2,'spark',18,{col:'#ffe66b'});
combo++;comboTimer=2.35;sessionMaxCombo=Math.max(sessionMaxCombo,combo);
if(combo>1){
const tier=clamp(Math.floor(combo/2),1,tr('combo').length-1);
texts.push({x:e.x+e.w/2,y:e.y+e.h*.3-26,s:tr('combo')[tier]+' x'+combo,life:1.05,max:1.05,col:combo>=5?'#ff315d':'#fff06f',big:1});
blip(rnd(600,900),.06,'triangle',.10,300);
}
}
}
function doDash(){
const bon=getBonus();
if(p.dashCD>0||p.dashing>0)return;
p.dashCD=.95*(bon.dashCDMult||1);p.dashing=.28;p.inv=.30+(bon.dashInvBonus||0);
if(p.speedBoost>0||bon.speedMult>1)p.vx=p.dir*620;else p.vx=p.dir*520;
p.vy=Math.min(p.vy,0);snd.dash();sessionDash++;
addPart(p.x+p.w/2,p.y+p.h/2,'spark',10,{vx:-p.dir*50,vy:0,col:'#00d0ff',life:.2,s:6});
if(getBonus().dashArea){
const box={x:p.dir>0?p.x+p.w:p.x-40,y:p.y,w:40,h:p.h};
for(const e of enemies)if(!e.dead&&aabb(box,e)){dmg(e,3,p.dir*200,-60)}
}
}
function axe(){
const bon=getBonus();
if(p.atk>0)return;const delay=bon.atkDelay||0;p.atk=.30+delay;snd.axe();
if(save.shake){shake=4;shakeT=.12}
const power=bon.baseMeleeDmg||5;
if(MP.on)mpSendEvent('attack',{power,weapon:save.equipped.weapon||'axe_default'});
const box={x:p.dir>0?p.x+18:p.x-58,y:p.y+4,w:68,h:42};
let hit=0;for(const e of enemies)if(!e.dead&&aabb(box,e)){dmg(e,power,p.dir*(e.boss?160:230),-95);hit=1}
addPart(p.x+p.w/2+p.dir*34,p.y+22,'slash',12,{vx:p.dir*140,vy:-20,life:.16,s:10});
if(hit)p.vx-=p.dir*32;
}

function isVulcanWeapon(){return (save.equipped.weapon||'')==='vulcan_mg'}
function vulcanMuzzle(x,y,dir){
addPart(x+dir*22,y,'spark',4,{col:'#ffca55',life:.14,s:5,vx:dir*rnd(80,190),vy:rnd(-55,30)});
addPart(x-dir*5,y+2,'smoke',2,{col:'#1a1210',life:.34,s:7,vx:-dir*rnd(8,26),vy:rnd(-28,-4)});
}
function vulcanFire(dt){
if(!isVulcanWeapon())return false;
p.mgCool=Math.max(0,(p.mgCool||0)-dt);p.mgSound=Math.max(0,(p.mgSound||0)-dt);p.mgEvent=Math.max(0,(p.mgEvent||0)-dt);p.mgFiring=.12;
if(p.mgCool>0)return true;
p.mgCool=.072;
const x=p.x+p.w/2+p.dir*24,y=p.y+18+rnd(-2,3),spread=rnd(-42,42);
const s={x,y,w:18,h:6,vx:p.dir*rnd(610,690),vy:spread,life:.72,dir:p.dir,damage:2,type:'vulcan_bullet',pierce:0};
shots.push(s);trailWeaponShot(s,3);vulcanMuzzle(x,y,p.dir);
p.mgRecoil=.16;p.mgKick=(p.mgKick||0)+1;p.vx-=p.dir*7;
if(save.shake){shake=Math.max(shake,2.4);shakeT=Math.max(shakeT,.075)}
if(p.mgSound<=0){snd.vulcan();p.mgSound=.13}
if(MP.on&&p.mgEvent<=0){mpSendEvent('vulcan',{power:2,weapon:'vulcan_mg'});p.mgEvent=.16}
return true;
}
function fire(){
const bon=getBonus();
const cost=Math.ceil(20*(bon.manaCost||1));
if(p.mp<cost||p.fire>0)return;
p.mp-=cost;p.fire=.34;snd.fire();
const x=p.x+p.w/2+p.dir*18,y=p.y+20;
const power=bon.baseFireDmg||4;
if(MP.on)mpSendEvent('fire',{power,weapon:save.equipped.weapon||'axe_default'});
const shotType=weaponShotType(save.equipped.weapon||'axe_default');
const s={x,y,w:31,h:17,vx:p.dir*390,vy:rnd(-16,16),life:1.35,dir:p.dir,damage:power,type:shotType,ricochet:bon.ricochet?1:0};
if(shotType==='web_shot'){s.w=24;s.h=24;s.vx=p.dir*330;s.life=1.55;s.slow=.8}
if(shotType==='witch_shot'){s.w=26;s.h=26;s.vx=p.dir*340;s.vy=Math.sin(gTime*5)*80;s.life=1.7;s.pierce=bon.pierce?2:0}
if(shotType==='dragon_lance'){s.w=46;s.h=22;s.vx=p.dir*470;s.life=1.5}
if(shotType==='alien_blade'){s.w=38;s.h=18;s.vx=p.dir*420;s.vy=rnd(-60,60);s.life=1.45;s.damage=Math.ceil(power*1.15)}
shots.push(s);trailWeaponShot(s,10);
}
function doBomb(){
const bon=getBonus();
if(!bon.hasBomb||bombCD>0)return;
bombCD=20;snd.bomb();
if(MP.on)mpSendEvent('bomb',{weapon:save.equipped.weapon||'axe_default'});
for(const e of enemies)if(!e.dead&&Math.abs((e.x+e.w/2)-(p.x+p.w/2))<120&&Math.abs((e.y+e.h/2)-(p.y+p.h/2))<80){dmg(e,12,p.dir*(e.boss?100:200),-120)}
for(let i=0;i<24;i++)addPart(p.x+p.w/2,p.y+p.h/2,'spark',1,{col:['#ff4400','#ff8800','#ffdd00'][i%3],vx:rnd(-200,200),vy:rnd(-200,50),life:.6,s:rnd(4,10)});
shake=12;shakeT=.5;
}
function phys(e,dt){e.vy+=930*dt;e.x+=e.vx*dt;e.y+=e.vy*dt;e.x=clamp(e.x,18,L.width-e.w-18);const y=gy(e.x+e.w/2);if(e.y+e.h>=y){e.y=y-e.h;e.vy=0;e.on=1}else e.on=0}

function completeStage(){
if(!victory)return;
const nextId=li+1;
const dim=getDimensionForStage(li);
save.dimensionClears=save.dimensionClears||{1:0,2:0,3:0};
save.dimensionClears[dim]=Math.max(save.dimensionClears[dim]||0,(li%8)+1);
if(li===7)save.unlockedDimension=Math.max(save.unlockedDimension||1,2);
if(li===15)save.unlockedDimension=Math.max(save.unlockedDimension||1,3);
save.currentDimension=Math.max(save.currentDimension||1,getDimensionForStage(Math.min(nextId,STAGE_DATA.length-1)));
if(nextId<STAGE_DATA.length&&!save.unlockedStages.includes(nextId))save.unlockedStages.push(nextId);
if(!save.completedStages.includes(li))save.completedStages.push(li);
const stars=runFlawless?3:(p.hp>=p.maxHp*.5?2:1);
save.stageStars[li]=Math.max(save.stageStars[li]||0,stars);
save.selectedStage=Math.min(nextId,STAGE_DATA.length-1);
if(runScore>save.hiScore)save.hiScore=runScore;
if(MP.on&&MP.role==='host'&&MP.roomRef){
for(const [id,pl] of Object.entries(MP.players||{})){
if(id!==MP.playerId&&pl&&pl.online&&pl.stage===li&&!pl.dead)MP.roomRef.child('players/'+id+'/inbox').push({kind:'stageComplete',stage:li,t:Date.now()});
}
}
endRun();
say(tr('victory'),4,'#ffd74f');
texts.push({x:cam.x+W/2,y:90,s:'🪙 +'+runCoins,life:4,max:4,col:'#ffe060',big:1});
scheduleNextStage(nextId);
}

function update(dt){
if(!started)return;
bgm(dt,stageObj?.world||0);
stageFlash=Math.max(0,stageFlash-dt);
if(gameHitStop>0){gameHitStop-=dt;updFX(dt*.25);return}
gTime+=dt;
const dt2=slowMoT>0?dt*.55:dt;slowMoT=Math.max(0,slowMoT-dt);
transitionT=Math.max(0,transitionT-dt);
comboTimer=Math.max(0,comboTimer-dt);if(comboTimer<=0)combo=0;
cinZoom=Math.max(0,cinZoom-dt*1.8);impactFlash=Math.max(0,impactFlash-dt*2.7);
execHintT=Math.max(0,execHintT-dt);
shieldCD=Math.max(0,shieldCD-dt);bombCD=Math.max(0,bombCD-dt);
if(keys.atk)enterHeld+=dt;
if(gameOver||victory){
if(MP.on&&MP.role==='host'&&gameOver&&!victory&&!mpAllPlayersDead()){
const rt=mpPrimaryAliveRemote();
const snap=rt?{x:p.x,y:p.y,w:p.w,h:p.h,vx:p.vx,vy:p.vy,dir:p.dir,hp:p.hp,mp:p.mp,on:p.on,jumps:p.jumps,inv:p.inv,hurt:p.hurt,atk:p.atk,fire:p.fire,dashing:p.dashing}:null;
if(rt){p.x=rt.x;p.y=rt.y;p.w=rt.w;p.h=rt.h;p.vx=0;p.vy=0;p.dir=rt.dir||1;p.hp=rt.hp||1;p.mp=rt.mp||0;p.on=1;p.jumps=0;p.inv=0;p.hurt=0;p.atk=0;p.fire=0;p.dashing=0}
updEnemies(dt2);updShots(dt2);updHaz(dt2);updFX(dt2);updPowerups(dt2);ambientBurst(dt);
const camX=rt?rt.x:snap?snap.x:p.x,camDir=rt?(rt.dir||1):p.dir;
if(snap)Object.assign(p,snap);
for(const m of frontMist){m.life-=dt;m.x+=m.vx*dt;m.y+=m.vy*dt;m.rot+=dt*(m.type==='leaf'?2:0)}
frontMist=frontMist.filter(m=>m.life>0&&m.x>cam.x-80&&m.x<cam.x+W+80&&m.y<H+50);
cam.tx=clamp(camX-W*.36+camDir*24,0,Math.max(0,L.width-W));cam.x=lerp(cam.x,cam.tx,clamp(dt*4,0,1));
if(defeatRestartBtn)defeatRestartBtn.style.display='none';
}else updFX(dt);
mpTick(dt);updateGameplayMenu();Object.assign(prev,keys);return}
const bon=getBonus();
const ax=keys.left?-1:keys.right?1:0;
if(ax)p.dir=ax;
const spd=(p.speedBoost>0||bon.speedMult>1)?1700:1420;
if(p.dashing<=0){p.vx+=ax*spd*dt2;p.vx*=Math.pow(ax?.035:.0007,dt2);p.vx=clamp(p.vx,-220,220)}
p.dashCD=Math.max(0,p.dashCD-dt);
if(p.dashing>0){p.dashing-=dt;dashTrail.push({x:p.x,y:p.y,life:.24,max:.24});if(p.dashing<=0)p.vx*=.48}
else if(keys.dash&&!prev.dash)doDash();
dashTrail=dashTrail.filter(t=>(t.life-=dt)>0);
const maxJumps=bon.tripleJump?3:2;
if(keys.jump&&!prev.jump&&(p.on||p.jumps<maxJumps)){p.vy=p.jumps?-365:-440;p.on=0;p.jumps++;snd.jump();addPart(p.x+p.w/2,p.y+p.h,'dust',10,{life:.34})}
if(keys.atk&&!prev.atk)axe();
if(isVulcanWeapon()){if(keys.fire)vulcanFire(dt);else p.mgFiring=0}else if(keys.fire&&!prev.fire)fire();
if(keys.bomb&&!prev.bomb)doBomb();
p.vy+=980*dt2;p.x+=p.vx*dt2;p.y+=p.vy*dt2;p.x=clamp(p.x,12,L.width-p.w-12);
const floor=gy(p.x+p.w/2);const was=p.on;
if(p.y+p.h>=floor){if(!was&&p.vy>150){snd.land();if(save.shake){shake=3;shakeT=.1}addPart(p.x+p.w/2,floor,'dust',9,{life:.3})}p.y=floor-p.h;p.vy=0;p.on=1;p.jumps=0}else p.on=0;
p.atk=Math.max(0,p.atk-dt);p.fire=Math.max(0,p.fire-dt);p.mgFiring=Math.max(0,(p.mgFiring||0)-dt);p.mgRecoil=Math.max(0,(p.mgRecoil||0)-dt*2.8);p.mgKick=Math.max(0,(p.mgKick||0)-dt*16);
p.hurt=Math.max(0,p.hurt-dt);p.inv=Math.max(0,p.inv-dt);
const manaRate=18*(bon.manaRegen||1);p.mp=clamp(p.mp+manaRate*dt,0,p.maxMp);
p.speedBoost=Math.max(0,p.speedBoost-dt);p.damageBoost=Math.max(0,p.damageBoost-dt);
if(Math.abs(p.vx)>25&&p.on){p.walkT+=dt;if(p.walkT>.105){p.walkT=0;p.walk=(p.walk+1)%4}}

const t=stageObj?.theme;
if(t==='wind'&&Math.random()<dt*.18){p.vx+=rnd(-28,28);p.vy+=rnd(-8,8)}
if(!MP.on||MP.role==='host')updEnemies(dt2);else{mpApplyEnemyStates(dt2);mpApplyShotStates(dt2);mpApplyHazardStates(dt2)}updShots(dt2);updHaz(dt2);updFX(dt2);updPowerups(dt2);ambientBurst(dt);
for(const m of frontMist){m.life-=dt;m.x+=m.vx*dt;m.y+=m.vy*dt;m.rot+=dt*(m.type==='leaf'?2:0)}
frontMist=frontMist.filter(m=>m.life>0&&m.x>cam.x-80&&m.x<cam.x+W+80&&m.y<H+50);
for(const d of decals)d.life-=dt;decals=decals.filter(d=>d.life>0);
const near=enemies.find(e=>!e.dead&&e.hp>0&&e.hp<=Math.max(4,e.maxHp*.18)&&Math.abs((e.x+e.w/2)-(p.x+p.w/2))<86);
if(near)execHintT=.18;
cam.tx=clamp(p.x-W*.36+p.dir*24,0,Math.max(0,L.width-W));
cam.x=lerp(cam.x,cam.tx,clamp(dt*8,0,1));
cam.y=lerp(cam.y,p.on?0:clamp(p.vy/18,-8,10),clamp(dt*4,0,1));
if(save.shake)shake=Math.max(0,shake-shake*dt*7);shakeT=Math.max(0,shakeT-dt);
if(p.x>L.goal&&stageReadyToComplete()){
mpTryCompleteStage('localGoal');
}
mpTick(dt);
Object.assign(prev,keys);
}

function updEnemies(dt){for(const e of enemies){if(e.dead){e.death-=dt;continue}e.t+=dt;e.hurt=Math.max(0,e.hurt-dt);const target=mpTargetForEnemy(e);const dx=(target.x+target.w/2)-(e.x+e.w/2),dist=Math.abs(dx);e.dir=dx>=0?1:-1;const oldEX=e.x,oldEY=e.y;

if(e.type==='mush'){e.cool=(e.cool||0)-dt;e.vx=e.dir*(dist<340?e.speed:0);if(dist<70&&e.cool<=0){e.vx=e.dir*180;e.vy=-170;e.cool=rnd(.8,1.5)}phys(e,dt);if(aabb(e,p))hurtPlayer(1,e.dir*150)}
if(e.type==='mushking'){e.spore-=dt;e.jump=(e.jump||0)-dt;e.vx=e.dir*(dist<480?38:0);if(e.jump<=0&&dist<360){e.vy=-380;e.vx=e.dir*150;e.jump=1.6}if(e.spore<=0&&dist<420){green(e.x+e.w/2,gy(e.x)-18,6);e.spore=1.8}phys(e,dt);if(aabb(e,p))hurtPlayer(1,e.dir*140)}
if(e.type==='slug'){e.jump-=dt;e.spit-=dt;e.vx=e.dir*(dist<420?22:0);if(e.jump<=0&&dist<350){e.vy=-350;e.vx=e.dir*130;e.jump=1.7}if(e.spit<=0&&dist<430){shots.push({type:'acid',x:e.x+e.w/2,y:e.y+20,w:19,h:11,vx:e.dir*205,vy:-90,life:1.7,damage:1,dir:e.dir});e.spit=1.25}phys(e,dt);if(aabb(e,p))hurtPlayer(1,e.dir*110)}
if(e.type==='barb'){e.slam-=dt;e.charge=(e.charge||0)-dt;e.vx=e.dir*(dist<480?46:0);if(e.charge>0)e.vx=e.dir*260;if(dist<120&&e.slam<=0){e.slam=1.35;e.charge=.18;e.vy=-120;shake=7}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*220)}
if(e.type==='queen'){if(e.hp<e.maxHp*.45)e.phase=1;e.bolt-=dt;e.tp-=dt;e.kick=(e.kick||0)-dt;e.vx=e.dir*(e.phase?56:38);if(e.tp<=0){e.x=clamp(mpTargetX(target)+rnd(150,260)*-e.dir,240,L.width-160);green(e.x+e.w/2,e.y+30,18);e.tp=e.phase?1.8:2.4}if(e.bolt<=0){const tx=mpTargetX(target);hazards.push({x:tx+rnd(-10,10),y:30,w:8,h:gy(tx)-30,life:1.1,type:'bolt',warn:1.6,damage:1,hitCD:3.2,knock:35});e.bolt=e.phase?5.2:6.4}if(dist<90&&e.kick<=0){e.vx=e.dir*260;e.kick=1.05}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*190)}
if(e.type==='clownlet'){e.cool=(e.cool||0)-dt;e.bomb-=dt;e.vx=e.dir*(dist<360?e.speed:0);if(dist<80&&e.cool<=0){e.vy=-210;e.cool=rnd(.7,1.3)}if(e.bomb<=0&&dist<400){hazards.push({type:'balloon',x:e.x+e.w/2,y:e.y,w:22,h:22,vy:-80,vx:e.dir*120,life:1.8,damage:1});e.bomb=1.6}phys(e,dt);if(aabb(e,p))hurtPlayer(1,e.dir*160)}
if(e.type==='clown'){e.bomb=(e.bomb||0)-dt;e.leap-=dt;e.vx=e.dir*(dist<500?32:0);if(e.leap<=0&&dist<300){e.vy=-420;e.vx=e.dir*200;e.leap=2.0}if(e.bomb<=0){for(let i=0;i<3;i++)hazards.push({type:'balloon',x:e.x+e.w/2+rnd(-40,40),y:e.y,w:22,h:22,vy:rnd(-120,-60),vx:rnd(-80,80),life:2.0,damage:1});e.bomb=1.0}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*200)}
if(e.type==='candyImp'){e.cool=(e.cool||0)-dt;e.shot-=dt;e.vx=e.dir*(dist<360?e.speed:0);if(dist<80&&e.cool<=0){e.vy=-200;e.cool=rnd(.7,1.2)}if(e.shot<=0&&dist<380){shots.push({type:'candy',x:e.x+e.w/2,y:e.y+18,w:14,h:10,vx:e.dir*240,vy:-40,life:1.4,damage:1,dir:e.dir});e.shot=1.2}phys(e,dt);if(aabb(e,p))hurtPlayer(1,e.dir*150)}
if(e.type==='caramel'){e.shot-=dt;e.pool-=dt;e.jump=(e.jump||0)-dt;e.vx=e.dir*(dist<480?38:0);if(e.jump<=0&&dist<320){e.vy=-400;e.vx=e.dir*180;e.jump=2.2}if(e.shot<=0&&dist<450){for(let i=-1;i<=1;i++)shots.push({type:'candy',x:e.x+e.w/2,y:e.y+26,w:14,h:10,vx:e.dir*220+i*40,vy:-30+i*40,life:1.5,damage:1,dir:e.dir});e.shot=.9}if(e.pool<=0){addPart(e.x+e.w/2,gy(e.x)-10,'spark',6,{col:'#ffcc44',life:.25,s:4});e.pool=2.4}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*200)}
if(e.type==='rootling'){e.root=(e.root||0)-dt;e.vx=e.dir*(dist<340?e.speed:0);if(dist<300&&e.root<=0){green(e.x+e.w/2,e.y+12,5);e.root=rnd(1.8,2.6)}phys(e,dt);if(aabb(e,p))hurtPlayer(1,e.dir*140)}
if(e.type==='treeking'){e.slam-=dt;e.spawn-=dt;e.vx=e.dir*(dist<500?22:0);if(e.slam<=0&&dist<160){shake=Math.max(shake,5);green(mpTargetX(target),gy(mpTargetX(target))-18,8);e.slam=2.8}if(e.spawn<=0){enemies.push(makeEnemy('rootling',clamp(e.x+rnd(-120,120),80,L.width-80)));e.spawn=4.2}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*180)}
if(e.type==='mirror'){if(e.hp<e.maxHp*.5&&e.phase===0){e.phase=1;for(let i=0;i<2;i++)enemies.push(makeEnemy('mush',clamp(e.x+rnd(-200,200),80,L.width-80)))}e.fire-=dt;e.dash-=dt;e.vx=e.dir*(dist<440?(e.phase?80:48):0);if(e.dash<=0&&dist<320){e.vx=e.dir*460;e.dash=e.phase?.7:1.1}if(e.fire<=0){shots.push({type:'green',x:e.x+e.w/2,y:e.y+28,w:31,h:17,vx:e.dir*370,vy:-10,life:1.4,dir:e.dir,damage:2});if(e.phase)shots.push({type:'green',x:e.x+e.w/2,y:e.y+28,w:31,h:17,vx:e.dir*370,vy:40,life:1.4,dir:e.dir,damage:2});e.fire=e.phase?.55:.85}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*210)}

if(e.type==='spider_woman'){e.web-=dt;e.jump-=dt;e.vx=e.dir*(dist<500?e.speed:0);if(e.jump<=0&&dist<260){e.vy=-330;e.vx=e.dir*210;e.jump=rnd(.9,1.4)}if(e.web<=0&&dist<440){shots.push({type:'web',x:e.x+e.w/2,y:e.y+28,w:24,h:14,vx:e.dir*250,vy:-35,life:1.6,damage:1,dir:e.dir,slow:.9});e.web=rnd(1.1,1.7)}phys(e,dt);if(aabb(e,p))hurtPlayer(e.damage||2,e.dir*180)}
if(e.type==='zombie'){e.grab-=dt;e.vx=e.dir*(dist<380?(e.speed||30):0);if(dist<70&&e.grab<=0){e.vx=e.dir*90;e.grab=1.0}phys(e,dt);if(aabb(e,p))hurtPlayer(e.damage||2,e.dir*90)}
if(e.type==='giant'){e.slam-=dt;e.vx=e.dir*(dist<520?(e.speed||24):0);if(e.slam<=0&&dist<180){e.slam=2.1;e.vy=-145;shake=10;addPart(e.x+e.w/2,gy(e.x)-10,'dust',12,{life:.35,s:6,vx:rnd(-90,90),vy:rnd(-80,-10)})}phys(e,dt);if(aabb(e,p))hurtPlayer(e.damage||4,e.dir*260)}
if(e.type==='skeleton'){e.throw-=dt;e.vx=e.dir*(dist<460?(e.speed||66):0);if(e.throw<=0&&dist<480){shots.push({type:'bone',x:e.x+e.w/2,y:e.y+24,w:22,h:9,vx:e.dir*310,vy:-80,life:1.4,damage:2,dir:e.dir});e.throw=rnd(1.0,1.6)}phys(e,dt);if(aabb(e,p))hurtPlayer(e.damage||2,e.dir*155)}
if(e.type==='witch'){e.hex-=dt;e.tp-=dt;e.vx=e.dir*(dist<430?(e.speed||42):0);if(e.tp<=0&&dist<300){green(e.x+e.w/2,e.y+30,12);e.x=clamp(mpTargetX(target)+rnd(170,260)*-e.dir,180,L.width-180);e.tp=2.2}if(e.hex<=0){shots.push({type:'hex',x:e.x+e.w/2,y:e.y+24,w:24,h:24,vx:e.dir*260,vy:rnd(-60,35),life:1.8,damage:2,dir:e.dir});e.hex=rnd(.8,1.3)}phys(e,dt);if(aabb(e,p))hurtPlayer(e.damage||2,e.dir*150)}
if(e.type==='dragon'){e.flame-=dt;e.y=lerp(e.y,gy(e.x)-135+Math.sin(gTime*3+e.x*.01)*18,.05);e.vx=e.dir*(dist<700?(e.speed||78):0);if(e.flame<=0&&dist<620){for(let i=0;i<3;i++)shots.push({type:'dragon_fire',x:e.x+e.w/2,y:e.y+30+i*4,w:34,h:18,vx:e.dir*(310+i*35),vy:40+i*25,life:1.6,damage:2,dir:e.dir});e.flame=rnd(.8,1.25)}phys(e,dt*.35);if(aabb(e,p))hurtPlayer(e.damage||3,e.dir*220)}
if(e.type==='alien_mage'){e.orb-=dt;e.phase+=dt;e.vx=e.dir*(dist<480?(e.speed||54):0)+Math.sin(e.phase*5)*35;if(e.orb<=0&&dist<540){shots.push({type:'void_shot',x:e.x+e.w/2,y:e.y+24,w:28,h:16,vx:e.dir*300,vy:Math.sin(gTime*6)*55,life:1.8,damage:2,dir:e.dir});e.orb=rnd(.65,1.1)}phys(e,dt);if(aabb(e,p))hurtPlayer(e.damage||2,e.dir*160)}
if(e.type==='void_matron'){if(e.hp<e.maxHp*.5)e.phase=1;e.spawn-=dt;e.voidRay-=dt;e.vx=e.dir*(dist<580?(e.phase?62:42):0);if(e.voidRay<=0){green(mpTargetX(target),gy(mpTargetX(target))-20,8);e.voidRay=e.phase?1.5:2.0}if(e.spawn<=0){enemies.push(applyExpansionDifficulty(makeEnemy(e.phase?'alien_mage':'skeleton',clamp(e.x+rnd(-160,160),100,L.width-130))));e.spawn=e.phase?2.4:3.4}phys(e,dt);if(aabb(e,p))hurtPlayer(e.damage||4,e.dir*220)}

const isW2Simple=['pyrefiend','deepDrifter','boneling','neonDrone','dustDevil','shardling','windWraith','shadowFiend'].includes(e.type);
if(isW2Simple){e.cool=(e.cool||0)-dt;e.fireCool=(e.fireCool||rnd(1,2.5))-dt;e.vx=e.dir*(dist<360?e.speed||52:0);if(dist<80&&e.cool<=0){e.vy=-200;e.cool=rnd(.8,1.4)}if(e.fireCool<=0&&dist<380){shots.push({type:'energy',x:e.x+e.w/2,y:e.y+e.h*.4,w:14,h:10,vx:e.dir*230,vy:-20,life:1.4,damage:1,dir:e.dir});e.fireCool=rnd(1.2,2.2)}phys(e,dt);if(aabb(e,p))hurtPlayer(1,e.dir*150)}
const isW2Brute=['lavaBrute','abyssWorm','ghostKnight','glitchFiend','sandGolem','crystalBrute','stormKnight','darkKnight'].includes(e.type);
if(isW2Brute){e.slam=(e.slam||rnd(1.2,2))-dt;e.vx=e.dir*(dist<440?e.speed||34:0);if(dist<130&&e.slam<=0){e.slam=rnd(1.2,2);e.vy=-180;e.vx=e.dir*240;if(save.shake){shake=7;shakeT=.3}}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*200)}

const isW2Boss=['volcanic','krakenette','lich','neonGod','saltGolem','crystalQueen','windPhantom','darkCore'].includes(e.type);
if(isW2Boss){if(e.hp<e.maxHp*.4&&!e.phase){e.phase=1;blip(200,.3,'sawtooth',.3,300)}e.eruption=(e.eruption||0)-dt;e.summon=(e.summon||0)-dt;e.vx=e.dir*(dist<500?(e.phase?70:44):0);if(e.eruption<=0){const ph=1;for(let i=0;i<ph;i++){const rx=mpTargetX(target)+rnd(-100,100);hazards.push({type:'boss_shot',x:rx,y:rnd(12,42),w:46,h:46,vy:rnd(24,36),life:4.8,damage:3,warn:.55,meteor:1,rot:rnd(0,7),spin:rnd(-2.4,2.4)})}e.eruption=e.phase?2.9:3.6}if(e.summon<=0&&enemies.filter(x=>!x.dead&&!x.boss).length<4){const minions={volcanic:'pyrefiend',krakenette:'deepDrifter',lich:'boneling',neonGod:'neonDrone',saltGolem:'dustDevil',crystalQueen:'shardling',windPhantom:'windWraith',darkCore:'shadowFiend'};const mt=minions[e.type]||'mush';enemies.push(makeEnemy(mt,clamp(e.x+rnd(-150,150),60,L.width-60)));e.summon=3.2}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*200)}

const isW3Simple=['starSpawn','gearling','blobTwin','nullFiend'].includes(e.type);
if(isW3Simple){e.cool=(e.cool||0)-dt;e.fireCool=(e.fireCool||rnd(.8,2))-dt;e.vx=e.dir*(dist<380?e.speed||55:0);if(dist<80&&e.cool<=0){e.vy=-220;e.cool=rnd(.7,1.3)}if(e.fireCool<=0&&dist<400){const yOff=rnd(-30,10);shots.push({type:'void_shot',x:e.x+e.w/2,y:e.y+e.h*.4,w:16,h:12,vx:e.dir*260,vy:yOff,life:1.4,damage:2,dir:e.dir});e.fireCool=rnd(.9,2.0)}phys(e,dt);if(aabb(e,p))hurtPlayer(2,e.dir*170)}
const isW3Brute=['cosmicBrute','steamBrute','muscleMass'].includes(e.type);
if(isW3Brute){e.slam=(e.slam||1.2)-dt;e.vx=e.dir*(dist<460?e.speed||36:0);if(dist<140&&e.slam<=0){e.slam=1.4;e.vy=-200;e.vx=e.dir*280;if(save.shake){shake=8;shakeT=.35}}phys(e,dt);if(aabb(e,p))hurtPlayer(3,e.dir*240)}
const isW3Boss=['voidBeast','mechaBoss','organicTitan','nullKing'].includes(e.type);
if(isW3Boss){if(e.hp<e.maxHp*.35&&!e.phase){e.phase=1;for(let i=0;i<2;i++)enemies.push(makeEnemy(e.type==='mechaBoss'?'gearling':e.type==='organicTitan'?'blobTwin':'nullFiend',clamp(e.x+rnd(-200,200),60,L.width-60)))}e.eruption=(e.eruption||0)-dt;e.vx=e.dir*(dist<520?(e.phase?90:52):0);if(e.eruption<=0){const n=1;for(let i=0;i<n;i++){hazards.push({type:'boss_shot',x:mpTargetX(target)+rnd(-140,140),y:rnd(10,44),w:50,h:50,vy:rnd(28,44),life:4.4,damage:3,warn:.55,meteor:1,rot:rnd(0,7),spin:rnd(-2.4,2.4)})}e.eruption=e.phase?2.8:3.5}phys(e,dt);if(aabb(e,p))hurtPlayer(3,e.dir*230)}
if(MP.on&&MP.role==='host')mpEnemyHitRemotePlayers(e,e.damage||(e.boss?2:1),(e.dir||1)*(e.boss?220:150));
if(e.boss){
const moved=Math.abs((e.x||0)-oldEX)+Math.abs((e.y||0)-oldEY)+Math.abs(e.vx||0)+Math.abs(e.vy||0);
e.aiStall=(moved<.35&&dist>90)?((e.aiStall||0)+dt):0;
if(e.aiStall>1.15){e.vx=e.dir*(e.phase?90:58);e.vy=Math.min(e.vy||0,-60);e.aiStall=0}
}
}}

function updShots(dt){
const bon=getBonus();
for(const s of shots){s.life-=dt;s.vy+=s.type==='acid'?260*dt:0;s.x+=s.vx*dt;s.y+=s.vy*dt;
if(isPlayerShotType(s)){
trailWeaponShot(s,2);
for(const e of enemies)if(!e.dead&&aabb(s,e)){dmg(e,s.damage,s.dir*(s.type==='vulcan_bullet'?95:120),s.type==='vulcan_bullet'?-22:-45,s.type==='green'||s.type==='vulcan_bullet');
if(s.type==='vulcan_bullet')addPart(s.x,s.y,'spark',8,{col:'#ffb347',life:.16,s:4,vx:s.dir*rnd(20,95),vy:rnd(-70,45)});
if(s.ricochet){s.vx*=-1;s.ricochet=0}else s.life=0;
trailWeaponShot(s,16)}
}else if(s.type==='candy'||s.type==='energy'){addPart(s.x,s.y,'spark',1,{col:s.type==='candy'?'#ff88cc':'#00ccff',life:.18,s:4});if(aabb(s,p)){hurtPlayer(s.damage,s.dir*100);s.life=0}if(MP.on&&MP.role==='host')for(const [id,pl] of Object.entries(MP.players||{})){if(id!==MP.playerId&&pl&&pl.stage===li&&!pl.dead&&aabb(s,{x:+pl.x||0,y:+pl.y||0,w:28,h:48})){mpHurtRemotePlayer(id,s.damage||1,(s.dir||1)*100);s.life=0}}}
else{addPart(s.x,s.y,'acid',1,{life:.24,s:4});if(aabb(s,p)){hurtPlayer(s.damage,s.dir*100);s.life=0}if(MP.on&&MP.role==='host')for(const [id,pl] of Object.entries(MP.players||{})){if(id!==MP.playerId&&pl&&pl.stage===li&&!pl.dead&&aabb(s,{x:+pl.x||0,y:+pl.y||0,w:28,h:48})){mpHurtRemotePlayer(id,s.damage||1,(s.dir||1)*100);s.life=0}}}
}
shots=shots.filter(s=>s.life>0&&s.x>cam.x-80&&s.x<cam.x+W+300&&s.y<H+80);
}
function isVisualHazard(h){return h&&((h.type==='boss_shot')||(h.type==='bolt')||(h.type==='balloon'));}
function isDamagingHazard(h){
return h&&((h.type==='bolt')||(h.type==='balloon'));
}
function hazardDamage(h){
if(h.type==='boss_shot')return 0;
if(h.type==='bolt')return 1;
if(h.type==='balloon')return h.damage||1;
return 0;
}
function hazardKnock(h,obj){
const dir=((obj.x||0)<h.x?-1:1);
if(h.type==='boss_shot')return dir*170;
if(h.type==='bolt')return dir*45;
return dir*(h.knock||80);
}
function updHaz(dt){
hazards=hazards.filter(h=>isVisualHazard(h));
for(const h of hazards){
h.life-=dt;if(h.warn>0)h.warn=Math.max(0,h.warn-dt);if(h.vy)h.y+=h.vy*dt;if(h.vx)h.x+=h.vx*dt;
let hitBox=h;
if(h.type==='boss_shot'){
h.rot=(h.rot||0)+(h.spin||2)*dt;
hitBox={x:h.x-8,y:h.y-6,w:h.w+16,h:h.h+14};
if((h.warn||0)<=0&&Math.random()<.45)addPart(h.x+h.w/2+rnd(-8,8),h.y-6,'smoke',1,{life:.55,s:rnd(5,10),vx:rnd(-18,18),vy:rnd(-34,-10),col:'#2b2530'});
const floorY=gy(h.x+h.w/2);
if((h.warn||0)<=0&&h.y+h.h>=floorY-4){
addPart(h.x+h.w/2,floorY-8,'spark',10,{col:'#ff7a18',life:.24,s:5,vx:rnd(-90,90),vy:rnd(-120,-20)});
if(save.shake){shake=Math.max(shake,6);shakeT=Math.max(shakeT,.18)}
h.life=0;
continue;
}
}
h.localHitCD=Math.max(0,(h.localHitCD||0)-dt);
if(isDamagingHazard(h)&&(h.warn||0)<=0&&aabb(hitBox,p)&&h.localHitCD<=0){
const isMeteor=h.type==='boss_shot';
hurtPlayer(hazardDamage(h),hazardKnock(h,p));
h.localHitCD=h.hitCD||(h.type==='bolt'?2.4:.85);
if(h.type==='bolt')h.life=0;
if(isMeteor){
addPart(h.x+h.w/2,h.y+h.h/2,'spark',14,{col:'#ff7a18',life:.22,s:5,vx:rnd(-110,110),vy:rnd(-120,40)});
h.life=0;
}
}
if(isDamagingHazard(h)&&MP.on&&MP.role==='host'&&(h.warn||0)<=0)for(const [id,pl] of Object.entries(MP.players||{})){
const mpBox={x:+pl.x||0,y:+pl.y||0,w:28,h:48};
if(id!==MP.playerId&&pl&&pl.stage===li&&!pl.dead&&aabb(hitBox,mpBox)){
h.mpHitCD=h.mpHitCD||{};h.mpHitCD[id]=(h.mpHitCD[id]||0)-dt;
if(h.mpHitCD[id]<=0){h.mpHitCD[id]=h.hitCD||(h.type==='bolt'?2.4:.85);mpHurtRemotePlayer(id,hazardDamage(h),hazardKnock(h,mpBox));if(h.type==='boss_shot'||h.type==='bolt')h.life=0}
}
}
if(h.type==='acid'&&Math.random()<.3)addPart(h.x+rnd(0,h.w),h.y,'acid',1,{life:.32,s:4});
}
hazards=hazards.filter(h=>h.life>0);
}
function updFX(dt){for(const q of particles){q.life-=dt;q.x+=q.vx*dt;q.y+=q.vy*dt;q.vy+=q.type==='green'?-25*dt:q.type==='dust'?-20*dt:q.type==='smoke'?-8*dt:260*dt;q.vx*=Math.pow(q.type==='smoke'?.18:.04,dt);q.rot+=dt*3}particles=particles.filter(q=>q.life>0);if(particles.length>280)particles.splice(0,particles.length-280);for(const m of texts){m.life-=dt;m.y-=dt*18}texts=texts.filter(m=>m.life>0);if(texts.length>18)texts.splice(0,texts.length-18)}
function updPowerups(dt){
const bon=getBonus();
for(const pw of powerups){pw.life-=dt;pw.bob+=dt*3;
if(aabb(pw,p)){snd.powerup();
if(pw.type==='heal')p.hp=clamp(p.hp+3,0,p.maxHp);
else if(pw.type==='mana')p.mp=p.maxMp;
else if(pw.type==='speed')p.speedBoost=4;
else if(pw.type==='damage')p.damageBoost=4;
else if(pw.type==='coins')addCoin(rnd(10,25),pw.x,pw.y);
const names={heal:tr('powerHeal'),mana:tr('powerMana'),speed:tr('powerSpeed'),damage:tr('powerDamage'),coins:tr('powerCoins')};
const cols={heal:'#ff7ac8',mana:'#21ff4b',speed:'#ffe060',damage:'#ff5500',coins:'#ffe060'};
say(names[pw.type]||'+',.9,cols[pw.type]||'#fff');
pw.life=0;
}
}
powerups=powerups.filter(pw=>pw.life>0);
}
function ambientBurst(dt){
ambTick-=dt;if(ambTick>0)return;
const t=stageObj?.theme||'forest';
ambTick=t==='snow'?.045:t==='castle'?.075:t==='swamp'?.09:.11;
const x=cam.x+rnd(-30,W+30),floor=gy(x);
if(t==='forest')frontMist.push({type:'leaf',x,y:rnd(16,floor-20),vx:rnd(-22,-8),vy:rnd(8,24),s:rnd(2,4),life:rnd(2.4,4),max:4,rot:rnd(0,7)});
if(t==='swamp')frontMist.push({type:'spore',x,y:rnd(30,floor-20),vx:rnd(-8,8),vy:rnd(-18,-5),s:rnd(2,6),life:rnd(1.4,2.8),max:2.8,rot:0});
if(t==='snow')frontMist.push({type:'snow',x,y:rnd(-10,80),vx:rnd(-28,-8),vy:rnd(22,48),s:rnd(1,3),life:rnd(2,4),max:4,rot:0});
if(t==='castle')frontMist.push({type:'ember',x,y:rnd(45,floor-10),vx:rnd(-10,10),vy:rnd(-36,-12),s:rnd(1.5,4),life:rnd(1.2,2.4),max:2.4,rot:0});
if(t==='circus')frontMist.push({type:'confetti',x,y:rnd(0,60),vx:rnd(-14,14),vy:rnd(18,40),s:rnd(3,6),life:rnd(2,3.5),max:3.5,rot:rnd(0,7),col:['#ff5ab8','#ffe060','#60f0ff','#7dff54'][Math.floor(rnd(0,4))]});
if(t==='volcano')frontMist.push({type:'ember',x,y:rnd(floor-30,floor-80),vx:rnd(-15,15),vy:rnd(-50,-20),s:rnd(2,5),life:rnd(.8,2),max:2,rot:0,col:'#ff4400'});
if(t==='neon')frontMist.push({type:'glitch_px',x:cam.x+rnd(0,W),y:rnd(0,H),vx:rnd(-5,5),vy:rnd(-5,5),s:rnd(2,5),life:rnd(.2,.5),max:.5,rot:0,col:['#ff00ff','#00ffff','#0ff0'][Math.floor(rnd(0,3))]});
if(t==='space')frontMist.push({type:'snow',x,y:rnd(-10,H*.6),vx:rnd(-4,4),vy:rnd(8,20),s:rnd(.5,2),life:rnd(3,6),max:6,rot:0,col:'#ffffff'});
if(frontMist.length>140)frontMist.splice(0,frontMist.length-140);
}

function dlb(x,y,r,col,a=.18){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,col);gr.addColorStop(.45,col);gr.addColorStop(1,'rgba(0,0,0,0)');g.globalAlpha=a;g.globalCompositeOperation='lighter';g.fillStyle=gr;g.beginPath();g.arc(x,y,r,0,7);g.fill();g.globalCompositeOperation='source-over';g.globalAlpha=1}
function rr(c,x,y,w,h,r,fill,stroke){c.beginPath();c.moveTo(x+r,y);c.lineTo(x+w-r,y);c.quadraticCurveTo(x+w,y,x+w,y+r);c.lineTo(x+w,y+h-r);c.quadraticCurveTo(x+w,y+h,x+w-r,y+h);c.lineTo(x+r,y+h);c.quadraticCurveTo(x,y+h,x,y+h-r);c.lineTo(x,y+r);c.quadraticCurveTo(x,y,x+r,y);if(fill)c.fill();if(stroke)c.stroke()}
function heart(x,y,r){g.beginPath();g.moveTo(x,y+r);g.bezierCurveTo(x-r*2,y-r,x-r,y-r*2,x,y-r);g.bezierCurveTo(x+r,y-r*2,x+r*2,y-r,x,y+r);g.fill();g.stroke()}

const THEME_SKY={
forest:['#fc8bc5','#8f68ff','#4bd587'],swamp:['#081d18','#124426','#1a0b1f'],snow:['#87ceff','#c4e8ff','#e3f9ff'],
castle:['#170725','#37104a','#09030d'],circus:['#ff6eb0','#ffe166','#ff3090'],candy:['#ff99dd','#cc66ff','#ff3399'],
living:['#1a4d20','#3d8a45','#0d2212'],glitch:['#000022','#110033','#000'],
volcano:['#2a0800','#8b1400','#ff4400'],deep:['#000814','#001830','#002244'],
crypt:['#0a0014','#1a0028','#0a0a0a'],neon:['#000033','#002244','#001122'],
salt:['#ddddcc','#eeeecc','#ffffff'],crystal:['#001133','#001e55','#003388'],
wind:['#4488cc','#88bbdd','#aaccee'],dark:['#000000','#050010','#000005'],
space:['#000005','#000015','#000022'],factory:['#1a1100','#332200','#220e00'],
organic:['#001100','#002200','#001800'],void:['#000','#000','#000'],
};
const THEME_GROUND={
forest:{fill:'#884c50',top:'#6cff7e'},swamp:{fill:'#27451f',top:'#7eff54'},
snow:{fill:'#eaffff',top:'#b7e9ff'},castle:{fill:'#342044',top:'#5a3477'},
circus:{fill:'#884c50',top:'#ff88aa'},candy:{fill:'#992266',top:'#ff66cc'},
living:{fill:'#1a4d16',top:'#5dcc40'},glitch:{fill:'#001a33',top:'#00ffff'},
volcano:{fill:'#3a1000',top:'#ff5500'},deep:{fill:'#001430',top:'#0044aa'},
crypt:{fill:'#1a0028',top:'#6600aa'},neon:{fill:'#001133',top:'#00ffff'},
salt:{fill:'#ccccaa',top:'#ffffff'},crystal:{fill:'#002244',top:'#4488ff'},
wind:{fill:'#224466',top:'#88ccff'},dark:{fill:'#050010',top:'#330066'},
space:{fill:'#000011',top:'#4400aa'},factory:{fill:'#221100',top:'#ff8800'},
organic:{fill:'#001400',top:'#44ff00'},void:{fill:'#000000',top:'#333333'},
};

function drawShotVisual(s){
if(!s||typeof s.drawX!=='number')return drawShot(s);
const ox=s.x,oy=s.y;s.x=s.drawX;s.y=s.drawY;drawShot(s);s.x=ox;s.y=oy;
}
function drawEnemyVisual(e){
if(!e||typeof e.drawX!=='number')return drawEnemy(e);
const ox=e.x,oy=e.y;e.x=e.drawX;e.y=e.drawY;drawEnemy(e);e.x=ox;e.y=oy;
}

function draw(){

g.setTransform(1,0,0,1,0,0);g.globalAlpha=1;g.globalCompositeOperation='source-over';g.shadowBlur=0;g.filter='none';g.imageSmoothingEnabled=false;
g.clearRect(0,0,W,H);g.fillStyle='#020107';g.fillRect(0,0,W,H);
ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.shadowBlur=0;ctx.filter='none';ctx.imageSmoothingEnabled=false;ctx.clearRect(0,0,cv.width,cv.height);ctx.fillStyle='#04010a';ctx.fillRect(0,0,cv.width,cv.height);
if(!started){ctx.fillStyle='#04010a';ctx.fillRect(0,0,cv.width,cv.height);ctx.globalCompositeOperation='source-over';return}
g.save();
const sx=shakeT>0&&save.shake?Math.round(rnd(-shake,shake)):0,sy=shakeT>0&&save.shake?Math.round(rnd(-shake,shake)):0;
if(cinZoom>0){g.translate(W/2,H/2);const z=1+cinZoom;g.scale(z,z);g.translate(-W/2,-H/2)}
g.translate(W/2,H/2);g.scale(WORLD_ZOOM,WORLD_ZOOM);g.translate(-W/2,-H/2);
g.translate(Math.round(-cam.x+sx),Math.round(-cam.y+sy));
drawBG();drawWorld();
drawFX(false);
for(const t of dashTrail){const a=t.life/t.max;g.save();g.globalAlpha=a*.38;g.fillStyle='#00d0ff';g.beginPath();g.ellipse(t.x+p.w/2,t.y+p.h/2,p.w*.5*a,p.h*.4*a,0,0,7);g.fill();g.restore()}
for(const s of shots)drawShotVisual(s);
for(const e of enemies)drawEnemyVisual(e);
drawPowerups();
drawPlayer();
mpDrawPlayers();mpDrawRemoteFx();
g.globalAlpha=1;g.globalCompositeOperation='source-over';g.shadowBlur=0;
drawFX(true);

for(const d of decals){const a=clamp(d.life/MICRO.bloodFloorLife,0,.8);g.globalAlpha=a;g.fillStyle=d.col;g.save();g.translate(d.x,d.y);g.rotate(d.rot);g.beginPath();g.ellipse(0,0,d.s*1.45,d.s*.38,0,0,7);g.fill();g.restore()}g.globalAlpha=1;
g.restore();
g.setTransform(1,0,0,1,0,0);g.globalAlpha=1;g.globalCompositeOperation='source-over';g.shadowBlur=0;
drawHUD();
if(stageFlash>0){g.globalAlpha=stageFlash*.22;g.fillStyle='#fff';g.fillRect(0,0,W,H);g.globalAlpha=1}
if(transitionT>0){const a=clamp(transitionT/1.2,0,1);g.fillStyle='rgba(0,0,0,'+(a*.6)+')';g.fillRect(0,0,W,H);g.globalAlpha=clamp(a*1.4,0,1);g.fillStyle='#fff06f';g.font='bold 18px Arial';g.textAlign='center';g.shadowColor='#ff2f89';g.shadowBlur=14;g.fillText(transitionName,W/2,100);g.shadowBlur=0;g.globalAlpha=1}
if(impactFlash>0){g.globalAlpha=impactFlash*.45;g.fillStyle=impactDir>0?'rgba(255,45,80,.55)':'rgba(255,220,80,.45)';g.beginPath();if(impactDir>0){g.moveTo(0,0);g.lineTo(W*.42,0);g.lineTo(W*.18,H);g.lineTo(0,H)}else{g.moveTo(W,0);g.lineTo(W*.58,0);g.lineTo(W*.82,H);g.lineTo(W,H)}g.fill();g.globalAlpha=1}

ctx.drawImage(vc,0,0,W,H,0,0,cv.width,cv.height);
ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;ctx.shadowBlur=0;ctx.filter='none';
}

function drawBG(){
const t=stageObj?.theme||'forest';
const sky=THEME_SKY[t]||THEME_SKY.forest;
let gr=g.createLinearGradient(0,-WORLD_PAD*.55,0,H+WORLD_PAD*.55);
gr.addColorStop(0,sky[0]);gr.addColorStop(.58,sky[1]);gr.addColorStop(1,sky[2]);
g.fillStyle=gr;g.fillRect(cam.x-WORLD_PAD,-WORLD_PAD,W+WORLD_PAD*2,H+WORLD_PAD*2);
if(t==='glitch'||t==='neon'||t==='void'){for(let y=0;y<H;y+=4){g.globalAlpha=.04+Math.sin(gTime*5+y)*.02;g.fillStyle=t==='void'?'#333333':'#00ffff';g.fillRect(cam.x-WORLD_PAD,y,W+WORLD_PAD*2,2)}g.globalAlpha=1}
if(t==='space'){for(let i=0;i<30;i++){g.globalAlpha=.6+Math.sin(gTime+i)*.3;g.fillStyle='#fff';g.fillRect(cam.x+((i*137)%W),((i*97)%H*.6),Math.random()<.1?2:1,1);g.globalAlpha=1}}

for(let layer=0;layer<3;layer++){
const par=.14+layer*.13,base=122+layer*22;
const alphas=[.34,.42,.58];
let fc='rgba(25,9,44,'+alphas[layer]+')';
if(t==='snow')fc='rgba(75,120,160,'+([.25,.22,.18][layer])+')';
if(t==='swamp')fc='rgba(9,55,36,'+([.35,.42,.58][layer])+')';
if(t==='volcano')fc='rgba(60,10,0,'+([.35,.42,.58][layer])+')';
if(t==='space')fc='rgba(20,0,60,'+([.25,.35,.5][layer])+')';
if(t==='void')fc='rgba(0,0,0,'+([.5,.65,.8][layer])+')';
g.fillStyle=fc;
for(let x=Math.floor((cam.x*par-WORLD_PAD)/120)*120-220;x<cam.x+W+WORLD_PAD+220;x+=120){
const xx=x-cam.x*par;g.beginPath();g.moveTo(xx,H);g.lineTo(xx+30,base);g.lineTo(xx+70,base-24-layer*7);g.lineTo(xx+116,base+18);g.lineTo(xx+150,H);g.fill();
}
}

for(let x=Math.floor((cam.x-WORLD_PAD-120)/170)*170-240;x<cam.x+W+WORLD_PAD+240;x+=170){
const xx=x+Math.sin(x*.01)*22,yy=gy(x);
if(t==='forest')drawBgTree(xx,yy);else if(t==='swamp')drawBgSwamp(xx,yy);
else if(t==='snow'||t==='crypt')drawBgBones(xx,yy);else if(t==='castle'||t==='dark')drawBgTower(xx,yy);
else if(t==='circus')drawBgCircus(xx,yy);else if(t==='candy')drawBgCandy(xx,yy);
else if(t==='living'||t==='organic')drawBgLiving(xx,yy);
else if(t==='volcano')drawBgVolcano(xx,yy);else if(t==='neon'||t==='glitch')drawBgNeon(xx,yy);
else if(t==='crystal')drawBgCrystal(xx,yy);else if(t==='factory')drawBgFactory(xx,yy);
else if(t==='space')drawBgSpace(xx,yy);else if(t==='void')drawBgVoid(xx,yy);
}
}
function drawBgTree(x,y){g.fillStyle='#52265c';g.fillRect(x-5,y-86,11,86);g.fillStyle='#231737';g.beginPath();g.arc(x,y-92,34,0,7);g.fill();g.fillStyle='#ff7ac8';g.beginPath();g.arc(x-16,y-98,15,0,7);g.arc(x+12,y-108,19,0,7);g.arc(x+21,y-85,15,0,7);g.fill()}
function drawBgSwamp(x,y){g.strokeStyle='#06120f';g.lineWidth=8;g.beginPath();g.moveTo(x,y);g.bezierCurveTo(x-18,y-50,x+35,y-70,x+4,y-118);g.stroke()}
function drawBgBones(x,y){g.strokeStyle='#d7edff';g.lineWidth=8;g.beginPath();g.moveTo(x-20,y-18);g.lineTo(x+55,y-95);g.stroke();g.fillStyle='#eafdff';g.beginPath();g.arc(x+58,y-98,14,0,7);g.fill()}
function drawBgTower(x,y){g.fillStyle='#16071f';g.fillRect(x-20,y-130,40,130);g.fillStyle='#271239';g.fillRect(x-25,y-144,50,20);g.fillStyle='#b149ff';g.fillRect(x-6,y-90,12,26)}
function drawBgCircus(x,y){g.fillStyle='rgba(200,30,80,.4)';g.beginPath();g.moveTo(x-35,y);g.lineTo(x,y-90);g.lineTo(x+35,y);g.closePath();g.fill();g.fillStyle='rgba(255,220,60,.3)';g.beginPath();g.moveTo(x-35,y-30);g.lineTo(x,y-90);g.lineTo(x+35,y-30);g.closePath();g.fill()}
function drawBgCandy(x,y){g.strokeStyle='#cc44ff';g.lineWidth=7;g.beginPath();g.moveTo(x,y);g.lineTo(x+4,y-60);g.lineTo(x-8,y-100);g.stroke();g.fillStyle='#ff88dd';g.beginPath();g.arc(x-5,y-108,22,0,7);g.fill()}
function drawBgLiving(x,y){g.strokeStyle='#2d6b1a';g.lineWidth=10;g.beginPath();g.moveTo(x,y);g.bezierCurveTo(x-12,y-40,x+20,y-70,x-4,y-120);g.stroke();g.fillStyle='#4daa33';g.globalAlpha=.6;g.beginPath();g.arc(x,y-90,25,0,7);g.fill();g.globalAlpha=1}
function drawBgVolcano(x,y){g.fillStyle='rgba(80,20,0,.5)';g.beginPath();g.moveTo(x-40,y);g.lineTo(x,y-110);g.lineTo(x+40,y);g.closePath();g.fill();g.fillStyle='rgba(255,80,0,.3)';g.beginPath();g.arc(x,y-110,12,0,7);g.fill()}
function drawBgNeon(x,y){g.fillStyle='rgba(0,200,255,.12)';g.fillRect(x-8,y-100,16,100);g.fillStyle='rgba(255,0,255,.08)';g.fillRect(x-12,y-60,24,4);g.fillRect(x-12,y-80,24,4)}
function drawBgCrystal(x,y){g.fillStyle='rgba(0,100,255,.2)';g.beginPath();g.moveTo(x,y-100);g.lineTo(x+22,y-40);g.lineTo(x-22,y-40);g.closePath();g.fill();g.strokeStyle='rgba(100,200,255,.3)';g.lineWidth=1;g.stroke()}
function drawBgFactory(x,y){g.fillStyle='rgba(60,30,0,.5)';g.fillRect(x-18,y-90,36,90);g.fillStyle='rgba(255,100,0,.25)';g.fillRect(x-4,y-90,8,16);g.fillStyle='rgba(255,200,0,.15)';g.fillRect(x-16,y-60,32,6)}
function drawBgSpace(x,y){g.fillStyle='rgba(100,0,200,.2)';g.beginPath();g.moveTo(x,y-80);for(let i=0;i<5;i++){const a=i*1.26,r=i%2===0?22:10;g.lineTo(x+Math.cos(a)*r,y-80+Math.sin(a)*r)}g.closePath();g.fill()}
function drawBgVoid(x,y){g.globalAlpha=.2+Math.sin(gTime+x*.01)*.1;g.fillStyle='#440088';g.beginPath();g.arc(x,y-50,20+Math.sin(gTime*2+x*.01)*8,0,7);g.fill();g.globalAlpha=1}

function drawWorld(){
const t=stageObj?.theme||'forest';
const gc=THEME_GROUND[t]||THEME_GROUND.forest;
const start=Math.floor((cam.x-WORLD_PAD)/24)*24;
for(let x=start;x<cam.x+W+WORLD_PAD+100;x+=24){
const y=gy(x);
g.fillStyle=gc.fill;g.fillRect(x,y,26,H+WORLD_PAD-y);
g.fillStyle=gc.top;g.fillRect(x,y-5,26,6);
g.fillStyle='rgba(0,0,0,.22)';g.fillRect(x,y+10,26,3);
}

g.fillStyle='rgba(255,255,255,.22)';g.fillRect(L.goal,gy(L.goal)-65,7,65);
g.fillStyle='#7dff55';g.fillRect(L.goal+7,gy(L.goal)-61,42,18);
g.fillStyle='#fff';g.font='bold 7px Arial';g.textAlign='left';g.fillText('META',L.goal+10,gy(L.goal)-47);
}
function drawPowerups(){
for(const pw of powerups){
const bob=Math.sin(pw.bob)*4;
g.save();g.translate(pw.x,pw.y+bob);g.globalAlpha=Math.min(1,pw.life*.5);
const cols={heal:'#ff7ac8',mana:'#21ff4b',speed:'#ffe060',damage:'#ff5500',coins:'#ffe060'};
const c=cols[pw.type]||'#fff';
g.globalCompositeOperation='lighter';const gr=g.createRadialGradient(8,8,0,8,8,14);gr.addColorStop(0,c);gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.beginPath();g.arc(8,8,14,0,7);g.fill();
g.globalCompositeOperation='source-over';g.fillStyle=c;g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=2;
if(pw.type==='heal'){g.beginPath();g.arc(8,8,7,0,7);g.fill();g.stroke();g.fillStyle='#fff';g.fillRect(5,6,6,4);g.fillRect(6,5,4,6)}
if(pw.type==='mana'){g.beginPath();g.moveTo(8,1);g.lineTo(15,15);g.lineTo(1,15);g.closePath();g.fill();g.stroke()}
if(pw.type==='speed'){g.beginPath();g.moveTo(4,4);g.lineTo(14,8);g.lineTo(4,12);g.closePath();g.fill();g.stroke()}
if(pw.type==='damage'){g.beginPath();g.moveTo(8,0);g.lineTo(10,6);g.lineTo(16,5);g.lineTo(10,13);g.lineTo(8,16);g.lineTo(6,10);g.lineTo(0,11);g.closePath();g.fill();g.stroke()}
if(pw.type==='coins'){g.beginPath();g.arc(8,8,7,0,7);g.fill();g.stroke();g.fillStyle='#cc8800';g.font='bold 9px Arial';g.textAlign='center';g.fillText('$',8,12)}
g.restore();
}
}
function drawFX(front){
for(const q of particles){if(front!==!['dust','green','spark'].includes(q.type))continue;const a=clamp(q.life/q.max,0,1);g.globalAlpha=a;
if(q.type==='blood'){g.fillStyle='#b60025';g.beginPath();g.arc(q.x,q.y,q.s*a,0,7);g.fill()}
if(q.type==='dust'){g.fillStyle='#d7c09d';g.beginPath();g.ellipse(q.x,q.y,q.s*1.8*a,q.s*a,0,0,7);g.fill()}
if(q.type==='green'){g.globalCompositeOperation='lighter';g.fillStyle='#50ff44';g.beginPath();g.arc(q.x,q.y,q.s*a,0,7);g.fill();g.globalCompositeOperation='source-over'}
if(q.type==='acid'){g.fillStyle='#9dff2b';g.beginPath();g.arc(q.x,q.y,q.s*a,0,7);g.fill()}
if(q.type==='slash'){g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=q.s*a;g.beginPath();g.moveTo(q.x-10,q.y-3);g.lineTo(q.x+12,q.y+3);g.stroke()}
if(q.type==='spark'){g.fillStyle=q.col||'#ffd700';g.fillRect(q.x,q.y,q.s*a,q.s*a)}
if(q.type==='smoke'){g.fillStyle=q.col||'#2b2530';g.beginPath();g.ellipse(q.x,q.y,q.s*1.35*a,q.s*a,0,0,7);g.fill()}
}
g.globalAlpha=1;
for(const h of hazards){
const _hx=h.x,_hy=h.y;if(typeof h.drawX==='number'){h.x=h.drawX;h.y=h.drawY}
if(h.type==='acid'){g.globalAlpha=clamp(h.life,0,1);g.fillStyle='#73ff28';g.beginPath();g.ellipse(h.x+h.w/2,h.y+4,h.w/2,6,0,0,7);g.fill()}
if(h.type==='bolt'){g.globalAlpha=h.warn>0?.24:.9;g.strokeStyle=h.warn>0?'#fff':'#bfffff';g.lineWidth=h.warn>0?2:5;g.beginPath();g.moveTo(h.x+h.w/2,h.y);for(let y=h.y;y<h.y+h.h;y+=18)g.lineTo(h.x+rnd(0,h.w),y);g.stroke()}
if(h.type==='balloon'){g.globalAlpha=clamp(h.life,0,1);const bc=['#ff5ab8','#ffe060','#60f0ff','#7dff54'];g.fillStyle=bc[Math.floor((h.x*7)%4)];g.beginPath();g.arc(h.x+h.w/2,h.y+h.h/2,11,0,7);g.fill()}
if(h.type==='root'){g.globalAlpha=h.warn>0?Math.min(.35,h.warn):.72;g.strokeStyle='#2d6b1a';g.lineWidth=4;g.beginPath();const bx=h.x+h.w/2;g.moveTo(bx,h.y+h.h);g.bezierCurveTo(bx-18,h.y+h.h*.65,bx+18,h.y+h.h*.35,bx,h.y);g.stroke();g.strokeStyle='#5dcc40';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,h.y+h.h*.75);g.lineTo(bx-18,h.y+h.h*.52);g.moveTo(bx+7,h.y+h.h*.55);g.lineTo(bx+18,h.y+h.h*.35);g.stroke()}
if(h.type==='glitch'||h.type==='null'){g.globalAlpha=h.warn>0?Math.min(.3,h.warn):.55;g.strokeStyle=h.type==='null'?'#440088':'#00ffff';g.lineWidth=3;g.beginPath();g.moveTo(h.x+h.w/2,h.y+h.h);g.lineTo(h.x+h.w/2,h.y);g.stroke()}
if(h.type==='candyPool'){g.globalAlpha=h.warn>0?Math.sin(gTime*12)*.5+.5:.8;g.fillStyle='#ff66cc';g.beginPath();g.ellipse(h.x+h.w/2,h.y+4,h.w/2,6,0,0,7);g.fill()}
if(h.type==='lava'){g.globalAlpha=clamp(h.life,0,1);g.fillStyle='#ff4400';g.beginPath();g.arc(h.x+h.w/2,h.y+h.h/2,10,0,7);g.fill();g.fillStyle='#ffcc00';g.beginPath();g.arc(h.x+h.w/2,h.y+h.h/2,5,0,7);g.fill()}
if(h.type==='laser'){g.globalAlpha=h.warn>0?.3:.85;g.fillStyle=h.warn>0?'rgba(0,200,255,.3)':'rgba(0,200,255,.8)';g.fillRect(h.x,0,h.w,H);if(h.warn<=0)dlb(h.x+h.w/2,H/2,40,'#00ffff',.3)}
if(h.type==='boss_shot'){const cx=h.x+h.w/2,cy=h.y+h.h/2,rad=Math.max(h.w,h.h)/2;
if(h.warn>0){g.globalAlpha=.28+Math.sin(gTime*10)*.08;g.strokeStyle='#ff9b22';g.lineWidth=2;g.beginPath();g.arc(cx,cy,rad*.75,0,7);g.stroke();g.globalAlpha=.22;g.fillStyle='rgba(255,90,0,.55)';g.beginPath();g.arc(cx,cy,rad*.55,0,7);g.fill()}
else{g.globalAlpha=.55;g.fillStyle='rgba(40,35,35,.55)';g.beginPath();g.ellipse(cx-10,cy-18,rad*.55,rad*1.15,-.65,0,7);g.fill();g.globalAlpha=.88;g.save();g.translate(cx,cy);g.rotate(h.rot||0);g.fillStyle='#2b1712';g.beginPath();g.moveTo(-rad*.55,-rad*.3);g.lineTo(-rad*.15,-rad*.75);g.lineTo(rad*.55,-rad*.45);g.lineTo(rad*.72,rad*.08);g.lineTo(rad*.25,rad*.65);g.lineTo(-rad*.55,rad*.52);g.closePath();g.fill();g.fillStyle='#ff4a12';g.beginPath();g.arc(-rad*.12,-rad*.05,rad*.55,0,7);g.fill();g.fillStyle='#ffd05a';g.beginPath();g.arc(-rad*.22,-rad*.08,rad*.28,0,7);g.fill();g.strokeStyle='rgba(0,0,0,.55)';g.lineWidth=2;g.stroke();g.restore()}}
g.globalAlpha=1;
if(typeof h.drawX==='number'){h.x=_hx;h.y=_hy}
}
if(front)for(const m of frontMist){
const a=clamp(m.life/(m.max||3),0,1);g.globalAlpha=a;
if(m.type==='leaf'){g.fillStyle='#ff7ac8';g.save();g.translate(m.x,m.y);g.rotate(m.rot);g.fillRect(-m.s,-m.s*.5,m.s*2,m.s);g.restore()}
if(m.type==='spore'){g.fillStyle='#9dff2b';g.beginPath();g.arc(m.x,m.y,m.s,0,7);g.fill()}
if(m.type==='snow'){g.fillStyle=m.col||'#fff';g.fillRect(m.x,m.y,m.s,m.s)}
if(m.type==='ember'){g.fillStyle=m.col||'#b864ff';g.beginPath();g.arc(m.x,m.y,m.s,0,7);g.fill()}
if(m.type==='confetti'){g.fillStyle=m.col;g.save();g.translate(m.x,m.y);g.rotate(m.rot+gTime*3);g.fillRect(-m.s/2,-m.s/4,m.s,m.s/2);g.restore()}
if(m.type==='glitch_px'){g.fillStyle=m.col||'#0ff';g.fillRect(m.x,m.y,m.s,m.s)}
g.globalAlpha=1;
}
}

function drawHUD(){
g.save();

g.fillStyle='rgba(8,4,16,.52)';rr(g,7,7,160,42,10,true,false);
for(let i=0;i<p.maxHp;i++){const col=i<p.hp?(p.hp<=2?'#ff304f':'#ff306f'):'#331323';g.fillStyle=col;g.strokeStyle='#fff3';g.lineWidth=1;heart(22+i*16,21,6)}
g.fillStyle='rgba(0,0,0,.5)';rr(g,18,33,104,7,3,true,false);
let mgr=g.createLinearGradient(18,33,122,33);mgr.addColorStop(0,'#21ff4b');mgr.addColorStop(1,'#bfff5a');g.fillStyle=mgr;rr(g,18,33,104*p.mp/p.maxMp,7,3,true,false);
g.fillStyle='rgba(8,4,16,.52)';rr(g,W-118,7,111,34,10,true,false);
g.textAlign='right';g.fillStyle='#ffe060';g.font='bold 11px Arial';
g.shadowColor='#ffaa00';g.shadowBlur=5;g.fillText(String(runScore).padStart(6,'0'),W-10,21);g.shadowBlur=0;
g.fillStyle='rgba(255,200,150,.6)';g.font='bold 11px Arial';g.fillText('🪙'+runCoins,W-10,34);

const dp=1-clamp(p.dashCD/1.2,0,1);
g.fillStyle='rgba(0,0,0,.3)';rr(g,18,42,60,4,2,true,false);
g.fillStyle=dp>=1?'#00d0ff':'rgba(0,150,200,.4)';rr(g,18,42,60*dp,4,2,true,false);

for(const e of enemies)if(e.boss&&!e.dead)drawBossBar(e);

if(comboTimer>0&&combo>1){
const tier=clamp(Math.floor(combo/2),1,tr('combo').length-1);
g.textAlign='center';g.font='bold 15px Arial';g.shadowColor='#ff315d';g.shadowBlur=10;
g.fillStyle=combo>=5?'#ff315d':'#fff06f';g.fillText(tr('combo')[tier]+' x'+combo,W/2,50);g.shadowBlur=0;
}
if(execHintT>0){g.globalAlpha=.85;g.fillStyle='#ff315d';g.font='bold 8px Arial';g.textAlign='center';g.fillText('EXECUÇÃO: MACHADO',W/2,H-60);g.globalAlpha=1}
if(MP.on&&MP.joinToastT>0){g.globalAlpha=clamp(MP.joinToastT/3.2,0,1);g.fillStyle='rgba(0,0,0,.5)';rr(g,W/2-92,32,184,22,9,true,false);g.fillStyle='#60d0ff';g.font='bold 10px Arial';g.textAlign='center';g.fillText(MP.joinToast,W/2,46);g.globalAlpha=1}

for(const m of texts){g.globalAlpha=clamp(m.life/m.max,0,1);g.fillStyle=m.col||'#fff';g.font=(m.big?'900 14px Verdana, Arial, sans-serif':'900 10px Verdana, Arial, sans-serif');g.textAlign='center';g.lineWidth=2;g.strokeStyle='rgba(0,0,0,.78)';g.shadowColor=m.col||'#fff';g.shadowBlur=5;g.strokeText(m.s,m.x-cam.x,m.y);g.fillText(m.s,m.x-cam.x,m.y);g.shadowBlur=0}g.globalAlpha=1;

for(const b of bts){g.globalAlpha=.52;g.fillStyle='rgba(5,4,12,.5)';g.strokeStyle=b[0]==='fire'?'rgba(93,255,80,.7)':b[0]==='atk'?'rgba(255,90,120,.7)':b[0]==='dash'?'rgba(0,200,255,.7)':'rgba(255,255,255,.3)';g.lineWidth=2;rr(g,b[2],b[3],b[4],b[5],12,true,true);g.globalAlpha=.9;g.fillStyle='#fff';g.font='16px system-ui';g.textAlign='center';g.fillText(b[1],b[2]+b[4]/2,b[3]+26)}g.globalAlpha=1;

if(gameOver||victory){
g.fillStyle='rgba(0,0,0,.65)';g.fillRect(0,0,W,H);
g.textAlign='center';g.fillStyle=victory?'#ffd74f':'#ff3a6e';g.font='bold 24px Arial';
g.shadowColor=victory?'#ffaa00':'#ff0040';g.shadowBlur=16;
g.fillText(victory?'🎉 '+tr('victory'):tr('died'),W/2,96);g.shadowBlur=0;
g.fillStyle='#ffe060';g.font='bold 16px Arial';g.fillText('SCORE: '+runScore,W/2,114);
g.fillStyle='#aaa';g.font='bold 11px Arial';g.fillText(victory?((li<STAGE_DATA.length-1)?(LANG==='pt'?'próxima fase automática...':'next stage loading...'):(LANG==='pt'?'fim da campanha':'campaign complete')):(MP.on?(LANG==='pt'?'aguardando o outro jogador...':'waiting for the other player...'):''),W/2,128);
}
g.restore();
}
function drawBossBar(e){
g.save();g.translate(cam.x,0);
g.fillStyle='rgba(0,0,0,.65)';g.fillRect(117,14,246,20);
const hp=clamp(e.hp/e.maxHp,0,1);
const bCols={queen:'#b864ff',barb:'#ff7844',slug:'#7eff54',mushking:'#f04c70',clown:'#ff5ab8',caramel:'#ffcc44',treeking:'#5dcc40',mirror:'#00d0ff',volcanic:'#ff4400',krakenette:'#4466ff',lich:'#aa00ff',neonGod:'#00ffff',saltGolem:'#eeeecc',crystalQueen:'#88aaff',windPhantom:'#88ccff',darkCore:'#6600cc',voidBeast:'#aa00ff',mechaBoss:'#ffaa00',organicTitan:'#44ff00',nullKing:'#ffffff'};
const col=bCols[e.type]||'#ff5ab8';
const bgr=g.createLinearGradient(120,18,360,18);bgr.addColorStop(0,col);bgr.addColorStop(1,'#fff');g.fillStyle=bgr;g.fillRect(120,17,238*hp,14);
if(hp<.3){g.globalAlpha=Math.sin(gTime*12)*.28;g.fillStyle='#fff';g.fillRect(120,17,238*hp,14);g.globalAlpha=1}
g.fillStyle='#fff';g.font='900 10px Verdana, Arial, sans-serif';g.textAlign='center';g.lineWidth=2;g.strokeStyle='rgba(0,0,0,.9)';
const bossLabel=tr('bosses.'+e.type)||e.type.toUpperCase();g.strokeText(bossLabel,240,12);g.fillText(bossLabel,240,12);
g.restore();
}
function shotFamily(t){
if(t==='fire_red')return'fire';
if(t==='blood_shot')return'blood';
if(t==='wind_shot')return'wind';
if(t==='thunder_shot')return'thunder';
if(t==='crystal_shot')return'crystal';
if(t==='web_shot')return'web';
if(t==='witch_shot')return'witch';
if(t==='dragon_lance')return'fire';
if(t==='alien_blade')return'void';
if(t==='vulcan_bullet')return'vulcan';
if(t==='axe_shot'||t==='green'||t==='void_shot')return'hero';
return t||'';
}
function isPlayerShotType(s){
const t=typeof s==='string'?s:(s&&s.type);
return t==='green'||t==='void_shot'||t==='fire_red'||t==='blood_shot'||t==='wind_shot'||t==='thunder_shot'||t==='crystal_shot'||t==='web_shot'||t==='witch_shot'||t==='dragon_lance'||t==='alien_blade'||t==='vulcan_bullet'||t==='axe_shot';
}
function weaponShotType(w){
return w==='vulcan_mg'?'vulcan_bullet':w==='staff_fire'?'fire_red':w==='axe_blood'?'blood_shot':w==='blade_wind'?'wind_shot':w==='hammer_thunder'?'thunder_shot':w==='wand_crystal'?'crystal_shot':w==='scythe_spider'?'web_shot':w==='orb_witch'?'witch_shot':w==='lance_dragon'?'dragon_lance':w==='blade_void'?'alien_blade':'axe_shot';
}
function trailWeaponShot(s,n=1){
const fam=shotFamily(s.type);
if(fam==='fire'){for(let i=0;i<n;i++)addPart(s.x-s.dir*12,s.y,'spark',1,{col:i%2?'#ff2a00':'#ffd000',life:.22,s:rnd(4,8),vx:rnd(-45,45),vy:rnd(-70,15)})}
else if(fam==='blood'){for(let i=0;i<n;i++)addPart(s.x-s.dir*10,s.y,'blood',1,{life:.25,s:rnd(2,5),vx:rnd(-35,35),vy:rnd(-25,25)})}
else if(fam==='wind'){for(let i=0;i<n;i++)addPart(s.x-s.dir*14,s.y,'spark',1,{col:'#9eefff',life:.18,s:rnd(3,6),vx:-s.dir*rnd(20,90),vy:rnd(-25,25)})}
else if(fam==='thunder'){for(let i=0;i<n;i++)addPart(s.x-s.dir*8,s.y,'spark',1,{col:'#ffe060',life:.16,s:rnd(3,7),vx:rnd(-60,60),vy:rnd(-50,50)})}
else if(fam==='crystal'){for(let i=0;i<n;i++)addPart(s.x-s.dir*10,s.y,'spark',1,{col:i%2?'#d49cff':'#88aaff',life:.2,s:rnd(3,6),vx:rnd(-35,35),vy:rnd(-45,20)})}
else if(fam==='web'){for(let i=0;i<n;i++)addPart(s.x-s.dir*10,s.y,'spark',1,{col:'#e8d7ff',life:.22,s:rnd(2,5),vx:rnd(-30,30),vy:rnd(-30,20)})}
else if(fam==='witch'||fam==='void'){for(let i=0;i<n;i++)addPart(s.x-s.dir*10,s.y,'spark',1,{col:fam==='witch'?'#baff6a':'#9b4dff',life:.2,s:rnd(3,7),vx:rnd(-50,50),vy:rnd(-45,25)})}
else if(fam==='vulcan'){for(let i=0;i<n;i++){addPart(s.x-s.dir*rnd(6,20),s.y+rnd(-2,2),'spark',1,{col:i%2?'#ff6a00':'#ffd15a',life:.12,s:rnd(2,5),vx:-s.dir*rnd(20,80),vy:rnd(-22,22)});if(i%2===0)addPart(s.x-s.dir*18,s.y,'smoke',1,{col:'#17100f',life:.26,s:rnd(4,8),vx:-s.dir*rnd(10,34),vy:rnd(-18,6)})}}
else green(s.x-s.dir*12,s.y,n);
}
function drawShot(s){
const fam=shotFamily(s.type);
g.save();
if(fam==='fire'){
g.globalCompositeOperation='lighter';
const gr=g.createRadialGradient(s.x,s.y,0,s.x,s.y,28);
gr.addColorStop(0,'#fff2a0');gr.addColorStop(.35,'#ffb000');gr.addColorStop(.72,'#ff2a00');gr.addColorStop(1,'rgba(255,40,0,0)');
g.fillStyle=gr;g.beginPath();g.ellipse(s.x,s.y,26,13,0,0,7);g.fill();
g.fillStyle='#ffd44a';g.beginPath();g.ellipse(s.x+s.dir*8,s.y-2,12,6,.2,0,7);g.fill();
}else if(fam==='blood'){
g.globalCompositeOperation='lighter';
g.fillStyle='#8b001b';g.beginPath();g.ellipse(s.x,s.y,17,9,0,0,7);g.fill();
g.fillStyle='#ff1748';g.beginPath();g.arc(s.x+s.dir*7,s.y-2,5,0,7);g.arc(s.x-s.dir*6,s.y+4,3,0,7);g.fill();
}else if(fam==='wind'){
g.globalCompositeOperation='lighter';
g.strokeStyle='rgba(160,245,255,.9)';g.lineWidth=5;g.beginPath();g.moveTo(s.x-s.dir*20,s.y+6);g.quadraticCurveTo(s.x,s.y-15,s.x+s.dir*22,s.y);g.stroke();
g.strokeStyle='rgba(255,255,255,.65)';g.lineWidth=2;g.beginPath();g.arc(s.x,s.y,18,-.6,1.8);g.stroke();
}else if(fam==='thunder'){
g.globalCompositeOperation='lighter';
g.strokeStyle='#ffe060';g.lineWidth=4;g.beginPath();g.moveTo(s.x-s.dir*18,s.y);g.lineTo(s.x-s.dir*4,s.y-8);g.lineTo(s.x+s.dir*2,s.y+5);g.lineTo(s.x+s.dir*20,s.y-4);g.stroke();
g.fillStyle='rgba(255,224,96,.45)';g.beginPath();g.arc(s.x,s.y,15,0,7);g.fill();
}else if(fam==='crystal'){
g.globalCompositeOperation='lighter';
g.fillStyle='#b88cff';g.strokeStyle='#fff';g.lineWidth=1.5;
g.beginPath();g.moveTo(s.x+s.dir*18,s.y);g.lineTo(s.x,s.y-10);g.lineTo(s.x-s.dir*14,s.y);g.lineTo(s.x,s.y+10);g.closePath();g.fill();g.stroke();
g.fillStyle='rgba(180,120,255,.35)';g.beginPath();g.arc(s.x,s.y,18,0,7);g.fill();
}else if(fam==='web'){
g.globalCompositeOperation='lighter';g.strokeStyle='rgba(235,220,255,.9)';g.lineWidth=3;g.beginPath();g.arc(s.x,s.y,14,0,7);g.moveTo(s.x-14,s.y);g.lineTo(s.x+14,s.y);g.moveTo(s.x,s.y-14);g.lineTo(s.x,s.y+14);g.stroke();
}else if(fam==='witch'){
g.globalCompositeOperation='lighter';g.fillStyle='#baff6a';g.beginPath();g.arc(s.x,s.y,13,0,7);g.fill();g.strokeStyle='#7a2cff';g.lineWidth=3;g.beginPath();g.arc(s.x,s.y,20,0,gTime%6.28);g.stroke();
}else if(fam==='void'){
g.globalCompositeOperation='lighter';g.fillStyle='#7a2cff';g.beginPath();g.ellipse(s.x,s.y,19,10,Math.sin(gTime)*.6,0,7);g.fill();g.fillStyle='rgba(255,255,255,.55)';g.beginPath();g.arc(s.x+s.dir*5,s.y,4,0,7);g.fill();
}else if(fam==='vulcan'){
g.globalCompositeOperation='lighter';
g.strokeStyle='rgba(255,93,22,.42)';g.lineWidth=6;g.beginPath();g.moveTo(s.x-s.dir*22,s.y);g.lineTo(s.x+s.dir*9,s.y);g.stroke();
g.fillStyle='#ffe08a';g.beginPath();g.ellipse(s.x+s.dir*5,s.y,10,3.5,0,0,7);g.fill();
g.fillStyle='#ff5a18';g.beginPath();g.ellipse(s.x-s.dir*3,s.y,7,2.5,0,0,7);g.fill();
}else if(s.type==='candy'){
g.globalCompositeOperation='lighter';g.fillStyle='#ff66cc';g.beginPath();g.ellipse(s.x,s.y,12,7,0,0,7);g.fill();
}else if(s.type==='energy'){
g.globalCompositeOperation='lighter';g.fillStyle='#00ccff';g.beginPath();g.ellipse(s.x,s.y,12,7,0,0,7);g.fill();
}else if(s.type==='void_shot'){
g.globalCompositeOperation='lighter';g.fillStyle='#8800ff';g.beginPath();g.ellipse(s.x,s.y,14,8,0,0,7);g.fill();
}else{
g.fillStyle='#9aff42';g.beginPath();g.ellipse(s.x,s.y,12,7,0,0,7);g.fill();
}
g.restore();g.globalCompositeOperation='source-over';
}

function drawPlayer(){
const bon=getBonus();
const blink=p.inv>0&&Math.floor(gTime*22)%2;if(blink)return;
const walk=Math.sin(gTime*18)*((Math.abs(p.vx)>30&&p.on)?1:0);
const skin=save.equipped.skin||'skin_pink';

const pal=characterPalette(skin),dressCol=pal.dress,hairCol=pal.hair,accentCol=pal.accent||'#ffd13b';
g.save();if(p.hurt>0&&!MP.on)g.translate(rnd(-2,2),0);
g.translate(p.x+p.w/2,p.y+p.h);g.scale(p.dir,1);g.translate(-p.w/2,-p.h);
if(p.dashing>0){
g.globalCompositeOperation='lighter';
const dashCol={skin_pink:'#ff9fe0',skin_shyest:'#d6a72a',skin_longhair:'#58b7ff',skin_omni:'#d93838',skin_sinistro:'#e6b91d',skin_dark:'#9a5cff',skin_gold:'#ffe060',skin_cyber:'#00fff0',skin_ghost:'#dcecff',skin_strange:'#ff2a2a'}[skin]||'#00d0ff';
g.globalAlpha=.55;dlb(p.w/2,p.h/2,44,dashCol,.42);
g.globalAlpha=.24;
for(let i=0;i<4;i++){g.beginPath();g.ellipse(p.w/2-18-i*9,p.h/2+rnd(-8,8),20-i*3,6,0,0,7);g.fillStyle=dashCol;g.fill();}
g.globalCompositeOperation='source-over';g.globalAlpha=1;
}
if(p.damageBoost>0)dlb(p.w/2,p.h/2,30,'#ff5500',.22);
if(p.speedBoost>0)dlb(p.w/2,p.h/2,28,'#ffe060',.18);

g.globalAlpha=.26;g.fillStyle='#000';g.beginPath();g.ellipse(p.w/2,p.h+3,22,5,0,0,7);g.fill();g.globalAlpha=1;
if(mmVariantMeta(skin)){mmDrawVariantPlayer(g,skin,save.equipped.weapon||'axe_default',walk,{atk:p.atk,mgKick:p.mgKick,mgFiring:p.mgFiring});g.restore();return;}

g.fillStyle=hairCol;g.strokeStyle='#06220f';g.lineWidth=2.4;
for(let i=0;i<12;i++){const side=i<6?-1:1,idx=i%6;g.beginPath();g.arc(15+side*(10+idx*2.8)+Math.sin(gTime*5+i)*1.8,7+Math.sin(idx)*5+idx*.4,6.8+(idx%3),0,7);g.fill();g.stroke()}

g.lineCap='round';g.strokeStyle='#210b20';g.lineWidth=5.4;g.beginPath();g.moveTo(10,31);g.lineTo(6+walk*3,45);g.moveTo(19,31);g.lineTo(23-walk*3,45);g.stroke();
g.strokeStyle='#fff';g.lineWidth=3.3;g.beginPath();g.moveTo(9,36);g.lineTo(6+walk*3,43);g.moveTo(20,36);g.lineTo(23-walk*3,43);g.stroke();
g.strokeStyle='#8c214c';g.lineWidth=2.8;g.beginPath();g.moveTo(8,40);g.lineTo(5+walk*3,46);g.moveTo(21,40);g.lineTo(24-walk*3,46);g.stroke();
g.strokeStyle='#3b143f';g.lineWidth=5.5;g.beginPath();g.moveTo(6+walk*3,45);g.lineTo(0+walk*3,47);g.moveTo(23-walk*3,45);g.lineTo(30-walk*3,47);g.stroke();

g.fillStyle=dressCol;g.strokeStyle='#250d21';g.lineWidth=3;g.beginPath();g.moveTo(5,18);g.lineTo(25,18);g.lineTo(30,38);g.lineTo(0,38);g.closePath();g.fill();g.stroke();
g.fillStyle=accentCol;g.beginPath();g.moveTo(1,34);for(let i=0;i<6;i++)g.lineTo(4+i*5,38+(i%2)*3);g.lineTo(30,34);g.lineTo(30,40);g.lineTo(0,40);g.closePath();g.fill();
g.fillStyle=accentCol;g.strokeStyle='#7c3d00';g.lineWidth=1.5;g.fillRect(4,25,23,5);g.strokeRect(4,25,23,5);

const holdingVulcan=(save.equipped.weapon||'')==='vulcan_mg';const gunKick=holdingVulcan?((p.mgKick||0)*.45):0;
g.strokeStyle='#ffd1c4';g.lineWidth=5.4;g.lineCap='round';g.beginPath();
if(holdingVulcan){g.moveTo(7,22);g.lineTo(23-gunKick,27);g.moveTo(23,22);g.lineTo(37-gunKick,25+Math.sin(gTime*42)*(p.mgFiring>0?1.6:.3));}
else{g.moveTo(7,22);g.lineTo(p.atk>0?-12:1,29);g.moveTo(23,22);g.lineTo(p.atk>0?38:29,27);}
g.stroke();
if(p.atk>0){g.globalAlpha=.55;g.strokeStyle='#fff';g.lineWidth=5;g.beginPath();g.arc(27,20,35,-.95,.58);g.stroke();g.strokeStyle='#ff274b';g.lineWidth=3;g.beginPath();g.arc(30,23,39,-.85,.48);g.stroke();g.globalAlpha=1}

g.fillStyle='#ffd0bd';g.strokeStyle='#250d21';g.lineWidth=3;g.beginPath();g.ellipse(15,10,12,12.5,-.04,0,7);g.fill();g.stroke();
g.fillStyle='#fff';g.beginPath();g.ellipse(10,7,4.7,5.2,-.25,0,7);g.ellipse(20,7,4.9,5.2,.25,0,7);g.fill();
g.fillStyle='#4ebbe7';g.beginPath();g.arc(11,8,2.2,0,7);g.arc(21,8,2.2,0,7);g.fill();
g.fillStyle='#101010';g.beginPath();g.arc(11.5,8.3,1.2,0,7);g.arc(21.5,8.3,1.2,0,7);g.fill();
g.strokeStyle='#3a0a1a';g.lineWidth=2;g.beginPath();g.moveTo(6,1);g.lineTo(13,4);g.moveTo(24,1);g.lineTo(17,4);g.stroke();
g.fillStyle='#240611';g.beginPath();g.ellipse(16,16,8.5,5,0,0,7);g.fill();g.strokeStyle='#560018';g.lineWidth=1.7;g.stroke();
g.strokeStyle='#fff';g.lineWidth=2.3;for(let i=0;i<4;i++){g.beginPath();g.moveTo(10+i*4,12);g.lineTo(11+i*4,16);g.stroke();g.beginPath();g.moveTo(11+i*4,19);g.lineTo(12+i*4,16);g.stroke()}

g.fillStyle='#ffd441';g.strokeStyle='#7c3d00';g.lineWidth=2;
g.beginPath();g.moveTo(12,-1);g.lineTo(-5,-13);g.lineTo(3,3);g.closePath();g.fill();g.stroke();
g.beginPath();g.moveTo(18,-1);g.lineTo(35,-13);g.lineTo(27,3);g.closePath();g.fill();g.stroke();
rr(g,12,-5,7,5,2.5,true,true);

g.fillStyle=hairCol;g.strokeStyle='#06220f';g.lineWidth=2.2;
for(let i=0;i<7;i++){g.beginPath();g.arc(2+i*4.6,-1+Math.sin(gTime*4+i)*1.4,5.5+(i%2),0,7);g.fill();g.stroke()}

const wep=save.equipped.weapon||'axe_default';
const attacking=p.atk>0;
const ax=wep==='vulcan_mg'?35:(attacking?35:27),ay=wep==='vulcan_mg'?25:(attacking?12:25);
let rot=attacking?-.72:.23;
if(wep==='vulcan_mg')rot=-.04;
if(wep==='staff_fire')rot=attacking?-.98:.12;
if(wep==='blade_wind')rot=attacking?-1.02:.08;
if(wep==='hammer_thunder')rot=attacking?-.58:.34;
if(wep==='wand_crystal')rot=attacking?-.82:.04;
g.save();g.translate(ax,ay);g.rotate(rot);
if(wep==='vulcan_mg'){
const firing=(p.mgFiring||0)>0,kick=(p.mgKick||0)*.9;
g.translate(-kick,0);g.rotate(firing?Math.sin(gTime*70)*.025:0);
const body=g.createLinearGradient(-8,-8,48,12);body.addColorStop(0,'#120f12');body.addColorStop(.45,'#343036');body.addColorStop(1,'#090707');
g.fillStyle=body;g.strokeStyle='#060304';g.lineWidth=2.4;
if(g.roundRect){g.beginPath();g.roundRect(-4,-8,42,17,5);g.fill();g.stroke();}else{g.fillRect(-4,-8,42,17);g.strokeRect(-4,-8,42,17)}
g.fillStyle='#1c1718';g.beginPath();g.moveTo(4,8);g.lineTo(20,8);g.lineTo(15,21);g.lineTo(2,20);g.closePath();g.fill();g.stroke();
g.strokeStyle='#0b0707';g.lineWidth=7;g.lineCap='round';g.beginPath();g.moveTo(32,-2);g.lineTo(64,-2);g.stroke();
g.strokeStyle='#423436';g.lineWidth=3;g.beginPath();g.moveTo(33,-2);g.lineTo(63,-2);g.stroke();
g.fillStyle='#ff5b19';for(let i=0;i<5;i++){g.beginPath();g.moveTo(2+i*7,-7);g.lineTo(7+i*7,-7);g.lineTo(4+i*7,-1);g.closePath();g.fill()}
g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,80,15,.55)';g.beginPath();g.arc(20,0,8+Math.sin(gTime*12)*1.5,0,7);g.fill();
if(firing){g.fillStyle='rgba(255,180,50,.85)';g.beginPath();g.ellipse(70,-2,18+rnd(0,4),7+rnd(0,2),0,0,7);g.fill();g.fillStyle='rgba(40,25,22,.55)';g.beginPath();g.arc(50+Math.sin(gTime*50)*3,-8,8,0,7);g.fill()}
g.globalCompositeOperation='source-over';
}else if(wep==='hammer_thunder'){
g.strokeStyle='#3a230e';g.lineWidth=6;g.lineCap='round';g.beginPath();g.moveTo(-3,2);g.lineTo(20,34);g.stroke();
g.fillStyle='#4b5664';g.strokeStyle='#101820';g.lineWidth=3;g.beginPath();if(g.roundRect)g.roundRect(-17,-11,36,18,4);else g.rect(-17,-11,36,18);g.fill();g.stroke();
g.fillStyle='#778899';g.beginPath();if(g.roundRect)g.roundRect(-10,-17,26,14,4);else g.rect(-10,-17,26,14);g.fill();g.stroke();
g.globalCompositeOperation='lighter';g.strokeStyle='#ffe060';g.lineWidth=2.5;g.beginPath();g.moveTo(-7,-16);g.lineTo(0,-5);g.lineTo(-5,-5);g.lineTo(5,9);g.stroke();
g.fillStyle='rgba(255,224,96,.55)';g.beginPath();g.arc(12,-4,8+Math.sin(gTime*12)*1.5,0,7);g.fill();g.globalCompositeOperation='source-over';
}else if(wep==='staff_fire'){
g.strokeStyle='#3b1708';g.lineWidth=5.5;g.lineCap='round';g.beginPath();g.moveTo(0,34);g.lineTo(0,-28);g.stroke();
g.strokeStyle='#8b4513';g.lineWidth=2.2;g.beginPath();g.moveTo(0,34);g.lineTo(0,-28);g.stroke();
g.fillStyle='#ffb000';g.strokeStyle='#5a1600';g.lineWidth=2;g.beginPath();g.arc(0,-31,8,0,7);g.fill();g.stroke();
g.globalCompositeOperation='lighter';
const gf=g.createRadialGradient(0,-34,0,0,-34,23+Math.sin(gTime*10)*3);
gf.addColorStop(0,'#fff4a0');gf.addColorStop(.35,'#ffb300');gf.addColorStop(.7,'#ff2a00');gf.addColorStop(1,'rgba(255,50,0,0)');
g.fillStyle=gf;g.beginPath();g.ellipse(0,-34,16,22,0,0,7);g.fill();
g.fillStyle='rgba(255,230,90,.65)';g.beginPath();g.ellipse(5,-39,6,11,.35,0,7);g.fill();
g.globalCompositeOperation='source-over';
}else if(wep==='wand_crystal'){
g.strokeStyle='#5b2e91';g.lineWidth=4;g.lineCap='round';g.beginPath();g.moveTo(0,25);g.lineTo(0,-13);g.stroke();
g.globalCompositeOperation='lighter';
g.fillStyle='#d49cff';g.strokeStyle='#fff';g.lineWidth=1.5;g.beginPath();g.moveTo(0,-25);g.lineTo(9,-12);g.lineTo(0,-3);g.lineTo(-9,-12);g.closePath();g.fill();g.stroke();
g.fillStyle='rgba(212,156,255,.45)';g.beginPath();g.arc(0,-14,16+Math.sin(gTime*9)*2,0,7);g.fill();
g.globalCompositeOperation='source-over';
}else if(wep==='blade_wind'){
g.strokeStyle='rgba(160,245,255,.95)';g.lineWidth=4;g.lineCap='round';g.beginPath();g.moveTo(-3,28);g.lineTo(28,-18);g.stroke();
g.globalCompositeOperation='lighter';
g.strokeStyle='rgba(100,210,255,.42)';g.lineWidth=11;g.beginPath();g.moveTo(-5,30);g.lineTo(31,-20);g.stroke();
g.strokeStyle='rgba(255,255,255,.75)';g.lineWidth=2;g.beginPath();g.arc(14,2,22,-.8,1.6);g.stroke();
g.globalCompositeOperation='source-over';
}else if(wep==='axe_blood'){
g.strokeStyle='#2c0710';g.lineWidth=5.5;g.lineCap='round';g.beginPath();g.moveTo(-4,2);g.lineTo(30,25);g.stroke();
g.fillStyle='#620014';g.strokeStyle='#160006';g.lineWidth=2.5;g.beginPath();g.moveTo(25,13);g.lineTo(52,-3);g.lineTo(48,31);g.lineTo(29,31);g.lineTo(18,43);g.lineTo(16,7);g.closePath();g.fill();g.stroke();
g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,20,72,.62)';g.beginPath();g.arc(39,22,8+Math.sin(gTime*11)*1.5,0,7);g.fill();g.globalCompositeOperation='source-over';
g.fillStyle='#ff1748';g.beginPath();g.arc(47,29,3,0,7);g.arc(31,11,2.5,0,7);g.fill();
}else if(wep==='scythe_spider'){
g.strokeStyle='#1d0724';g.lineWidth=5;g.lineCap='round';g.beginPath();g.moveTo(-6,28);g.lineTo(22,-18);g.stroke();g.strokeStyle='rgba(235,220,255,.8)';g.lineWidth=2;g.beginPath();g.arc(24,-18,20,-.5,2.8);g.stroke();g.fillStyle='rgba(210,190,255,.35)';g.beginPath();g.arc(18,-7,18,0,7);g.fill();
}else if(wep==='orb_witch'){
g.strokeStyle='#311044';g.lineWidth=4;g.beginPath();g.moveTo(0,24);g.lineTo(12,-16);g.stroke();g.globalCompositeOperation='lighter';g.fillStyle='#baff6a';g.beginPath();g.arc(16,-18,13+Math.sin(gTime*8)*2,0,7);g.fill();g.globalCompositeOperation='source-over';
}else if(wep==='lance_dragon'){
g.strokeStyle='#5a140b';g.lineWidth=5;g.beginPath();g.moveTo(-6,25);g.lineTo(42,-22);g.stroke();g.fillStyle='#ff7338';g.beginPath();g.moveTo(42,-22);g.lineTo(58,-18);g.lineTo(47,-5);g.closePath();g.fill();g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,80,20,.45)';g.beginPath();g.arc(45,-14,16,0,7);g.fill();g.globalCompositeOperation='source-over';
}else if(wep==='blade_void'){
g.strokeStyle='#1b0030';g.lineWidth=5;g.beginPath();g.moveTo(-4,26);g.lineTo(36,-20);g.stroke();g.globalCompositeOperation='lighter';g.strokeStyle='#9b4dff';g.lineWidth=12;g.beginPath();g.moveTo(8,12);g.lineTo(42,-26);g.stroke();g.fillStyle='rgba(255,90,184,.35)';g.beginPath();g.arc(30,-12,18,0,7);g.fill();g.globalCompositeOperation='source-over';
}else{
g.strokeStyle='#4a2730';g.lineWidth=4.5;g.lineCap='round';g.beginPath();g.moveTo(-3,1);g.lineTo(29,24);g.stroke();
const metal=g.createLinearGradient(20,0,48,30);metal.addColorStop(0,'#ffffff');metal.addColorStop(.55,'#b8cad8');metal.addColorStop(1,'#f4f7ff');
g.fillStyle=metal;g.strokeStyle='#3d1421';g.lineWidth=2.2;g.beginPath();g.moveTo(25,16);g.lineTo(47,2);g.lineTo(43,29);g.lineTo(28,29);g.lineTo(20,38);g.lineTo(18,10);g.closePath();g.fill();g.stroke();
g.fillStyle='#bfcbd3';g.beginPath();g.arc(28,23,3,0,7);g.fill();g.stroke();
g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,38,78,.6)';g.beginPath();g.arc(39,27,4,0,7);g.fill();g.globalCompositeOperation='source-over';
}
g.restore();
g.restore();
}

function drawEnemy(e){
if(e.dead&&e.death<0)return;
const alpha=e.dead?Math.max(0,e.death/.7):1;
g.save();g.globalAlpha=alpha;
if(e.hurt>0)g.translate(rnd(-2,2),0);
g.translate(e.x,e.y);if(e.dir<0){g.translate(e.w,0);g.scale(-1,1)}

g.globalAlpha=alpha*.22;g.fillStyle='#000';g.beginPath();g.ellipse(e.w/2,e.h+4,e.w*.48,5,0,0,7);g.fill();g.globalAlpha=alpha;

if(e.type==='mush'){g.fillStyle='#70224b';g.strokeStyle='#170814';g.lineWidth=3;rr(g,7,12,16,24,7,true,true);g.fillStyle='#f04c70';g.beginPath();g.ellipse(15,9,19,12,0,0,7);g.fill();g.stroke();g.fillStyle='#fff';g.fillRect(8,17,5,5);g.fillRect(18,17,5,5);g.fillStyle='#111';g.fillRect(10,18,2,3);g.fillRect(20,18,2,3);g.strokeStyle='#ccc';g.lineWidth=3;g.beginPath();g.moveTo(24,21);g.lineTo(35,12);g.stroke()}
if(e.type==='slug'){const wob=Math.sin(gTime*8)*3;g.fillStyle='#5cc441';g.strokeStyle='#102012';g.lineWidth=4;g.beginPath();g.ellipse(38,32+wob,42,27,0,0,7);g.fill();g.stroke();g.fillStyle='#9cff60';g.beginPath();g.ellipse(18,22,20,17,0,0,7);g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(16,13,8,0,7);g.arc(39,13,8,0,7);g.fill();g.fillStyle='#0b150b';g.beginPath();g.arc(18,14,3,0,7);g.arc(41,14,3,0,7);g.fill()}
if(e.type==='barb'){g.fillStyle='#a36b55';g.strokeStyle='#180b0b';g.lineWidth=4;rr(g,14,16,30,48,10,true,true);g.fillStyle='#e3a075';g.beginPath();g.arc(29,13,15,0,7);g.fill();g.stroke();g.strokeStyle='#d8e9ff';g.lineWidth=5;g.beginPath();g.moveTo(44,26);g.lineTo(70,3);g.moveTo(15,30);g.lineTo(-8,7);g.stroke();g.fillStyle='#fff';g.fillRect(22,10,6,4);g.fillRect(34,10,6,4)}
if(e.type==='queen'){const ph=e.phase;g.fillStyle=ph?'#6b31ff':'#d05bea';g.strokeStyle='#140718';g.lineWidth=4;rr(g,16,22,28,48,13,true,true);g.fillStyle='#ffd4c7';g.beginPath();g.ellipse(30,17,14,16,0,0,7);g.fill();g.stroke();g.fillStyle='#ffd24b';g.beginPath();g.moveTo(16,4);g.lineTo(22,-9);g.lineTo(30,4);g.lineTo(40,-9);g.lineTo(45,5);g.closePath();g.fill();g.stroke();g.strokeStyle=ph?'#82ffff':'#b864ff';g.lineWidth=3;for(let i=0;i<3+ph*3;i++){g.beginPath();g.moveTo(30,34);g.lineTo(30+rnd(-32,32),34+rnd(-34,34));g.stroke()};g.fillStyle='#fff';g.fillRect(23,15,6,4);g.fillRect(35,15,6,4)}
if(e.type==='clownlet'){g.fillStyle='#fff';g.strokeStyle='#222';g.lineWidth=3;rr(g,7,14,18,22,6,true,true);g.fillStyle='#ff5ab8';g.beginPath();g.arc(16,10,11,0,7);g.fill();g.stroke();g.fillStyle='#ffd0bd';g.beginPath();g.arc(16,10,8,0,7);g.fill();g.fillStyle='#ff0044';g.beginPath();g.arc(16,10,3,0,7);g.fill()}
if(e.type==='candyImp'){g.fillStyle='#cc44ff';g.strokeStyle='#550080';g.lineWidth=3;rr(g,7,12,18,22,7,true,true);g.fillStyle='#ffaaff';g.beginPath();g.arc(16,8,10,0,7);g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(12,6,4,0,7);g.arc(20,6,4,0,7);g.fill();g.fillStyle='#880055';g.beginPath();g.arc(13,7,2,0,7);g.arc(21,7,2,0,7);g.fill()}
if(e.type==='rootling'){g.fillStyle='#2d6b1a';g.strokeStyle='#0a2208';g.lineWidth=3;rr(g,8,14,18,28,5,true,true);g.fillStyle='#5dcc40';g.beginPath();g.arc(17,10,11,0,7);g.fill();g.stroke();g.strokeStyle='#1a4d10';g.lineWidth=4;g.beginPath();g.moveTo(5,36);g.lineTo(-5,50);g.moveTo(30,36);g.lineTo(40,50);g.stroke()}
if(e.type==='mushking'){g.fillStyle='#ff2255';g.strokeStyle='#170814';g.lineWidth=4;rr(g,14,22,50,44,12,true,true);g.fillStyle='#ffd700';g.beginPath();g.moveTo(14,8);g.lineTo(18,-10);g.lineTo(30,5);g.lineTo(44,-10);g.lineTo(48,8);g.closePath();g.fill();g.stroke();g.fillStyle='#ffc0c0';g.beginPath();g.ellipse(39,14,16,16,0,0,7);g.fill();g.stroke();g.fillStyle='#ff2244';g.beginPath();g.ellipse(39,6,24,12,0,0,7);g.fill();g.stroke()}
if(e.type==='clown'){g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=4;rr(g,12,30,42,46,14,true,true);g.fillStyle='#ffd0bd';g.beginPath();g.ellipse(33,20,18,18,0,0,7);g.fill();g.stroke();g.fillStyle='#ff1155';g.beginPath();g.arc(33,20,8,0,7);g.fill();g.fillStyle='#ff2266';g.beginPath();g.moveTo(16,8);g.lineTo(33,-12);g.lineTo(50,8);g.closePath();g.fill();g.stroke()}
if(e.type==='caramel'){g.fillStyle='#cc8800';g.strokeStyle='#552200';g.lineWidth=4;rr(g,12,28,38,52,12,true,true);g.fillStyle='#ffdd88';g.beginPath();g.arc(31,18,16,0,7);g.fill();g.stroke();g.fillStyle='#ffcc00';g.beginPath();g.moveTo(16,8);g.lineTo(20,-4);g.lineTo(31,6);g.lineTo(42,-4);g.lineTo(46,8);g.closePath();g.fill();g.stroke()}
if(e.type==='treeking'){g.fillStyle='#1a4d10';g.strokeStyle='#08200a';g.lineWidth=5;rr(g,26,38,40,72,14,true,true);g.fillStyle='#5dcc40';g.beginPath();g.arc(46,18,30,0,7);g.fill();g.stroke();g.strokeStyle='#1a4d10';g.lineWidth=6;g.beginPath();g.moveTo(26,80);g.lineTo(0,110);g.moveTo(66,80);g.lineTo(92,110);g.stroke()}
if(e.type==='mirror'){const ph=e.phase;g.globalAlpha=(.85+Math.sin(gTime*6)*.1)*alpha;g.fillStyle=ph?'rgba(0,255,255,.7)':'rgba(150,100,255,.7)';g.strokeStyle='#fff';g.lineWidth=3;rr(g,8,8,20,40,7,true,true);g.fillStyle=ph?'#00ffff':'#b864ff';g.beginPath();g.arc(18,6,10,0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,.9)';g.beginPath();g.arc(14,4,4,0,7);g.arc(22,4,4,0,7);g.fill();g.globalAlpha=alpha}

if(e.type==='spider_woman'){const wig=Math.sin(gTime*12)*3;g.strokeStyle='#180018';g.lineWidth=4;for(let i=0;i<4;i++){const yy=24+i*8;g.beginPath();g.moveTo(24,yy);g.lineTo(-10,yy-10+wig);g.moveTo(30,yy);g.lineTo(64,yy-10-wig);g.stroke()}g.fillStyle='#5b124e';g.strokeStyle='#130018';g.lineWidth=3;rr(g,12,22,30,34,12,true,true);g.fillStyle='#ead0ff';g.beginPath();g.arc(27,14,14,0,7);g.fill();g.stroke();g.fillStyle='#fff';g.fillRect(20,12,5,4);g.fillRect(31,12,5,4);g.fillStyle='#111';g.fillRect(22,13,2,3);g.fillRect(33,13,2,3)}
if(e.type==='zombie'){const st=Math.sin(gTime*7)*4;g.fillStyle='#6fa064';g.strokeStyle='#172314';g.lineWidth=3;rr(g,8,14,20,32,6,true,true);g.beginPath();g.arc(18,9,12,0,7);g.fill();g.stroke();g.strokeStyle='#6fa064';g.lineWidth=5;g.beginPath();g.moveTo(8,24);g.lineTo(-4,26+st);g.moveTo(28,24);g.lineTo(42,22-st);g.moveTo(13,44);g.lineTo(8,55);g.moveTo(24,44);g.lineTo(32,55);g.stroke();g.fillStyle='#fff';g.fillRect(14,8,4,3);g.fillRect(22,8,4,3)}
if(e.type==='giant'){const st=Math.sin(gTime*5)*5;g.fillStyle='#7b5a48';g.strokeStyle='#21100b';g.lineWidth=5;rr(g,18,26,46,72,16,true,true);g.fillStyle='#b98a6b';g.beginPath();g.arc(41,18,22,0,7);g.fill();g.stroke();g.strokeStyle='#b98a6b';g.lineWidth=10;g.beginPath();g.moveTo(20,48);g.lineTo(-4,68+st);g.moveTo(62,48);g.lineTo(90,66-st);g.stroke();g.fillStyle='#fff';g.fillRect(32,15,7,5);g.fillRect(48,15,7,5)}
if(e.type==='skeleton'){const st=Math.sin(gTime*9)*3;g.strokeStyle='#e9e0c8';g.lineWidth=5;g.beginPath();g.moveTo(17,20);g.lineTo(17,42);g.moveTo(17,26);g.lineTo(3,35+st);g.moveTo(17,26);g.lineTo(32,34-st);g.moveTo(17,42);g.lineTo(8,54);g.moveTo(17,42);g.lineTo(27,54);g.stroke();g.fillStyle='#f1ead2';g.strokeStyle='#332b22';g.lineWidth=2;g.beginPath();g.arc(17,12,12,0,7);g.fill();g.stroke();g.fillStyle='#111';g.fillRect(12,9,4,5);g.fillRect(20,9,4,5)}
if(e.type==='witch'){const bob=Math.sin(gTime*4)*3;g.fillStyle='#2b0c3f';g.strokeStyle='#100018';g.lineWidth=3;rr(g,10,26+bob,24,34,8,true,true);g.fillStyle='#94d47b';g.beginPath();g.arc(22,18+bob,12,0,7);g.fill();g.stroke();g.fillStyle='#241030';g.beginPath();g.moveTo(5,12+bob);g.lineTo(22,-12+bob);g.lineTo(39,12+bob);g.closePath();g.fill();g.stroke();g.strokeStyle='#aa66ff';g.lineWidth=3;g.beginPath();g.moveTo(35,35+bob);g.lineTo(58,20+bob);g.stroke()}
if(e.type==='dragon'){const fl=Math.sin(gTime*10)*7;g.fillStyle='#b02028';g.strokeStyle='#280408';g.lineWidth=4;g.beginPath();g.ellipse(43,32,36,22,0,0,7);g.fill();g.stroke();g.beginPath();g.arc(78,24,18,0,7);g.fill();g.stroke();g.fillStyle='#ff7040';g.beginPath();g.moveTo(30,20);g.lineTo(10,0+fl);g.lineTo(50,12);g.closePath();g.moveTo(42,18);g.lineTo(28,-8-fl);g.lineTo(68,12);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.moveTo(88,24);g.lineTo(102,18);g.lineTo(96,30);g.closePath();g.fill()}
if(e.type==='alien_mage'){const pulse=Math.sin(gTime*6)*4;g.fillStyle='#2de0b4';g.strokeStyle='#06251e';g.lineWidth=3;rr(g,8,16,30,38,12,true,true);g.fillStyle='#190044';g.beginPath();g.ellipse(23,12,18,13,0,0,7);g.fill();g.stroke();g.fillStyle='#baffff';g.beginPath();g.arc(23,12,8+pulse*.15,0,7);g.fill();g.globalCompositeOperation='lighter';g.fillStyle='rgba(136,0,255,.35)';g.beginPath();g.arc(23,30,22+pulse,0,7);g.fill();g.globalCompositeOperation='source-over'}
if(e.type==='void_matron'){const pulse=Math.sin(gTime*5)*6;g.fillStyle='#180020';g.strokeStyle='#b676ff';g.lineWidth=4;rr(g,14,26,46,68,18,true,true);g.fillStyle='#3a0055';g.beginPath();g.arc(37,18,24,0,7);g.fill();g.stroke();for(let i=0;i<6;i++){g.strokeStyle=i%2?'#7a2cff':'#ff5ab8';g.lineWidth=4;g.beginPath();g.moveTo(37,58);g.lineTo(37+Math.cos(i)*42,84+Math.sin(i+gTime*3)*12);g.stroke()}g.globalCompositeOperation='lighter';g.fillStyle='rgba(180,80,255,.28)';g.beginPath();g.arc(37,48,46+pulse,0,7);g.fill();g.globalCompositeOperation='source-over'}

const w2Colors={pyrefiend:'#ff4400',deepDrifter:'#0044aa',boneling:'#ddddcc',neonDrone:'#00ffff',dustDevil:'#ccbb88',shardling:'#4488ff',windWraith:'#88ccff',shadowFiend:'#440088'};
const w2Brute={lavaBrute:'#cc2200',abyssWorm:'#002266',ghostKnight:'#aabb88',glitchFiend:'#00aaff',sandGolem:'#bb9944',crystalBrute:'#2244cc',stormKnight:'#4488aa',darkKnight:'#220044'};
const w2Boss={volcanic:'#ff2200',krakenette:'#0022cc',lich:'#8800cc',neonGod:'#00ccff',saltGolem:'#ddddaa',crystalQueen:'#0033ff',windPhantom:'#55aadd',darkCore:'#440066'};
const w3Simple={starSpawn:'#6600ff',gearling:'#886622',blobTwin:'#44cc22',nullFiend:'#440088'};
const w3Brute={cosmicBrute:'#4400cc',steamBrute:'#884422',muscleMass:'#228822'};
const w3Boss={voidBeast:'#6600cc',mechaBoss:'#aa6600',organicTitan:'#228800',nullKing:'#ffffff'};

function drawGenericEnemy(col,bright){
g.fillStyle=col;g.strokeStyle='rgba(255,255,255,.3)';g.lineWidth=3;
rr(g,4,8,e.w-8,e.h-10,10,true,true);
g.fillStyle=bright||'#fff';g.beginPath();g.arc(e.w*.35,e.h*.22,5,0,7);g.arc(e.w*.65,e.h*.22,5,0,7);g.fill();
g.fillStyle='#111';g.beginPath();g.arc(e.w*.35,e.h*.22,2.2,0,7);g.arc(e.w*.65,e.h*.22,2.2,0,7);g.fill();
}
const allSimple={...w2Colors,...w3Simple};const allBrute={...w2Brute,...w3Brute};const allBoss={...w2Boss,...w3Boss};
if(allSimple[e.type])drawGenericEnemy(allSimple[e.type]);
if(allBrute[e.type]){g.save();g.scale(1.2,.9);drawGenericEnemy(allBrute[e.type]);g.restore()}
if(allBoss[e.type]){g.save();g.scale(1.1,1.05);drawGenericEnemy(allBoss[e.type],'#ffcc00');

g.fillStyle='#ffd700';g.beginPath();g.moveTo(e.w*.15,e.h*.12);g.lineTo(e.w*.2,e.h*.02);g.lineTo(e.w*.5,e.h*.1);g.lineTo(e.w*.8,e.h*.02);g.lineTo(e.w*.85,e.h*.12);g.closePath();g.fill();
if(e.phase){g.globalCompositeOperation='lighter';g.globalAlpha=.3+Math.sin(gTime*4)*.2;dlb(e.w/2,e.h/2,40,allBoss[e.type],.3);g.globalCompositeOperation='source-over';g.globalAlpha=1}
g.restore()
}
g.restore();
if(!e.dead&&!e.boss)drawEnemyHpBar(e);
if(e.boss&&!e.dead)drawBossBar(e);
}

function drawEnemyHpBar(e){
if(!e||e.dead||!e.maxHp||e.hp>=e.maxHp)return;
const hp=clamp(e.hp/e.maxHp,0,1);
const bw=Math.max(18,Math.min(42,e.w*.72)),bh=4;
const x=Math.round(e.x+e.w/2-bw/2),y=Math.round(e.y-8);
g.save();
g.fillStyle='rgba(0,0,0,.62)';g.fillRect(x,y,bw,bh);
g.fillStyle=hp<.3?'#ff304f':hp<.6?'#ffe060':'#60ff80';g.fillRect(x,y,Math.max(1,bw*hp),bh);
g.strokeStyle='rgba(255,255,255,.42)';g.lineWidth=1;g.strokeRect(x-.5,y-.5,bw+1,bh+1);
g.restore();
}

let animFrame=0;
function loop(now){
animFrame=requestAnimationFrame(loop);
const dt=Math.min((now-last)/1000,.06);last=now;
if(started)update(dt);
draw();updateGameplayMenu();
}
requestAnimationFrame(loop);

})();

(function(){
try{
setInterval(()=>{socialHeartbeat();mpRoomHeartbeat()},25000);
['pagehide','beforeunload'].forEach(ev=>window.addEventListener(ev,()=>{socialSetOffline();try{if(MP&&MP.playerRef)MP.playerRef.update({online:false,updated:firebase.database.ServerValue.TIMESTAMP})}catch(e){}},{capture:true}));
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){socialSetOffline();try{if(MP&&MP.playerRef)MP.playerRef.update({online:false,updated:firebase.database.ServerValue.TIMESTAMP})}catch(e){}}else{socialHeartbeat();mpRoomHeartbeat()}});
}catch(e){}
})();

(function(){
function updateOnlineCounter(){
try{
if(!fbDb)return;
socialPath('playersOnline').once('value').then(snap=>{
let total=0;
snap.forEach(c=>{
const v=c.val()||{};
if(v.online===true && (!v.lastSeen || Date.now()-(+v.lastSeen||0)<120000)) total++;
});
const el=document.getElementById('onlineCountValue');
if(el) el.textContent=total;
});
}catch(e){}
}
setInterval(updateOnlineCounter,4000);
setTimeout(updateOnlineCounter,1500);

/* PATCH chat real: envio local imediato + Firebase com timestamp numérico */
function mmSendRoomChatNow(){
 try{
  const inp=document.getElementById('mpChatInput')||document.querySelector('.mp-chat-input');
  if(!inp){mpStatus('Campo do chat não encontrado.');return false;}
  if(!MP||!MP.on||!MP.roomRef){mpStatus('Entre em uma sala para usar o chat.');return false;}
  const f=mpChatFilterText(inp.value||'');
  if(!f.ok){mpStatus(f.msg||'Mensagem inválida.');return false;}
  const msg={uid:String(AUTH_UID||MP.playerId||mpId()||'anon'),nick:String(MP.nick||SOCIAL.nick||getGlobalNickValue()||mmNickStored()||'Jogador').slice(0,20),text:String(f.text).slice(0,120),at:Date.now()};
  inp.value='';
  if(!MP.chat)MP.chat={};
  const localKey='local_'+msg.at+'_'+Math.floor(Math.random()*9999);
  MP.chat[localKey]=msg;
  mpRenderChat();
  MP.roomRef.child('chat').push(msg).then(()=>{
    try{delete MP.chat[localKey];mpRenderChat()}catch(e){}
  }).catch(err=>{
    console.warn('chat send failed',err);
    mpStatus('Chat bloqueado pelas regras Firebase.');
  });
  return false;
 }catch(e){console.warn('mmSendRoomChatNow error',e);mpStatus('Erro ao enviar mensagem.');return false;}
}
function mmBindChatHard(){
 try{
  const btn=document.getElementById('btnMpChatSend');
  const inp=document.getElementById('mpChatInput');
  if(btn&&!btn.dataset.mmHardChat){btn.dataset.mmHardChat='1';btn.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();mmSendRoomChatNow();},true)}
  if(inp&&!inp.dataset.mmHardChat){inp.dataset.mmHardChat='1';inp.addEventListener('keydown',ev=>{if(ev.key==='Enter'){ev.preventDefault();ev.stopPropagation();mmSendRoomChatNow();}},true)}
 }catch(e){}
}
document.addEventListener('click',ev=>{try{if(ev.target&&(ev.target.id==='btnMpChatSend'||(ev.target.closest&&ev.target.closest('#btnMpChatSend')))){ev.preventDefault();ev.stopPropagation();mmSendRoomChatNow();}}catch(e){}},true);
document.addEventListener('DOMContentLoaded',mmBindChatHard);
window.addEventListener('load',mmBindChatHard);
setInterval(mmBindChatHard,1200);

})();


;try{window.__MM_TOUCABR_PASSIVE_WATERMARK__="@toucabr|mundo-magico|pwa|lobby-duo|2026";}catch(e){}


/* PATCH CHAT SEND BINDING - garante envio mesmo se o botão for recriado ou movido */
(function(){
 function bindChatSendOnce(){
  try{
   var btn=document.getElementById('btnMpChatSend');
   if(btn && !btn.dataset.chatBound){
    btn.dataset.chatBound='1';
    btn.addEventListener('click',function(ev){ev.preventDefault();ev.stopPropagation();mpSendChat();});
   }
   var inp=document.getElementById('mpChatInput');
   if(inp && !inp.dataset.chatBound){
    inp.dataset.chatBound='1';
    inp.addEventListener('keydown',function(ev){if(ev.key==='Enter'){ev.preventDefault();mpSendChat();}});
   }
  }catch(e){}
 }
 document.addEventListener('click',function(ev){
  try{if(ev.target && (ev.target.id==='btnMpChatSend' || ev.target.closest && ev.target.closest('#btnMpChatSend'))){ev.preventDefault();ev.stopPropagation();mpSendChat();}}catch(e){}
 },true);
 document.addEventListener('DOMContentLoaded',bindChatSendOnce);
 window.addEventListener('load',bindChatSendOnce);
 setTimeout(bindChatSendOnce,500);
 setTimeout(bindChatSendOnce,1500);
})();
