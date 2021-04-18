const $arenas = document.querySelector('.arenas');
const $clickButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat')


const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'https://www.fightersgeneration.com/nf8/char6/scorpion-umk3-spear-toss-fan-remake.GIF',
    weapon: ['Kunai'],
    attack: () => console.log(this.name + ' ' + 'Fight...'),
    changeHP,
    elHP,
    renderHP,
}

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Blade'],
    attack: () => console.log(this.name + ' ' + 'Fight...'),
    changeHP,
    elHP,
    renderHP,
}

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};


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

function changeHP(randomNumber) {
    this.hp -= getRandom(randomNumber);
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
    const $closeTitle = createElement('div', 'loseTitle');
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

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
}

function Winner(player1, player2) {
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
}

function playerAttack() {
    const attack = {};

    for(let item of $formFight) {
        if(item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }
        if(item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }
    return attack;
}

$formFight.addEventListener('submit', function(event) {
    event.preventDefault();

    const enemy = enemyAttack();
    const player = playerAttack();
 
        if (player.defence !== enemy.hit) {
            player1.changeHP(enemy.value);
            player1.renderHP();
            generateLogs("hit", player2, player1);
        }

        if (enemy.defence !== player.hit) {
            player2.changeHP(player.value);
            player2.renderHP();
            generateLogs("defence", player1, player2);
        }

    console.log('Scorpion', player.value, player);
    console.log('Kitana', enemy.value, enemy);

    Winner(player1, player2);
})

function time() {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return `${hours}:${min}:${sec}`;
}

function generateLogs(type, player1, player2) {
    let text;
    let el;
    switch(type) {
        case 'start':
            text = logs[type].replace('[time]', time()).replace('[player1]', player1.name).replace('[player2]', player2.name);
                el = `<p>${time()} ${text}</p>`;
            break;
        case 'hit':
            text = logs[type][getRandom(logs.hit.length - 1)].replace("[playerKick]", player1.name).replace("[playerDefence]", player2.name);
                el = `<p> ${time()} ${text} ${player1.hp}/100</p>`;
            break;
        case 'defence':
            text = logs[type][getRandom(logs.defence.length - 1)].replace("[playerKick]", player2.name).replace("[playerDefence]", player1.name);
                el = `<p>${time()} ${text} ${player1.hp}/100</p>`
            break;
        case 'draw':
            text = logs[type];
            break;
        case 'end':
            text = logs[type][getRandom(logs.end.length)].replace("[playerWins]", player1.name).replace("[playerLose]", player2.name);
            break;
    }
    $chat.insertAdjacentHTML("afterbegin", el);
}

generateLogs('start', player1, player2);

