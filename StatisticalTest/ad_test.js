function erf(x)
{
    // constants
    a1 =  0.254829592;
    a2 = -0.284496736;
    a3 =  1.421413741;
    a4 = -1.453152027;
    a5 =  1.061405429;
    p  =  0.3275911;

    // Save the sign of x
    sign = 1;

    if (x < 0)
    {
        sign = -1;
    }

    x = Math.abs(x);

    // A&S formula 7.1.26
    t = 1.0/(1.0 + p*x);
    
    y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x*x);

    return sign*y;
}

function transformNormality(data)
{
    transformed = [];

    mean = 0;

    for(i = 0; i < data.length; ++i)
    {
        mean += data[i];
    }

    mean /= data.length;

    variance = 0;

    for(i = 0; i < data.length; ++i)
    {
        variance += (mean - data[i])**2;
    }

    variance /= (data.length - 1);

    std_var = Math.sqrt(variance);

    for(i = 0; i < data.length; ++i)
    {
        // transformed.push(Math.exp(-(data[i] - mean)**2 / (2 * variance)) / (Math.sqrt(2 * Math.PI) * std_var))

        transformed.push(0.5 + erf((data[i] - mean) / (Math.SQRT2 * std_var)) / 2)
        
    }

    transformed.sort()

    return transformed;

}

function transformLognormality(data)
{
    transformed = [];

    mean = 0;

    for(i = 0; i < data.length; ++i)
    {
        if(data[i] <= 0)
        {
            return 0;
        }

        mean += data[i];
    }

    mean /= data.length;

    variance = 0;

    for(i = 0; i < data.length; ++i)
    {
        variance += (mean - data[i])**2;
    }

    variance /= (data.length - 1);

    std_var = Math.sqrt(variance);

    for(i = 0; i < data.length; ++i)
    {
        // transformed.push(Math.exp(-(data[i] - mean)**2 / (2 * variance)) / (Math.sqrt(2 * Math.PI) * std_var))

        transformed.push(0.5 + erf((Math.log(data[i]) - Math.log(mean)) / (Math.SQRT2 * std_var)) / 2);
        
    }

    transformed.sort()

    return transformed;

}

function transformUniform(data)
{
    a = data.reduce(function(a,b){return a < b ? a : b;}) - 0.001;

    b = data.reduce(function(a,b){return a > b ? a : b;}) + 0.001;

    len = b - a;

    transformed = [];

    for(i = 0; i < data.length; ++i)
    {
        transformed.push((data[i] - a) / len);
    }

    return transformed.sort();
}

function transformTriangle(data)
{
    var a = b = c = data[0], mean = 0;

    for(i = 0; i < data.length; ++i)
    {
        if(a > data[i])
        {
            a = data[i];
        }

        if(c < data[i])
        {
            c = data[i];
        }

        mean += data[i];
    }

    a -= 0.001;

    c += 0.001;

    mean /= data.length;

    // console.log(a);

    // console.log(c);

    // console.log(mean);

    b = 3 * mean - a - c;           // From mean = (a + b + c) / 3

    transformed = [];

    len = c - a;

    for(i = 0; i < data.length; ++i)
    {
        if(data[i] < b)
        {
            transformed.push((data[i] - a)**2 / (len * (b - a)));
        }
        else if(data[i] == b)
        {
            transformed.push((b - a) / len);
        }
        else
        {
            transformed.push(1 - (c - data[i])**2 / (len * (c - b)));
        }
    }

    return transformed.sort();
}

function transformExponent(data)
{
    mean = 0;

    for(i = 0; i < data.length; ++i)
    {
        if(data[i] < 0)
        {
            return 0;
        }

        mean += data[i];
    }

    // mean /= data.length;

    lambda = data.length / mean;

    transformed = [];

    for(i = 0; i < data.length; ++i)
    {
        transformed.push(1 - Math.exp(- lambda * data[i]));
    }

    return transformed.sort();
}

function andersonDarlingTest(data)
{
    n = data.length;

    s = 0;

    for(i = 0; i < data.length; ++i)
    {
        // console.log(data[i]);

        s += (2 * i + 1) * Math.log(data[i] * (1 - data[n - 1 - i]))      // Notice original is (2 * i - 1) and data[n + 1 - i]. Fix head offset.
    }

    // console.log(s);

    return -n - s / n;
}

