function clearErrors() {
    for (var loopCounter = 0;
          loopCounter < document.forms["numberStepping"].elements.length;
          loopCounter++) {
              if (document.forms["numberStepping"].elements[loopCounter]
                    .parentElement.className.indexOf("has-") != -1) {

                  document.forms["numberStepping"].elements[loopCounter]
                      .parentElement.className = "form-group";
                }
        }
    }

function validateItems() {
    clearErrors();

    var startNumber = Number(document.forms["numberStepping"]["startNumber"].value);
    var endNumber = Number(document.forms["numberStepping"]["endNumber"].value);
    var stepNumber = Number(document.forms["numberStepping"]["stepNumber"].value);

    if (startNumber == "" || isNaN(startNumber)) {
        alert("Starting Number must be filled with a number.");
        document.forms["numberStepping"]["startNumber"].parentElement
            .className = "form-group has-error";
        document.forms["numberStepping"]["startNumber"].focus();
        return false;
    }
    if (endNumber == "" || isNaN(endNumber)) {
        alert("Ending Number must be filled with a number.");
        document.forms["numberStepping"]["endNumber"].parentElement
            .className = "form-group has-error";
        document.forms["numberStepping"]["endNumber"].focus();
        return false;
    }
    if (endNumber <= startNumber) {
        alert("Ending Number must be larger than Starting Number.");
        document.forms["numberStepping"]["endNumber"].parentElement
            .className = "form-group has-error";
        document.forms["numberStepping"]["endNumber"].focus();
        return false;
    }
    if (stepNumber == "" || isNaN(stepNumber)) {
        alert("Step Number must be filled with a number.");
        document.forms["numberStepping"]["stepNumber"].parentElement
            .className = "form-group has-error";
        document.forms["numberStepping"]["stepNumber"].focus();
        return false;
    }
    if (stepNumber < 0) {
        alert("Step Number must be a positive number.");
        document.forms["numberStepping"]["stepNumber"].parentElement
            .className = "form-group has-error";
        document.forms["numberStepping"]["stepNumber"].focus();
        return false;
    }

    var array = new Array;
    var even = new Array;
    var display = new Array;

    for (var loopCounter2 = startNumber; loopCounter2 < endNumber + 1; loopCounter2++) {
        array.push(loopCounter2);
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even.push(array[i]);
          }
      }

    for (var x = 1; x < even.length - 1; x++) {
        if (stepNumber % 2 == 0) {
            if (x % (stepNumber / 2) == 0) {
                display.push(even[x]);
              }
        } else {
              if (x % stepNumber == 0) {
                  display.push(even[x]);
                }
            }
      }

    document.getElementById("first").innerText = startNumber;
    document.getElementById("second").innerText = endNumber;
    document.getElementById("third").innerText = stepNumber;
    document.getElementById("results").innerHTML = display;

    return false;
    }
