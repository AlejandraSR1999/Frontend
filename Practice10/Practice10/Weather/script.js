const citySelect = document.getElementById('citySelect');
const weatherInfo = document.getElementById('weatherInfo');
const loadingSpinner = document.getElementById('loadingSpinner');

citySelect.addEventListener('change', async function() {
  const city = this.value;
  
  if (city) {
    loadingSpinner.style.display = 'block'; // Show the loading spinner
    weatherInfo.innerHTML = ''; // Clear the previous weather info
    
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},bo&appid=378ee661ce04a1fe5bf27abe4889a36f&units=metric`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      displayWeather(data);
    } catch (e) {
      console.log('There was a problem with the fetch operation: ' + e.message);
    } finally {
      loadingSpinner.style.display = 'none'; // Hide the loading spinner
    }
  }
});

function displayWeather(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const cityName = data.name;
    const icon = data.weather[0].icon;
  
    
    const currentDatetime = new Date();
    const currentHour = currentDatetime.getHours();
    const currentDay = currentDatetime.getDate();
    const currentMonth = currentDatetime.getMonth() + 1; // Months are zero-based
    const currentYear = currentDatetime.getFullYear();
  
    weatherInfo.innerHTML = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temp}°C</p>
      <p>Weather: ${description}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${windSpeed} meter/sec</p>
      <p>Date and Time: ${currentDay}/${currentMonth}/${currentYear}, ${currentHour}:00</p>
      <img src="http://openweathermap.org/img/w/${icon}.png" alt="${description}">
    `;
  }
  


