function storeData() {
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    

    const userData = {
        fullName: fullName,
        email: email,
        gender: gender
    };
     
    const fullNameLength = fullName.length;
    const userMessage = "Fullname not long enough";
    if (fullNameLength <= 8) {
        document.getElementById("message1").innerHTML = userMessage;
        return false;
    };

    const emailLength = email.length;
    const userMessage2 = "Unvalidated Email Address";
    if (emailLength <= 8) {
        document.getElementById("message2").innerHTML = userMessage2;
        return false;
    };

    // Store the data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    location.href = 'quiz.html';
}

// localStorage.clear();