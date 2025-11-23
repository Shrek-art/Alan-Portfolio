// =============================
//      THEME SWITCHER
// =============================
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    // Forțăm reîmprospătarea stilului la search bar
    if (searchInput) {
        searchInput.classList.toggle("light-mode");
    }
});

// =============================
//      PROJECTS BUTTON
// =============================
const projectsBtn = document.getElementById('projects-btn');
const mainContent = document.getElementById('main-content');
const projectsSection = document.getElementById('projects-section');

projectsBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    projectsSection.style.display = 'block';

    // ascundem search bar-ul dacă intrăm pe Projects normal
    searchContainer.classList.add('search-hidden');
});

// =============================
//      TABS (Photoshop / Digital / Traditional)
// =============================
const tabs = document.querySelectorAll('.project-tab');
const projects = document.querySelectorAll('.project');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // active tab
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

// =============================
//      HOME BUTTON (Alan Jiglitchi)
// =============================
const homeBtn = document.getElementById('home-btn');

homeBtn.addEventListener('click', () => {

    // Afișăm Projects automat
    mainContent.style.display = 'none';
    projectsSection.style.display = 'block';

    // Afișăm search bar-ul
    searchContainer.classList.remove('search-hidden');

    // Resetăm input-ul și afișăm tot
    searchInput.value = "";
    filterProjects("");
});

// =============================
//      SEARCH BAR FUNCTIONALITY
// =============================
const searchContainer = document.getElementById('search-bar-container');
const searchInput = document.getElementById('search-input');

// Filtrare live
searchInput.addEventListener('input', () => {
    filterProjects(searchInput.value.toLowerCase());
});

function filterProjects(text) {
    projects.forEach(project => {
        const title = project.querySelector("h3").textContent.toLowerCase();

        if (title.includes(text)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// =============================
//      LOGO -> HOME PAGE
// =============================
const logoBtn = document.getElementById('logo-btn');

logoBtn.addEventListener('click', () => {
    mainContent.style.display = 'block';
    projectsSection.style.display = 'none';

    searchContainer.classList.add('search-hidden');
});