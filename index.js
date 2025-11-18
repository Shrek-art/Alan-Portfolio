// ============ THEME BUTTON ============
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});

// ============ PROJECTS BUTTON ============
const projectsBtn = document.getElementById('projects-btn');
const mainContent = document.getElementById('main-content');
const projectsSection = document.getElementById('projects-section');

projectsBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    projectsSection.style.display = 'block';
});

// ============ PROJECTS TABS FILTER ============
const tabs = document.querySelectorAll('.project-tab');
const projects = document.querySelectorAll('.project');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // Setăm tab-ul activ
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.getAttribute('data-category');

        // Arătăm doar proiectele din categoria selectată
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
    // Arată landing page-ul
    mainContent.style.display = 'block';
    // Ascunde secțiunea Projects
    projectsSection.style.display = 'none';
});