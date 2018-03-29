import fs from 'fs';

import transformations from './lib/transformations';

import spMath from './lib/special-math';

import statisticTest from './lib/statistic-test';

const adTest = statisticTest.AndersonDarling, ksTest = statisticTest.KolmogorovSmirnov, oneKey = statisticTest.OneKeyTestReport;

function formatDisplay(val)
{
    if(typeof(val) == 'number')
    {
        return val.toFixed(5).toString();
    }
    else
    {
        return val;
    }
}

function batchTest(dist_data) {

    console.log("|Normal|" + formatDisplay(adTest.pValueNormal(dist_data)) + "|" + formatDisplay(ksTest.pValueNormal(dist_data)) + "|");    
    
    console.log("|Log-Normal|" + formatDisplay(adTest.pValueLogNormal(dist_data)) + "|" + formatDisplay(ksTest.pValueLogNormal(dist_data)) + "|");

    console.log("|Uniform|" + formatDisplay(adTest.pValueUniform(dist_data)) + "|" + formatDisplay(ksTest.pValueUniform(dist_data)) + "|");

    console.log("|Triangular|N/A|N/A|");

    console.log("|Exponential|" + formatDisplay(adTest.pValueExponential(dist_data)) + "|" + formatDisplay(ksTest.pValueExponential(dist_data)) + "|");

    console.log("|Beta|N/A|N/A|");

    console.log("|Gamma|" + formatDisplay(adTest.pValueGamma(dist_data)) + "|" + formatDisplay(ksTest.pValueGamma(dist_data)) + "|");

    console.log("|Weibull|" + formatDisplay(adTest.pValueWeibull(dist_data)) + "|" + formatDisplay(ksTest.pValueWeibull(dist_data)) + "|");

}

function batchTestReport(dist_data) {

    var adValue, adPvalue, ksValue, ksPvalue;

    console.log("Beta:");

    console.log("AD: N/A, ADP: N/A, KS: N/A, KSP: N/A");

    transformed = transformations.exponent(dist_data);

    adValue = adTest.test(transformed);

    ksValue = ksTest.test(transformed);

    console.log("Exponential:");
    
    console.log("AD: " + adValue.toString() + ", ADP: " + adTest.pValueExponential(dist_data).toString() + ", KS: " + ksValue.toString() + ", KSP: " + ksTest.pValueExponential(dist_data).toString());
    
    transformed = transformations.gamma(dist_data);

    adValue = adTest.test(transformed);

    ksValue = ksTest.test(transformed);

    console.log("Gamma: ");

    console.log("AD: " + adValue.toString() + ", ADP: " + adTest.pValueGamma(dist_data).toString() + ", KS: " + ksValue.toString() + ", KSP: " + ksTest.pValueGamma(dist_data).toString());

    transformed = transformations.logNormality(dist_data);

    adValue = adTest.test(transformed);

    ksValue = ksTest.test(transformed);

    console.log("LogNormal: ");

    console.log("AD: " + adValue.toString() + ", ADP: " + adTest.pValueLogNormal(dist_data).toString() + ", KS: " + ksValue.toString() + ", KSP: " + ksTest.pValueLogNormal(dist_data).toString());
   
    transformed = transformations.normality(dist_data);

    adValue = adTest.test(transformed);

    ksValue = ksTest.test(transformed);

    console.log("Normal: ");

    console.log("AD: " + adValue.toString() + ", ADP: " + adTest.pValueNormal(dist_data).toString() + ", KS: " + ksValue.toString() + ", KSP: " + ksTest.pValueNormal(dist_data).toString());

    transformed = transformations.triangle(dist_data);

    adValue = adTest.test(transformed);

    ksValue = ksTest.test(transformed);

    console.log("Triangular: ");

    console.log("AD: " + adValue.toString() + ", ADP: N/A" + ", KS: " + ksValue.toString() + ", KSP: N/A");

    transformed = transformations.uniform(dist_data);

    adValue = adTest.test(transformed);

    ksValue = ksTest.test(transformed);

    console.log("Uniform: ");

    console.log("AD: " + adValue.toString() + ", ADP: " + adTest.pValueUniform(dist_data).toString() + ", KS: " + ksValue.toString() + ", KSP: " + ksTest.pValueUniform(dist_data).toString());

    transformed = transformations.weibull(dist_data);

    adValue = adTest.test(transformed);

    ksValue = ksTest.test(transformed);

    console.log("Weibull: ");

    console.log("AD: " + adValue.toString() + ", ADP: " + adTest.pValueWeibull(dist_data).toString() + ", KS: " + ksValue.toString() + ", KSP: " + ksTest.pValueWeibull(dist_data).toString());

    // console.log("|Normal|" + formatDisplay(adTest.pValueNormal(dist_data)) + "|" + formatDisplay(ksTest.pValueNormal(dist_data)) + "|");    
    
    // console.log("|Log-Normal|" + formatDisplay(adTest.pValueLogNormal(dist_data)) + "|" + formatDisplay(ksTest.pValueLogNormal(dist_data)) + "|");

    // console.log("|Uniform|" + formatDisplay(adTest.pValueUniform(dist_data)) + "|" + formatDisplay(ksTest.pValueUniform(dist_data)) + "|");

    // console.log("|Triangular|N/A|N/A|");

    // console.log("|Gamma|" + formatDisplay(adTest.pValueGamma(dist_data)) + "|" + formatDisplay(ksTest.pValueGamma(dist_data)) + "|");

    // console.log("|Weibull|" + formatDisplay(adTest.pValueWeibull(dist_data)) + "|" + formatDisplay(ksTest.pValueWeibull(dist_data)) + "|");

}

