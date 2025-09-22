// Updated JavaScript to work with the new HTML/CSS structure

document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const navbarBg = navbar.querySelector(".glass-effect");

    if (window.scrollY > 50) {
      navbarBg.style.background = "transparent";
      navbar.style.backdropFilter = "blur(20px)";
    } else {
      navbarBg.style.background = "rgba(255, 255, 255, 0.8)";
    }
  });

  // Interactive todo items in hero section
  document.querySelectorAll(".todo-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      const todoText = this.nextElementSibling;

      if (this.classList.contains("checked")) {
        // Uncheck the item
        this.classList.remove("checked");
        this.innerHTML = "";
        todoText.classList.remove("completed");
      } else {
        // Check the item
        this.classList.add("checked");
        this.innerHTML = '<span class="checkmark">✓</span>';
        todoText.classList.add("completed");
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // CTA button interactions with ripple effect
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("div");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255, 255, 255, 0.3)";
      ripple.style.pointerEvents = "none";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.transform = "scale(0)";
      ripple.style.transition = "transform 0.6s ease";

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      // Animate ripple
      setTimeout(() => {
        ripple.style.transform = "scale(4)";
        ripple.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        ripple.remove();
      }, 600);

      // Simulate signup process for CTA buttons
      if (
        this.textContent.includes("Start") ||
        this.textContent.includes("Get Started")
      ) {
        setTimeout(() => {
          alert("🎉 Welcome to Todo Wizard! Your free trial has started.");
        }, 300);
      }
    });
  });

  // Intersection Observer for feature cards animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe feature cards for scroll animations
  document.querySelectorAll(".feature-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Add parallax effect to hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".hero-visual");

    parallaxElements.forEach((element) => {
      const speed = 0.2;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Add typing effect to hero title
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Trigger typing effect when page loads
  const heroTitle = document.querySelector(".hero-title span");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 80);
    }, 500);
  }

  // Add floating animation to feature icons
  document.querySelectorAll(".feature-icon").forEach((icon, index) => {
    icon.style.animation = `float 3s ease-in-out infinite`;
    icon.style.animationDelay = `${index * 0.2}s`;
  });

  // Add mobile menu toggle (for future mobile menu implementation)
  const createMobileMenu = () => {
    // This would be expanded for a full mobile menu
    console.log("Mobile menu functionality can be added here");
  };

  // Initialize any additional effects on window load
  window.addEventListener("load", () => {
    // Add any initialization code here
    console.log("Todo Wizard loaded successfully!");
  });
});

// Add CSS keyframe for float animation via JavaScript
const style = document.createElement("style");
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
