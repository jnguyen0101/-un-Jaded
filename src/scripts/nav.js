function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.classList.toggle("active");
}

document.querySelectorAll('#sideMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('sideMenu').classList.remove('active');
    });
});