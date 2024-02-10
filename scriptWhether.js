document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '2403631ce17c083ca74cb138888fcbfb';
    const city = 'JAIPUR'; 
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.querySelector('.weather-info').innerHTML = weatherInfo;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});

