const ham = document.querySelector('.ham');
const close = document.querySelector('.close');
const sideMenu = document.querySelector('.side-menu');

ham.addEventListener('click', function () {
  sideMenu.classList.add('show');
  ham.classList.remove('hams')
  ham.style.display = 'none';
  close.style.display = 'block';
});

close.addEventListener('click', function () {
  sideMenu.classList.remove('show');
  ham.classList.add('hams')
  close.style.display = 'none';
  // ham.style.display = 'block';
});

const explore = document.querySelector('.explore');
explore.addEventListener('click', function(){
  window.location.href =  `/html/destination-moon.html`;
})