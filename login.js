let email = document.getElementById("email");
let password = document.getElementById("password");

function generateToken() {
    return Math.random().toString(36); // Correct token generation
}

document.getElementById("login").addEventListener("click", () => {
    if (email.value == "" || password.value == "") {
        alert("Please fill in all fields.");
    } else {
        let users = JSON.parse(localStorage.getItem("users") ?? "[]");
        if (users.length > 0) {
            let user = users.filter((user) => user.email == email.value);
            if (user.length > 0) {
                let obj = user[0];
                if (obj.password === password.value) {  // Corrected password check
                    localStorage.setItem(
                        "currUser",
                        JSON.stringify({
                            email: email.value,
                            password: password.value,
                            token: generateToken(),
                        }));
                    // window.location.href="./profile/index.html"
                    window.location.href="./profile/";
            
                    alert("Login Successful!");
                } else {
                    alert("Incorrect Password!");
                }
            } else {
                alert("User not found. Please sign up.");
            }
        } else {
            alert("No users found. Please sign up.");
        }
    }
});