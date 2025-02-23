
const openUpload = document.getElementById('openUpload');
const uploadOverlay = document.getElementById('uploadOverlay');
const imageUploadForm = document.getElementById('imageUploadForm');
const fileInput = document.getElementById('fileInput');
const imageContainer = document.getElementById('imageContainer');

// Show the overlay form when the upload button is clicked
openUpload.addEventListener('click', () => {
  uploadOverlay.classList.add('active');
});

// Hide the overlay if the user clicks outside the form
uploadOverlay.addEventListener('click', (e) => {
  if (e.target === uploadOverlay) {
    uploadOverlay.classList.remove('active');
  }
});

// On form submit, load the selected image and set it as the background image
imageUploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imageContainer.style.backgroundImage = `url('${e.target.result}')`;
    }
    reader.readAsDataURL(file);
  }
  // Hide the overlay after submission
  uploadOverlay.classList.remove('active');
});

function showDropdown() {
    document.getElementById("myDropdown").classList.add("show");
  }
  
  function hideDropdown() {
    setTimeout(() => {
      document.getElementById("myDropdown").classList.remove("show");
    }, 200);
  }
  
  function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      a[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
  }