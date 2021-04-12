const $arenas = document.querySelector('.arenas');
const $clickButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'https://www.fightersgeneration.com/nf8/char6/scorpion-umk3-spear-toss-fan-remake.GIF',
    weapon: ['Kunai'],
    attack: () => console.log(this.name + ' ' + 'Fight...'),
}

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Blade'],
    attack: () => console.log(this.name + ' ' + 'Fight...'),
}

function createElement (tag, className) {
    const $tag = document.createElement(tag);
    className : $tag.classList.add(className);
    return $tag;
}

function createPlayer(pers) {
    const $player = createElement('div', 'player' + pers.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');    
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = '100%';
    $life.style.width = pers.hp + '%';
    $name.innerText = pers.name;
    $img.src = pers.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' ' +'.life');
    $playerLife.style.width = player.hp + '%';
    
    console.log(player.hp)

    player.hp -= Math.ceil(Math.random() * 20);

    if (player.hp <= 0 && player.player === 1) {
        player.hp = 0;
        $arenas.appendChild(playerStatus(player2.name));
        console.log('Решающим ударом отправляем в = ' + `${player.hp}`);
      }
    
      if (player.hp <= 0 && player.player === 2) {
        player.hp = 0;
        $arenas.appendChild(playerStatus(player1.name));
        console.log('Решающим ударом отправляем в = ' +`${player.hp}`);
      }     
}

$clickButton.addEventListener('click', () => {
    // console.log('тык!');
    changeHP(player1)
        console.log(player1.name);
    changeHP(player2);
        console.log(player2.name);
})

function playerStatus(name) {
    const $closeTitle = createElement('div', 'winTitle');
    $closeTitle.innerText = name + ' ' + 'win';
    $clickButton.disabled = true;
    return $closeTitle;
}

$arenas.appendChild(createPlayer(player1));    
$arenas.appendChild(createPlayer(player2));    


