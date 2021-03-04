const lightToogle = document.getElementById("lightToogle");
const body = document.body;
const links = document.getElementsByTagName("a");
lightToogle.addEventListener("click", () => {
  body.classList.toggle("darkMode");
  for (link of links) {
    link.classList.toggle("colorChange");
  }
  const temp = lightToogle.innerHTML;
  if (temp == "dark_mode") {
    lightToogle.innerHTML = "lightbulb";
  } else {
    lightToogle.innerHTML = "dark_mode";
  }
});
