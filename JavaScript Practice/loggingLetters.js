/*var sentence = "I love learning software development"

for (var i=0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
        console.log(sentence[i]);
    }
}*/

var likesCake = confirm("Do you like cake?")
if (likesCake) {
    var favCake = prompt("What is your favorite cake?");
    alert("Your favorite cake is: " + favCake);
} else {
    alert("You're a lie.");
}

var display = prompt("Should we STOP, SLOW, or GO?");
if (display == "STOP") {
    console.log("STOP!");
    alert("STOP!");
} else if (display == "SLOW") {
    console.log("SLOW DOWN!");
    alert("SLOW DOWN!");
} else {
    console.log("GO!");
    alert("GO!");
}
