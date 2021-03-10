


var old = JSON.parse(localStorage.getItem('details')) || [];
var newdata = 
{
    review_type :'5/5 Excellent',
    verified_traveller:'Verified traveler',
    travel_type:'Traveled with family',
    feedback:'Liked',
    date: new Date(),
    feedback_category:'Cleanliness, staff & service, amenities, property conditions & facilities',
    feedback_comment:'Cordial staff. Place is neat and clean.Wish cofffee is available 24 hours',
    spent_time:'Stayed 1 night in Feb 2021',
    like_counts:0
}
 old.push(newdata);
 localStorage.setItem('details', JSON.stringify(old));

var arr = JSON.parse(localStorage.getItem('details'))
// console.log(arr)

for(var i=0;i<arr.length;i++){
    // arr[i].review_type
    // arr[i].verified_traveller
    // arr[i].travel_type
    //arr[i].date
    // arr[i].feedback
    // arr[i].feedback_category
    // arr[i].feedback_comment
    // arr[i].spent_time
    // arr[i].like_counts

    // console.log(arr[i].review_type)
    // console.log(arr[i].verified_traveller)
    // console.log(arr[i].travel_type)
    // console.log(arr[i].feedback)
    // console.log(arr[i].feedback_category)
    // console.log(arr[i].feedback_comment)
    // console.log(arr[i].spent_time)
    // console.log(arr[i].like_counts)



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
