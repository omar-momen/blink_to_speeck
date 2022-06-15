// START:: IMPORTING AXIOS
import axios from "axios";
// END:: IMPORTING AXIOS

export default {
    // START:: GET COUNTRIES
    getCountries(context) {
        axios
            .get("countries", {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("langlark_user_token"),
                    "Accept-language": localStorage.getItem(
                        "langlark_app_lang"
                    ),
                    "cache-control": "no-cache",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                context.commit("setCountries", res.data.data);
            });
    },
    // END:: GET COUNTRIES

    // START:: GET STUDY DEGREES
    getStudyDegrees(context) {
        axios
            .get("degrees", {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("langlark_user_token"),
                    "Accept-language": localStorage.getItem(
                        "langlark_app_lang"
                    ),
                    "cache-control": "no-cache",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                context.commit("setStudyDegrees", res.data.data);
            });
    },
    // END:: GET STUDY DEGREES

    // START:: GET STUDY YEARS
    getStudyYears(context, payload) {
        axios
            .get(`academic-years/${payload}`, {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("langlark_user_token"),
                    "Accept-language": localStorage.getItem(
                        "langlark_app_lang"
                    ),
                    "cache-control": "no-cache",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                context.commit("setStudyYears", res.data.data);
            });
    },
    // END:: GET STUDY YEARS

    // START:: GET SPECIALIZATION
    getSpecializations(context, payload) {
        axios
            .get(`specializations/${payload}`, {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("langlark_user_token"),
                    "Accept-language": localStorage.getItem(
                        "langlark_app_lang"
                    ),
                    "cache-control": "no-cache",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                context.commit("setSpecializations", res.data.data);
            });
    },
    // END:: GET SPECIALIZATION
};
