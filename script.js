var character = document.getElementById("character");
var block = document.getElementById("block");
var bool = false;
var counter=0;
document.getElementById("scoreSpan").innerHTML = 0;
function jump(){
    if(!bool){
        alert("Please Start the Game");
        return;
    }
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
function start(){
    block.style.animation = "block 1s infinite linear";
    bool=true;
}
function reset(){
    document.getElementById("scoreSpan").innerHTML = 0;
    block.style.animation = "none";
    bool = false;
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("The Game Is Over. SCORE: "+Math.floor(counter/100));
        counter=0;
        reset();
    }else{
        if(bool){
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    }
}, 10);