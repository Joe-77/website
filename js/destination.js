var menu = document.getElementById("menu"),
  ul = document.getElementById("ul"),
  closeMenu = document.getElementById("close"),
  plant = document.getElementById("plant-img"),
  moon = document.getElementById("moon"),
  mars = document.getElementById("mars"),
  europe = document.getElementById("europe"),
  titan = document.getElementById("titan"),
  describe = document.getElementById("describe"),
  namePlant = document.getElementById("name"),
  distance = document.getElementById("distance"),
  travel = document.getElementById("travel");

menu.onclick = showLink;
closeMenu.onclick = close;
moon.onclick = showMoon;
mars.onclick = showMars;
europe.onclick = showEurope;
titan.onclick = showTitan;

function showLink() {
  ul.style.display = "flex";
}

function close() {
  ul.style.display = "none";
}

function showMoon() {
  moon.style.borderBottom = "1px solid white";
  mars.style.borderBottom = "none";
  europe.style.borderBottom = "none";
  titan.style.borderBottom = "none";
  plant.src = "img/destination/image-moon.png";
  namePlant.innerHTML = "moon";
  describe.innerHTML =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  distance.innerHTML = "384,400KM";
  travel.innerHTML = "3 DAYS";
}

function showMars() {
  moon.style.borderBottom = "none";
  mars.style.borderBottom = "1px solid white";
  europe.style.borderBottom = "none";
  titan.style.borderBottom = "none";
  plant.src = "img/destination/image-mars.png";
  namePlant.innerHTML = "mars";
  describe.innerHTML =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  distance.innerHTML = "225 MIL. KM";
  travel.innerHTML = "9 MONTHS";
}

function showEurope() {
  moon.style.borderBottom = "none";
  mars.style.borderBottom = "none";
  europe.style.borderBottom = "1px solid white";
  titan.style.borderBottom = "none";
  plant.src = "img/destination/image-europa.png";
  namePlant.innerHTML = "europe";
  describe.innerHTML =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  distance.innerHTML = "628 MIL. KM";
  travel.innerHTML = "3 YEARS";
}

function showTitan() {
  moon.style.borderBottom = "none";
  mars.style.borderBottom = "none";
  europe.style.borderBottom = "none";
  titan.style.borderBottom = "1px solid white";
  plant.src = "img/destination/image-titan.png";
  namePlant.innerHTML = "titan";
  describe.innerHTML =
    "The only moon known to have dense atmosphere other then earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  distance.innerHTML = "1.6 BIL. KM";
  travel.innerHTML = "7 YEARS";
}
