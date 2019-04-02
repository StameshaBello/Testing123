/*
    Name: Stamesha Bello
    Date Created: 4/1/2019
    Most Recent Revision: 4/2/2019
*/

function clearErrors() {
  for (var i = 0;
        i < document.forms["contactForm"].elements.length;
        i++) {
            if(document.forms["contactForm"].elements[i]
                .parentElement.parentElement.className.indexOf("has-") != -1) {

                    document.forms["contactForm"].elements[i]
                      .parentElement.parentElement.className = "form-group row";
                }
      }
}

function validateItems() {
    clearErrors();

    var name = document.forms["contactForm"]["name"].value;
    if (name == "") {
        alert("You must provide your name.");
        document.forms["contactForm"]["name"].parentElement.parentElement
          .className = "form-group row has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }

    var email = document.forms["contactForm"]["emailAddress"].value;
    if (email == "") {
        alert("You must provide your e-mail address.");
        document.forms["contactForm"]["emailAddress"].parentElement.parentElement
          .className = "form-group row has-error";
        document.forms["contactForm"]["emailAddress"].focus();
        return false;
    }

    var phone = document.forms["contactForm"]["phone"].value;
    if (phone == "" || isNaN(phone)) {
      alert("You must provide your phone number.");
      document.forms["contactForm"]["phone"].parentElement.parentElement
        .className = "form-group row has-error";
      document.forms["contactForm"]["phone"].focus();
      return false;
    }

    if (phone < 0) {
      alert("Negative phone numbers don't exist...");
      document.forms["contactForm"]["phone"].parentElement.parentElement
        .className = "form-group row has-error";
      document.forms["contactForm"]["phone"].focus();
      return false;
    }

    if (phone.length < 10) {
      alert("You must provide your full phone number.");
      document.forms["contactForm"]["phone"].parentElement.parentElement
        .className = "form-group row has-error";
      document.forms["contactForm"]["phone"].focus();
      return false;
    }

    var info = document.forms["contactForm"]["additional-info"].value;
    if (info == "") {
        alert("You must describe your inquiry.");
        document.forms["contactForm"]["additional-info"].parentElement.parentElement
          .className = "form-group row has-error";
        document.forms["contactForm"]["additional-info"].focus();
        return false;
    }
    alert("The information you have provided is valid.");
    return false;
}
