export interface IFinancialProps {
  ticker: string
  delta: number
}
interface IWithFinancialDataProps {
  children(props: IFinancialProps): JSX.Element
}

const WithFinancialData: React.FunctionComponent<IWithFinancialDataProps> = ({children}) => {
  
  const props: IFinancialProps = {
    ticker: "GUN",
    delta: 3
  }

  return children(props)
}

export default WithFinancialData
