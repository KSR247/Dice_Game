// var img = new Image();

// img.src = './img/one.svg';
    //  var theImages = [{
    //     dice1:
    //     "./img/dice-1.png",
    //     width: "250",
    //     height: "250"
    // }, {
    //     dice2:
    //     "./img/two.svg",
    //     width: "250",
    //     height: "250"
    // }, {
    //     dice3:
    //     "./img/three.svg",
    //     width: "250",
    //     height: "250"
    // }, {
    //     dice4:
    //     "./img/four.svg",
    //     width: "250",
    //     height: "250"
    // }, {
    //     dice5:
    //     "./img/five.svg",
    //     width: "250",
    //     height: "250"
    // }, {
    //     dice6:
    //     "./img/six.svg",
    //     width: "250",
    //     height: "250"
    // }];

const roll = document.getElementById('rollDice');


let randomNum = Math.floor(Math.random() * 6) + 1



function click(){
    roll.addEventListener('click', function() {
    if (randomNum == 1) {
         document.getElementById("diceImg").src = "./img/dice1.png";
    } else if ( randomNum == 2) {
        document.getElementById("diceImg").src = "./img/dice2.png";
    } else if (randomNum == 3) {
        document.getElementById("diceImg").src = "./img/dice3.png";
    } else if (randomNum == 4) {
        document.getElementById("diceImg").src = "./img/dice4.png";
    } else if (randomNum == 5) {
         document.getElementById("diceImg").src = "./img/dice5.png";
    } else {
         document.getElementById("diceImg").src = "./img/dice6.png";
    }

    console.log(randomNum);
});
};

click();
setTimeout(click, 1000);


// roll.addEventListener('click', function(e){
// 		var dice = Math.floor(Math.random() * 6) + 1;
// 		var diceDOM = document.querySelector('.displayDice');
// 		diceDOM.style.display = 'block';
// 		diceDOM.src = diceImage['theImages[0]'];	
//         console.log(diceDOM)
//     }
    
// );
