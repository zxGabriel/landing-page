document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });

  const images = document.querySelectorAll('.img-fluid');
  setInterval(() => {
    images.forEach(image => {
      const angle = Math.random() * 360; // Ângulo aleatório
      const color = `hsl(${angle}, 100%, 50%)`; // Cor baseada no ângulo
      image.style.borderColor = color;
    });
  }, 2000); 