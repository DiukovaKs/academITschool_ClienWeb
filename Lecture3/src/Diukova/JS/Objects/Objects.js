var country1 = {
    countryName: "Russia",
    cities: [
        {
            cityName: "Moscow",
            population: 30000000
        }, {
            cityName: "St.Petersburg",
            population: 10000000
        }, {
            cityName: "Yekaterinburg",
            population: 3000000
        }, {
            cityName: "Novosibirsk",
            population: 2000000
        }
    ]
};

var country2 = {
    countryName: "France",
    cities: [
        {
            cityName: "Paris",
            population: 10000000
        },
        {
            cityName: "Milan",
            population: 5000000
        },
        {
            cityName: "Nice",
            population: 2000000
        }
    ]
};

var country3 = {
    countryName: "Ukraine",
    cities: [
        {
            cityName: "Kiev",
            population: 6000000
        },
        {
            cityName: "Odessa",
            population: 2000000
        },
        {
            cityName: "Lviv",
            population: 1500000
        }
    ]
};

function getCitiesNumber(countries) {
    var result = countries.map(function (country, j, countries) {
        return {countryName: countries[j].countryName, citiesCount: countries[j].cities.length};
    });
    result = result.sort(function (a, b) {
        return b.citiesCount - a.citiesCount;
    }).filter(function (elem) {
        return elem.citiesCount === result[0].citiesCount;
    });

    var finalResult = [];
    for (var i = 0; i < result.length; ++i) {
        finalResult.push(result[i].countryName);
    }
    return finalResult;
}

var countries = [country1, country2, country3];

var maxCitiesCountCountry = getCitiesNumber(countries);
console.log(maxCitiesCountCountry.join(","));

function getTotalPopulationOfCountry(countries) {
    var finalRes = {};

    countries.forEach(function (country) {
        finalRes[country.countryName] = country.cities.reduce(function (sum, current) {
            return sum + current.population;
        }, 0);
    });

    return finalRes;
}

var countriesPopulation = getTotalPopulationOfCountry(countries);

function toString(obj) {
    for (var key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
        console.log(key);
        console.log(obj[key]);
    }
}

toString(countriesPopulation);