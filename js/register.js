const formRegister = document.getElementById("formRegister");
const email = document.getElementById("email");
const passwordConfirmation = document.getElementById("passworConfirmation");
const password = document.getElementById("password");

const URLUser = "http://localhost:3000/users";

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    addUser();
});

async function addUser() {
    if (!validatePassword()) {
        alert("Contraseña no valida");
        return;
    }

    try {
        const newUser = {
            email: email.value,
            password: password.value
        }
        await fetch(URLUser, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    } catch (error) {
        console.log(error.message);
    }
    if (validateEmail()) {
        window.location.href = "index.html"
        alert("Usuario Registrado correctamente")
        return;
    }
}

function validatePassword() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    return password.value === passwordConfirmation.value && regex.test(password.value);
}

async function validateEmail() {
    try {
        const response = await fetch(`${URLUser}?email=${email.value}`);
        const data = await response.json();

        return data.length
    } catch (error) {
        return false;
    }
}