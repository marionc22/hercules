const Fighter = require('./src/Fighter.js').Fighter;

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

let round = 1;

while (heracles.life > 0 || nemean.life > 0) {
    console.log(`🕛 Round #${round}`)
    heracles.fight(nemean);


    if (heracles.life <= 0 || nemean.life <= 0) {
        round = 1;
        break;
    }

    nemean.fight(heracles);


    round++;
    if (heracles.life <= 0 || nemean.life <= 0) {
        round = 1;
        break;
    }
}