export default {
    // START:: COUNTRIES GETTER
    countriesData(state) {
        return {
            allCountries: state.countries,
            selectedCountry: state.selectedCountryKey,
        };
    },
    // END:: COUNTRIES GETTER

    // START:: STUDY DEGREES GETTER
    studyDegreesData(state) {
        return state.studyDegrees;
    },
    // END:: STUDY DEGREES GETTER

    // START:: STUDY YEARS GETTER
    studyYearsData(state) {
        return state.studyYears;
    },
    // END:: STUDY YEARS GETTER

    // START:: GET SPACIALIZATION
    specializationsData(state) {
        return state.specializations;
    },
    // END:: GET SPACIALIZATION
};
