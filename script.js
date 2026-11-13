
/* =================================
   DIEXVIL - PORTFOLIO JAVASCRIPT
================================= */

// 1. TYPING ANIMATION

const typingElement = document.querySelector(".hero h2");

const words = [
    "Developer | Programmer | Creator",
    "Frontend Developer",
    "Python Programmer",
    "Technology Enthusiast",
    "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    typingElement.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typingEffect, 1200);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }
    }

    setTimeout(typingEffect, deleting ? 45 : 90);
}

typingEffect();


// 2. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".about, .skills, .projects, .contact, .skill, .project-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


// 3. ACTIVE NAVIGATION LINK

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    document.querySelectorAll("section[id]").forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }

    });

});


// 4. SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// 5. DYNAMIC COPYRIGHT YEAR

const footerText = document.querySelector("footer p:last-of-type");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} DIEXVIL | All Rights Reserved.`;
}


// 6. MOUSE FOLLOWING GLOW EFFECT

const heroCard = document.querySelector(".hero-card");

if (heroCard) {

    heroCard.addEventListener("mousemove", event => {

        const rect = heroCard.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        heroCard.style.setProperty("--mouse-x", `${x}px`);
        heroCard.style.setProperty("--mouse-y", `${y}px`);

    });

}


// 7. CONSOLE BRANDING

console.log(
    "%c DIEXVIL ",
    "background:#00ff99;color:#001b10;font-size:25px;font-weight:bold;padding:10px;"
);

console.log(
    "%c Welcome to my developer portfolio!",
    "color:#00ff99;font-size:14px;"
);
