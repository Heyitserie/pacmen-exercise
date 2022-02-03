let pacmen = [];
let direction = 0;

function setToRandom(scale){
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    };
};

function newPacMan() {
    let velocity = setToRandom(10);
    let position = setToRandom(200);
    let factoryFloor = document.getElementById('factoryFloor');
    let newImg= document.createElement('img');
    newImg.style.position = 'absolute';
    newImg.src = "images/pacman1.png";
    newImg.width = 100;
    newImg.style.left = position.x + "px";
    newImg.style.top = position.y + "px";
    factoryFloor.appendChild(newImg);
    return {
        position, 
        velocity, 
        newImg
    };
} 

function movePacMan(){
 pacmen.forEach((pacman) => {
     checkCollision(pacman)
     pacman.position.x += pacman.velocity.x;
     pacman.position.y += pacman.velocity.y;
     pacman.newImg.style.left = pacman.position.x + "px";
     pacman.newImg.style.top = pacman.position.y + "px";
 });
 setTimeout(movePacMan, 20);
}

function checkCollision(pacman){
    if(pacman.position.x + pacman.velocity.x + pacman.newImg.width > window.innerWidth - 40 ||
        pacman.position.x + pacman.velocity.x < 0 ) pacman.velocity.x= -pacman.velocity.x;
    if(pacman.position.y + pacman.velocity.y + pacman.newImg.height > window.innerHeight ||
        pacman.position.y + pacman.velocity.y < 0) pacman.velocity.y = -pacman.velocity.y;
}

function makePacMan() {
    pacmen.push(newPacMan());
}

