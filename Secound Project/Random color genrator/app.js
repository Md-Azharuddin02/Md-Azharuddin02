function color(){
    const random= Math.floor(Math.random()*16777215);
    const hex= '#'+random.toString(16);
    document.querySelector(".container").style.backgroundColor=hex;

}
document.getElementById("btn").addEventListener('click',color);