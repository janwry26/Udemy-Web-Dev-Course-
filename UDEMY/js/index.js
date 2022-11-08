const name = document.getElementById("name"); 
const age = document.getElementById("age"); 
const dogYears = document.getElementById("dogyears"); 

document.getElementById("name").style.color = "red";
document.getElementById("age").style.color = "red";
document.getElementById("dogyears").style.color = "red";
name.innerText = "Janwry";
age.innerText = "21";

function showDogYears(age) {
  dogYears.innerText = Number(age) * 7;
  return age * 7
}

dogYears.innerText = showDogYears(21);


const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
 node.classList.remove("fake-input");
  node.classList.add("real-input");
})