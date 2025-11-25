// THEME SWITCHER
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
});

// PROJECTS BUTTON
const projectsBtn = document.getElementById("projects-btn");
const mainContent = document.getElementById("main-content");
const projectsSection = document.getElementById("projects-section");
const profileSection = document.getElementById("profile-section");
const searchContainer = document.getElementById("search-bar-container");
const searchInput = document.getElementById("search-input");

projectsBtn.addEventListener("click", () => {
    mainContent.style.display = "none";
    profileSection.style.display = "none";
    projectsSection.style.display = "block";
    searchContainer.classList.add("search-hidden");
});

// TABS
const tabs = document.querySelectorAll(".project-tab");
const projects = document.querySelectorAll(".project");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        projects.forEach(project => {
            project.style.display =
                project.getAttribute("data-category") === category ? "block" : "none";
        });
    });
});

// HOME BUTTON (Alan Jiglitchi)
const homeBtn = document.getElementById("home-btn");

homeBtn.addEventListener("click", () => {
    mainContent.style.display = "none";
    profileSection.style.display = "none";
    projectsSection.style.display = "block";

    searchContainer.classList.remove("search-hidden");
    searchInput.value = "";
    filterProjects("");
});

// SEARCH
searchInput.addEventListener("input", () => {
    filterProjects(searchInput.value.toLowerCase());
});

function filterProjects(text) {
    projects.forEach(project => {
        const title = project.querySelector("h3").textContent.toLowerCase();
        project.style.display = title.includes(text) ? "block" : "none";
    });
}

// LOGO → HOME
const logoBtn = document.getElementById("logo-btn");

logoBtn.addEventListener("click", () => {
    mainContent.style.display = "block";
    projectsSection.style.display = "none";
    profileSection.style.display = "none";
    searchContainer.classList.add("search-hidden");
});

// PROFILE BUTTON
const profileBtn = document.getElementById("profile-btn");

profileBtn.addEventListener("click", () => {
    mainContent.style.display = "none";
    projectsSection.style.display = "none";
    profileSection.style.display = "block";
    searchContainer.classList.add("search-hidden");
});
