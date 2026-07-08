function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter Username and Password.");
        return;
    }

    // পরে এখানে আসল Login System হবে
    window.location.href = "chat.html";
}
