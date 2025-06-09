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
    let activeDropdown = null;

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-content");

        button.addEventListener("click", (e) => {
            // Only run on touch devices
            if (window.matchMedia("(hover: none)").matches) {
                e.preventDefault();
                e.stopPropagation();

                const isAlreadyOpen = menu.classList.contains("show-touch");

                // Close all dropdowns
                document.querySelectorAll(".dropdown-content.show-touch").forEach(openMenu => {
                    openMenu.classList.remove("show-touch");
                });

                // Toggle current only if it was not already open
                if (!isAlreadyOpen) {
                    menu.classList.add("show-touch");
                    activeDropdown = menu;
                } else {
                    activeDropdown = null;
                }
            }
        });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
        if (
            window.matchMedia("(hover: none)").matches &&
            activeDropdown &&
            !e.target.closest(".dropdown")
        ) {
            activeDropdown.classList.remove("show-touch");
            activeDropdown = null;
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