function validateForm() {
    var fullName = document.forms["messageForm"]["fullName"].value;
    var email = document.forms["messageForm"]["Email"].value;
    var Number = document.forms["messageForm"]["Number"].value;
    var messageDetails = document.forms["messageForm"]["message"].value;

    if (fullName == "" || email == "" || Number == "" || messageDetails == "") {
        alert("Empty Field");
    }
    else {
        alert("Thank you for the feedback")
    }
    }