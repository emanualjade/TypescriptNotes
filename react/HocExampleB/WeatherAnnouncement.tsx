import React from 'react'
import withWeatherProps, { WeatherProps } from './withWeatherProps'

// https://www.udemy.com/react-with-typescript/learn/v4/t/lecture/14461218?start=0
// https://dev.to/busypeoples/notes-on-typescript-pick-exclude-and-higher-order-components-40cp

interface Props extends WeatherProps {
  name: string
}

const WeatherAnnouncement: React.FC<Props> = ({name, temperature, scale}) => {
  return (
    <div>
      Hello {name}
      The temperature is {temperature} {scale}
    </div>
  )
}

const WrappedWeather = withWeatherProps(WeatherAnnouncement)

export default WrappedWeather