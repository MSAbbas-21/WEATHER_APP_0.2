# 🌤 Weather App

## Features
- Enter a city name and fetch live weather data.
- Displays temperature (°C), humidity (%), and condition.
- Background changes dynamically based on temperature:
  - ≤ 10°C → Snow background
  - 11–25°C → Rain background
  - > 25°C → Sunny background
- Simple, responsive UI.

## Project Structure
weather_app/
├── main.py          # Flask backend
└── static/
    ├── index.html   # Frontend HTML
    ├── style.css    # Styling
    ├── script.js    # Weather logic + dynamic backgrounds
    ├── hill.jpg     # Default background
    ├── sunny.jpg    # Sunny background
    ├── rain.jpg     # Rain background
    └── snow.jpg     # Snow background

## Setup Instructions
1. Clone the repository:
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. Install dependencies:
   pip install flask requests

3. Run the Flask server:
   python main.py

4. Open in browser:
   http://127.0.0.1:5000/

## Future Improvements
- Add 5-day forecast cards.
- Auto-detect user location.
- Toggle between Celsius ↔ Fahrenheit.
- Add animated effects (snowflakes, raindrops).
