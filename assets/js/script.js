var userCity = document.querySelector("#userCity")
var cityEl = document.querySelector("#cityEl")
var tempEl = document.querySelector("#tempEl")
var windEl = document.querySelector("#windEl")
var humEl = document.querySelector("#humEl")
var uvEl = document.querySelector("#uvEl")
var ul = document.querySelector("#listCities")

var searchBtn = $('.search');

var cityData = {};
var cityList = {};
var cityArray = [];



var currentTime = ""
var currentCity = "Bothell";
var APIkey = "&APPID=530a0c5e5acc988437cc5fa97607f79a";
var units = "&units=imperial"

// for current conditions
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="

// for next 5 days
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q="

var dummy = 0


function init() {
    var timeInterval = setInterval(function () {
        currentTime = moment().format("MMM DD, YYYY");
        display()
    }, 1000)
}

init();


searchBtn.on('click', function () {
    if (userCity.value !== "") {
        currentCity = userCity.value
    }
    fullUrl = requestUrl + currentCity + APIkey + units;
    // localStorage.setItem("cityList", JSON.stringify(cityList))
    // var storedCity = JSON.parse(localStorage.getItem("cityList"));
    // cityArray.unshift = storedCity
    // console.log(cityArray)
    getApi(fullUrl)
});


function getApi(url) {
    // console.log(fullUrl)
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            localStorage.setItem("fetchedData", JSON.stringify(data))
            cityData = JSON.parse(localStorage.getItem("fetchedData"));
            cityArray.unshift(cityData.name)
            var li = document.createElement("li");
            var btn = document.createElement("button");
            btn.textContent = cityData.name;
            li.appendChild(btn);
            listCities.appendChild(li);
            console.log(cityArray)
        });
}

function display() {
    cityEl.textContent = cityData.name + " -- " + currentTime
    tempEl.textContent = "Temp: " + cityData.main.temp + " °F"
    windEl.textContent = "Wind: " + cityData.wind.speed + " MPH"
    humEl.textContent = "Humidity: " + cityData.main.humidity + " %"



    // uvEl.textContent = "Temp: " + cityData.main.temp + " °F"


    // tempEl.textContent = cityData.city
}

// console.log(requestUrl)
// console.log(city)
// console.log(key)

// fetchButton.addEventListener('click', getApi(currentCity,APIkey));
// fetchButton.on('click', test());
// fetchButton.addEventListener('click', test());

// b1.addEventListener('click', test());




/////////////           Useful code below           ///////////


// for (var i = 0; i < data.length; i++) {
//     var listItem = document.createElement('li');
//     listItem.textContent = data[i].html_url;
//     repoList.appendChild(listItem);
// }






// eventArray[offset] = event;
// localStorage.setItem("eventArray", JSON.stringify(eventArray))




////////////////  OLD CODE


// var fullUrl = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=530a0c5e5acc988437cc5fa97607f79a"


    // console.log(currentCity)
    // console.log(APIkey)
    // console.log(requestUrl)
    // fullUrl = requestUrl.concat(currentCity, APIkey)
    // console.log(fullUrl)

// console.log(typeof(searchBtn))

// function test(){
//     dummy++
//     console.log("test")
// }


// $( function() {
//     var availableTags = ["Seattle", "London", "Boston"];
//     $( "#tags" ).autocomplete({
//       source: availableTags
//     });
//   } );





// function saveCities() {
//     dummy = 5
//     console.log(dummy)
//     var offset = time - 9
//     userEvent.eventText = eventsArray[offset].textContent;
//     console.log(userEvent.eventText)
//     userEvent.eventTime = time;


//     // If event were retrieved from localStorage, update the event array to it
//     if (cityData !== null) {
//         cityData = fetchedData;
//     }



//     // check if empty event and exit early 
//     if (userEvent.eventText === "") {
//         if (eventArray[offset] === "") {
//             eventsArray[offset].textContent = eventArray[offset]
//         }
//         console.log('empty');
//         return;
//     }

//     localStorage.setItem("userEvent", JSON.stringify(userEvent))
//     var event = JSON.parse(localStorage.getItem("userEvent"));

//     // Re-write event Only if there's a change
//     eventArray[offset] = event;
//     localStorage.setItem("eventArray", JSON.stringify(eventArray))

//     location.reload();
// }
