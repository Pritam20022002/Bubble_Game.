let randomHit;
let score = 0;
let timer = 60;

function makeBubbble() {
  let bubble = "";
  for (var i = 1; i <= 150; i++) {
    let random = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${random}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = bubble;
}

function runTimer() {
  let timeinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").innerText = timer;
    } else {
      clearInterval(timeinterval);
      document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER </h1><br> <div class="box" id="button" onclick="playAgain()">PLAY AGAIN</div>`;
    }
  }, 1000);
}

function newHit(){
    randomHit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerText = randomHit; 
}

function addscore(){
    score += 10;
    document.querySelector("#score").innerText = score;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    console.log(randomHit)
    let clickednum = (Number(details.target.innerText))
    if(randomHit === clickednum){
        addscore();
        makeBubbble();
        newHit();
    }
})

function playAgain(){
 location.reload(); 
}

newHit();
runTimer();
makeBubbble();
