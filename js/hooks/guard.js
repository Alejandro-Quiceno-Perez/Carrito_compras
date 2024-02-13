(() => {
    const isAutenticated = localStorage.getItem("isAutenticated");
    const path = window.location.pathname;
    const routeActu = path.substring(path.lastIndexOf("/") + 1);
    const privateRoutes = ["page.html"];
    if (privateRoutes.includes(routeActu) && !isAutenticated) {
        alert("No tienes los permisos para ingresar a esta pagina.")
        window.location.href = "index.html";
    }
})();