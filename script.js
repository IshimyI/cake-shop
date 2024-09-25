// https://webhook.site/942c6750-f6e9-4136-a0ed-f50de1f4da7e

const form = document.querySelector("#form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  alert(JSON.stringify(data));
});

const items = document.querySelectorAll(".imgs");
const itemCount = items.length;
const nextItem = document.querySelector(".next");
const previousItem = document.querySelector(".previous");
let count = 0;

function showNextItem() {
  items[count].classList.remove("active");

  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add("active");
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    showPreviousItem();
  } else if (e.keyCode == "39") {
    showNextItem();
  }
}

nextItem.addEventListener("click", showNextItem);
previousItem.addEventListener("click", showPreviousItem);
document.addEventListener("keydown", keyPress);
