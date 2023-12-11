document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchForm = document.querySelector(".navbar form");

    searchIcon.addEventListener("click", function () {
        searchForm.classList.toggle("show");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const animeItems = document.querySelectorAll('.anime-item');

    animeItems.forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.toggle('enlarged');
        });
    });
});