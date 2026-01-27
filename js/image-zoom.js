const images = document.querySelectorAll('.post-image');

images.forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed'); 
  });
});
