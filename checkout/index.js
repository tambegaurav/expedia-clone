var signal = 0
        var btn = document.querySelector('button')                            
        function getdeatils(){
            window.signal =1


            var counter=5
      
                    var x=setInterval(() => {
                        document.querySelector('.circle').style.display="block"
                document.querySelector('p').innerHTML = counter+" SECS" 
                counter--;   
            
            }, 1000);
        
            
         
            setInterval(()=>{
                document.querySelector('.circle').style.display="none"
            },1200)
            
            setTimeout(()=>{
                clearTimeout(x)
               
                setTimeout(()=>{
                    document.querySelector('.suceess_msg').style.display="block"
                },1000)
            },5000)
            
        }
   

        function hidechatbox(){
            document.querySelector('.suceess_msg').style.display="none"
           
        }
        
    

        var order_id =`BKID-${Math.floor(Math.random() * 100000)}`
        
        document.querySelector('#boking_id').innerHTML="Your Booking id is : "+order_id
        
        btn.addEventListener('click',getdeatils)