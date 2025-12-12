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


// Programme Filter Functionality
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const programmeDays = document.querySelectorAll(".programme-day")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("filter-btn--active"))
      button.classList.add("filter-btn--active")

      // Filter programme days
      programmeDays.forEach((day) => {
        if (filter === "all" || day.dataset.day === filter) {
          day.style.display = "block"
        } else {
          day.style.display = "none"
        }
      })
    })
  })
})


// FAQ Accordion Functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-item__question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true"

      // Close all other FAQs
      faqQuestions.forEach((q) => {
        q.setAttribute("aria-expanded", "false")
      })

      // Toggle current FAQ
      question.setAttribute("aria-expanded", !isExpanded)
    })
  })
})

// Contact Form Functionality
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      console.log("[v0] Form submitted with data:", data)

      // Show success message (in real app, this would send to server)
      alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.")

      // Reset form
      contactForm.reset()
    })
  }
})
