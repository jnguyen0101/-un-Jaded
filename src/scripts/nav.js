function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");

    const isOpen = menu.classList.contains("show");

    if (isOpen) {
        menu.classList.remove("show");
        overlay.classList.remove("show");

        const openDropdowns = menu.querySelectorAll(".hamburger-dropdown.open");
        openDropdowns.forEach(drop => drop.classList.remove("open"));
    } else {
        menu.classList.add("show");
        overlay.classList.add("show");
    }
}

function toggleHamburgerDropdown(event) {
    event.preventDefault();
    const allDropdowns = document.querySelectorAll('.hamburger-dropdown');
    const clickedDropdown = event.target.closest('.hamburger-dropdown');

    allDropdowns.forEach(dropdown => {
        if (dropdown !== clickedDropdown) {
            dropdown.classList.remove('open');
        }
    });

    clickedDropdown.classList.toggle('open');
}

document.getElementById("menuOverlay").addEventListener("click", () => {
    toggleMenu();
});

document.querySelectorAll('#sideMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('sideMenu').classList.remove('active');
    });
});