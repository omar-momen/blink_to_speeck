<template :key="$route.path">
    <div class="landing_two">
        <!-- START:: HEADER -->
        <TheHeader :appActiveLang="activeLang" v-if="footerData" />
        <!-- END:: HEADER -->

        <!-- START:: ROUTER VIEW -->
        <router-view />
        <!-- END:: ROUTER VIEW -->

        <!-- START:: FOOTER -->
        <TheFooter :theFooterData="footerData" v-if="footerData" />
        <!-- END:: FOOTER -->
    </div>
</template>

<script>
// START:: IMPORTING LAYOUTS
import TheHeader from "../../components/LandingTwoComponents/layouts/TheHeader.vue";
import TheFooter from "../../components/LandingTwoComponents/layouts/TheFooter.vue";
// END:: IMPORTING LAYOUTS

export default {
    name: "LandingTwoHomePage",

    components: {
        TheHeader,
        TheFooter,
    },

    data() {
        return {
            // START:: ACTIVE LANG DATA
            activeLang: null,
            // END:: ACTIVE LANG DATA

            // START:: FOOTER DATA
            footerData: null,
            // END:: FOOTER DATA
        };
    },

    methods: {
        // START:: GET FOOTER CONTENT
        getFooterContent() {
            this.$axios({
                method: "GET",
                url: `footer`,
            })
                .then((res) => {
                    // console.log("FOOTER ==>", res.data.data);
                    this.activeLang = res.data.data.active_language;
                    this.footerData = res.data.data;
                })
                .catch((err) => {
                    console.log(err.response.data.message);
                });
        },
        // END:: GET FOOTER CONTENT
    },

    created() {
        // START:: FIRING METHODS
        this.getFooterContent();
        // END:: FIRING METHODS
    },
};
</script>
