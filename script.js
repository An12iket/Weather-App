const apiKey = "136d1338392d379ed81bccd3adc43b64"; 

document.getElementById("getWeather").addEventListener("click", () => {
  const location = document.getElementById("location").value;
  if (!location) {
    alert("Please enter a location.");
    return;
  }
  
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then(data => {
      // Update UI
      document.getElementById("city").innerText = data.name;
      document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
      document.getElementById("description").innerText = `Description: ${data.weather[0].description}`;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("weatherDetails").classList.remove("hidden");
    })
    .catch(error => alert(error.message));
});
