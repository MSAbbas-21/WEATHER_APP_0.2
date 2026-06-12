from flask import Flask, request, jsonify, send_from_directory
import requests
import os

app = Flask(__name__, static_folder="static")

API_KEY = "enter_your_api_key"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"

@app.route("/")
def home():
    # Serve index.html from the static folder
    return send_from_directory(app.static_folder, "index.html")

@app.route("/weather")
def get_weather():
    city = request.args.get("city")
    url = BASE_URL + "q=" + city + "&appid=" + API_KEY + "&units=metric"
    response = requests.get(url)
    data = response.json()

    if response.status_code == 200 and "main" in data:
        return jsonify({
            "temp": data["main"]["temp"],
            "humidity": data["main"]["humidity"],
            "condition": data["weather"][0]["description"].title()
        })
    else:
        return jsonify({"message": data.get("message", "Could not fetch weather data.")}), 400

if __name__ == "__main__":
    app.run(debug=True)
