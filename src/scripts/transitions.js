document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-logo");
    const transition = document.getElementById("page-transition");
    const hasSeenSplash = sessionStorage.getItem("seenSplash");

    // Fade in from green overlay
    if (transition) {
        // Delay slightly to ensure it fades after page content is visible
        setTimeout(() => {
            transition.classList.remove("active");
        }, 50);
    }

    // Splash screen (only for the first time on homepage)
    if (splash && !hasSeenSplash) {
        setTimeout(() => {
            splash.classList.add("show");
            sessionStorage.setItem("seenSplash", "true");
        }, 100);

        setTimeout(() => {
            splash.style.opacity = "0";
            setTimeout(() => splash.style.display = "none", 1000);
        }, 2000);
    } else if (splash) {
        splash.style.display = "none";
    }

    // Fade in page elements
    document.querySelectorAll(".fade-in-on-load, .fade-in-fixed").forEach((el, i) => {
        let delay = splash && !hasSeenSplash ? 1300 + i * 100 : i * 100;
        setTimeout(() => el.classList.add("visible"), delay);
    });

    document.querySelectorAll("a[href]").forEach(link => {
        const href = link.getAttribute("href");
        if (
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            link.target === "_blank"
        ) return;

        link.addEventListener("click", (e) => {
            e.preventDefault();
            if (transition) {
                transition.classList.add("active");

                setTimeout(() => {
                    window.location.href = link.href;
                }, 500);
            } else {
                window.location.href = link.href;
            }
        });
    });
});
