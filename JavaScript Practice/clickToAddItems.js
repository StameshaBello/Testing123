function clearErrors() {
      for (var loopCounter = 0;
              loopCounter < document.forms["numberFun"].elements.length;
              loopCounter++) {
                if (document.forms["numberFun"].elements[loopCounter]
                    .parentElement.className.indexOf("has-") != -1) {
                /*when has error, will add class "has-error" to button within
                    form due to the validateItems(); function.*/
                //parentElement used to look at parent of <input> it's viewing
                /*Looking at class attribute w/in parentElement to see if
                    "has-" is within it. If "has-" is NOT detected, indexOf()
                    will return value of -1.*/

                document.forms["numberFun"].elements[loopCounter]
                  .parentElement.className="form-group";
                //after clearing errors, will reset class to "form-group" only.
                }
              }
}

function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"] = "";
    document.forms["numberFun"]["num2"] = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
    //.focus() makes the cursor active and puts it within the num1 box
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled with a number.");
        document.forms["numberFun"]["num1"]
          .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
        //isNaN means "is not a number"; argument says, "if num1 is blank or not
        //a number, then proceed with the following code."
    }
    if (num2 == "" || isNaN(num2)) {
        alert("Num2 must be filled with a number.");
        document.forms["numberFun"]["num2"]
            .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num2"].focus();
        return false;
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("addResult").innerText = Number(num1) + Number(num2);
    document.getElementById("subtractResult").innerText = Number(num1) - Number(num2);
    document.getElementById("multiplyResult").innerText = Number(num1) * Number(num2);
    document.getElementById("divideResult").innerText = Number(num1) / Number(num2);
    return false;
    //Use return false so that form does not submit. So that results are visible
}
