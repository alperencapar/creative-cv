const age_container = document.querySelector(".author-age");

let current_year = new Date().getFullYear();
let birth_year = new Date("03/21/1999").getFullYear();

age_container.textContent = calculate_age_by_year(current_year, birth_year) + 1;
// why not? (+1) 😏//
