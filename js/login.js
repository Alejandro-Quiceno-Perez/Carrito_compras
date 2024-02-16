const user = document.getElementById("user");
const passwordUser = document.getElementById("password-user");
const checkUser = document.getElementById("check-user");
const formLogin = document.getElementById("formLogin");

const URLUser = "http://localhost:3000/users";

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    login();
});

async function login() {
    const response = await fetch(`${URLUser}?email=${user.value}`);
    const data =await response.json();

    console.log(data);

    if(!data.length){
        alert("Email is not register");
        return;
    }
    
    if(checkUser.checked === false) {
        alert("To continue accept terms and conditions");
        return;
    }

    if (data[0].password === passwordUser.value) {
        localStorage.setItem("isAutenticated", user.value)
        window.location.href = "page.html"
    } else {
        alert("Password does not match");
    }
}