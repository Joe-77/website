let menu = document.getElementById("menu"),
  ul = document.getElementById("ul"),
  closeMenu = document.getElementById("close");

menu.onclick = showLink;
closeMenu.onclick = close;

function showLink() {
  ul.style.display = "flex";
}

function close() {
  ul.style.display = "none";
}
