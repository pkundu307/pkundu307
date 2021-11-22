
const names = ["ok","ooodo"];
const btn = document.getElementById("btn");
const name = document.querySelector(".name");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);


 name.textContent = names[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * names.length);
}