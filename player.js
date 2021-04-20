export const player1 = {
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

export const player2 = {
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