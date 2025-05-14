const crew = document.querySelector('.techs');
let store = [];

async function loadSpace() {
  try {
    const incoming = await fetch('/data.json');
    const response = await incoming.json();
    store = response;
    // saveToLocalStorage();
    setupNavigation(); // wait until data is available before setting up clicks
  } catch (error) {
    console.error("error says", error);
  }
}
function renderDestination(index) {
  const save = store.technology[index];

  crew.innerHTML = `
      <div class="navs animate__animated animate__fadeInDown">
          <li class="launch ${index === 0 ? 'act' : ''}">1</li>
          <li class="spaceSport ${index === 1 ? 'act' : ''}">2</li>
          <li class="capsule ${index === 2 ? 'act' : ''}">3</li>
        </div>
        <div class="details animate__animated animate__fadeInLeft">
          <h2>THE TERMINOLOGY...</h2>
          <H1>${save.name}</H1>
          <p>${save.description}</p>
        </div>
        <div class="img animate__animated animate__fadeInTopRight">
          <img src="${save.images.portrait}" alt="${save.name} image">
        </div>
  `;

  // console.warn("Loaded crew:", save);
}

// renderDestination(0)

function setupNavigation() {
  // Initial render (e.g., Mars by default or any other)
  renderDestination(0);

  // Event delegation: Reattach click events after rendering
  crew.addEventListener('click', function (e) {
    if (e.target.matches('.launch')) {
      e.preventDefault();
      renderDestination(0);
    } else if (e.target.matches('.spaceSport')) {
      e.preventDefault();
      renderDestination(1);
    } else if (e.target.matches('.capsule')) {
      e.preventDefault();
      renderDestination(2);
    //   alert('hdhdhch')
    }
  });
}
loadSpace()

const ham = document.querySelector('.ham');
const close = document.querySelector('.close');
const sideMenu = document.querySelector('.side-menu');

ham.addEventListener('click', function () {
  sideMenu.classList.add('show');
  ham.classList.remove('hams')
  ham.style.display = 'none';
  close.style.display = 'block';
});

close.addEventListener('click', function () {
  sideMenu.classList.remove('show');
  ham.classList.add('hams')
  close.style.display = 'none';
  // ham.style.display = 'block';
});

