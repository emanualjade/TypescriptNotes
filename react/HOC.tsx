import React from 'react'

// https://www.udemy.com/react-with-typescript/learn/v4/t/lecture/14461218?start=0
// https://dev.to/busypeoples/notes-on-typescript-pick-exclude-and-higher-order-components-40cp

interface Props extends WeatherProps {
  name: string
}

const WeatherAnnouncement: React.FunctionComponent<Props> = ({name, temperature, scale}) => {
  return (
    <div>
      Hello {name}
      The temperature is {temperature} {scale}
    </div>
  )
}

interface WeatherProps {
  temperature: number
  scale: 'C' | 'F'
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

function withWeatherProps<P extends WeatherProps>(Component: React.ComponentType<P>) {
  return (props: Omit<P, keyof WeatherProps>) => {
    return <Component {...props as P} temperature="25" scale="C" />
  }
}

const WrappedWeather = withWeatherProps(WeatherAnnouncement)

export default WrappedWeather