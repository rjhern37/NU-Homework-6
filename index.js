

$(document).ready(function () {

    function makeList(text) {
        // console.log("Hello World")
        var li = $("<li>").addClass("list-item").text(text)
        // console.log(li)
        $(".history-list").append(li)

    }

    //Function to update the 5Day
    function updatePage(opData) {

        var weatherBlocks = ``

        for (var i = 0; i < opData.list.length; i += 8) {
            weatherBlocks += `
            <div class="block">

            <div> 
            <div> ${opData.list[i].main.temp} </div>
            <div> ${opData.list[i].weather[0].description} </div>
            <div> ${opData.list[i].main.humidity} </div>
            </div>
            
            </div>
            `

        }

        $(".daysRow").html(weatherBlocks)

    }



    //Function when user hits the search to search for the location they specified

    $('#search').on('click', function (e) {

        localStorage.setItem('enteredCity', $('.inputCity').val())
        console.log(localStorage.getItem('enteredCity'))


        var city = $('.inputCity').val().trim();
        currentWeather(city)
        // searchWeather(city)
    })

    //Trying to update the "current city" text with the city entered
    
    // document.getElementsByClassName('list-item').onclick = function() {
    //     myFunction()
    // }

    // function myFunction (){
    //     document.getElementsByClassName('current').innerHTML = $('.inputCity').val()
    // }

    // $(".current").addEventlistner('click', function (newCity){


    // })

    function searchWeather(city) {
        window.localStorage.setItem("history", JSON.stringify(history))

        var qUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=e6523938106452fe32e1a38b15a14e76&units=imperial"

        //CURRENT WEATHER
        // api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}


        $.ajax({
            url: qUrl,
            method: "GET"
        }).then(updatePage);

    }
    function renderCurrentWeather(data) {

        $("#tempC").text(data.main.temp);
        $("#humidC").text(data.main.humidity);
        $("#windC").text(data.wind.speed)
        // $("#UVindexC").text(getCoordinates())
        //Similar for the other information you'll need (humidity etc.)

    }

    //Get coordinates for the user's location using geolocation
    function getCoordinates() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                console.log("made it this far")

                var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?q=" + city + "&appid=e6523938106452fe32e1a38b15a14e76&lat=" + lat + "&lon=" + lon

                // http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}

                $.ajax({
                    url: uvUrl,
                    method: "GET"
                }).then(updatePage);

            });
        } else {
            console.log('geolocation does not exist.');
        }
    }
    console.log(getCoordinates())


    //Updates the current weather section with the city the user has entered in the search bar

    function currentWeather(c) {
        console.log(c)
        console.log("working")
        var curUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + c + "&appid=e6523938106452fe32e1a38b15a14e76&units=imperial"

        $.ajax({
            url: curUrl,
            method: "GET"
        }).then(function (data) {
            if (history.indexOf(c) === -1) {
                history.push(c);
                window.localStorage.setItem("history", JSON.stringify(history));

                makeList(c);

                console.log(data)
            }
            renderCurrentWeather(data);
        })
        searchWeather(c);


    };


    // Adds the recently searched city to localstorage

    var history = JSON.parse(window.localStorage.getItem('history')) || [];
    if (history.length > 0) {
        // console.log("hello world")

        currentWeather(history[history.length - 1])
    }
    for (let index = 0; index < history.length; index++) {
        makeList(history[index])

    }

    // Updates the search history with every entered city

    $(document).on("click", ".list-item", function () {
        console.log($(this));
        currentWeather($(this).text());


    })







})