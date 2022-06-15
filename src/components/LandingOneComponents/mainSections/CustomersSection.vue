<template>
    <div id="our_customers_one" class="our_customers_one">
        <!-- START:: SECTION TITLE -->
        <div class="title_wrapper">
            <h2>{{ $t("TITLES.our_customers") }}</h2>
            <span></span>
        </div>
        <!-- END:: SECTION TITLE -->

        <!-- START:: CUSTOMERS CAROUSEL -->
        <div
            class="customers_carousel_wrapper mt-5"
            :dir="getAppLocale == 'ar' ? 'rtl' : 'ltr'"
        >
            <!-- START:: DUMMY DATA -->
            <div class="container" v-if="customers.length == 0">
                <Carousel
                    dir="ltr"
                    :nav="false"
                    :dots="false"
                    :items="4"
                    :margin="15"
                    :loop="true"
                    :autoplay="true"
                    :autoplayTimeout="6000"
                    :dragEndSpeed="2000"
                    :smartSpeed="2000"
                    :responsive="{
                        0: {
                            items: 2,
                        },
                        750: {
                            items: 2,
                        },
                        900: {
                            items: 4,
                        },
                    }"
                >
                    <!-- START:: SERVICE CARD -->
                    <div class="customer_logo_wrapper">
                        <img
                            src="../../../assets/media/images/logos/logo1.png"
                            alt="Customer Name"
                            width="120"
                            height="120"
                        />
                    </div>
                    <!-- END:: SERVICE CARD -->

                    <!-- START:: SERVICE CARD -->
                    <div class="customer_logo_wrapper">
                        <img
                            src="../../../assets/media/images/logos/logo2.png"
                            alt="Customer Name"
                            width="120"
                            height="120"
                        />
                    </div>
                    <!-- END:: SERVICE CARD -->

                    <!-- START:: SERVICE CARD -->
                    <div class="customer_logo_wrapper">
                        <img
                            src="../../../assets/media/images/logos/logo3.png"
                            alt="Customer Name"
                            width="120"
                            height="120"
                        />
                    </div>
                    <!-- END:: SERVICE CARD -->

                    <!-- START:: SERVICE CARD -->
                    <div class="customer_logo_wrapper">
                        <img
                            src="../../../assets/media/images/logos/logo4.png"
                            alt="Customer Name"
                            width="120"
                            height="120"
                        />
                    </div>
                    <!-- END:: SERVICE CARD -->
                </Carousel>
            </div>
            <!-- END:: DUMMY DATA -->

            <!-- START:: API DATA -->
            <div class="container" v-else>
                <Carousel
                    dir="ltr"
                    :nav="false"
                    :dots="false"
                    :items="4"
                    :margin="15"
                    :loop="true"
                    :autoplay="true"
                    :autoplayTimeout="6000"
                    :dragEndSpeed="2000"
                    :smartSpeed="2000"
                    :responsive="{
                        0: {
                            items: 2,
                        },
                        750: {
                            items: 2,
                        },
                        900: {
                            items: 4,
                        },
                    }"
                >
                    <!-- START:: SERVICE CARD -->
                    <div
                        class="customer_logo_wrapper"
                        v-for="item in customers"
                        :key="item.id"
                    >
                        <img :src="item.image" width="120" height="120" />
                    </div>
                    <!-- END:: SERVICE CARD -->
                </Carousel>
            </div>
            <!-- END:: API DATA -->
        </div>
        <!-- END:: CUSTOMERS CAROUSEL -->
    </div>
</template>

<script>
// START:: IMPORTING VUEX HELPERS
import { mapGetters } from "vuex";
// END:: IMPORTING VUEX HELPERS

// START:: IMPORTING OWL CAROUSEL
import Carousel from "vue-owl-carousel";
// END:: IMPORTING OWL CAROUSEL

export default {
    name: "LandingOneCustomersSection",

    components: {
        Carousel,
    },

    props: {
        customers: {
            type: Array,
            required: true,
        },
    },

    computed: {
        // START:: VUEX GET APP LANG
        ...mapGetters("AppLangModule", ["getAppLocale"]),
        // END:: VUEX GET APP LANG
    },
};
</script>
