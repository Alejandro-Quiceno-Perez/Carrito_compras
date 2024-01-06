let usuarios = [
    {
        correo: "alejo@gmail.com",
        pass: "Alejo123"
    }
];


const btnIngresar = document.querySelector("#btn-igresar");
const user = document.querySelector("#user");
const password = document.querySelector("#password-user");
const check = document.querySelector("#check-user");

btnIngresar.addEventListener("click", () => {
    if ((user.value == "") || (password.value == "") || (check.value == false)) {
        alert("todos los campos son obligatorios");
    }else {
        alert("ingresas")
    }
})