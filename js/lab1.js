   // Toggle Password Visibility
   document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "Show" : "Hide";
});

// Image Preview
document.getElementById("profilePicture").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("preview").src = e.target.result;
            document.getElementById("preview").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// Basic Validation (Example)
document.getElementById("userForm").addEventListener("input", function () {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    const isValidUsername = username.length > 0;
    const isValidEmail = email.includes("@");
    const isValidRole = role !== "";

    document.getElementById("submitButton").disabled = !(isValidUsername && isValidEmail && isValidRole);

    document.getElementById("usernameError").textContent = isValidUsername ? "" : "Username is required.";
    document.getElementById("emailError").textContent = isValidEmail ? "" : "Invalid email format.";
    document.getElementById("roleError").textContent = isValidRole ? "" : "Role is required.";
});