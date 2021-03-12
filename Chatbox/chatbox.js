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