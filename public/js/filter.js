const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach( f => {
            f.classList.remove("active");
        });
        
        const fil = filter.querySelector("p").textContent;
        filter.classList.add("active");
    });
});