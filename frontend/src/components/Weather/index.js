import React, { useState } from 'react';
import { WeatherProvider } from '../../hooks/useWeather';
import background from '../../images/image.svg'
import WeatherDisplay from '../WeatherDisplay';
import WeatherNav from '../WeatherNav';
import { WContainer, WBg, ImageBg, WWrap } from './WeatherElements'

const WeatherApp = () => {
  const [isOpen, setIsOpen] = useState(false);


  //Toggle mobile
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (

    <WeatherProvider>
      <WContainer>
        <WBg>
          <ImageBg src={background} />
        </WBg>
        <WWrap>
          <WeatherDisplay
            toggle={toggle}
          />

          <WeatherNav
            toggle={toggle}
            isOpen={isOpen}
          />
        </WWrap>
      </WContainer>
    </WeatherProvider>
  );
};

export default WeatherApp;
