let usuarios = [
    {
        correo: "alejo@correo.com",
        pass: "Alejo123"
    },
    {
        correo: "jp@correo.com",
        pass: "123A"
    }
];

/* Validaciones de ingreso... */
const btnIngresar = document.querySelector("#btn-igresar");
const user = document.querySelector("#user");
const passwordUser = document.querySelector("#password-user");
const check = document.querySelector("#check-user");

btnIngresar.addEventListener("click", (e) => {
    e.preventDefault();
    if ((user.value == "") || (passwordUser.value == "") || (check.checked == false)) {
        alert("todos los campos son obligatorios");
    } else {
        ingresoUsuario();
    }
});

function ingresoUsuario() {
    for (let i = 0; i <= usuarios.length; i++) {
        if (user.value === usuarios[i].correo) {
            if (passwordUser.value === usuarios[i].pass) {
                localStorage.setItem("isAutenticated", user.value);
                location.href = "/page.html";
            } else {
                alert("Verifica el correo o la contraseña");
            }
        }
    }
}

// Validaciones para el registro de usuario

const btnRegister = document.getElementById("btnRegister");
const email = document.getElementById("email");
const emailConfirmation = document.getElementById("emailConfirmation");
const password = document.getElementById("password");

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    addUser();
})


function addUser() {
    const usuario = {
        correo: email.value,
        pass: password.value
    }

    console.log(usuarios)
    if (email.value === emailConfirmation.value) {
        usuarios.push(usuario);
    } else {
        alert("Los correos electronicos no coinciden por favor verificar")
    }
}
