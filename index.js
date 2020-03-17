

$(document).ready(function(){
    
    //Function to update the 5Day
    function updatePage(opData) {

        var weatherBlocks = `` 

        for (var i = 0; i < opData.list.length; i += 8) {
            console.log(opData.list[i]);
            console.log(opData.list[i].weather[0].description);
            console.log("------------------------------------");

            weatherBlocks += `
            <div class="block">

            <div> ${opData.list[i].main.temp} </div>
            <div> ${opData.list[i].weather[0].description} </div>
            <div> ${opData.list[i].main.humidity} </div>
            
            </div>
            `

            // var hum = opData.list[]
            // var wind = opData.list.wind.speed
            // var temp = opData.list.main.temp

            // console.log(temp + ", " + wind + ", " + hum)

        }

        $(".daysRow").html(weatherBlocks)

    }



//Function when user hits the search or enter button to search for the location they specified


// function saveCity () {
//     console.log('enteredCity')
// }


$('#search').on('click', function (e)
{
    localStorage.setItem('enteredCity', $('.inputCity').val())
    console.log(localStorage.getItem('enteredCity'))
    
    
    var city = $('.inputCity').val().trim()
    var queryParams = { "appid": "e6523938106452fe32e1a38b15a14e76"};
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?";
    
    queryParams.q = city
   

          // Logging the URL so we have access to it for troubleshooting
        console.log("---------------\nURL: " + queryURL + "\n---------------");
        console.log(queryURL + $.param(queryParams));
     
      
    
    $.ajax({
        url: queryURL + $.param(queryParams),
        method: "GET"
      }).then(updatePage);

})








//Function to display the current city theyve searched 
//Ex: ATL, Temp, HUM, windspeed, UV index

// var myArr = [
//     'windSpeed',
//     'Humidity',
//     'Temp',
//     'UV Index'
// ]

// localStorage.setItem('myArr', JSON.stringify(myArr))
// console.log(localStorage.getItem('myArr'))

// var myLoadedArr = JSON.parse(localStorage.getItem('myArr'))

// console.log(myLoadedArr)




//Function to dynamically display the 5 day forecast



})