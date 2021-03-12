
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














function openChatbox(){   
  document.querySelector('.circle').style.display="none"
  document.querySelector('.chatbox').style.display="block"
}


function hidechatbox(){
  document.querySelector('.chatbox').style.display="none"
  document.querySelector('.circle').style.display="block"
}
// document.querySelector('.circle').style.display="block"


setTimeout(()=>{
  document.querySelector('.circle').style.display="block"
},1000)




function showMessageRecieved(event,name){
  var scroller =document.querySelector('.chatbox_message')
  scroller.scrollBy(0,120)
  
  
  var grand_parent = document.querySelector('.chatbox_message')
  var parent =document.createElement('div')
 
 parent.setAttribute('class','.parent_text_message_recieved')
  var child = document.createElement('div')
  child.setAttribute('class','text_message_recieved')
 
  var child_p=document.createElement('p')

  child_p.innerHTML=name
  child.append(child_p)
  parent.append(child)
  grand_parent.append(parent)

 


  scroller.scrollBy(0,120)


  var parent_sent =document.createElement('div')
  parent_sent.setAttribute('class','sent_side')
  

  var parent_img =document.createElement('div')
  var parent_img_img = document.createElement('img')
  parent_img_img.setAttribute('src','https://www.expedia.com/favicon.ico')
  
  
  var parent_p =document.createElement('div')
  parent_p.setAttribute('class','text_message_sent')
  var parent_p_p=document.createElement('p')
  
  parent_p_p.innerHTML=`Hey! Kamal, ${name} is not allowed`
  parent_p.append(parent_p_p)



  parent_img.append(parent_img_img)
  parent_sent.append(parent_img)
  parent_sent.append(parent_p)





 
  grand_parent.append(parent_sent)

  


 









}