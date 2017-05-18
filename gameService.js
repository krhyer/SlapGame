function GameService() {


    var mike = {
        name: "Mike",
        health: 100,
        attacks: {
            slap: 1,
            punch: 5,
            kick: 10
        },
        hits: -1
    }
     var items = {
            knuckles: 2,
            dagger: 7.258748526845123845656365369563563,
            banana: .1
        }
    var equip = ''
    this.attack = function (name, atk) {
        if (name == mike.name) {
            mike.health -= mike.attacks[atk] * items[equip]
        }
    }

    this.getCharacter = function (name) {
        if (mike.health <= 0){
            mike.health = 0
        }
        if (mike.health != 0) {
            mike.hits++
        }
        if (name == mike.name) {
            return mike
        }
    }
    this.equipItem = function(item){
        equip = item
    console.log(equip)
    }
}
