document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    cityInput.addEventListener('keydown', handleEnter);
    displayGreeting();
    displayDateTime();
    setInterval(displayDateTime, 1000); // Update date and time every second
});

function handleEnter(event) {
    if (event.key === 'Enter') {
        fetchWeatherData();
    }
}

function fetchWeatherData() {
    const apiKey = 'b460dcb8be67ebeff311d3e54821a234'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value.trim();

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                updateWeatherInfo(data);
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function updateWeatherInfo(data) {
    const location = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('description').textContent = description;
}

function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = 'Good Morning';

    if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else if (hour >= 18) {
        greeting = 'Good Evening';
    }

    document.getElementById('greeting').innerHTML = `<h2>${greeting}</h2>`;
}

function displayDateTime() {
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-IN', { weekday: 'long' });
    const day = now.getDate();
    const month = now.toLocaleDateString('en-IN', { month: 'long' });
    const year = now.getFullYear();
    const time = now.toLocaleTimeString();

    document.getElementById('time').innerHTML = `<h2>${time}</h2>`;
    document.getElementById('date').innerHTML = `<h2 class="small-text">${dayOfWeek}, ${month} ${day}, ${year}</h2>`;
}
