var timeEl = document.querySelector('#currentTime');

function init() {

    var timeInterval = setInterval(function() {
        var currentTime = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
        timeEl.textContent = currentTime;
    }, 1000)
}

init();