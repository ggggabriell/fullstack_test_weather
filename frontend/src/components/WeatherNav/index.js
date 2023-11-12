import React, { useContext, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { WeatherContext } from '../../hooks/useWeather';
import {
    DetailsInfo, DetailsNextDaysSection, DetailsNextDaysText, DetailsNextDaysTextInfo, DetailsSection, DetailsText,
    Form, Hr, NavBlur, NavContainer, NavLocation,
    NavLocationPlaces, NavLocationWrap, NavWeatherDetails,
    NavWeatherTitle, NavWrap, NextDaysGrid, SearchBtn, SearchInput
} from './WeatherNavElements';

const WeatherNav = ({ toggle, isOpen }) => {
    const { weatherData } = useContext(WeatherContext)
    const { weatherNextDaysData } = useContext(WeatherContext)
    const { handleInput } = useContext(WeatherContext)
    const [input, setInput] = useState('');
    const [nextDays, setNextDays] = useState([]);
    const [nextDaysDate, setNextDaysDate] = useState([]);
    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleInput(input)
    }

    useEffect(() => {
        if (weatherNextDaysData !== undefined & weatherNextDaysData[0] !== undefined) {
            let newArray = [];
            let newArrayDate = [];

            let counter = 0;
            for (let i = 0; i < weatherNextDaysData.length; i++) {

                let day = weatherNextDaysData[i].dt_txt.slice(0, 10).replaceAll("-", "/")

                if (i === 0) { newArrayDate[counter] = day; }

                if (newArrayDate[counter] !== day && counter <= 2) {
                    counter = counter + 1;
                    newArrayDate[counter] = day;
                }

                console.log(weatherNextDaysData)
                newArray.push(
                    {
                        day: day,
                        hour: (weatherNextDaysData[i].dt_txt.slice(11, 19).replaceAll("-", " ")).slice(0, 5),
                        temp: weatherNextDaysData[i].main.temp.toFixed(0)
                    })

            }

            setNextDays(newArray)
            setNextDaysDate(newArrayDate)
        }

    }, [weatherNextDaysData]);

    return (
        <NavContainer
            isOpen={isOpen}

        >
            <NavBlur />
            <NavWrap>
                {/* Localização e a parte de pesquisa */}
                <NavLocation>
                    <NavLocationWrap>
                        <Form action="#">
                            <SearchInput
                                placeholder="Pesquise uma localização"
                                type="search"
                                value={input}
                                onChange={handleChange}
                            />

                            <SearchBtn
                                type="submit"
                                onClick={handleSubmit}
                            >
                                <BsSearch />
                            </SearchBtn>
                        </Form>
                    </NavLocationWrap>
                </NavLocation>

                {/* Detalhes do clima, umidade vento e etc */}
                {weatherData && weatherNextDaysData &&
                    < NavWeatherDetails onClick={toggle}>

                        <Hr />
                        <NavWeatherTitle>Detalhes do clima</NavWeatherTitle>
                        <DetailsSection>
                            <DetailsText>
                                {weatherData.weather &&
                                    weatherData.weather[0].description[0].toUpperCase() + weatherData.weather[0].description.slice(1)}
                            </DetailsText>
                        </DetailsSection>

                        <DetailsSection>
                            <DetailsText>Umidade</DetailsText>
                            <DetailsInfo>{weatherData.main && weatherData.main.humidity}%</DetailsInfo>
                        </DetailsSection>

                        <DetailsSection>
                            <DetailsText>Vento</DetailsText>
                            <DetailsInfo>{weatherData.wind && weatherData.wind.speed.toFixed(0)}Km/h</DetailsInfo>
                        </DetailsSection>

                        <DetailsSection>
                            <DetailsText>Temp minima</DetailsText>
                            <DetailsInfo>{weatherData.main && weatherData.main.temp_min.toFixed(0)}ºc</DetailsInfo>
                        </DetailsSection>

                        <DetailsSection>
                            <DetailsText>Temp maxima</DetailsText>
                            <DetailsInfo>{weatherData.main && weatherData.main.temp_max.toFixed(0)}ºc</DetailsInfo>
                        </DetailsSection>
                        <NavLocationPlaces />
                        <Hr />

                        <NavWeatherTitle>Proximos Dias</NavWeatherTitle>

                        {nextDays.length > 0 ? (
                            <>
                                {
                                    nextDaysDate.map(day => (
                                        <>
                                            <DetailsNextDaysText>{day}</DetailsNextDaysText>
                                            <NextDaysGrid>
                                                {nextDays.map(d => (d.day === day &&

                                                    <DetailsNextDaysSection>
                                                        <DetailsNextDaysTextInfo>{d.hour}</DetailsNextDaysTextInfo>
                                                        <DetailsNextDaysTextInfo>{d.temp}ºc</DetailsNextDaysTextInfo>
                                                    </DetailsNextDaysSection>
                                                ))}
                                            </NextDaysGrid>
                                        </>
                                    ))
                                }
                            </>
                        ) : (
                            <p>Loading</p>
                        )}
                    </NavWeatherDetails>
                }
                <NavLocationPlaces />
                <NavWeatherTitle >Ver Mais</NavWeatherTitle>
            </NavWrap>
        </NavContainer >
    );
};

export default WeatherNav;
