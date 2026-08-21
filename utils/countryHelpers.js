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

const getCountryCode = (name) => {
    const code = Object.keys(countries).find(
        key => countries[key].name.toLowerCase() === name.toLowerCase()
    );
    return code;
}

module.exports = {
    getCountryList,
    getSortedCountries,
    getCountryName,
    getCountryCode
};