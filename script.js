function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.addEventListener('scroll', function() {
  const details = document.querySelectorAll('.details-container');
  details.forEach((detail) => {
    const position = detail.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if(position < screenPosition) {
      detail.style.opacity = '1';
      detail.style.transform = 'translateY(0)';
    }
  });
});
// Fonction pour changer la couleur des icônes en fonction du niveau
function changeIconColors() {
  // Sélectionner toutes les icônes
  const icons = document.querySelectorAll('.icon');

  // Parcourir chaque icône
  icons.forEach(icon => {
    // Récupérer le niveau de compétence depuis l'attribut "data-level"
    const level = icon.getAttribute('data-level');

    // Appliquer une couleur en fonction du niveau
    if (level === 'Avancé') {
      icon.style.filter = 'invert(42%) sepia(94%) saturate(315%) hue-rotate(90deg) brightness(92%) contrast(83%)'; // Vert
    } else if (level === 'Intermédiaire') {
      icon.style.filter = 'invert(64%) sepia(72%) saturate(613%) hue-rotate(5deg) brightness(98%) contrast(95%)'; // Orange
    } else if (level === 'Basique') {
      icon.style.filter = 'invert(33%) sepia(84%) saturate(4379%) hue-rotate(357deg) brightness(96%) contrast(107%)'; // Rouge
    }
  });
}

// Appeler la fonction quand la page est chargée
window.onload = changeIconColors;

// Add hover bounce effect using JS
document.querySelectorAll('.contact-icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transition = 'transform 0.3s ease-in-out';
    icon.style.transform = 'scale(1.1)';
  });
  
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const footerLinks = document.querySelectorAll('footer .nav-links-container ul li a');
  
  footerLinks.forEach(link => {
    link.style.transition = 'transform 0.3s ease';
    link.addEventListener('mouseover', () => {
      link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1)';
    });
  });
});


