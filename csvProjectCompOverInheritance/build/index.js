"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// v1
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
// v2
var summaryB = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summaryB.buildAndPrintReport(matchReader.matches);
// v3 - alternative - 
// has a down side that it's not evident you are returning an instance of Summary
var summaryC = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
