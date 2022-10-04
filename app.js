const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenSections = document.querySelectorAll('.hidden');
hiddenSections.forEach((el) => observer.observe(el));