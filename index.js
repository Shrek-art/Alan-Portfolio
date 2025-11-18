const themeBtn = document.getElementById('themeBtn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});

const projectsBtn = document.getElementById('projects-btn');
const mainContent = document.getElementById('main-content');
const projectsSection = document.getElementById('projects-section');

projectsBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    projectsSection.style.display = 'block';
});
