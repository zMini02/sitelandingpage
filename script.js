// Smooth scrolling when clicking on the navbar links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.getElementById('ver-todos').addEventListener('click', function() {
    const hiddenGroups = document.querySelectorAll('.group-item.hidden');
    
    hiddenGroups.forEach(function(group) {
      group.classList.remove('hidden');
    });
  
    // Esconde o botão "Ver todos os grupos" após clicar
    this.style.display = 'none';
  });
  window.onload = function() {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
  
    // Mostrar o popup
    popup.classList.add('show');
  
    // Fechar o popup ao clicar no botão
    closePopup.onclick = function() {
      popup.classList.remove('show');
    }
  
    // Fechar o popup ao clicar fora do conteúdo
    window.onclick = function(event) {
      if (event.target === popup) {
        popup.classList.remove('show');
      }
    }
  }
  