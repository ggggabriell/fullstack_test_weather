import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const WeatherContext = createContext([]);

export function WeatherProvider({ children }) {
    const [weatherData, setWeatherData] = useState([]);
    const [weatherNextDaysData, setWeatherNextDaysData] = useState([]);
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [location, setLocation] = useState();
    navigator.geolocation.getCurrentPosition(info => setLat(info.coords.latitude));
    navigator.geolocation.getCurrentPosition(info => setLong(info.coords.longitude));


    useEffect(() => {
        if ((lat !== undefined && long !== undefined) || location !== undefined) {
            api.get("/weather", { params: { lat: lat, long: long, location: location } })
                .then(response => {
                    setWeatherData(response.data.data);
                    setWeatherNextDaysData(response.data.nextDays.list);
                });
        }

        return
    }, [lat, long, location])


    //Set Current Time
    const [currentTime, setCurrentTime] = useState(0);
    const [currentData, setCurrentData] = useState(0);
    function getCurrentData() {
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        setTimeout(getCurrentData, 1000);
        setCurrentData(new Date().toLocaleDateString());
        return { currentTime, currentData }
    }
    useEffect(() => {
        window.onload = getCurrentData();
    }, [])

    //Handle input 
    function handleInput(input) {
        setLocation(input)
    }

    return (
        <WeatherContext.Provider value={{ weatherData, getCurrentData, handleInput, weatherNextDaysData }}>
            {children}
        </WeatherContext.Provider>
    )
}

