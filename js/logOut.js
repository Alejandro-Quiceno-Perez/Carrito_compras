const logOut = document.getElementById("logOut");

logOut.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("isAutenticated");
    window.location.href = "index.html"
});
