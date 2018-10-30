// var img = new Image();

// img.src = './img/one.svg';
function diceImage() 
{
     var theImages = [{
        dice1:
        "./img/one.svg",
        width: "250",
        height: "250"
    }, {
        dice2:
        "./img/two.svg",
        width: "250",
        height: "250"
    }, {
        dice3:
        "./img/three.svg",
        width: "250",
        height: "250"
    }, {
        dice4:
        "./img/four.svg",
        width: "250",
        height: "250"
    }, {
        dice5:
        "./img/five.svg",
        width: "250",
        height: "250"
    }, {
        dice6:
        "./img/six.svg",
        width: "250",
        height: "250"
    }];
};

const roll = document.getElementById('rollDice');
// setInterval(roll, 1000);


let randomNum = Math.floor(Math.random() * 6) + 1

// roll.addEventListener('click', () => {
//     if (randomNum == 1) {

//     } else if ( randomNum == 2) {

//     } else if (randomNum == 3) {

//     } else if (randomNum == 4) {

//     } else if (randomNum == 5) {
        
//     } else {

//     }

//     console.log(randomNum);
// });



roll.addEventListener('click', function(e){
		var dice = Math.floor(Math.random() * 6) + 1;
		var diceDOM = document.querySelector('.displayDice');
		diceDOM.style.display = 'block';
		diceDOM.src = diceImage['theImages[]'];	
        console.log(diceDOM)
    }
    
);
