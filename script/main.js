document.getElementById("getWeather").addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`https://weather.contrateumdev.com.br/api/weather?lat=${latitude}&lon=${longitude}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temperature = data.main.temp;
        document.getElementById("weatherContainer").innerHTML = `${temperature}°C`;
      });
  });
});