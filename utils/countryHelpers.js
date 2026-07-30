const { countries } = require("countries-list");

const getCountryList = () => {
    return Object.keys(countries).map(code => ({
        code: code,
        name: countries[code].name
    }));
};

const getSortedCountries = () => {
    const countryList = getCountryList();
    return countryList.sort((a, b) => a.name.localeCompare(b.name));
};

module.exports = {
    getCountryList,
    getSortedCountries
};