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

const tabs = document.querySelectorAll('.project-tab');
const projects = document.querySelectorAll('.project');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.getAttribute('data-category');

        projects.forEach(project => {
            if (project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

const homeBtn = document.getElementById('home-btn');

homeBtn.addEventListener('click', () => {
    mainContent.style.display = 'block';
    projectsSection.style.display = 'none';
});