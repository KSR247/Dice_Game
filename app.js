const roll = document.getElementById('rollDice');

let score = document.getElementById('countNum');

let totalScore = 0; // score always starts at zero.


//------------- Restart the game and reset the vaules --------------

const resetGame = document.getElementById('newGame')

function init(){
    resetGame.addEventListener('click', function() {
        document.getElementById('newGame').style.display = "none";
    document.getElementById('rollDice').style.display = "block";
    document.getElementById('countNum').innerHTML = `Count`
    document.getElementById("diceImg").src = "";
    totalScore = 0;
    });
};

init();


//-------- Starts the roll of dice, image is changed each time. if 1 you lose, if more than 20 you win -----

function click(){
    roll.addEventListener('click', function() {
        let randomNum = Math.floor(Math.random() * 6) + 1 
        document.getElementById("diceImg").src = `./img/dice${randomNum}.png`;
        document.getElementById('countNum').innerHTML = `Count = ${totalScore += randomNum}`
    if (randomNum == 1) {
         document.getElementById("diceImg").src = "./img/dice1.png";
         document.getElementById('countNum').innerHTML = `you Lose`
        document.getElementById('rollDice').style.display = "none";
        document.getElementById('newGame').style.display = "block";
         totalScore = 0;
         
    } else if (totalScore >= 20) {
        document.getElementById('countNum').innerHTML = `Winner`
        document.getElementById('rollDice').style.display = "none";
        document.getElementById('newGame').style.display = "block";
        totalScore = 0;
    }
});
};

click();

