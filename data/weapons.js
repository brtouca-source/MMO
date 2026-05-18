window.GAME_DATA=window.GAME_DATA||{};
window.GAME_DATA.extraWeapons = window.GAME_DATA.extraWeapons || [];
// Armas extras modulares: são mescladas na loja sem substituir a loja original.
// Idempotente para evitar duplicação caso o script seja carregado mais de uma vez.
if(!window.GAME_DATA.extraWeapons.some(w=>w&&w.id==='vulcan_mg')){
 window.GAME_DATA.extraWeapons.push({
  id:'vulcan_mg',
  name:'Metralhadora Vulcânica',
  desc:'Lendária: rajada automática, DPS alto, recoil leve e projéteis vulcânicos',
  icon:'🌋',
  price:25000,
  rarity:'Lendária',
  bonus:{vulcan:1},
  dmg:4,
  fireDmg:2
 });
}
