// for sign up
function validateForm() {
    const firstName = document.getElementById("firstname").value;
    const message = "fill in you first name";
    if (firstName == "") {
        document.getElementById("inputdemo").innerHTML = message;
        return false;
    }

    const lastName = document.getElementById("lastname").value;
    const message2 = "fill in you last name";
    if (lastName == "") {
        document.getElementById("inputdemo2").innerHTML = message2;
        return false;
    }

    const address = document.getElementById("address").value;
    const message3 = "fill in your address";
    if (address == "") {
        document.getElementById("inputdem3").innerHTML = message3;
        return false;
    }

    const email = document.getElementById("email").value;
    const message4 = "fill in your email";
    if (email == "") {
        document.getElementById("inputdemo4").innerHTML = message4;
        return false;
    }

    const phone = document.getElementById("phone").value;
    const phoneLength = phone.length;
    const message5 = "invalid phone number";
    if (phoneLength < 11){
        document.getElementById("inputdemo5").innerHTML = message5;
        return false;
    }

}

// for log in
function validateForm2() {
    const userName = document.getElementById("username").value;
    const length = userName.length;
    const message6 = "Username must be more than four characters";
    if (length < 4) {
        document.getElementById("inputdemo6").innerHTML = message6;
        return false;
    }

    const password = document.getElementById("password").value;
    const length1 = password.length;
    const message7 = "password not strong";
    if (length1 < 9) {
        document.getElementById("inputdemo7").innerHTML = message7;
        return false;
    }
}

// for select
const select = document.getElementById("month")
select.addEventListener("change", function() {
    const val = document.getElementById("month").value;
    document.getElementById("demo").innerHTML = val;
})

// for select2
const select2 = document.getElementById("month2")
select2.addEventListener("change", function() {
    const val = document.getElementById("month2").value;
    document.getElementById("demo2").innerHTML = val;
})

// for select3
const select3 = document.getElementById("month3")
select3.addEventListener("change", function() {
    const val = document.getElementById("month3").value;
    document.getElementById("demo3").innerHTML = val;
})