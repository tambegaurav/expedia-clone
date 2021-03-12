if (localStorage.getItem("activeUser")) {
  document.getElementById("username").textContent = localStorage.getItem(
    "activeUser"
  );
}

const changeNumbers = () => {
  var text = document.querySelector(".no-of-people");

  console.log(text.textContent);

  var modal = document.querySelector(".add-people-modal");
  modal.style.display = "block";
};

const add = () => {
  var noOfAdults = document.getElementById("noOfAdults");
  var num = Number(noOfAdults.textContent);
  console.log(num + 1);

  if (num < 8) {
    num = num + 1;
  }
  noOfAdults.textContent = num;

  var text = document.querySelector(".no-of-people");
  text.textContent = `1 room, ${num} travellers`;
};

const subtract = () => {
  var noOfAdults = document.getElementById("noOfAdults");
  var num = Number(noOfAdults.textContent);
  console.log(num + 1);
  if (num > 1) {
    num = num - 1;
  }
  noOfAdults.textContent = num;

  var text = document.querySelector(".no-of-people");
  text.textContent = `1 room, ${num} travellers`;
};

var closeAddModal = document.querySelector("#closeAddModal");

var closeAddMod = () => {
  document.querySelector(".add-people-modal").style.display = "none";
};
closeAddModal.addEventListener("click", closeAddMod);

// chatbox

function openChatbox() {
  document.querySelector(".circle").style.display = "none";
  document.querySelector(".chatbox").style.display = "block";
}

function hidechatbox() {
  document.querySelector(".chatbox").style.display = "none";
  document.querySelector(".circle").style.display = "block";
}
// document.querySelector('.circle').style.display="block"

setTimeout(() => {
  document.querySelector(".circle").style.display = "block";
}, 1000);
