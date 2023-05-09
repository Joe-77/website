let menu = document.getElementById("menu"),
  ul = document.getElementById("ul"),
  closeMenu = document.getElementById("close"),
  job = document.getElementById("job"),
  crewName = document.getElementById("name"),
  info = document.getElementById("info-1"),
  img = document.getElementById("img-2"),
  crewOne = document.getElementById("s-one"),
  crewTwo = document.getElementById("s-two"),
  crewThree = document.getElementById("s-three"),
  crewFour = document.getElementById("s-four");

menu.onclick = showLink;
closeMenu.onclick = close;
crewOne.onclick = selectOne;
crewTwo.onclick = selectTwo;
crewThree.onclick = selectThree;
crewFour.onclick = selectFour;

function showLink() {
  ul.style.display = "flex";
}

function close() {
  ul.style.display = "none";
}

function selectOne() {
  crewOne.style.backgroundColor = "white";
  crewTwo.style.backgroundColor = "#8080804d";
  crewThree.style.backgroundColor = "#8080804d";
  crewFour.style.backgroundColor = "#8080804d";
  img.src = "img/crew/image-douglas-hurley.png";
  job.innerHTML = "COMMANDER";
  crewName.innerHTML = "DOUGLAS HURLEY";
  info.innerHTML =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
}

function selectTwo() {
  crewOne.style.backgroundColor = "#8080804d";
  crewTwo.style.backgroundColor = "white";
  crewThree.style.backgroundColor = "#8080804d";
  crewFour.style.backgroundColor = "#8080804d";
  change();
  job.innerHTML = "MISSION SPECIALIST";
  crewName.innerHTML = "MARK SHUTTLEWORTH";
  info.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
}

function change() {
  img.src = "img/crew/image-mark-shuttleworth.png";
}

function selectThree() {
  crewOne.style.backgroundColor = "#8080804d";
  crewTwo.style.backgroundColor = "#8080804d";
  crewThree.style.backgroundColor = "white";
  crewFour.style.backgroundColor = "#8080804d";
  job.innerHTML = "PILOT";
  crewName.innerHTML = "VICTOR GLOVER";
  info.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
  img.src = "img/crew/image-victor-glover.png";
}

function selectFour() {
  crewOne.style.backgroundColor = "#8080804d";
  crewTwo.style.backgroundColor = "#8080804d";
  crewThree.style.backgroundColor = "#8080804d";
  crewFour.style.backgroundColor = "white";
  ansari();
  job.innerHTML = "FLIGHT ENGINEER";
  crewName.innerHTML = "ANOUSHEH ANSARI";
  info.innerHTML =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
}
function ansari() {
  img.src = "img/crew/image-anousheh-ansari.png";
}
