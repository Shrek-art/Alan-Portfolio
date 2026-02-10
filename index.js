// =====================
// THEME SWITCHER
// =====================
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
});

// =====================
// MAIN ELEMENTS
// =====================
const mainContent = document.getElementById("main-content");
const profileSection = document.getElementById("profile-section");
const projectsSection = document.getElementById("projects-section");
const projectsContainer = document.getElementById("projects-container");
const searchContainer = document.getElementById("search-bar-container");
const searchInput = document.getElementById("search-input");

// =====================
// HOME BUTTON
// =====================
const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
    mainContent.style.display = "block";
    profileSection.style.display = "none";
    projectsSection.style.display = "none";
    searchContainer.classList.add("search-hidden");
    searchInput.value = "";
});

// =====================
// LOGO BUTTON
// =====================
const logoBtn = document.getElementById("logo-btn");
logoBtn.addEventListener("click", () => {
    mainContent.style.display = "block";
    projectsSection.style.display = "none";
    profileSection.style.display = "none";
    searchContainer.classList.add("search-hidden");
});

// =====================
// PROFILE BUTTON
// =====================
const profileBtn = document.getElementById("profile-btn");
profileBtn.addEventListener("click", () => {
    mainContent.style.display = "none";
    projectsSection.style.display = "none";
    profileSection.style.display = "block";
    searchContainer.classList.add("search-hidden");
});

// =====================
// PROJECTS BUTTON
// =====================
const projectsBtn = document.getElementById("projects-btn");
projectsBtn.addEventListener("click", () => {
    mainContent.style.display = "none";
    profileSection.style.display = "none";
    projectsSection.style.display = "block";
    searchContainer.classList.remove("search-hidden");
    searchInput.value = "";
});

// =====================
// FETCH PROJECTS FROM JSON
// =====================
fetch("projects.json")
    .then(res => res.json())
    .then(projectsData => {
        projectsData.forEach(p => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project");
            projectDiv.setAttribute("data-category", p.category);

            const img = document.createElement("img");
            img.src = p.image;
            img.classList.add("project-img");

            const title = document.createElement("h3");
            title.textContent = p.title;

            projectDiv.appendChild(img);
            projectDiv.appendChild(title);
            projectsContainer.appendChild(projectDiv);
        });

        // Abia după ce proiectele există legăm logica tabs și search
        initProjectLogic();
    })
    .catch(err => {
        console.error("Eroare la încărcarea projects.json:", err);
    });

// =====================
// FUNCTION: INIT PROJECT LOGIC
// =====================
function initProjectLogic() {
    const tabs = document.querySelectorAll(".project-tab");
    const projects = document.querySelectorAll(".project");

    // TAB CLICK
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const category = tab.dataset.category;

            projects.forEach(project => {
                project.style.display =
                    project.dataset.category === category ? "block" : "none";
            });
        });
    });

    // SEARCH FILTER
    searchInput.addEventListener("input", () => {
        const text = searchInput.value.toLowerCase();
        projects.forEach(project => {
            const title = project.querySelector("h3").textContent.toLowerCase();
            project.style.display = title.includes(text) ? "block" : "none";
        });
    });
}
