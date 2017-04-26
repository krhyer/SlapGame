var health = 100
var hits = 0

var chngHits = document.getElementById("hits")
var chngHealth = document.getElementById("health")
function update(){
    if (health <= 0){
        health = 0
    }
    if (health != 0){
        hits++
    }
    chngHealth.innerHTML = health
    chngHits.innerHTML = hits
}




function slap(){
    
    health -= 1

    update()
}
function punch(){
    
    health -= 5
    
    update()
}
function kick(){
    
    health -= 10
    
    update()
    }







update()