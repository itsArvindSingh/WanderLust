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

const getCountryName = (code) => {
    return countries[code]?.name || code;
}

module.exports = {
    getCountryList,
    getSortedCountries,
    getCountryName
};