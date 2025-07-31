function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");
    const hamburger = document.querySelector(".hamburger");

    const isOpen = menu.classList.contains("show");

    if (isOpen) {
        menu.classList.remove("show");
        overlay.classList.remove("show");

        const openDropdowns = menu.querySelectorAll(".hamburger-dropdown.open");
        openDropdowns.forEach(drop => drop.classList.remove("open"));

        hamburger.classList.remove("open");
    } else {
        menu.classList.add("show");
        overlay.classList.add("show");

        hamburger.classList.add("open");
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

    // Check if the device is a large touch screen
    const isLargeTouchScreen = () => {
        return window.matchMedia("(min-width: 769px) and (hover: none)").matches;
    }

    if (isLargeTouchScreen()) {
        const dropdowns = document.querySelectorAll('.navbar .dropdown');

        dropdowns.forEach(dropdown => {
            const dropbtn = dropdown.querySelector('.dropbtn');

            dropbtn.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                // Close any currently open dropdowns first, unless it's the current one
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown && otherDropdown.classList.contains('open')) {
                        otherDropdown.classList.remove('open');
                    }
                });

                // Toggle the 'open' class on the clicked dropdown
                dropdown.classList.toggle('open');
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (event) => {
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
                    dropdown.classList.remove('open');
                }
            });
        });

        // Ensure dropdowns don't close when clicking inside the dropdown content
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        });
    }
});