import React, { useState } from 'react';
import './style.css';

const countryCodeMapping = {
    "Afghanistan": "AF",
    "Albania": "AL",
    "Algeria": "DZ",
    "Andorra": "AD",
    "Angola": "AO",
    "Antigua and Barbuda": "AG",
    "Argentina": "AR",
    "Armenia": "AM",
    "Australia": "AU",
    "Austria": "AT",
    "Azerbaijan": "AZ",
    "Bahamas": "BS",
    "Bahrain": "BH",
    "Bangladesh": "BD",
    "Barbados": "BB",
    "Belarus": "BY",
    "Belgium": "BE",
    "Belize": "BZ",
    "Benin": "BJ",
    "Bhutan": "BT",
    "Bolivia": "BO",
    "Bosnia and Herzegovina": "BA",
    "Botswana": "BW",
    "Brazil": "BR",
    "Brunei": "BN",
    "Bulgaria": "BG",
    "Burkina Faso": "BF",
    "Burundi": "BI",
    "Cabo Verde": "CV",
    "Cambodia": "KH",
    "Cameroon": "CM",
    "Canada": "CA",
    "Central African Republic": "CF",
    "Chad": "TD",
    "Chile": "CL",
    "China": "CN",
    "Colombia": "CO",
    "Comoros": "KM",
    "Congo (DRC)": "CD",
    "Congo (Republic)": "CG",
    "Costa Rica": "CR",
    "Croatia": "HR",
    "Cuba": "CU",
    "Cyprus": "CY",
    "Czech Republic": "CZ",
    "Denmark": "DK",
    "Djibouti": "DJ",
    "Dominica": "DM",
    "Dominican Republic": "DO",
    "Ecuador": "EC",
    "Egypt": "EG",
    "El Salvador": "SV",
    "Equatorial Guinea": "GQ",
    "Eritrea": "ER",
    "Estonia": "EE",
    "Eswatini": "SZ",
    "Ethiopia": "ET",
    "Fiji": "FJ",
    "Finland": "FI",
    "France": "FR",
    "Gabon": "GA",
    "Gambia": "GM",
    "Georgia": "GE",
    "Germany": "DE",
    "Ghana": "GH",
    "Greece": "GR",
    "Grenada": "GD",
    "Guatemala": "GT",
    "Guinea": "GN",
    "Guinea-Bissau": "GW",
    "Guyana": "GY",
    "Haiti": "HT",
    "Honduras": "HN",
    "Hungary": "HU",
    "Iceland": "IS",
    "India": "IN",
    "Indonesia": "ID",
    "Iran": "IR",
    "Iraq": "IQ",
    "Ireland": "IE",
    "Israel": "IL",
    "Italy": "IT",
    "Ivory Coast (Côte d'Ivoire)": "CI",
    "Jamaica": "JM",
    "Japan": "JP",
    "Jordan": "JO",
    "Kazakhstan": "KZ",
    "Kenya": "KE",
    "Kiribati": "KI",
    "Kuwait": "KW",
    "Kyrgyzstan": "KG",
    "Laos": "LA",
    "Latvia": "LV",
    "Lebanon": "LB",
    "Lesotho": "LS",
    "Liberia": "LR",
    "Libya": "LY",
    "Liechtenstein": "LI",
    "Lithuania": "LT",
    "Luxembourg": "LU",
    "Madagascar": "MG",
    "Malawi": "MW",
    "Malaysia": "MY",
    "Maldives": "MV",
    "Mali": "ML",
    "Malta": "MT",
    "Marshall Islands": "MH",
    "Mauritania": "MR",
    "Mauritius": "MU",
    "Mexico": "MX",
    "Micronesia": "FM",
    "Moldova": "MD",
    "Monaco": "MC",
    "Mongolia": "MN",
    "Montenegro": "ME",
    "Morocco": "MA",
    "Mozambique": "MZ",
    "Myanmar": "MM",
    "Namibia": "NA",
    "Nauru": "NR",
    "Nepal": "NP",
    "Netherlands": "NL",
    "New Zealand": "NZ",
    "Nicaragua": "NI",
    "Niger": "NE",
    "Nigeria": "NG",
    "North Korea": "KP",
    "North Macedonia": "MK",
    "Norway": "NO",
    "Oman": "OM",
    "Pakistan": "PK",
    "Palau": "PW",
    "Palestine": "PS",
    "Panama": "PA",
    "Papua New Guinea": "PG",
    "Paraguay": "PY",
    "Peru": "PE",
    "Philippines": "PH",
    "Poland": "PL",
    "Portugal": "PT",
    "Qatar": "QA",
    "Romania": "RO",
    "Russia": "RU",
    "Rwanda": "RW",
    "Saint Kitts and Nevis": "KN",
    "Saint Lucia": "LC",
    "Saint Vincent and the Grenadines": "VC",
    "Samoa": "WS",
    "San Marino": "SM",
    "Sao Tome and Principe": "ST",
    "Saudi Arabia": "SA",
    "Senegal": "SN",
    "Serbia": "RS",
    "Seychelles": "SC",
    "Sierra Leone": "SL",
    "Singapore": "SG",
    "Slovakia": "SK",
    "Slovenia": "SI",
    "Solomon Islands": "SB",
    "Somalia": "SO",
    "South Africa": "ZA",
    "South Korea": "KR",
    "South Sudan": "SS",
    "Spain": "ES",
    "Sri Lanka": "LK",
    "Sudan": "SD",
    "Suriname": "SR",
    "Sweden": "SE",
    "Switzerland": "CH",
    "Syria": "SY",
    "Taiwan": "TW",
    "Tajikistan": "TJ",
    "Tanzania": "TZ",
    "Thailand": "TH",
    "Timor-Leste": "TL",
    "Togo": "TG",
    "Tonga": "TO",
    "Trinidad and Tobago": "TT",
    "Tunisia": "TN",
    "Turkey": "TR",
    "Turkmenistan": "TM",
    "Tuvalu": "TV",
    "Uganda": "UG",
    "Ukraine": "UA",
    "United Arab Emirates": "AE",
    "United Kingdom": "GB",
    "United States": "US",
    "Uruguay": "UY",
    "Uzbekistan": "UZ",
    "Vanuatu": "VU",
    "Vatican City (Holy See)": "VA",
    "Venezuela": "VE",
    "Vietnam": "VN",
    "Yemen": "YE",
    "Zambia": "ZM",
    "Zimbabwe": "ZW"
};

