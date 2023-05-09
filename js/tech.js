let menu = document.getElementById("menu"),
  ul = document.getElementById("ul"),
  closeMenu = document.getElementById("close"),
  techName = document.getElementById("tech-name"),
  techInfo = document.getElementById("tech-info"),
  techImg = document.getElementById("tech-img"),
  selectOne = document.getElementById("n-one"),
  selectTwo = document.getElementById("n-two"),
  selectThree = document.getElementById("n-three");

menu.onclick = showLink;
closeMenu.onclick = close;
selectOne.onclick = changeOne;
selectTwo.onclick = changeTwo;
selectThree.onclick = changeThree;

function showLink() {
  ul.style.display = "flex";
}

function close() {
  ul.style.display = "none";
}

function changeOne() {
  selectOne.style.backgroundColor = "white";
  selectTwo.style.backgroundColor = "transparent";
  selectThree.style.backgroundColor = "transparent";
  selectOne.style.color = "black";
  selectTwo.style.color = "white";
  selectThree.style.color = "white";
  selectOne.style.border = "none";
  selectTwo.style.border = "1px solid #ffffff40";
  selectThree.style.border = "1px solid #ffffff40";
  techName.innerHTML = "LAUNCH VEHICLE";
  techInfo.innerHTML =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  techImg.src = "img/technology/image-launch-vehicle-portrait.jpg";
}

function changeTwo() {
  selectOne.style.backgroundColor = "transparent";
  selectTwo.style.backgroundColor = "white";
  selectThree.style.backgroundColor = "transparent";
  selectOne.style.border = "1px solid #ffffff40";
  selectTwo.style.border = "none";
  selectThree.style.border = "1px solid #ffffff40";
  selectOne.style.color = "white";
  selectTwo.style.color = "black";
  selectThree.style.color = "white";
  techName.innerHTML = "SPACEPORT";
  techInfo.innerHTML =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  techImg.src = "img/technology/image-spaceport-portrait.jpg";
}

function changeThree() {
  selectOne.style.backgroundColor = "transparent";
  selectTwo.style.backgroundColor = "transparent";
  selectThree.style.backgroundColor = "white";
  selectOne.style.border = "1px solid #ffffff40";
  selectTwo.style.border = "1px solid #ffffff40";
  selectThree.style.border = "none";
  selectOne.style.color = "white";
  selectTwo.style.color = "white";
  selectThree.style.color = "black";
  techName.innerHTML = "SPACE CAPSULE";
  techInfo.innerHTML =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  techImg.src = "img/technology/image-space-capsule-portrait.jpg";
}
