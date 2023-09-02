const form = document.querySelector('.box');
const input = document.querySelector('.box__file');
const uploading = document.querySelector('.box__uploading');
const success = document.querySelector('.box__success');
const error = document.querySelector('.box__error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const file = input.files[0];
  const formData = new FormData();
  formData.append('file', file);

  uploading.style.display = 'block';

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(response => {
      uploading.style.display = 'none';
      success.style.display = 'block';
    })
    .catch(error => {
      uploading.style.display = 'none';
      error.style.display = 'block';
      error.querySelector('span').textContent = error.message;
    });
});
