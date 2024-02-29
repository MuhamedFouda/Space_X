
let username = document.querySelector("#exampleInputEmail1")
let userpassword = document.querySelector("#exampleInputPassword1")
function loginn() {
    if (username.value == "muhamed" && userpassword.value == "123456") {
        window.location.href = "index1.html"
    } else {
        alert("Wrong Username or password")
        username.value = ""
        userpassword.value = ""
    }
}

function showpasword() {
    userpassword.setAttribute("type", "text")
    setTimeout(() => {
        userpassword.setAttribute("type", "password")
    }, 2000);
}