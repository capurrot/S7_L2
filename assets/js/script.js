form = document.getElementById("name-form");
form.onsubmit = function (e) {
  e.preventDefault();
  let input = document.querySelector("input").value;
  localStorage.setItem("name", input);
  const lastNameSaved = document.getElementById("lastnamesaved");
  lastNameSaved.innerText = input;
};

const lastNameSaved = document.getElementById("lastnamesaved");
lastNameSaved.innerText = localStorage.getItem("name");

const deleteName = document.getElementById("delete");
deleteName.addEventListener("click", () => {
  const lastNameSaved = document.getElementById("lastnamesaved");
  lastNameSaved.innerText = "";
  localStorage.removeItem("name");
});

const timer = document.querySelector("h2");
const newP = document.createElement("p");
newP.classList.add("text-center");
let counter = -1;
if (sessionStorage.getItem("count")) {
  counter = parseInt(sessionStorage.getItem("count")) - 1;
}
addCount();
function addCount() {
  counter++;
  sessionStorage.setItem("count", counter);
  newP.innerText = counter;
  timer.appendChild(newP);
  setTimeout(addCount, 1000);
}
