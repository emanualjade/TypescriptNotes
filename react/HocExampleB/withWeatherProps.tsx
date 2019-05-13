import React from 'react'

export interface WeatherProps {
  temperature: number
  scale: 'C' | 'F'
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

function withWeatherProps<P extends WeatherProps>(Component: React.ComponentType<P>) {
  return (props: Omit<P, keyof WeatherProps>) => {
    return <Component {...props as P} temperature="25" scale="C" />
  }
}

export default withWeatherProps
