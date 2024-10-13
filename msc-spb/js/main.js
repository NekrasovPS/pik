document.addEventListener("DOMContentLoaded", () => {
  const openMenuBtn = document.getElementById("openMenu");
  const menu = document.getElementById("menu");

  if (!openMenuBtn || !menu) {
    return;
  }

  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("open");
  });

  function closeMenu() {
    menu.classList.remove("open");
  }

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !openMenuBtn.contains(event.target)) {
      closeMenu();
    }
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  
});

document.addEventListener('DOMContentLoaded', function() {
  const openModalButtons = document.querySelectorAll('.open-modal');
  const modalOverlay = document.querySelector('.modal');
  const closeModalButton = document.querySelector('.get-close');
  const modal = document.querySelector('.modal__wrapper');

  openModalButtons.forEach(button => {
      button.addEventListener('click', function() {
          modalOverlay.classList.add('active');
      });
  });

  modalOverlay.addEventListener('click', function(event) {
      if (!modal.contains(event.target)) {
          modalOverlay.classList.remove('active');
      }
  });

  closeModalButton.addEventListener('click', function() {
      setTimeout(function() {
          modalOverlay.classList.remove('active');
      }, 1000);
  });
});





Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


// function openTab(tabId) {
//   var i, tabcontent, tabbuttons;

//   // Hide all tab contents
//   tabcontent = document.getElementsByClassName("tab-content");
//   for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//       tabcontent[i].classList.remove("active");
//   }

//   // Remove active class from all buttons
//   tabbuttons = document.getElementsByClassName("tab-button");
//   for (i = 0; i < tabbuttons.length; i++) {
//       tabbuttons[i].classList.remove("active");
//   }

//   // Show the current tab and add "active" class to the corresponding button
//   document.getElementById(tabId).style.display = "flex";
//   document.getElementById(tabId).classList.add("active");
//   event.currentTarget.classList.add("active");
// }

// Optionally, you can set the default tab to open when the page loads
// document.addEventListener("DOMContentLoaded", function() {
//   openTab('tab1');
// });
