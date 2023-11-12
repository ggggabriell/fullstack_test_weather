import React, { useContext } from 'react';
import {
  Mobileicon, MySocialsLink, WDisplayContainer,
  WDisplayInfo, WDisplayWrap, WInfoDetails, WInfoIcon,
  WLocation, WMySocials, WTemp, WTime
}
  from './WeatherDisplayElements'
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa'

import { WeatherContext } from '../../hooks/useWeather';

const WeatherDisplay = ({ toggle, location }) => {
  const { weatherData } = useContext(WeatherContext)
  const { getCurrentData } = useContext(WeatherContext)

  const { currentTime, currentData } = getCurrentData()


  return (
    <WDisplayContainer>
      <WDisplayWrap>
        <WMySocials>
          <MySocialsLink href="//www.linkedin.com/in/gabriel-santos-farias/" target="_blank" aria-label="Linkedin">
            <FaLinkedin />
          </MySocialsLink>
          <MySocialsLink href="//github.com/ggggabriell" target="_blank" aria-label="Linkedin">
            <FaGithub />
          </MySocialsLink>
        </WMySocials>
        <Mobileicon
          onClick={toggle}
        >
          <FaBars />
        </Mobileicon>
        <WDisplayInfo>
          <WTemp>{weatherData.main && Math.trunc(weatherData.main.temp)}º</WTemp>
          <WInfoDetails>
            <WLocation>{weatherData.name && weatherData.name}</WLocation>

            {getCurrentData &&
              <WTime>{currentTime} {` - `} {currentData}</WTime>
            }
          </WInfoDetails>
          <WInfoIcon></WInfoIcon>
        </WDisplayInfo>
      </WDisplayWrap>

    </WDisplayContainer>


  );

};

export default WeatherDisplay;
