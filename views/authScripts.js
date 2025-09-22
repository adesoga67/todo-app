const signinTab = document.getElementById("signin-tab");
const signupTab = document.getElementById("signup-tab");
const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");

signinTab.addEventListener("click", () => {
  signinTab.classList.add("bg-white", "text-gray-800", "shadow-sm");
  signinTab.classList.remove("text-gray-600");
  signupTab.classList.remove("bg-white", "text-gray-800", "shadow-sm");
  signupTab.classList.add("text-gray-600");

  signinForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("bg-white", "text-gray-800", "shadow-sm");
  signupTab.classList.remove("text-gray-600");
  signinTab.classList.remove("bg-white", "text-gray-800", "shadow-sm");
  signinTab.classList.add("text-gray-600");

  signupForm.classList.remove("hidden");
  signinForm.classList.add("hidden");
});

// Function to navigate back to landing page
function goToLandingPage() {
  alert("This would navigate back to the landing page");
  window.location.href = "index.html";
}

// Add some interactive effects
document.querySelectorAll(".input-field").forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.target.parentElement.style.transform = "translateY(-2px)";
  });

  input.addEventListener("blur", (e) => {
    e.target.parentElement.style.transform = "translateY(0)";
  });
});
