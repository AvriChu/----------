const checkbox = document.getElementById('check');
const menu = document.querySelector('.all-menu');
const header = document.querySelector('header');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    menu.style.transform = 'translateY(80px)';
  } else {
    menu.style.transform = 'translateY(-200%)';
  }
});
