export default {
    // START:: SET COUNTRIES
    setCountries(state, payload) {
        state.countries = payload;
        state.selectedCountryKey = payload[0];
    },
    // END:: SET COUNTRIES

    // START:: SET STUDY DEGREES
    setStudyDegrees(state, payload) {
        state.studyDegrees = payload;
    },
    // END:: SET STUDY DEGREES

    // START:: SET STUDY YEARS
    setStudyYears(state, payload) {
        state.studyYears = payload;
    },
    // END:: SET STUDY YEARS

    // START:: SET SPACIALIZATION
    setSpecializations(state, payload) {
        state.specializations = payload;
    },
    // END:: SET SPACIALIZATION
};
