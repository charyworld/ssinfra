const menuIcon = document.getElementById('menu-icon'); // Select the menu icon
const navUl = document.querySelector('nav ul'); // Select the navigation menu (ul)

menuIcon.addEventListener('click', () => {
  navUl.classList.toggle('show'); // Toggle display using 'show' class
});




document.addEventListener("DOMContentLoaded", function() {
  // Simulate a loading time (you can adjust this or remove it if you are waiting for real resources)
  setTimeout(function() {
      // Hide the loader
      document.querySelector('.loader-container').style.display = 'none';

      // Show the main content
      document.querySelector('.main-content').style.display = 'block';

      // Add the class to trigger the fade-in effect
      document.querySelector('.main-content').classList.add('content-visible');
  }, 2000); // Change this timeout as needed
});

document.getElementById('career').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('call').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});


// Select all elements with the 'stats-number' class
const statsNumbers = document.querySelectorAll('.stats-number');

// Function to animate the counter
function animateCounter() {
    statsNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target'); // Target number
        const start = 0;
        const increment = Math.ceil(target / 100); // Increment value
        let current = start;

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                stat.textContent = target; // Set final value
            } else {
                stat.textContent = current;
                requestAnimationFrame(updateCounter); // Continue animation
            }
        };

        updateCounter();
    });
}

// Observer for detecting when stats come into view
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                observer.disconnect(); // Disconnect after animation
            }
        });
    },
    { threshold: 0.5 } // Trigger animation when 50% of element is visible
);

// Observe the container
observer.observe(document.querySelector('.stats-container'));
