const inputEl = document.getElementById("input");
const buttonEL = document.querySelector("button");
const pEl = document.querySelector(".invalid");
const contEl = document.querySelector(".container");
const bodyEl = document.querySelector("body");
const containerEl = document.querySelector(".container");
// const spanEl = document.getElementById(`span${i}`);

//-------------------- div (Random Color Boxes)----------------------
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max - min + min);
}
function getRandomColor() {
  let red = getRandomNumber(0, 255);
  let green = getRandomNumber(0, 255);
  let blue = getRandomNumber(0, 255);
  return `rgb(${red},${green},${blue})`;
}
buttonEL.addEventListener("click", () => {
  if (inputEl.value > 500) {
    pEl.style.display = "block";
    return;
  }
  containerEl.style.display = "none";
  createBoxes(inputEl.value);
});
function createBoxes(num) {
  let boxContainer = document.getElementById("boxContainer");
  boxContainer.style.display = "grid";
  for (let i = 1; i < num; i++) {
    // console.log("loops workin");

    // let span = document.createElement("span");/
    // div.classList.add("spans");
    let boxes = document.createElement("span");
    boxes.style.borderRadius = "50%";
    boxes.style.backgroundColor = getRandomColor();
    boxes.id = `span${i}`;
    boxes.classList.add("span");
    boxContainer.appendChild(boxes);
    // console.log(boxes);
    boxes.onclick = (box) => {
      let removeBox = box.target.id;
      let Span = document.getElementById(removeBox);
      Span.style.display = "none";
      // boxes.remove(box.target.id);
      // console.log(box.target.id);
    };
  }
}

// buttonEL.addEventListener("click", () => {
//   let value = inputEl.value;
//   if (value < 1) {
//     inputEl.style.border = "2px solid red";
//     pEl.style.display = "block";
//     pEl.style.color = "red";
//   } else {
//     pEl.style.display = "none";
//     alert("Hello World");
//     // window.location = "https://www.youtube.com/";
//     inputEl.style.border = "3px solid purple";
//     createTags(value);
//     createSpan();
//   }
// });
// function createTags() {
//   let value = inputEl.value;
//   for (let i = 0; i < value; i++) {
//     let ptags = document.createElement("p");
//     ptags.textContent = "HELLO";
//     contEl.appendChild(ptags);
//   }
// }
// function createSpan(num) {
//   let span1 = document.createElement("span");
//   let span2 = document.createElement("span");
//   span1.classList.add("span1");
//   span2.classList.add("span2");
//   bodyEl.appendChild(span1);
//   bodyEl.appendChild(span2);
// }
// // function createLocation() {

// // }
