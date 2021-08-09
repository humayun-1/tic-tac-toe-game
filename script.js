var boxes = document.querySelectorAll('.box');
var turn = document.querySelector(".turn");
let btn1 = document.querySelectorAll('#btn')
var arr = ["Player 1", "Player 2"];

var o = `<img src="o.png" class="img-fuid">`;
var x = `<img src="cross.png" class="img-fuid">`;

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', main)
    function main(e) {
        if (turn.innerHTML == "Player 1") {
            e.target.innerHTML = o;
            if (e.target.innerHTML == o) {
                turn.innerHTML = "Player 2"
            }
        }

        else if (turn.innerHTML == "Player 2") {
            e.target.innerHTML = x;
            if (e.target.innerHTML == x) {
                turn.innerHTML = "Player 1"
            }
        }
        whoWin()
    }

    function whoWin() {
        if (boxes[0].innerHTML == x && boxes[1].innerHTML == x && boxes[2].innerHTML == x || boxes[3].innerHTML == x && boxes[4].innerHTML == x && boxes[5].innerHTML == x || boxes[6].innerHTML == x && boxes[7].innerHTML == x && boxes[8].innerHTML == x || boxes[0].innerHTML == x && boxes[3].innerHTML == x && boxes[6].innerHTML == x || boxes[0].innerHTML == x && boxes[3].innerHTML == x && boxes[6].innerHTML == x || boxes[1].innerHTML == x && boxes[4].innerHTML == x && boxes[7].innerHTML == x || boxes[2].innerHTML == x && boxes[5].innerHTML == x && boxes[8].innerHTML == x || boxes[0].innerHTML == x && boxes[4].innerHTML == x && boxes[8].innerHTML == x || boxes[2].innerHTML == x && boxes[4].innerHTML == x && boxes[6].innerHTML == x) {
            celebration()

        }
        else if (boxes[0].innerHTML == o && boxes[1].innerHTML == o && boxes[2].innerHTML == o || boxes[3].innerHTML == o && boxes[4].innerHTML == o && boxes[5].innerHTML == o || boxes[6].innerHTML == o && boxes[7].innerHTML == o && boxes[8].innerHTML == o || boxes[0].innerHTML == o && boxes[3].innerHTML == o && boxes[6].innerHTML == o || boxes[0].innerHTML == o && boxes[3].innerHTML == o && boxes[6].innerHTML == o || boxes[1].innerHTML == o && boxes[4].innerHTML == o && boxes[7].innerHTML == o || boxes[2].innerHTML == o && boxes[5].innerHTML == o && boxes[8].innerHTML == o || boxes[0].innerHTML == o && boxes[4].innerHTML == o && boxes[8].innerHTML == o || boxes[2].innerHTML == o && boxes[4].innerHTML == o && boxes[6].innerHTML == o) {
            celebration()

        }

        else if(boxes[0].innerHTML && boxes[1].innerHTML && boxes[2].innerHTML && boxes[3].innerHTML && boxes[4].innerHTML && boxes[5].innerHTML && boxes[6].innerHTML && boxes[7].innerHTML && boxes[8].innerHTML){
            document.querySelector(".popup").classList.add('popup-active');
            document.querySelector(".parent").classList.add('active');
            document.querySelector(".result-h1").innerHTML = "Draw ❌";
            document.querySelector(".cross span").addEventListener("click", remove)
        }
    }

}

function celebration() {
    document.querySelector(".popup").classList.add('popup-active');
    document.querySelector(".parent").classList.add('active');

    if (turn.innerHTML == "Player 1") {
        document.querySelector(".result-h1").innerHTML = "Player 2 Wins";
    }

    else if (turn.innerHTML == "Player 2") {
        document.querySelector(".result-h1").innerHTML = "Player 1 Wins";
    }

    document.querySelector(".cross span").addEventListener("click", remove)
}

function remove() {
    document.querySelector(".popup").classList.remove('popup-active');
    document.querySelector(".parent").classList.remove('active');
    location.reload();
}
