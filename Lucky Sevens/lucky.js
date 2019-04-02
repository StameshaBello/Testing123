/*
    Name: Stamesha Bello
    Date Created: 4/1/2019
    Most Recent Revision: 4/1/2019
*/

function clearErrors() {
    for (var loopCounter = 0;
          loopCounter < document.forms["luckyBet"].elements.length;
          loopCounter++) {
          if (document.forms["luckyBet"].elements[loopCounter]
              .parentElement.className.indexOf("has-") != 1) {

                document.forms["luckyBet"].elements[loopCounter]
                  .parentElement.className = "form-group row a";
              }
        }
}

function rollDice() {
    Math.floor(Math.random() * 6) + 1;
}

function roll2Dice() {
    var result1 = Math.floor(Math.random() * 6) + 1;
    var result2 = Math.floor(Math.random() * 6) + 1;
    var total = result1 + result2;
}

function betting() {
    clearErrors();

    var bet = Number(document.forms["luckyBet"]["bet"].value)

    if (bet === "" || isNaN(bet)) {
        alert("Your bet must be a number.");
        document.forms["luckyBet"]["bet"].parentElement
          .className = "form-group row a has-error";
        document.forms["luckyBet"]["bet"].focus();
        return false;
    }
    if (bet <= 0) {
        alert("Your bet must be greater than $0.00.");
        document.forms["luckyBet"]["bet"].parentElement
          .className = "form-group row  a has-error";
        document.forms["luckyBet"]["bet"].focus();
        return false;
    }

    var gameMoney = bet;
    var winnings = [gameMoney]
    var highest$;

    for (var i = 1; gameMoney > 0; i++) {
        var result1 = Math.floor(Math.random() * 6) + 1;
        var result2 = Math.floor(Math.random() * 6) + 1;
        var total = result1 + result2;


        if (total == 7) {
            gameMoney += 4;
        } else {
            gameMoney -= 1;
        }
        winnings.push(gameMoney);
        var rolls = i;
      }

        var a = 0;
        for (var b = 0; b < winnings.length; b++) {
                if (winnings[a] < winnings[b]) {
        			       a = b
                }
            highest$ = winnings[a];
            var rollsAtHighest$ = a;
          }
    document.getElementById("border").style.display = "block";
    document.getElementById("luckyTable").style.display = "block";
    document.getElementById("betTable").innerText = Number(bet);
    document.getElementById("rolls").innerText = Number(rolls);
    document.getElementById("highest$").innerText = Number(highest$);
    document.getElementById("rollsAtHighest$").innerText = Number(rollsAtHighest$);
    document.forms["luckyBet"]["play"].style.display = "none";
    document.forms["playAgainForm"]["playAgain"].style.display = "block";
    return false;
}

function reseting() {
    clearErrors();

    document.getElementById("luckyTable").style.display = "none";
    document.getElementById("bet").value = ""
    document.getElementById("bet").placeholder = "0.00";
    document.forms["luckyBet"]["bet"].focus();
    document.forms["luckyBet"]["play"].style.display = "block";
    document.forms["playAgainForm"]["playAgain"].style.display = "none";
    document.getElementById("border").style.display = "none";
}

//Make sure whatever is used to display the bet amount
