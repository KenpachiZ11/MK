const $arenas = document.querySelector('.arenas');
const $clickButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'https://www.fightersgeneration.com/nf8/char6/scorpion-umk3-spear-toss-fan-remake.GIF',
    weapon: ['Kunai'],
    attack: () => console.log(this.name + ' ' + 'Fight...'),
    changeHP: changeHP,
    elHP:  elHP,
    renderHP: renderHP,
}

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Blade'],
    attack: () => console.log(this.name + ' ' + 'Fight...'),
    changeHP: changeHP,
    elHP:  elHP,
    renderHP: renderHP,
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

function getRandom(num) {
    return Math.ceil(Math.random() * num);
}

function changeHP() {
    this.hp -= getRandom(20);
    if(this.hp <= 0) {
        this.hp = 0;
    }
}

function elHP() {
    const $playerLife =  document.querySelector('.player' + this.player + ' ' +'.life');
    return $playerLife;
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

$clickButton.addEventListener('click', function () {
    player1.changeHP(getRandom());
    player1.renderHP();
    console.log(player1.hp);

    player2.changeHP(getRandom());
    player2.renderHP();
    console.log(player2.hp);

        if(player1.hp === 0 || player2.hp === 0) {
            $clickButton.disabled = true;
            createReloadButton();
        }

        if(player1.hp === 0 && player1.hp < player2.hp) {
            $arenas.appendChild(playerStatus(player2.name));
        } else if((player2.hp === 0 && player2.hp < player1.hp)) {
            $arenas.appendChild(playerStatus(player1.name));
        } else if((player1.hp === 0 && player2.hp === 0)) {
            $arenas.appendChild(playerStatus());
        }
})

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');

    $reloadButton.innerText = 'Reload';
    $reloadWrap.appendChild($reloadButton);
    $arenas.appendChild($reloadWrap);

    $reloadButton.addEventListener('click', () => {
        window.location.reload();
    });
}

function playerStatus(name) {
    const $closeTitle = createElement('div', 'winTitle');
    if(name){
        $closeTitle.innerText = name + ' ' + 'win';
    } else {
        $closeTitle.innerText = 'draw';
    }
    $clickButton.disabled = true;
    return $closeTitle;
}

$arenas.appendChild(createPlayer(player1));    
$arenas.appendChild(createPlayer(player2));    