const getCountryCode = (countryName) => {
    const formattedCountryName = countryName.trim().toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    return countryCodeMapping.hasOwnProperty(formattedCountryName)
        ? countryCodeMapping[formattedCountryName]
        : formattedCountryName;
};

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState('');

    const apiKey = 'ec5beb90b9333ede249ce6de402b8fca';

    const getWeather = async () => {
        if (!city || !country) {
            alert('Please enter a city and a country');
            return;
        }

        const locationQuery = `${city},${getCountryCode(country)}`;
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${locationQuery}&appid=${apiKey}`;

        try {
            const currentWeatherResponse = await fetch(currentWeatherUrl);
            if (currentWeatherResponse.status === 404) {
                alert('City and country combination not found. Please check your input.');
                return;
            }

            if (!currentWeatherResponse.ok) {
                alert(`Error: ${currentWeatherResponse.status}. Please try again.`);
                return;
            }

            const currentWeatherData = await currentWeatherResponse.json();
            setWeatherIcon(`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`);
            setCurrentWeather(currentWeatherData);

            const forecastResponse = await fetch(forecastUrl);
            if (!forecastResponse.ok) {
                alert(`Error: ${forecastResponse.status}. Please try again later.`);
                return;
            }

            const forecastData = await forecastResponse.json();
            setHourlyForecast(forecastData.list.slice(0, 8)); // Next 24 hours
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data. Please try again later.');
        }
    };

    return (
        <div id="weather-container">
            <h2>Weather App</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={city}
                    placeholder="Enter city"
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    value={country}
                    placeholder="Enter country name (e.g., India)"
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>
            <button onClick={getWeather}>Search</button>

            {currentWeather && (
                <>
                    <img
                        id="weather-icon"
                        src={weatherIcon}
                        alt="Weather Icon"
                        style={{ display: weatherIcon ? 'block' : 'none' }}
                    />
                    <div id="temp-div">
                        <p>{Math.round(currentWeather.main.temp - 273.15)}°C</p>
                    </div>
                    <div id="weather-info">
                        <p>
                            {currentWeather.name}, {currentWeather.sys.country}
                        </p>
                        <p>{currentWeather.weather[0].description}</p>
                        <p>Humidity: {currentWeather.main.humidity}%</p>
                    </div>
                </>
            )}

            {hourlyForecast.length > 0 && (
                <div id="hourly-forecast">
                    {hourlyForecast.map((item, index) => {
                        const dateTime = new Date(item.dt * 1000);
                        const hour = dateTime.getHours();
                        const ampm = hour >= 12 ? 'PM' : 'AM';
                        const formattedHour = ((hour + 11) % 12 + 1) + ':00 ' + ampm;

                        return (
                            <div className="hourly-item" key={index}>
                                <span>{formattedHour}</span>
                                <img
                                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                    alt="Hourly Weather Icon"
                                />
                                 <span>{(item.main.temp - 273.15).toFixed(2)}°C</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default WeatherApp;