import { player1, player2 } from './player.js';
import { logs } from './logs.js';
import getRandom from './random.js';

console.log(player1);
console.log(player2);

const $arenas = document.querySelector('.arenas');
const $clickButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat')

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

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
        default:
            text = 'Ты по-моему что-то перепутал))';
    }
    $chat.insertAdjacentHTML("afterbegin", el);
}

generateLogs('start', player1, player2);

