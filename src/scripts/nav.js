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

document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    let activeMenu = null;

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-content");

        button.addEventListener("click", (e) => {
            // Only on touch devices
            if (window.matchMedia("(hover: none)").matches) {
                e.preventDefault();
                e.stopPropagation();

                // If already open, close it
                if (menu.classList.contains("show-touch")) {
                    menu.classList.remove("show-touch");
                    activeMenu = null;
                } else {
                    // Close others
                    document.querySelectorAll(".dropdown-content.show-touch").forEach(openMenu => {
                        openMenu.classList.remove("show-touch");
                    });

                    // Open this one
                    menu.classList.add("show-touch");
                    activeMenu = menu;
                }
            }
        });
    });

    // Close when clicking outside any dropdown
    document.addEventListener("click", (e) => {
        if (activeMenu && !e.target.closest(".dropdown")) {
            activeMenu.classList.remove("show-touch");
            activeMenu = null;
        }
    });

    // Close when clicking outside of hamburger side menu
    document.getElementById("menuOverlay").addEventListener("click", () => {
        toggleMenu();
    });

    // Close all other dropdowns
    document.querySelectorAll('#sideMenu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('sideMenu').classList.remove('active');
        });
    });
});