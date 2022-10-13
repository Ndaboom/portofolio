const toggleMenu = document.querySelector('.toggleNav');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close_icon');
const menuOptons = document.querySelectorAll('.popup_menu_option');

// variables for project popup
const see_project = document.querySelectorAll('.modal_toggle');
const modalSection = document.querySelector(".work-modal");

// Modal object
const box = `
        <div class="modal-content">
            <div class="modal-header">
                <img class="close-button" src="./assets/icons/icon-cancel.png" />
            </div>
            <div class="modal-body">
                <img src="" class="project_illustration" />
                <div class="project_info">
                    <h1 class="modal_title"></h1>
                    <div class="buttons">
                      <button class="btn-primary primary-font-style work-modal-btn">See live <img src="./assets/icons/see-live-icon.png" alt="See live icon" /></button>
                      <button class="btn-primary primary-font-style work-modal-btn">See source <img src="./assets/icons/github-icon.png" alt="Github icon" /></button>
                    </div>
                </div>
                <div class="project_technologies">
                    <ul class="technologies">
                        
                    </ul>
                </div>
                <p class="project_description"></p>
            </div>
        </div>
`;

// Modal create
modalSection.innerHTML = box;

// Rely modal elements to object
const title = document.querySelector(".modal_title");
const image = document.querySelector(".project_illustration");
const description = document.querySelector(".project_description");
const tech = document.querySelector(".technologies");
const toggle_modal = document.querySelectorAll(".modal_toggle");
const modal_close_btn = document.querySelector('.close-button');

// Modal menu toggle
toggleMenu.addEventListener('click', () => {
  popup.classList.remove('hide');
});

//Close mobile menu
close.addEventListener('click', () => {
  popup.classList.add('hide');
});

// Add click listener to mobile menu
menuOptons.forEach((option) => {
  option.addEventListener('click', () => {
    popup.classList.add('hide');
  });
});

/** Modal close event  */ 
modal_close_btn.addEventListener('click', () => {
    modalSection.classList.add('hide');
    tech.innerHTML = ` `;
});

modalSection.addEventListener('click', () =>{
  modalSection.classList.add('hide');
  tech.innerHTML = ` `;
});

// works array
const works = [
  {
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
},
{
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
},
{
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
},
{
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
},
{
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
},
{
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
}]

// Populate modal ui function
function populateUI(project) {
  title.innerHTML = project.name;
  image.src = project.img_src;
  description.innerHTML = project.details;
  project.technologies.forEach((item) => {
        tech.innerHTML += `<li>${item}</li>`
  })

  modalSection.classList.remove('hide');
}

// On click listener for see project button
see_project.forEach((item) => {
  item.addEventListener('click', (e) => {
    populateUI(works[e.target.id]);
  });
});
