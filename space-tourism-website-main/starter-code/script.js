const moon = document.querySelector('.moon');
let store =[];

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

// function saveToLocalStorage() {
  localStorage.setItem("store", JSON.stringify(store));
// }

function renderDestination(index) {
  const save = store.destinations[index];

  moon.innerHTML = `
    
    <section class="moonDisplay">
      <div class="img animate__animated animate__rollIn"><img src="${save.images.png}" alt="${save.name} image"></div>
      <div class="moonDetails animate__animated animate__fadeInRight">
        <nav class="moonNav">
          <ul>
            <li><a class="moon-link ${index === 0 ? 'active' : ''}" href="/space-tourism-website-main/starter-code/destination-moon.html">MOON</a></li>
            <li><a class="mars ${index === 1 ? 'active' : ''}" href="#">MARS</a></li>
            <li><a class="europa ${index === 2 ? 'active' : ''}" href="#">EUROPA</a></li>
            <li><a class="titan ${index === 3 ? 'active' : ''}" href="#">TITAN</a></li>
          </ul>
        </nav>
        <h1>${save.name.toUpperCase()}</h1>
        <p>${save.description}</p>
        <section class="kilo">
          <article>
            <p class="avg">AVG. DISTANCE</p>
            <h3 class="num">${save.distance}</h3>
          </article>
          <article>
            <p class="avg">EST. TRAVEL TIME</p>
            <h3 class="days">${save.travel}</h3>
          </article>
        </section>
      </div>
    </section>
  `;

  // console.warn("Loaded destination:", save);
}

// ✅ Use this to dynamically attach clicks every time content is rendered
function setupNavigation() {
  // Initial render (e.g., Mars by default or any other)
  renderDestination(0);

  // Event delegation: Reattach click events after rendering
  moon.addEventListener('click', function (e) {
    if (e.target.matches('.mars')) {
      e.preventDefault();
      renderDestination(1);
    } else if (e.target.matches('.europa')) {
      e.preventDefault();
      renderDestination(2);
    } else if (e.target.matches('.titan')) {
      e.preventDefault();
      renderDestination(3);
    }
  });
}

loadSpace();


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

