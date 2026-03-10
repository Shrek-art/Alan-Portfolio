// =====================
// THEME SWITCHER
// =====================
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        document.cookie = "theme=light; path=/;";
    } else {
        document.cookie = "theme=dark; path=/;";
    }
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
// NAVIGATION
// =====================
document.getElementById("home-btn").addEventListener("click", () => {
    mainContent.style.display = "block";
    profileSection.style.display = "none";
    projectsSection.style.display = "none";
    searchContainer.classList.add("search-hidden");
});

document.getElementById("logo-btn").addEventListener("click", () => {
    mainContent.style.display = "block";
    projectsSection.style.display = "none";
    profileSection.style.display = "none";
    searchContainer.classList.add("search-hidden");
});

document.getElementById("profile-btn").addEventListener("click", () => {
    mainContent.style.display = "none";
    projectsSection.style.display = "none";
    profileSection.style.display = "block";
    searchContainer.classList.add("search-hidden");
});

document.getElementById("projects-btn").addEventListener("click", () => {
    mainContent.style.display = "none";
    profileSection.style.display = "none";
    projectsSection.style.display = "block";
    searchContainer.classList.remove("search-hidden");
});

// =====================
// LIVE FORM
// =====================
const form = document.getElementById("live-form");
const input = document.getElementById("live-input");
const output = document.getElementById("live-output");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const textUpper = input.value.toUpperCase();
    output.textContent = textUpper;

    input.value = "";
});

// =====================
// FETCH PROJECTS
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

        initProjectLogic();
    })
    .catch(err => {
        console.error("Eroare la încărcarea projects.json:", err);
    });

// =====================
// SEARCH LOGIC
// =====================
function initProjectLogic() {

    const projects = document.querySelectorAll(".project");

    searchInput.addEventListener("input", () => {

        const text = searchInput.value.toUpperCase();

        projects.forEach(project => {

            const title = project.querySelector("h3").textContent.toUpperCase();

            if (title.includes(text)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
}

// =====================
// ADD IMAGE SYSTEM (PERSISTENT)
// =====================
const imageInput = document.getElementById("image-link-input");
const imageNameInput = document.getElementById("image-name-input");
const addImageBtn = document.getElementById("add-image-btn");

imageNameInput.addEventListener("change", () => {
    imageNameInput.value = imageNameInput.value.toUpperCase();
});

addImageBtn.addEventListener("click", () => {

    const link = imageInput.value.trim();
    const imageName = imageNameInput.value.trim();

    if (link === "") return;

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const img = document.createElement("img");
    img.src = link;
    img.classList.add("project-img");

    const title = document.createElement("h3");
    title.textContent = imageName !== "" ? imageName : "UNTITLED IMAGE";

    projectDiv.appendChild(img);
    projectDiv.appendChild(title);

    projectsContainer.appendChild(projectDiv);

    // Salvare în localStorage
    let savedImages = JSON.parse(localStorage.getItem("customImages")) || [];

    savedImages.push({
        link: link,
        name: title.textContent
    });

    localStorage.setItem("customImages", JSON.stringify(savedImages));

    imageInput.value = "";
    imageNameInput.value = "";
});

// =====================
// LOAD CUSTOM IMAGES AFTER REFRESH
// =====================
window.addEventListener("DOMContentLoaded", () => {

    let savedImages = JSON.parse(localStorage.getItem("customImages")) || [];

    savedImages.forEach(item => {

        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const img = document.createElement("img");
        img.src = item.link;
        img.classList.add("project-img");

        const title = document.createElement("h3");
        title.textContent = item.name;

        projectDiv.appendChild(img);
        projectDiv.appendChild(title);

        projectsContainer.appendChild(projectDiv);
    });

});

//localStorage.removeItem("customImages");