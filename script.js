const person = document.getElementById("person");
const enemy = document.getElementById("enemy");
const record = document.getElementById("record");

document.addEventListener("keydown",function(event) {
    jump();
    record.innerHTML = Number(record.innerHTML) + 1; 
});

function jump(){
    if (person.classList != "jump"){
        person.classList.add("jump") 
    }
    setTimeout( function(){
        person.classList.remove("jump")
    }, 300)
} 

let isAlive = setInterval(function(){
    let personTop = parseInt(window.getComputedStyle(person).getPropertyValue("top"));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));

    if (enemyLeft < 50 && enemyLeft > 0 && personTop >= 140){

        alert("Game Over!!");
        record.innerHTML = 0;
    }
}, 10)