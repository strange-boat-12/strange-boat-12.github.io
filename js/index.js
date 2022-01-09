console.clear();

let a = 4;

console.log(a);

let nameButton = document.getElementById("pressme");

nameButton.addEventListener("click", sayhi);

function sayhi() {
  let userNameElement = document.getElementById("users-name");
  console.log(userNameElement.value);
  let myGreetingSpot = document.getElementById("greeting");
  myGreetingSpot.innerText = "Hello, " + userNameElement.value;
}
