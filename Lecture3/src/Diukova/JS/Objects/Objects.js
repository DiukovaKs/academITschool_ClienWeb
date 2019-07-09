var country1 = {
    countryName: "Russia", city: [
        Moscow = {cityName: "Moscow", population: 30000000},
        StPetersburg = {cityName: "St.Petersburg", population: 10000000},
        Yekaterinburg = {cityName: "Yekaterinburg", population: 3000000},
        Novosibirsk = {cityName: "Novosibirsk", population: 2000000}]
};

var country2 = {
    countryName: "France", city: [
        Paris = {cityName: " Paris", population: 10000000},
        Milan = {cityName: "Milan", population: 5000000},
        Nice = {cityName: "Nice", population: 2000000}]
};

var country3 = {
    countryName: "Ukraine", city: [
        Kiev = {cityName: "Kiev", population: 6000000},
        Odessa = {cityName: "Odessa", population: 2000000},
        Lviv = {cityName: "Lviv", population: 1500000}
    ]
};

function citiesCount(country) {
    var result = [];
    for (var j = 0; j < country.length; ++j) {
        result.push({countryName: country[j].countryName, citiesCount: country[j].city.length});
    }
    var finalResult = [];
    var temp = result[0].citiesCount;
    finalResult.push(result[0].countryName);
    for (var i = 1; i < result.length; ++i) {
        if (temp === result[i].citiesCount) {
            finalResult.push(result[i].countryName);
        }
        if (temp < result[i].citiesCount) {
            temp = result[i].citiesCount;
            finalResult = [];
            finalResult.push(result[i].countryName);
        }
    }
    return finalResult;
}

var countries = [country1, country2, country3];

var maxCitiesCountCountry = citiesCount(countries);
console.log(maxCitiesCountCountry.join(","));

function totalPopulationOfCountry(countries) {
    var result = [];
    for (var i = 0; i < countries.length; ++i) {
        var citiesPopulation = countries[i].city.reduce(function (sum, current) {
            return sum + current.population;
        }, 0);
        result.push({});
        result[i][countries[i].countryName] = citiesPopulation;
        citiesPopulation = 0;
    }
    return result;
}

var countriesPopulation = totalPopulationOfCountry(countries);