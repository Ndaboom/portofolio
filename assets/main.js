const toggleMenu = document.querySelector(".toggleNav");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close_icon");
const menu_options = document.querySelectorAll(".popup_menu_option");

toggleMenu.addEventListener("click", () => {
  popup.classList.remove("hide");
});

close.addEventListener("click", () => {
  popup.classList.add("hide");
});

menu_options.forEach((option) => {
  option.addEventListener("click", () => {
    popup.classList.add("hide");
  });
});
