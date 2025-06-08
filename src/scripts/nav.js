function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");

    menu.classList.toggle("show");
    overlay.classList.toggle("show");
}

document.getElementById("menuOverlay").addEventListener("click", () => {
    document.getElementById("sideMenu").classList.remove("show");
    document.getElementById("menuOverlay").classList.remove("show");
});

document.querySelectorAll('#sideMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('sideMenu').classList.remove('active');
    });
});