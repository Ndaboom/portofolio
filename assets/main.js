const toggleMenu = document.querySelector('.toggleNav');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close_icon');
const menuOptons = document.querySelectorAll('.popup_menu_option');

toggleMenu.addEventListener('click', () => {
  popup.classList.remove('hide');
});

close.addEventListener('click', () => {
  popup.classList.add('hide');
});

menuOptons.forEach((option) => {
  option.addEventListener('click', () => {
    popup.classList.add('hide');
  });
});
