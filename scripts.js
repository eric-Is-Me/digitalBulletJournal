let mainNav = document.getElementById('menu');
let selectedFile = null;

function changeMenu(x) {
  x.classList.toggle('change');
  mainNav.classList.toggle('active');
};

function uploadFunction() {
	document.getElementById('upFile').click();
};

function handleFileUploadChange(e) {
	selectedFile = e.target.files[0];
	const uploadTask = storageRef.child('images/${selectedFile.name}').put(selectedFile);

	uploadTask.on('state_changed', (error) => {
	// Handle unsuccessful uploads
	console.log(error);
	}, () => {
	 // Do something once upload is complete
	 console.log('success');
	});
};

document.querySelector('#upFile').addEventListener('change', handleFileUploadChange);
