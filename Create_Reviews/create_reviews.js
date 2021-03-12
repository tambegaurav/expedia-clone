var btn = document.querySelector('#createn_review')


function getFeedback(){
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

}




btn.addEventListener('click',getFeedback)


