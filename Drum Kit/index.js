var numberOfButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked !");
}