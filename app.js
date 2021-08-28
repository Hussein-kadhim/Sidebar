const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const drawer = document.querySelector('.drawer');

const onClickMenuHandler = (display) => {
  sidebar.classList.toggle('show-sidebar');
  drawer.style.display = display;
};

toggleBtn.addEventListener('click', () => onClickMenuHandler('block'));

closeBtn.addEventListener('click', () => onClickMenuHandler('none'));

drawer.addEventListener('click', () => onClickMenuHandler('none'));
