// Function to fetch weather data from the API
async function fetchWeatherData(city) {
    const apiKey = '37805d9e64241d8e27aaa688a808a2a8    ';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
  
  // Function to update the weather information in the UI
  function updateWeatherInfo(data) {
    const cityNameElement = document.getElementById('cityName');
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');
  
    cityNameElement.textContent = data.name || 'City Name';
    temperatureElement.textContent = data.main?.temp ? `${data.main.temp} °C` : '-- °C';
    humidityElement.textContent = data.main?.humidity ? `${data.main.humidity} %` : '-- %';
  
    // You can add more weather data fields here
  }
  
    // Function to handle the "Get Weather" button click
    function getWeather() {
      const cityInput = document.getElementById('cityInput');
      const city = cityInput.value.trim();
    
      if (city) {
        fetchWeatherData(city)
          .then(updateWeatherInfo)
          .catch((error) => {
            // Handle the error by showing an error message to the user
            console.error('Error fetching weather data:', error);
            const errorMessage = 'An error occurred while fetching weather data. Please try again later.';
            // You can customize the error message or take other actions to handle the error.
            // For example, you can display the error message on the UI to inform the user.
            displayErrorMessage(errorMessage);
          });
      }
    }
    
    // Function to display an error message to the user
    function displayErrorMessage(message) {
      const errorElement = document.getElementById('error');
      errorElement.textContent = message;
      // You can also style the error message or update the UI as needed.
    }
  // Add an event listener to the "Get Weather" button
  const getWeatherBtn = document.getElementById('getWeatherBtn');
  getWeatherBtn.addEventListener('click', getWeather);
  