const username = "admin";
const password = "1234";

function login() {
  
   let user = document.getElementById("username").value;
   let pass = document.getElementById("password").value;

   if (username == user && password == pass) {
      window.location.href = "../html/policies.html"
   }  else {
      alert ("Wrong USERNAME or PASSWORD");
      return false;
      }
   }


