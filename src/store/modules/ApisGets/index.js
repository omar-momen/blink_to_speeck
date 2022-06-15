import ApiGetsMutations from "./mutations";
import ApiGetsActions from "./actions.js";
import ApiGetsGetters from "./getters.js";

export default {
    namespaced: true,
    state: {
        // START:: COUNTRIES
        countries: null,
        selectedCountryKey: null,
        // END:: COUNTRIES

        // START:: STUDY DEGREES DATA
        studyDegrees: null,
        // END:: STUDY DEGREES DATA

        // START:: STUDY YEARS  DATA
        studyYears: [],
        // END:: STUDY YEARS  DATA

        // START:: SPACIALIZATION
        specializations: [],
        // END:: SPACIALIZATION
    },
    mutations: ApiGetsMutations,
    actions: ApiGetsActions,
    getters: ApiGetsGetters,
};
