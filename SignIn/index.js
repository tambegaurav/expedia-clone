function signup(el) {
  el.preventDefault();
  var isPresent = false;
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;
  if (email == "" || pwd == "") {
    alert("Input field can't be blank");
  } else {
    if (pwd == localStorage[email]) {
      localStorage.setItem("activeUser", email);
      window.location.href = "../index.html";
    } else {
      alert("User not found");
    }
  }
}


document.getElementById("btn").addEventListener("click", signup);

