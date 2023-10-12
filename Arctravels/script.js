// for sign up
function validateForm() {
    const firstName = document.getElementById("firstname").value;
    if (firstName == "") {
        alert("Name field must not be empty please fill in your first name");
        return false;
    }

    const lastName = document.getElementById("lastname").value;
    if (lastName == "") {
        alert("Name field must not be empty please fill in your last name");
        return false;
    }

    const address = document.getElementById("address").value;
    if (address == "") {
        alert("Address field must not be empty please fill in your Address");
        return false;
    }

    const email = document.getElementById("email").value;
    if (email == "") {
        alert("Email field must not be empty please fill in your Email Address");
        return false;
    }

    const phone = document.getElementById("phone").value;
    const phoneLength = phone.length;
    if (phoneLength < 10){
        alert("Invalid phone number");
        return false;
    }

}

// for log in
function validateForm2() {
    const userName = document.getElementById("username").value;
    const length = userName.length;
    if (length < 4) {
        alert("Username must be more than four characters");
        return false;
    }

    const password = document.getElementById("password").value;
    const length1 = password.length;
    if (length1 < 9) {
        alert("password not strong include signbols and letters")
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