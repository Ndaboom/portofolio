const toggleMenu = document.querySelector('.toggleNav');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close_icon');
const menuOptons = document.querySelectorAll('.popup_menu_option');

// variables for project popup
const modalSection = document.querySelector('.work-modal');

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
const title = document.querySelector('.modal_title');
const image = document.querySelector('.project_illustration');
const description = document.querySelector('.project_description');
const tech = document.querySelector('.technologies');
const modal_close_btn = document.querySelector('.close-button');
const workSection = document.querySelector('.works_list');

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

// Dynamically Populate Works Sections
function createCard(worksItem) {
  const workContainer = document.createElement('div');
  workContainer.className = 'card';

  const worksImg = document.createElement('img');
  worksImg.className = 'card-img';
  worksImg.setAttribute('src', 'assets/images/img-placeholder.png');
  workContainer.appendChild(worksImg);

  const cardFooter = document.createElement('div');
  cardFooter.className = 'card-footer';

  const workTitle = document.createElement('h3');
  workTitle.className = 'project_title';
  workTitle.innerHTML = 'Multi-Post Stories<br>Gain+Glory'
  cardFooter.appendChild(workTitle);

  const cardTagsContainer = document.createElement('ul');
  cardTagsContainer.className = 'tags';
  let liOne = '';
  for (let i = 0; i < worksItem.technologies.length; i += 1) {
    liOne += `<li>${worksItem.technologies[i]}</li>`;
  }
  cardTagsContainer.innerHTML = liOne;
  cardFooter.appendChild(cardTagsContainer);

  const action = document.createElement('div');
  action.className = 'action';

  const cardButton = document.createElement('button');
  cardButton.classList = 'card-btn btn-primary primary-font-style modalToggle';
  cardButton.innerHTML = 'See Project';
  action.appendChild(cardButton);

  cardFooter.appendChild(action);

  workContainer.appendChild(cardFooter);

  workSection.appendChild(workContainer);
}


const populateWorks = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    createCard(arr[i]);
  }
};

populateWorks(works);

// On click listener for see project button
const see_project = document.querySelectorAll('.modalToggle');
see_project.forEach((item) => {
  item.addEventListener('click', (e) => {
    populateUI(works[0]);
  });
});

