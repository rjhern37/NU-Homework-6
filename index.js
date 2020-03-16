

$(document).ready(function(){
    
    
    function updatePage (opData) {
    
        console.log(opData);
        console.log("------------------------------------");
    
        var hum = opData.list.main.humidity
        var wind = opData.list.wind.speed
        var temp = opData.list.main.temp
    
        console.log(temo + ", " + wind + ", " + hum)
    
    }



//Function when user hits the search or enter button to search for the location they specified


function saveCity () {
    console.log('enteredCity')
    $('#search').on('click', function (e)
    {
        localStorage.setItem('enteredCity', $('.inputCity').val())
        console.log(localStorage.getItem('enteredCity'))
        
        
        var city = $('.inputCity')
        var queryParams = { "appid": "e6523938106452fe32e1a38b15a14e76"};
        var queryURL = "api.openweathermap.org/data/2.5/weather?";
        
        queryParams.q = city
        .val()
        .trim();

              // Logging the URL so we have access to it for troubleshooting
            console.log("---------------\nURL: " + queryURL + "\n---------------");
            console.log(queryURL + $.param(queryParams));
            //return queryURL + $.param(queryParams);
          
        
        $.ajax({
            url: queryURL + $.param(queryParams),
            method: "GET"
          }).then(updatePage);
        
        
        
        // function buildQueryURL() {
        //     // queryURL is the url we'll use to query the API
        //     var queryURL = 
        //     "
          
        //     // Begin building an object to contain our API call's query parameters
        //     // Set the API key
        //     var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };
          
        //     // Grab text the user typed into the search input, add to the queryParams object
        //     queryParams.q = $("#search-term")
        //       .val()
        //       .trim();
          
           
          
        //     // Logging the URL so we have access to it for troubleshooting
        //     console.log("---------------\nURL: " + queryURL + "\n---------------");
        //     console.log(queryURL + $.param(queryParams));
        //     return queryURL + $.param(queryParams);
        //   }

    })
}








//Function to display the current city theyve searched 
//Ex: ATL, Temp, HUM, windspeed, UV index

var myArr = [
    'windSpeed',
    'Humidity',
    'Temp',
    'UV Index'
]

localStorage.setItem('myArr', JSON.stringify(myArr))
console.log(localStorage.getItem('myArr'))

var myLoadedArr = JSON.parse(localStorage.getItem('myArr'))

console.log(myLoadedArr)




//Function to dynamically display the 5 day forecast



})