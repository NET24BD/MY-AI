function login(){

    const user=document.getElementById("username").value.trim();

    const pass=document.getElementById("password").value.trim();

    if(user==="" || pass===""){

        alert("Please enter Username & Password");

        return;

    }

    // এখন শুধু ডেমো
    window.location.href="chat.html";

}
