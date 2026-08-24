
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("show");

  if (nav.classList.contains("show")) {
    menuIcon.src = "images/icon-close.svg";
  } else {
    menuIcon.src = "images/icon-hamburger.svg";
  }
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
    menuIcon.src = "images/icon-hamburger.svg";
  });
});

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
  testimonials.forEach(function (testimonial) {
    testimonial.classList.remove("active");
    testimonial.style.display = "none";
  });

  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  if (testimonials[index]) {
    testimonials[index].classList.add("active");
    testimonials[index].style.display = "block";
  }

  if (dots[index]) {
    dots[index].classList.add("active");
  }

  currentSlide = index;
}

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    showSlide(index);
  });
});

function updateSlider() {
  if (window.innerWidth > 700) {
    testimonials.forEach(function (testimonial) {
      testimonial.style.display = "block";
      testimonial.classList.add("active");
    });

    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
  } else {
    testimonials.forEach(function (testimonial, index) {
      if (index === currentSlide) {
        testimonial.style.display = "block";
        testimonial.classList.add("active");
      } else {
        testimonial.style.display = "none";
        testimonial.classList.remove("active");
      }
    });

    dots.forEach(function (dot, index) {
      if (index === currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
}

window.addEventListener("resize", updateSlider);

updateSlider();

const form = document.getElementById("newsletterForm");
const email = document.getElementById("email");
const error = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = email.value.trim();

  if (emailValue === "") {
    error.textContent = "Please enter your email address.";
    return;
  }

  if (!emailValue.includes("@")) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  if (!emailValue.includes(".")) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  error.textContent = "Thanks! Your email has been submitted.";
  email.value = "";
});