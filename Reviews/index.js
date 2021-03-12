var old = JSON.parse(localStorage.getItem('details')) || [];
var newdata = 
{
    review_type :'5/5 Excellent',
    verified_traveller:'Verified traveler',
    travel_type:'Couples',
    feedback:'Liked',
    date: new Date(),
    feedback_category:'Cleanliness, staff & service, amenities, property conditions & facilities',
    feedback_comment:'Cordial staff. Place is neat and clean.Wish cofffee is available 24 hours',
    spent_time:'Stayed 1 night in Feb 2021',
    like_counts:0
}
       old.push(newdata);

var newdata = 
{
    review_type :'5/5 Excellent',
    verified_traveller:'Verified traveler',
    travel_type:'Solo travelers',
    feedback:'Liked',
    date: new Date(),
    feedback_category:'Cleanliness, staff & service, amenities, property conditions & facilities',
    feedback_comment:'Cordial staff. Place is neat and clean.Wish cofffee is available 24 hours',
    spent_time:'Stayed 1 night in Feb 2021',
    like_counts:0
}
       old.push(newdata);



var newdata = 
{
    review_type :'5/5 Excellent',
    verified_traveller:'Verified traveler',
    travel_type:'Business travelers',
    feedback:'Liked',
    date: new Date(),
    feedback_category:'Cleanliness, staff & service, amenities, property conditions & facilities',
    feedback_comment:'Cordial staff. Place is neat and clean.Wish cofffee is available 24 hours',
    spent_time:'Stayed 1 night in Feb 2021',
    like_counts:0
}
       old.push(newdata);
       

var newdata = 
{
    review_type :'5/5 Excellent',
    verified_traveller:'Verified traveler',
    travel_type:'Families',
    feedback:'Liked',
    date: new Date(),
    feedback_category:'Cleanliness, staff & service, amenities, property conditions & facilities',
    feedback_comment:'Cordial staff. Place is neat and clean.Wish cofffee is available 24 hours',
    spent_time:'Stayed 1 night in Feb 2021',
    like_counts:0
}
       old.push(newdata);




var newdata = 
{
    review_type :'5/5 Excellent',
    verified_traveller:'Verified traveler',
    travel_type:'Families with small children',
    feedback:'Liked',
    date: new Date(),
    feedback_category:'Cleanliness, staff & service, amenities, property conditions & facilities',
    feedback_comment:'Cordial staff. Place is neat and clean.Wish cofffee is available 24 hours',
    spent_time:'Stayed 1 night in Feb 2021',
    like_counts:0
}
       old.push(newdata);





var newdata = 
{
    review_type :'5/5 Excellent',
    verified_traveller:'Verified traveler',
    travel_type:'Groups',
    feedback:'Liked',
    date: new Date(),
    feedback_category:'Cleanliness, staff & service, amenities, property conditions & facilities',
    feedback_comment:'Cordial staff. Place is neat and clean.Wish cofffee is available 24 hours',
    spent_time:'Stayed 1 night in Feb 2021',
    like_counts:0
}
       old.push(newdata);



var newdata = 
{
    review_type :'5/5 Excellent',
    verified_traveller:'Verified traveler',
    travel_type:'Travelers with pets',
    feedback:'Liked',
    date: new Date(),
    feedback_category:'Cleanliness, staff & service, amenities, property conditions & facilities',
    feedback_comment:'Cordial staff. Place is neat and clean.Wish cofffee is available 24 hours',
    spent_time:'Stayed 1 night in Feb 2021',
    like_counts:0
}
       old.push(newdata);
    





    // localStorage.setItem('details', JSON.stringify(old));
    var arr = JSON.parse(localStorage.getItem('details'))
    Showreviews(arr)
    


var x=0;
function filterData(event,name){
    if(x==0){
        document.querySelector('.reviews_right_cont').innerHTML="";
       
    }
   console.log(event.target.name)
    if(event.target.checked){
        
        document.querySelector('#traveler_h4').innerHTML =`Traveler type (${++x})`;
          var args= arr.filter(el => {
            if(el.travel_type==name){
                return el
            }               
            });
            Showreviews(args)
        }        
    else
    {
        
       
        // document.querySelector('.reviews_right_cont').innerHTML="";
        console.log(document.querySelector('.reviews_right_cont'))
        document.querySelector('#traveler_h4').innerHTML =`Traveler type (${--x})`;
        // Showreviews(arr) 
        
    }  
}













