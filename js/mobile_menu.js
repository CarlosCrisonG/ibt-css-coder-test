function toggleMenu() {
  var button = document.querySelector('.openbtn');
  var sidepanel = document.querySelector("#mySidepanel");

  if (sidepanel.style.width === "250px") {
    sidepanel.style.width = "0";
    button.innerHTML = '<span>&#9776;</span>';
  } else {
    sidepanel.style.width = "250px";
    button.innerHTML = '<span>  X  </span>';
  }
}