// Function to check if the section is in the viewport
function checkScroll() {
    const sections = document.querySelectorAll('.innerBar');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Get the position of the section
        if (rect.top >= 0 && rect.top <= window.innerHeight / 1.0) {
            section.classList.add('progressAnimation'); // Add 'visible' class if section is in the viewport
        } else {
            section.classList.remove('progressAnimation'); // Remove 'visible' class if it's out of the viewport
        }
    });
}

function visibilityFunc() {
    const paraEl = document.querySelectorAll('.forVisibility');
    paraEl.forEach(paraEl => {
        const rect = paraEl.getBoundingClientRect(); // Get the position of the section
        if (rect.top >= 0 && rect.top <= window.innerHeight / 1.0) {
            paraEl.classList.add('visibility'); // Add 'visible' class if section is in the viewport
        } else {
            paraEl.classList.remove('visibility'); // Remove 'visible' class if it's out of the viewport
        }
    });
}

function slideAniFunc() {
    const leftSlide = document.querySelectorAll('.forLeftSlide');
    const rightSlide = document.querySelector('.forRightSlide');
    leftSlide.forEach(leftSlide => {
        const rect = leftSlide.getBoundingClientRect(); // Get the position of the section
        if (rect.top >= 0 && rect.top <= window.innerHeight / 1.0) {
            leftSlide.classList.add('leftSlide');
            rightSlide.classList.add('rightSlide'); // Add 'visible' class if section is in the viewport
        } else {
            leftSlide.classList.remove('leftSlide'); // Remove 'visible' class if it's out of the viewport
            rightSlide.classList.remove('rightSlide');
        }
    });
}


//   Numbers animation

const numbers = document.querySelectorAll('.number');
const duration = 2000;
const steps = 50;
const delay = duration / steps;

numbers.forEach(number => {
    const target = parseInt(number.dataset.target);
    const increment = target / steps;
    let current = 0;
    let started = false;

    function updateNumber() {
        current += increment;
        if (current < target) {
            number.textContent = Math.floor(current) + '+';
            setTimeout(updateNumber, delay);
        } else {
            number.textContent = target + '+';
        }
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                updateNumber();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(number);
});




// Run the function on scroll
window.addEventListener('scroll', checkScroll);
window.addEventListener('scroll', visibilityFunc);
window.addEventListener('scroll', slideAniFunc);

// Initial check when the page loads
checkScroll();
visibilityFunc();
slideAniFunc();

var typed = new Typed("#element", {
    strings: ["Web Developer.", "Graphic Designer.", "Multipotentialite."],
    typeSpeed: 80,
});