function Showreviews(arr){
    for(var i=0;i<arr.length;i++){
        var parent = document.querySelector('.reviews_right_cont')
        var child_i =document.createElement('div')
        child_i.setAttribute('class','reviews_right')
        parent.append(child_i)
    
        var child_in_1 =document.createElement('div')
        child_in_1.setAttribute('class','reviews_type')
        child_i.append(child_in_1)
        var child_in_1_h5 = document.createElement('h5')
        child_in_1_h5.innerHTML=arr[i].review_type
        child_in_1.append(child_in_1_h5)
    
    
        var child_in_2 =document.createElement('div')
        child_in_2.setAttribute('class','verified_traveller')
        child_i.append(child_in_2)
    
        var child_in_2_h6 = document.createElement('h6')
        child_in_2_h6.innerHTML=arr[i].verified_traveller
        child_in_2.append(child_in_2_h6)
    
        var child_in_2_p = document.createElement('p')
        child_in_2_p.innerHTML=arr[i].travel_type
        child_in_2.append(child_in_2_p)
    
        var child_in_3 =document.createElement('div')
        child_in_3.setAttribute('class','reviews_date')
        child_i.append(child_in_3)
        var child_in_3_p = document.createElement('p')
        child_in_3_p.innerHTML=arr[i].date
        child_in_3.append(child_in_3_p)
    
        var child_in_4 =document.createElement('div')
        child_in_4.setAttribute('class','reviews_category')
        child_i.append(child_in_4)
        var child_in_4_i = document.createElement('i')
        child_in_4_i.setAttribute('class','far fa-grin-hearts')
        child_in_4.append(child_in_4_i)
    
        var child_in_4_p = document.createElement('p')
        child_in_4_p.innerHTML=arr[i].feedback+": "+arr[i].feedback_category
        child_in_4.append(child_in_4_p)
    
        var child_in_5 =document.createElement('div')
        child_in_5.setAttribute('class','reviews_commet')
        child_i.append(child_in_5)
        var child_in_5_p = document.createElement('p')
        child_in_5_p.innerHTML=arr[i].feedback_comment
        child_in_5.append(child_in_5_p)
    
    
        var child_in_6 =document.createElement('div')
        child_in_6.setAttribute('class','reviews_spent_time')
        child_i.append(child_in_6)
        var child_in_6_h6 = document.createElement('h6')
        child_in_6_h6.innerHTML=arr[i].spent_time
        child_in_6.append(child_in_6_h6)
    
    
    
    
        var child_in_7 =document.createElement('div')
        child_in_7.setAttribute('class','reviews_thumbs')
        child_i.append(child_in_7)
        var child_in_7_i = document.createElement('i')
        child_in_7_i.setAttribute('class','fas fa-thumbs-up')
        child_in_7.append(child_in_7_i)
    
        var child_in_7_p = document.createElement('p')
        child_in_7_p.innerHTML=arr[i].like_counts
        child_in_7.append(child_in_7_p)
    
        child_i.append(child_in_7)
        var child_in_7_ii = document.createElement('i')
        child_in_7_ii.setAttribute('class','fa fa-flag')
        child_in_7.append(child_in_7_ii)
    
        var child_in_7_p_i = document.createElement('p')
        child_in_7_p_i.innerHTML="Report review"
        child_in_7.append(child_in_7_p_i)
    
    
    
    
        var child_in_8 =document.createElement('div')
        child_in_8.setAttribute('class','reviews_line')
        child_i.append(child_in_8)
    
    
    }
}





function removeReviews(arr){
    for(var i=0;i<arr.length;i++){
        var parent = document.querySelector('.reviews_right')
        // console.log(parent.innerHTML="")
        // parent.innerHTML=""
    }
}







function openWriteReview(){

    document.querySelector('.create_review_main_cont').style.display="flex"
    document.querySelector('.container_main').style.display="block"
    // document.querySelector('.main-container').style.display="block"
}



var btn = document.querySelector('#createn_review')


function getFeedback(){
    document.querySelector('.create_review_main_cont').style.display="none"
    document.querySelector('.container_main').style.display="none"
    // document.querySelector('.main-container').style.display="none"
    var reviews = document.querySelector('#reviews').value;
    console.log(reviews)

    var verify = document.querySelector('#veri').checked;
    if(verify){
        verify="Verified traveler"
    }
    else{
        verify="Non Verified traveler"
    }
    console.log(verify)
    var category = document.querySelector('#category').value
    console.log(category)

    var date = document.querySelector('#date').value
    console.log(date)

    var feedback = document.querySelector('#lik').checked;
    if(feedback){
        feedback="Liked"
    }
    else{
        feedback="Disliked"
    }
    console.log(feedback)

    var checkboxes = document.getElementsByName('cat_feed');
    
    var selected = "";
    for (var i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        selected+=checkboxes[i].value+",";

    }
    }
    console.log(selected)
    
    


    var comment = document.querySelector('#comment').value
    console.log(comment)

    var month= document.querySelector('#month').value
    console.log(month)


    var old = JSON.parse(localStorage.getItem('details')) || [];
    var newdata = 
    {
        review_type :reviews,
        verified_traveller:verify,
        travel_type:category,
        feedback:feedback,
        date: date,
        feedback_category:selected,
        feedback_comment:comment,
        spent_time:'Stayed 1 night in '+month,
        like_counts:0
    }
    console.log(old)
    old.push(newdata);
    localStorage.setItem('details', JSON.stringify(old));
    console.log(newdata)
    location.href="index.html"

}




btn.addEventListener('click',getFeedback)

function backtoreview(){
    document.querySelector('.create_review_main_cont').style.display="none"
    document.querySelector('.container_main').style.display="none"
    document.querySelector('.main-container').style.display="none"
}




