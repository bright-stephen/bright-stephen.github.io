function storeData() {
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    

    const userData = {
        fullName: fullName,
        email: email,
        gender: gender
    };

    // Store the data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
}

// localStorage.clear();