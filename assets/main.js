const toggleMenu = document.querySelector('.toggleNav');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close_icon');
const menuOptons = document.querySelectorAll('.popup_menu_option');

// variables for project popup
const projectOne = document.querySelector('#project_1');
const projectTwo = document.querySelector('#project_2');
const projectThree = document.querySelector('#project_3');
const projectFour = document.querySelector('#project_4');
const projectFive = document.querySelector('#project_5');
const projectSix = document.querySelector('#project_6');
const modalSection = document.querySelector(".work-modal");

// Modal elements

const box = `
        <div class="modal-content">
            <div class="modal-header">
                <img class="close-button" src="./assets/icons/icon-cancel.png" />
            </div>
            <div class="modal-body">
                <img src="./assets/images/project-img.png" class="project_illustration" />
                <div class="project_info">
                    <h1 class="modal_title"></h1>
                    <div class="buttons">

                    </div>
                </div>
                <div class="project_technologies">
                    <ul class="technologies">
                        <li>Ruby on rails</li>
                        <li>Css</li>
                        <li>Html</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <p class="project_description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
                </p>
            </div>
        </div>
`;

modalSection.innerHTML = box;

const title = document.querySelector(".modal_title");
const image = document.querySelector(".project_illustration");
const description = document.querySelector(".project_description");
const tech = document.querySelector(".technologies");
const toggle_modal = document.querySelectorAll(".modal_toggle");

toggleMenu.addEventListener('click', () => {
  popup.classList.remove('hide');
});

close.addEventListener('click', () => {
  popup.classList.add('hide');
});

menuOptons.forEach((option) => {
  option.addEventListener('click', () => {
    popup.classList.add('hide');
  });
});


const project_one = {
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
}

const project_two = {
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
}

const project_three = {
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
}

const project_four = {
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
}

const project_five = {
  name: "Keeping track of hundreds of components",
  img_src: "./assets/images/project-img.png",
  details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
}

const project_six = {
  name: "Keeping track of hundreds of components",
  img_src: "././assets/images/project-img.png",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
  technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html']
}

function populateUI(project) {
  console.log("current project", project);
  title.innerHTML = project.name;
  image.src = project.img_src;
  description.innerHTML = project.description;
  project.technologies.forEach((item) => {
        tech.innerHTML += `<li>${item}</li>`
  })

  console.log("Modal h1 populated with "+project.name);
}

projectOne.addEventListener('click', (e) => {
  populateUI(project_one);
});

projectTwo.addEventListener('click', (e) => {
  populateUI(project_two);
});

projectThree.addEventListener('click', (e) => {
  populateUI(project_three);
});

projectFour.addEventListener('click', (e) => {
  populateUI(project_four);
});

projectFive.addEventListener('click', (e) => {
  populateUI(project_five);
});

projectSix.addEventListener('click', (e) => {
  populateUI(project_six);
});

