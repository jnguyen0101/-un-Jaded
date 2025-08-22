document.querySelectorAll(".director-sm img, .director-sm .name, .director-sm .title")
    .forEach(el => {
        el.addEventListener("click", function (e) {
            e.stopPropagation();
            const director = this.closest(".director-sm");

            // close others
            document.querySelectorAll(".director-sm").forEach(d => {
                if (d !== director) d.classList.remove("active");
            });

            // toggle current
            director.classList.toggle("active");
        });
    });

// Close tooltip when clicking outside
document.addEventListener("click", function (e) {
    if (!e.target.closest(".director-sm")) {
        document.querySelectorAll(".director-sm").forEach(d => d.classList.remove("active"));
    }
});
