export const defaultGameConfig = {
  airDrag: '0.001',
  digSpeed: '0.05',
  eatSpeed: '0.05',
  fallDamageMin: '0.3',
  fallDamageMult: '100',
  fallDamageSound: 'https://static.heironimus.info/sound/Thud.ogg',
  gameOverSound: 'https://static.heironimus.info/sound/YouDead.ogg',
  gravity: '0.005',
  health: '100',
  jumpPower: '0.111',
  maxHealth: '100',
  maxPoop: '10',
  moveDeceleration: '0.2',
  moveSpeed: '0.0222',
  poop: '0',
  swimPower: '0.008',
  waterDrag: '0.1',
};

export const defaultTileTypes = {
  0: {
    color: 'green',
    diggable: true,
    edible: true,
    healing: '5',
    hp: '1',
    id: 'g',
    image:
      'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/12bfe63d7362e53.png',
    label: 'grass',
    makePoop: '1',
    order: '1',
    sound: 'https://static.heironimus.info/sound/Chomp.ogg',
  },
  1: {
    color: 'saddleBrown',
    density: '20',
    diggable: true,
    healing: '2',
    hp: '1',
    id: 'p',
    image:
      'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/b0e07c73f8aa75e.png',
    label: 'poop',
    movable: true,
    moveDelay: '2',
    order: '2',
    sound: 'https://static.heironimus.info/sound/SloppyPoopSoft.ogg',
  },
  2: {
    color: 'gray',
    id: 's',
    image:
      'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/0041e8e715b1264.png',
    label: 'stone',
    order: '3',
  },
  3: {
    color: 'red',
    density: '1.1',
    id: 'w',
    image:
      'https://piskel-imgstore-b.appspot.com/img/610cc71e-cdb9-11ec-8e05-2f9ec14027c3.gif',
    walkingImage:
      'https://piskel-imgstore-b.appspot.com/img/253fba5c-cdb9-11ec-acf8-2f9ec14027c3.gif',
    pushingImage:
      'https://piskel-imgstore-b.appspot.com/img/586bb7e6-cdb9-11ec-a846-2f9ec14027c3.gif',
    jumpingImage:
      'https://piskel-imgstore-b.appspot.com/img/4439c4fd-cdb9-11ec-9ce8-2f9ec14027c3.gif',
    diggingImage:
      'https://piskel-imgstore-b.appspot.com/img/3a751840-cdb9-11ec-8175-2f9ec14027c3.gif',
    crouchingImage:
      'https://piskel-imgstore-b.appspot.com/img/32ac8f9e-cdb9-11ec-9e05-2f9ec14027c3.gif',
    label: 'wombat',
    order: '4',
  },
  4: {
    color: 'orange',
    density: '2',
    healing: '-0.73',
    id: 'm',
    image:
      'https://piskel-imgstore-b.appspot.com/img/a3591080-d48c-11ec-adf0-83f7175e2efe.gif',
    label: 'magma',
    moveDelay: '30',
    moveStyle: 'liquid',
    order: '5',
  },
  5: {
    collectible: true,
    color: 'cyan',
    id: 'j',
    image: 'https://i.ibb.co/m6V89v5/gem.gif',
    label: 'jewel',
    order: '6',
    sound: 'https://static.heironimus.info/sound/PinkFast.ogg',
  },
  6: {
    color: 'purple',
    density: '0',
    diggable: true,
    dropsLoot: 'j',
    healing: '-0.5',
    hp: '2',
    id: 'k',
    image:
      'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2b956856674265a.png',
    label: 'Koala',
    moveDelay: '25',
    moveStyle: 'patrol',
    order: '7',
    sound: 'https://static.heironimus.info/sound/Hiss.ogg',
  },
  7: {
    color: 'blue',
    density: '0.85',
    id: 'a',
    image:
      'https://piskel-imgstore-b.appspot.com/img/ffce45fa-d85c-11ec-a908-a90a117b47b4.gif',
    label: 'water',
    moveDelay: '15',
    moveStyle: 'liquid',
    order: '8',
  },
  8: {
    color: '#f04dd2',
    density: '10',
    id: 'o',
    image:
      'https://piskel-imgstore-b.appspot.com/img/e92587eb-df95-11ec-b289-d74eb3c6d4e4.gif',
    label: 'polymer',
    movable: true,
    moveDelay: '90',
    moveStyle: 'liquid',
    order: '9',
    sound: 'https://static.heironimus.info/sound/Boing.ogg',
  },
  9: {
    color: 'red',
    density: '1',
    hp: '1',
    id: 'n',
    image:
      'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/6efea72003769ad.png',
    label: 'NPC',
    moveDelay: '10',
    order: '10',
  },
  '-1': {
    color: 'black',
    id: '_delete',
    label: 'delete',
    order: '0',
  },
};
