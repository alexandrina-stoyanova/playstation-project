function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsgs = document.getElementById("errorMsgs");
    if(username === "admin" && password === "1234567"){
        alert("login succesfully");
        return true;
    } 
    if(username === ""){
        errorMsgs.textContent = "Please enter a username.";
        return false;
    }
    if(password.length === 0 || password.length < 7){
        errorMsgs.textContent = "Password must be at least 7 characters long!";
        return false;
    }
    errorMsgs.textContent = "Login failed.Enter a correct username or password.";
    return false;
}

function registerForm(){
    let username = document.getElementById("usernameReg").value;
    let email = document.getElementById("emailReg").value;
    let password = document.getElementById("passwordReg").value;
    let confirmPass = document.getElementById("confirmPass").value;
    let errorMsg = document.getElementById("errorMsg");
    if(username === ""){
        errorMsg.textContent = "Please enter a username.";
        return false;
    }
    if(email === ""){
        errorMsg.textContent = "Please enter a email.";
        return false;
    }
    if(password !== confirmPass){
        errorMsg.textContent = "Password don't match!";
        return false;
    }
    if(password.length < 7){
        errorMsg.textContent = "Password must be at least 7 characters long!";
        return false;
    }
    errorMsg.textContent = "";
    alert("Successful registration!");
    return true;
}