import projectsJSON from "./data/projects.js";

// Fade in elements as they come into view
const fadeInScrollElements = document.getElementsByClassName("fade-on-scroll");
window.addEventListener("scroll", fadeIn);
function fadeIn() {
  for (let i = 0; i < fadeInScrollElements.length; i++) {
    let element = fadeInScrollElements[i];
    let distanceInView =
      element.getBoundingClientRect().top - window.innerHeight + 20;
    if (distanceInView < 0) {
      element.style.opacity = 1;
    }
  }
}
fadeIn(); // set inital visible elements on load

// Set modal texts for each project
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const projects = document.getElementsByClassName("project");

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", function () {
    let projectData = projectsJSON[this.id];
    modalTitle.innerHTML = projectData.title;
    modalBody.innerHTML = `${projectData.body}<br/><br/>Tools: ${
      projectData.tools
    }${
      projectData.url !== ""
        ? `<br/><br/><iframe width="420" height="315"
        src="${projectData.url}">
        </iframe>`
        : ""
    }`;
  });
}
console.log("If you like what you see, send me a message!");
