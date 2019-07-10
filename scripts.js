let mainNav = document.getElementById('menu');

function changeMenu(x) {
  x.classList.toggle("change");
  mainNav.classList.toggle('active');
};

function uploadFunction() {
	document.getElementById('my_file').click();
};