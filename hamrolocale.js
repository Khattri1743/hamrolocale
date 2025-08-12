document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      if (idx === i) {
        slide.classList.add("active");
      }
    });
  }

  showSlide(index); // Show first slide

  setInterval(() => {
    index = (index + 1) % slides.length; // Loop back to start
    showSlide(index);
  }, 1000); // 1000ms = 1 second
});



function addHoverPushEffect(id) {
  const img = document.getElementById(id);
  if (!img) return;

  img.style.transition = "transform 2.0s ease"; // Smooth transition on hover

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(0.8)"; // Slightly shrink
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)"; // Return to normal
  });
}

document.addEventListener("DOMContentLoaded", function () {
  addHoverPushEffect("productImage");
  addHoverPushEffect("beforePack");
  addHoverPushEffect("afterPack");
});


    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
function redirectToPage() {
      // Replace the URL below with your destination
      window.location.href = "https://hamrolocale.netlify.app/orders";
    }
