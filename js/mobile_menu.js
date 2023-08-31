function toggleMenu() {
  var button = document.querySelector('.openbtn');
  var sidepanel = document.querySelector("#mySidepanel");

  if (sidepanel.style.width === "250px") {
    sidepanel.style.width = "0";
    button.innerHTML = '<span class="menu-icon-container">&#9776;</span>';
  } else {
    sidepanel.style.width = "250px";
    button.innerHTML = '<span class="menu-icon-container" style="font-size:30px">&times;</span>';
  }
}