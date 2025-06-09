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

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-content");

        let isTouchOpen = false;

        button.addEventListener("click", (e) => {
            if (window.matchMedia("(hover: none)").matches) {
                e.preventDefault();

                document.querySelectorAll(".dropdown-content.show-touch").forEach(el => {
                    if (el !== menu) el.classList.remove("show-touch");
                });

                menu.classList.toggle("show-touch");
                isTouchOpen = menu.classList.contains("show-touch");
            }
        });

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove("show-touch");
                isTouchOpen = false;
            }
        });
    });

    document.getElementById("menuOverlay").addEventListener("click", () => {
        toggleMenu();
    });

    document.querySelectorAll('#sideMenu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('sideMenu').classList.remove('active');
        });
    });
});