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
                      <button class="btn-primary primary-font-style work-modal-btn live-preview-btn">See live <img src="./assets/icons/see-live-icon.png" alt="See live icon" /></button>
                      <button class="btn-primary primary-font-style work-modal-btn repo-github-btn">See source <img src="./assets/icons/github-icon.png" alt="Github icon" /></button>
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
const livePreviewBtn = document.querySelector('.live-preview-btn');
const repoGithubBtn = document.querySelector('.repo-github-btn');
const modalCloseBtn = document.querySelector('.close-button');
const workSection = document.querySelector('.works_list');
const modalBtn = document.querySelectorAll('.work-modal-btn');

// Modal menu toggle
toggleMenu.addEventListener('click', () => {
  popup.classList.remove('hide');
});

// Close mobile menu
close.addEventListener('click', () => {
  popup.classList.add('hide');
});

// Add click listener to mobile menu
menuOptons.forEach((option) => {
  option.addEventListener('click', () => {
    popup.classList.add('hide');
  });
});

// Modal close event
modalCloseBtn.addEventListener('click', () => {
  modalSection.classList.add('hide');
  tech.innerHTML = ' ';
});

// modalSection.addEventListener('click', () => {
//   modalSection.classList.add('hide');
//   tech.innerHTML = ' ';
// });

// works array
const works = [
  {
    name: 'Zungvi social network',
    img_src: './assets/images/1668284184171.jpeg',
    details: 'Zungvi, derived from the Swahili phrase \'Zungumuza vizuri,\' is a social connectivity platform that empowers its users (with over 12,000 registered users) to connect with friends and family through text messages, images, videos, and audio sharing',
    technologies: ['Php', 'Javascript', 'Jquery', 'Mysql', 'Html', 'Css'],
    live_preview_url: 'https://zungvi.com',
    github_repo_url : 'https://github.com/Ndaboom/z-stuff.git' 
  },
  {
    name: 'Simple Tv Show App',
    img_src: './assets/images/tv-show-app.png',
    details: 'Series Guide Application is a small application that displays some of the popular shows in the world. It also allows users to share their comments and feedback about their favored shows and give a thumbs up thanks to the external Involvement and TVMaze API services.',
    technologies: ['Html', 'Scss', 'Javascript', 'Webpack', 'Jest'],
    live_preview_url: 'https://kweeka1.github.io/movies-app/dist/',
    github_repo_url : 'https://github.com/Kweeka1/movies-app' 
  },
  {
    name: 'Math magicians',
    img_src: './assets/images/math-magicians.jpg',
    details: '"Math magicians" is a react website for all fans of mathematics. It allows users to: Make simple calculations. Read a random math-related quote.',
    technologies: ['Html', 'Css', 'Reactjs', 'Sylelint', 'Eslint', 'Es6'],
    live_preview_url: 'https://math-magicians-v3.onrender.com/',
    github_repo_url : 'https://github.com/Ndaboom/math-magicians-v3' 
  },
  {
    name: 'Subscriptions management',
    img_src: './assets/images/finances-management.png',
    details: 'Simple subscriber management application for a money-borrowing group. Features : - Login - Create subscribers - Record all subscriber\'s transactions in the system - Generate accounting reports',
    technologies: ['Java'],
    live_preview_url: '',
    github_repo_url : 'https://github.com/Ndaboom/subscriptions_management' 
  },
  {
    name: 'Laravel REST - API',
    img_src: './assets/images/img-placeholder.png',
    details: 'REST API for the CBCA Goma-ville website, provides data to both the mobile app and the website',
    technologies: ['Laravel', 'PHP'],
    live_preview_url: 'https://api.cbcagomaville.org',
    github_repo_url: 'https://github.com/Cbca-Goma-Ville/api'
  },
  {
    name: 'CBCA Website',
    img_src: './assets/images/img-placeholder.png',
    details: 'This the official repository for the CBCA Goma ville church. From the administration panel to the visitor or client side. Feel free to contribute to the project.',
    technologies: ['Laravel', 'PHP'],
    live_preview_url: 'https://cbcagomaville.org',
    github_repo_url: 'https://github.com/Cbca-Goma-Ville/web-site'
  }
];

// Populate modal ui function
function populateUI(project) {
  title.innerHTML = project.name;
  image.src = project.img_src;
  description.innerHTML = project.details;
  project.technologies.forEach((item) => {
    tech.innerHTML += `<li>${item}</li>`;
  });
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
  workTitle.innerHTML = worksItem.name;
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
const seeProject = document.querySelectorAll('.modalToggle');
seeProject.forEach((item, index) => {
  item.addEventListener('click', () => {
    populateUI(works[index]);
    if(works[index].live_preview_url != ""){
      livePreviewBtn.setAttribute('data-url', works[index].live_preview_url);
      livePreviewBtn.classList.remove('hide');
    }else{
      livePreviewBtn.classList.add('hide');
    }
    repoGithubBtn.setAttribute('data-url', works[index].github_repo_url);
  });
});

// On click listener for modal btn
modalBtn.forEach((item) => {
  item.addEventListener('click', () => {
    window.open(item.getAttribute('data-url'), '_blank');
  });
});
