module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

    transpileDependencies: ["vuetify"],

    pluginOptions: {
        i18n: {
            locale: undefined,
            fallbackLocale: undefined,
            localeDir: undefined,
            enableInSFC: undefined,
        },
    },

    pwa: {
        iconPaths: {
            favicon32: "./public/favicon.ico",
            favicon16: "./public/favicon.ico",
            appleTouchIcon: "./public/favicon.ico",
            maskIcon: "./public/favicon.ico",
            msTileImage: "./public/favicon.ico",
        },
    },
};
