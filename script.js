const loadingImg = document.querySelector('.loading');
const mainHeading = document.querySelector('.main-heading');

setTimeout(() => {
  loadingImg.style.display = 'none';
  mainHeading.style.display = 'block';
},3000);
