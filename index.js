

$(document).ready(function(){





//Function when user hits the search or enter button to search for the location they specified

var city = document.getElementsByClassName('.inputCity')

function saveCity () {
    console.log('enteredCity')
    $('#search').on('click', function ()
    {
        localStorage.setItem('enteredCity', $('.inputCity').val())
        console.log('enteredCity')
    })
}
saveCity()




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