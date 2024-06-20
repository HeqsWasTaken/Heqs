function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
// Function to update local time
function updateLocalTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: false 
    };

    // Determine the current page language based on URL
    const currentURL = window.location.href;
    let locale;

    if (currentURL.includes('index_en.html')) {
        // English site
        locale = 'en-GB'; // Change to appropriate English locale
        options.hour12 = true;
    } else {
        // Default to Turkish if no specific language is detected
        locale = 'tr-TR'; // Turkish locale
    }

    const localTimeString = now.toLocaleDateString(locale, options);
    document.getElementById('local-time').textContent = localTimeString;
}

// Initial call to update local time
updateLocalTime();

// Set interval to update local time every second
setInterval(updateLocalTime, 1000);

const modeToggle = document.getElementById('mode-toggle');
var theme = document.getElementsByTagName('link')[0];

modeToggle.addEventListener('change', function() {
    if (modeToggle.checked) {
        theme.setAttribute('href', 'style_dark.css')
    } else {
        theme.setAttribute('href', 'style_light.css');
    }
});