function batchTestDetailedReport(dist_data) {

    let report;

    console.log("Beta:");

    console.log("AD: N/A, ADP: N/A, KS: N/A, KSP: N/A");

    report = oneKey.exponent(dist_data);

    console.log(oneKey.formatReportString(report));

    report = oneKey.gamma(dist_data);

    console.log(oneKey.formatReportString(report));
       
    report = oneKey.normality(dist_data);

    console.log(oneKey.formatReportString(report));

    report = oneKey.logNormality(dist_data);

    console.log(oneKey.formatReportString(report));

    report = oneKey.triangle(dist_data);

    console.log(oneKey.formatReportString(report));

    report = oneKey.uniform(dist_data);

    console.log(oneKey.formatReportString(report));

    report = oneKey.weibull(dist_data);

    console.log(oneKey.formatReportString(report));

}

// console.log("AQI:")
// var file = ".\\dataset\\aqi_dist.json";
// var dist_data = JSON.parse(fs.readFileSync(file));
// batchTest(dist_data)

// console.log("PM2.5:")
let file = ".\\dataset\\pm25_dist.json"
let dist_data = JSON.parse(fs.readFileSync(file));
// batchTest(dist_data);
batchTestDetailedReport(dist_data);

// console.log("Norm:");
// var file = ".\\norm_dist1.json"
// var dist_data = JSON.parse(fs.readFileSync(file));
// batchTest(dist_data);

// console.log("Log-Norm:");
// var file = ".\\lgnorm_dist1.json"
// var dist_data = JSON.parse(fs.readFileSync(file));
// batchTestDetailedReport(dist_data);

// console.log("Uniform:");
// var file = ".\\unif_dist1.json"
// var dist_data = JSON.parse(fs.readFileSync(file));
// batchTest(dist_data);

// console.log("Triangle:");
// var file = ".\\tri_dist1.json"
// var dist_data = JSON.parse(fs.readFileSync(file));
// batchTest(dist_data);

// console.log("Exponent:");
// var file = ".\\exp_dist1.json"
// var dist_data = JSON.parse(fs.readFileSync(file));
// batchTest(dist_data);

// console.log("Gamma:");
// var file = ".\\gamma_dist1.json";
// var dist_data = JSON.parse(fs.readFileSync(file));
// batchTest(dist_data);

// console.log("Weibull:");
// var file = ".\\dataset\\weib_dist1.json";
// var dist_data = JSON.parse(fs.readFileSync(file));
// batchTest(dist_data);