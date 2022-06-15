// START:: IMPORTING I18N
import i18n from "../../../i18n";
// END:: IMPORTING I18N

export default {
    // START:: SET APP LOCALE
    setAppLocale(context, payload) {
        localStorage.setItem("langlark_app_lang", payload);
        context.commit("setAppLocale", payload);
    },
    // END:: SET APP LOCALE

    // START:: HANDEL DEFAULT APP LANGUAGE
    handelAppDefaultLanguage(context) {
        if (!context.getters.getAppLocale) {
            context.dispatch("setAppLocale", "en");
            i18n.locale = "en";
            document.querySelector("body").setAttribute("dir", "ltr");
        } else {
            i18n.locale = context.getters.getAppLocale;
            if (context.getters.getAppLocale == "en") {
                document.querySelector("body").setAttribute("dir", "ltr");
            } else {
                document.querySelector("body").setAttribute("dir", "rtl");
            }
        }
    },
    // END:: HANDEL DEFAULT APP LANGUAGE

    // START:: HANDLING APP LANGUAGE CHANGE
    changeAppLanguage(context, payload) {
        if (payload.newLang == "en") {
            context.dispatch("setAppLocale", "en");
            i18n.locale = context.getters.getAppLocale;
            document.querySelector("body").setAttribute("dir", "ltr");
            if (payload.iredInMounted == false) {
                location.reload();
            }
        } else if (payload.newLang == "ar") {
            context.dispatch("setAppLocale", "ar");
            i18n.locale = context.getters.getAppLocale;
            document.querySelector("body").setAttribute("dir", "rtl");
            if (payload.iredInMounted == false) {
                location.reload();
            }
        }
    },
    // END:: HANDLING APP LANGUAGE CHANGE
};