function pValueNormal(z, n)
{
    zStar = z * (1 + 0.75 / n + 2.25 / (n**2));

    // var math = require('mathjs');

    // console.log(zStar);

    if(zStar <= 0.2)
    {
        return 1 - Math.exp(-13.436 + 101.14 * zStar - 223.73 * (zStar**2));
    }
    else if(zStar <= 0.34)
    {
        return 1 - Math.exp(-8.318 + 42.796 * zStar - 59.938 * (zStar**2));
    }
    else if(zStar <= 0.6)
    {
        return Math.exp(0.9177 - 4.279 * zStar - 1.38 * (zStar**2));
    }
    else if(zStar <= 153.467)
    {
        return Math.exp(1.2937 - 5.709 * zStar + 0.0186 * (zStar**2));
    }
    else
    {
        return 0;
    }
}

function pValueUniform(z)
{
    p = 0;

    g = function (zz)
    {
        return (2.00012 + (0.247105 - (0.0649821 - (0.0347962 - (0.0116720 - 0.00168691 * zz) * zz) * zz) * zz) * zz);
    }

    gg = function(zz)
    {
        return (1.0776 - (2.30695 - (0.43424 - (0.082433 - (0.008056 - 0.0003146 * zz) * zz) * zz) * zz) * zz);
    }

    if(z < 2)
    {
        p = 1 - Math.pow(z, - 0.5) * Math.exp(-1.2337141/z) * g(z);
    }
    else
    {
        p = 1 - Math.exp(-Math.exp(gg(z)));
    }

    return p;
}

function pValueExponent(adValue, n)
{
    zStar = adValue * (1 + 0.6 / n);

    // console.log(zStar);

    if(zStar <= 0.26)
    {
        return 1 - Math.exp(-12.2204 + 67.459 * zStar - 110.3 * (zStar**2));
    }
    else if(zStar <= 0.51)
    {
        return 1 - Math.exp(-6.1327 + 20.218 * zStar - 18.663 * zStar**2);
    }
    else if(zStar <= 0.95)
    {
        return Math.exp(0.9209 - 3.353 * zStar + 0.3 * zStar**2);
    }
    else if(zStar <= 10.03)
    {
        return Math.exp(0.731 - 3.008 * zStar + 0.15 * zStar**2);
    }
    
    return 0;
}

var fs = require('fs');

var file = ".\\unif_dist1.json";
// var file = ".\\norm_dist1.json";
// var file = ".\\pm25_dist.json"

var dist_data = JSON.parse(fs.readFileSync(file));

// dist_data = [5.02144572057012,5.27095462697867,4.24098779700312,3.77693811629623,3.8922761911524,4.19199197366233,5.15760329903681,4.54092656396069,1.845727713764,2.69368890351628,3.92682789931376,4.61465311445803,2.47493412356073,5.61245516829378,3.54970515174603,2.38674835535991,3.13868868087249,3.95401538679392,4.5920237667083,5.11075611912838,3.83482723185007,4.01759665149544,5.20915847831284,2.64979395448603,4.78217113856739,2.54436622158851,5.68924394751701,2.93200146739065,4.52792551572647,2.21060363564674];

// dist_data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Calculating p value for normal dist.
transformed = transformNormality(dist_data);

z = andersonDarlingTest(transformed);

console.log('Nor:');

console.log("AD-Value: " + z.toString() + "    p-Value: " + pValueNormal(z, transformed.length).toString());

// Calculating p value for lognormal dist.
transformed = transformLognormality(dist_data);

var z, pvalue;

if(transformed == 0)
{
    z = 'N/A';

    pvalue = 'N/A';
}
else
{
    console.log(transformed);
    
    z = andersonDarlingTest(transformed);

    pvalue = pValueNormal(z, transformed.length)
}

console.log('Lognor:');

console.log("AD-Value: " + z.toString() + "    p-Value: " + pvalue.toString());

// Calculating p value for uniform dist.
transformed = transformUniform(dist_data);

transformed.shift();

transformed.pop();

z = andersonDarlingTest(transformed);

console.log('Unif:');

console.log("AD-Value: " + z.toString() + "    p-Value: " + pValueUniform(z).toString());

// Calculating ad value for trangular dist.
transformed = transformTriangle(dist_data);

transformed.shift();

transformed.pop();

z = andersonDarlingTest(transformed);

console.log('Tria:');

console.log("AD-Value: " + z.toString() + "    p-Value: N/A");

// Calculating p value for exponent dist.
transformed = transformExponent(dist_data);

var pvalue, z;

if(transformed == 0)
{
    z = 'N/A';

    pvalue = 'N/A';
}
else
{
    z = andersonDarlingTest(transformed);

    pvalue = pValueExponent(z, transformed.length)
}

console.log('Exp:')

console.log("AD-Value: " + z.toString() + "    p-Value: " + pvalue.toString());