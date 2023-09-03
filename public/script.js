window.onload = function() {
  const fileInput = document.querySelector('.file-upload');
  const label = document.querySelector('label[for="file-upload"]');
  const selectedFiles = document.querySelector('.selected-files');
  fileInput.addEventListener('change', displayFileName);
  label.addEventListener('click', removeFileSelection);
  
  function displayFileName() {
    const fileName = fileInput.files[0].name;
    const fileExt = fileName.split('.').pop();
    selectedFiles.innerHTML = `
      <span>${fileName}</span><br>
      <center><span class="file-extension" >${fileExt} file</span></center>
  
    `;
    label.classList.add('file-selected');
    fileInput.setAttribute('disabled', '');
  }

  function removeFileSelection() {
    selectedFiles.innerHTML = '';
    label.classList.remove('file-selected');
    fileInput.removeAttribute('enabled');
  }
}

function removeFileSelection() {
  const fileInput = document.querySelector('.file-upload');
  const label = document.querySelector('label[for="file-upload"]');
  fileInput.removeEventListener('change', displayFileName);
  fileInput.value = '';
  label.removeEventListener('click', removeFileSelection);
  label.style.cursor = 'not-allowed';
  label.style.opacity = '0.5';
  label.style.pointerEvents = 'none';
  selectedFiles.style.display = 'none';
}

const uploadButton = document.getElementById("upload-button");
            uploadButton.addEventListener("click", function() {
            window.location.href = "/upload";
            });
const uploadedButton = document.getElementById("home");
            uploadButton.addEventListener("click", function() {
            window.location.href = "/";
            });
