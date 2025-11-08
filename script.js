// Smooth scroll behavior for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth transitions
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Add a subtle animation on click
      this.style.transform = "translateX(15px)"
      setTimeout(() => {
        this.style.transform = ""
      }, 200)
    })
  })

  // Project cards hover effect enhancement
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = "none"
    })
  })

  // Footer links hover effect
  const footerLinks = document.querySelectorAll(".footer-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.letterSpacing = "2px"
    })

    link.addEventListener("mouseleave", function () {
      this.style.letterSpacing = "1px"
    })
  })

  // Lazy loading for images
  const images = document.querySelectorAll("img")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.style.opacity = "0"
        img.style.transition = "opacity 0.5s ease"

        setTimeout(() => {
          img.style.opacity = "1"
        }, 100)

        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => {
    imageObserver.observe(img)
  })

  // Load preferred language on start
  const preferredLang = localStorage.getItem("preferredLanguage")

  if (preferredLang && preferredLang !== "pt-BR") {
    toggleLanguage()
  }
})

// Responsive menu toggle for mobile (if needed in future)
function toggleMobileMenu() {
  const nav = document.querySelector(".navigation")
  if (nav) {
    nav.classList.toggle("mobile-active")
  }
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll indicator for long pages
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const footer = document.querySelector(".footer")

  if (scrolled > 100) {
    footer.style.opacity = "0.95"
  } else {
    footer.style.opacity = "1"
  }
})

// Function to toggle language
function toggleLanguage() {
  const currentLang = document.documentElement.lang
  const newLang = currentLang === "pt-BR" ? "en" : "pt-BR"

  document.documentElement.lang = newLang

  // Toggle visibility of language elements
  const ptElements = document.querySelectorAll(".lang-pt")
  const enElements = document.querySelectorAll(".lang-en")

  ptElements.forEach((el) => {
    el.style.display = newLang === "pt-BR" ? "" : "none"
  })

  enElements.forEach((el) => {
    el.style.display = newLang === "en" ? "" : "none"
  })

  // Save preference in localStorage
  localStorage.setItem("preferredLanguage", newLang)
}
