import {MatchReader} from './MatchReader'
import {ConsoleReport} from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import { Summary } from './Summary';
import {HtmlReport} from './reportTargets/HtmlReport'

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

// v1
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)

summary.buildAndPrintReport(matchReader.matches)

// v2
const summaryB = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
)

summaryB.buildAndPrintReport(matchReader.matches)

// v3 - alternative - 
// has a down side that it's not evident you are returning an instance of Summary
const summaryC = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)
