function validateUserSession() {
    const user = JSON.parse(localStorage.getItem("UserSession"));
    
    console.log(user);
    if (user == '' || !user) {
        return false;
    }
    else {
        return true;
    }
}

export default validateUserSession