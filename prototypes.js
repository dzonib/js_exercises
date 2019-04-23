function Elf(name, life, mana, weapon) {
    this.name = name
    this.life = life
    this.mana = mana
    this.weapon = weapon
}

Elf.prototype.attack = function(enemy) {
    if (this.name === 'Eol') {
        enemy.life = 1
    } else {
        console.log('piggoncrap')
    }
}

const eol = new Elf('Eol', 100, 320, 'sword')

const kingkong = new Elf("batkingkong", 100000, 0, "kingkong")

eol.attack(kingkong)

console.log(kingkong)