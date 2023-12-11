document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchForm = document.querySelector(".navbar form");

    searchIcon.addEventListener("click", function () {
        searchForm.classList.toggle("show");
    });
});
