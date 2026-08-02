const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach( f => {
            f.classList.remove("active");
        });

        filter.classList.add("active");
    });
});