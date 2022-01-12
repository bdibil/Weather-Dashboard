// var timeEl = document.querySelector('#currentTime');
var searchBtn = $('.search');

var currentTime =""
var currentCity ="Bothell";
var APIkey = "&APPID=530a0c5e5acc988437cc5fa97607f79a";
var units = ""

// for current conditions
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="

// for next 5 days
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q="

var dummy = 0


function init() {
    var timeInterval = setInterval(function() {
        currentTime = moment().format("MMM DD, YYYY");
    }, 1000)
}

init();



searchBtn.on('click', function(){
    console.log(currentTime)
    fullUrl = requestUrl + currentCity + APIkey;
    // console.log(fullUrl)
    getApi(fullUrl)
});


function getApi(url) {
    // return
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
        }
    });
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


