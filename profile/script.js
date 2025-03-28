let currUser = localStorage.getItem('currUser');

if (!currUser) {
    window.location.href = "/login.html";
}

// Save Profile Information
function saveInfo() {
    let firstName = document.querySelector("input[placeholder='First Name']").value;
    let lastName = document.querySelector("input[placeholder='Last Name']").value;

    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Please enter both first and last name.");
        return;
    }

    let userData = {
        firstName: firstName,
        lastName: lastName
    };

    localStorage.setItem(currUser + "_profile", JSON.stringify(userData));
    alert("Profile information saved!");
}

// Change Password
function changePassword() {
    let oldPassword = document.querySelector("input[placeholder='Old Password']").value;
    let newPassword = document.querySelector("input[placeholder='New Password']").value;
    let confirmPassword = document.querySelector("input[placeholder='Confirm New Password']").value;

    if (!oldPassword || !newPassword || !confirmPassword) {
        alert("Please fill all password fields.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New passwords do not match.");
        return;
    }

    let storedPassword = localStorage.getItem(currUser + "_password");

    if (storedPassword && storedPassword !== oldPassword) {
        alert("Old password is incorrect.");
        return;
    }

    localStorage.setItem(currUser + "_password", newPassword);
    alert("Password changed successfully!");
    window.location.href = "/shop/index.html";

}

// Logout
function logout() {
    localStorage.removeItem("currUser");
    alert("Logged out successfully!");
    window.location.href = "/login.html";
}