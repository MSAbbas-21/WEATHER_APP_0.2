document.getElementById("weatherForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const city = document.getElementById("city").value;

  try {
    const response = await fetch(`http://127.0.0.1:5000/weather?city=${city}`);
    const data = await response.json();

    if (response.ok) {
      document.getElementById("result").innerHTML = `
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Temperature:</strong> ${data.temp}°C</p>
        <p><strong>Humidity:</strong> ${data.humidity}%</p>
        <p><strong>Condition:</strong> ${data.condition}</p>
      `;

      // 🌡️ Change background based on temperature
      const temp = data.temp;

      if (temp <= 10) {
        // Cold → Snow background
        document.body.style.backgroundImage = "url('/static/snow.jpg')";
      } else if (temp > 10 && temp <= 25) {
        // Mild → Rain background
        document.body.style.backgroundImage = "url('/static/rain.jpg')";
      } else {
        // Warm/Hot → Sunny background
        document.body.style.backgroundImage = "url('/static/sunny.jpg')";
      }

    } else {
      document.getElementById("result").innerHTML = `<p>❌ Error: ${data.message}</p>`;
    }
  } catch (err) {
    document.getElementById("result").innerHTML = `<p>⚠️ Could not connect to server.</p>`;
  }
});
