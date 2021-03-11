function signup(el) {
    el.preventDefault()
    var isPresent = false;
    var email = document.getElementById("email").value
    var pwd = document.getElementById("pwd").value
    
    
    if(email=="" || pwd==""){
        alert("Input field can't be blank")
    }
    else{
        for (key in localStorage) {
            if (key == email) {
                isPresent = true;
                alert("User already exists")
                window.location.assign("http://127.0.0.1:5500/expedia-clone/SignIn/index.html")
            }
        }
        if (!isPresent) {
            localStorage.setItem(email, pwd)
            window.location.assign("http://127.0.0.1:5500/expedia-clone/SignIn/index.html")
        }
    }
}
document.getElementById("submit").addEventListener("click", signup)
