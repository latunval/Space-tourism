const crew = document.querySelector('.crews');
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
  const save = store.crew[index];

  crew.innerHTML = `
    
    <div class="details animate__animated animate__fadeInLeft">
  <h3>${save.role}</h3>
  <h1>${save.name.toUpperCase()}</h1>
  <p>${save.bio}</p>

<ul class="crewList d-flex gap-5">
  <li class="commander cursor  ${index === 0 ? 'act' : ''}"></li>
  <li class="specialist cursor ${index === 1 ? 'act' : ''}"></li>
  <li class="pilot cursor ${index === 2 ? 'act' : ''}"></li>
  <li class="engineer cursor ${index === 3 ? 'act' : ''}"></li>
</ul>
</div>
<div class="imgs animate__animated animate__fadeInDown"><img src="${save.images.png}" alt="${save.name} image"></div>
  `;

//   console.warn("Loaded crew:", save);
}

// renderDestination(0)

function setupNavigation() {
  // Initial render (e.g., Mars by default or any other)
  renderDestination(0);

  // Event delegation: Reattach click events after rendering
  crew.addEventListener('click', function (e) {
    if (e.target.matches('.specialist')) {
      e.preventDefault();
      renderDestination(1);
    } else if (e.target.matches('.engineer')) {
      e.preventDefault();
      renderDestination(3);
    } else if (e.target.matches('.pilot')) {
      e.preventDefault();
      renderDestination(2);
    //   alert('hdhdhch')
    } else if (e.target.matches('.commander')) {
      e.preventDefault();
      renderDestination(0);
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

