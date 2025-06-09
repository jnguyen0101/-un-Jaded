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
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) return;

    let activeMenu = null;

    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const btn = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-content");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const isOpen = menu.classList.contains("show-touch");

            // Close all open dropdowns
            document.querySelectorAll(".dropdown-content.show-touch").forEach(m => {
                m.classList.remove("show-touch");
            });

            // Toggle current
            if (!isOpen) {
                menu.classList.add("show-touch");
                activeMenu = menu;
            } else {
                activeMenu = null;
            }
        });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-content.show-touch").forEach(m => {
                m.classList.remove("show-touch");
            });
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