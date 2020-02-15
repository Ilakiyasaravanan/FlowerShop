
function ValidateCardNumber() {

    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (!document.getElementById("txtCardNumber").value.match(regex)) {
        alert("Check Card number!");
    }
}
function validateSecurityCode() {
    var regex = /[0-9]{8}/;
    if (!document.getElementById("txtSecCode").value.match(regex));
    {
        alert("Check Security Code!");
    }
}
function validateExpiryMonth() {

    var x = document.getElementById("listMonth").value;

    if (x == null) alert("Expiry Month is invalid!");
}
function validateExpiryYear() {
    var y = document.getElementById("listYear").value;
    if (y == null) alert("Expiry Year is invalid!");
}

function ValidateName() {
    var x = document.getElementById("txtName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.match(regex)) alert("Check your Name");
}

function ValidateCity(str) {
    var x = document.getElementById("str").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.match(regex)) alert("Check your City/Region");
}
function ValidateAddress() {
    var x = document.getElementById("txtAddress1").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.match(regex))
        alert("Check your Address!");
}
function ValidateAddress1() {
    var x = document.getElementById("txtAddress2").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.match(regex))
        alert("Check your Address!");
}
function ValidateAddress2() {
    var x = document.getElementById("txtAddress3").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.match(regex))
        alert("Check your Address!");
}
function ValidatePhone() {
    var x = document.getElementById("txtPhone").value;
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!x.match(regex)) alert("Check your Telephone number!");
}

function ValidateFax() {
    var x = document.getElementById("txtFax").value;
    var regex = /^\+?[0-9]{6,}$/;
    if (!x.match(regex)) alert("Check your Fax number!");
}

function ValidateEmail() {
    var x = document.getElementById("txtEmail").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!x.match(regex)) alert("Check your Email!");
}
function ValidatePCode() {
    var x = document.getElementById("txtPCode").value;
    var regex = /^\d{5}$|^\d{5}-\d{4}$/;
    if (!x.match(regex)) alert("Check your PostCode!");
}

