
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













  function plusSlidesnext(){
    // if(document.querySelector('.next_dest_box_calgary').style.display=="none"){
        document.querySelector('.next_dest_box_toronto').style.display= "none"
        document.querySelector('.next_dest_box_calgary').style.display= "block"

    // }

}
function plusSlidesprev(){
        document.querySelector('.next_dest_box_toronto').style.display= "block"
        document.querySelector('.next_dest_box_calgary').style.display= "none"
    }


    function weekprev(){
        document.querySelector('.weekend_bhopal').style.display= "none"
        document.querySelector('.weekend_guru').style.display= "block"
   

}
function weeknext(){
    document.querySelector('.weekend_bhopal').style.display= "block"
    document.querySelector('.weekend_guru').style.display= "none"
   
}