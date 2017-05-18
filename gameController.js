function GameController() {
    var service = new GameService
    var chngHits = document.getElementById("hits")
    var chngHealth = document.getElementById("health")




    this.equip = function(item){
        service.equipItem(item)
    }

    this.slap = function() {
        service.attack("Mike", "slap")
        updateScreen()
    }
    this.punch = function() {
        service.attack("Mike", "punch")
        updateScreen()
    }
    this.kick = function() {
        service.attack("Mike", "kick")
        updateScreen()
    }


    function updateScreen() {
        var mike = service.getCharacter('Mike')
        chngHealth.innerHTML = mike.health
        chngHits.innerHTML = mike.hits
    }

    updateScreen()



}