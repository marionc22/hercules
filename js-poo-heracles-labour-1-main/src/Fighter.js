const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }

    isAlive() {
        if (this.life > 0) {
            return true;
        } else {
            return false;
        }
    }

    fight(enemy) {

        let damagePoints = Math.floor(Math.random() * (this.strength) - enemy.dexterity) + 1;

        if (damagePoints < 0) {
            damagePoints = 0;
        }

        enemy.life -= damagePoints;

        if (enemy.life < 0) {
            enemy.life = 0;
            console.log(`${this.name} 🗡️ ${enemy.name} 💙${enemy.name} : ${enemy.life} `);
            console.log(`🏆 ${this.name} wins! (💙 ${this.life})`)
            console.log(`💀 ${enemy.name} has been defeated !`)
        } else {
            console.log(`${this.name} 🗡️ ${enemy.name} 💙${enemy.name} : ${enemy.life} `);
        }
    }
}





module.exports.Fighter = Fighter;