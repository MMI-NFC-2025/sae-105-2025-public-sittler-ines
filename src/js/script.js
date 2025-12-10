document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle")
  const menuClose = document.querySelector(".menu__close")
  const menu = document.getElementById("menu")
  const menuLinks = document.querySelectorAll(".menu__link")

  // Fonction pour ouvrir le menu
  function openMenu() {
    menu.classList.add("menu--open")
    menuToggle.classList.add("header__menu-toggle--active")
    menuToggle.setAttribute("aria-expanded", "true")
    // Empêcher le scroll du body quand le menu est ouvert
    document.body.style.overflow = "hidden"
  }

  // Fonction pour fermer le menu
  function closeMenu() {
    menu.classList.remove("menu--open")
    menuToggle.classList.remove("header__menu-toggle--active")
    menuToggle.setAttribute("aria-expanded", "false")
    // Réactiver le scroll du body
    document.body.style.overflow = ""
  }

  // Événement : Clic sur le bouton hamburger
  menuToggle.addEventListener("click", () => {
    if (menu.classList.contains("menu--open")) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  menuClose.addEventListener("click", closeMenu)

  // Événement : Fermer le menu si on clique sur un lien
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("menu--open")) {
      closeMenu()
    }
  })
})
