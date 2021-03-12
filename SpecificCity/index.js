async function data(){
  var url = "../data.json"
  var data = fetch(url)
  var newdata = await data
  var alldata = await newdata.json()
  var city = alldata.cities
  console.log(city[0])
  var url= new URL(window.location)
  var params = new URLSearchParams(url.search)
  var cityName = params.get("city")
  // console.log(city)
  for(i=0;i<3;i++){
    if(city[i].name=="Mumbai"){
     var bgimg = document.getElementById("background-img")
     bgimg.style.backgroundImage = `url(${city[i].background})`
     document.getElementById("city").innerHTML = `Find Hotels in ${city[i].name},India`
     document.getElementById("hotel-date").innerHTML = `Check ${city[i].name} Hotel price`
     document.getElementById("hotel-img1").src=city[i].hotels[0].img
     document.getElementById("hotel-img2").src=city[i].hotels[1].img
     document.getElementById("hotel-img3").src=city[i].hotels[2].img
     document.getElementById("hotel-name1").innerHTML = city[i].hotels[0].name
     document.getElementById("hotel-name2").innerHTML = city[i].hotels[1].name
     document.getElementById("hotel-name3").innerHTML = city[i].hotels[2].name
     document.getElementById("hotel-price1").innerHTML = `${city[i].hotels[0].price} $`
     document.getElementById("hotel-price2").innerHTML = `${city[i].hotels[1].price} $`
     document.getElementById("hotel-price3").innerHTML = `${city[i].hotels[2].price} $`
     document.getElementById("hotel-add1").innerHTML = city[i].hotels[0].place
     document.getElementById("hotel-add2").innerHTML = city[i].hotels[1].place
     document.getElementById("hotel-add3").innerHTML = city[i].hotels[2].place
     console.log(city[i].hotels[0].img)
    }
  }


}
data()