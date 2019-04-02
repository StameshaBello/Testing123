var isMouseTracking = false;

//need a function to update position; 2 labels -- one for X and one for Y
function updateMousePosition() {
    if (isMouseTracking) {
        //Can get mouse positions with event.clientX and event.clientY
        //Can update text of HTML element by using .innerText
        var positionX = document.getElementById("mousePositionX");
        positionX.innerText = event.clientX;
        var positionY = document.getElementById("mousePositionY");
        positionY.innerText = event.clientY;
    }
}

//Function to toggle whether tracking or not
function toggleTracking() {
    /*If isMouseTracking is true, set to false.
        Otherwise, set to true.*/
    isMouseTracking = !isMouseTracking;

    //Update tracking status to show whether if it is disabled.
    if (isMouseTracking) {
        document.getElementById("trackingStatus").innerText = "TRACKING";
    } else {
        document.getElementById("trackingStatus").innerText = "NOT TRACKING";
    }
}
