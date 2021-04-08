const Scorpion = {
    name: 'Scorpion',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai'],
    attack: () => console.log(this.name + ' ' + 'Fight...'),
}

const Kitana = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Blade'],
    attack: () => console.log(this.name + ' ' + 'Fight...'),
}

function createPlayer(player, pers) {
    const $player = document.createElement('div');
    $player.classList.add(player);

        // div.progressbar и div.character
    
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

        // div.life и div.name

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $life.style.width = pers.hp + '%';
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = pers.name;
    $progressbar.appendChild($name);

        // img

    const $img = document.createElement('img');
    $img.src = pers.img;
    $character.appendChild($img);

        // div.arenas
    
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

createPlayer('player1', Scorpion);
createPlayer('player2', Kitana);




