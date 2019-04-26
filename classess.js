class Elf {
  constructor(name, life, weaponDmg) {
    this.name = name
    this.life = life
    this.weaponDmg = weaponDmg
  }

  attack(enemy) {
    enemy.life -= this.weaponDmg
    console.log(`*SLASH*... ${this.name} has attacked the enemy 
    "${enemy.name}" and did ${this.weaponDmg} damage.
    Now ${enemy.name} has ${enemy.life} life left`)
  }
}

class Monster {
  constructor(life, name) {
    this.life = life
    this.name = name
  }
}

const kingkong = new Monster(100, "King KOng")

const klempo = new Elf('Klempo', 30, 5)

klempo.attack(kingkong)