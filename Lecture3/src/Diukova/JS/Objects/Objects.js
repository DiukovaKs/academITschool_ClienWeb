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
    var result = countries.sort(function (a, b) {
        return b.cities.length - a.cities.length;
    });

    result = result.filter(function (elem) {
        return elem.cities.length === result[0].cities.length
    }).map(function (result) {
        return [result.countryName];
    });

    return result;
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