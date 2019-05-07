// COMPONENT B.... FROM ANOTHER FILE USES THE RENDER PROP FUNCTION ABOVE
import React from 'react'
import WithFinancialData, { IFinancialProps } from './WithFinancialData';

const Display = () => {
  return (
    <WithFinancialData>
      {(props: IFinancialProps) => (
        <div>
          Hello Johnny,
          here is your finance info
          <div>{props.ticker}</div>
          <div>{props.delta}</div>
        </div>
      )}
    </WithFinancialData>
  )
}

export default Display
