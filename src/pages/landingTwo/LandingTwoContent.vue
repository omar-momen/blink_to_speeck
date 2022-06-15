<template>
    <div>
        <transition name="fadeInUp" mode="in-out">
            <MainLoader v-if="!pageContent" />

            <div v-else>
                <!-- START:: HERO SECTION -->
                <HeroSection
                    :mainTitle="pageContent.main_title"
                    :mainTitleDesc="pageContent.main_title_desc"
                    :startNowText="pageContent.start_now"
                />
                <!-- END:: HERO SECTION -->

                <!-- START:: ABOUT SECTION -->
                <AboutSection
                    :aboutTitle="pageContent.about_title"
                    :aboutDesc="pageContent.about_desc"
                />
                <!-- END:: ABOUT SECTION -->

                <!-- START:: SERVICES SECTION -->
                <Services
                    :ourServices="pageContent.services"
                    :ourServiceTitle="pageContent.our_service_title"
                    :ourServiceDesc="pageContent.our_service_desc"
                />
                <!-- END:: SERVICES SECTION -->

                <!-- START:: TESTIMONIALS SECTION -->
                <TestimonialsSection
                    :customersSay="pageContent.customers_say"
                />
                <!-- END:: TESTIMONIALS SECTION -->

                <!-- START:: CUSTOMERS SECTION -->
                <CustomersSection :customers="pageContent.customers" />
                <!-- END:: CUSTOMERS SECTION -->

                <!-- START:: CONTACT US SECTION -->
                <ContactUsSection />
                <!-- END:: CONTACT US SECTION -->

                <!-- START:: FREE QUOTE BUTTON -->
                <div class="free_quote_button_wrapper">
                    <button @click="toggleFreeQuoteModal">
                        {{ $t("BUTTONS.free_quote") }}
                    </button>
                </div>
                <!-- END:: FREE QUOTE BUTTON -->

                <!-- START:: MODAL -->
                <FreeQuoteFormModal
                    :modalApperanceData="FreeQuoteModalIsOpen"
                    @controleModalApperance="toggleFreeQuoteModal"
                />
                <!-- END:: MODAL -->
            </div>
        </transition>
    </div>
</template>

<script>
// START:: IMPORTING MAIN LOADER
import MainLoader from "@/components/ui/loaders/MainLoader.vue";
// END:: IMPORTING MAIN LOADER

// START:: IMPORTING LANDING COMPONENTS
import HeroSection from "../../components/LandingTwoComponents/mainSections/HeroSection.vue";
import AboutSection from "../../components/LandingTwoComponents/mainSections/AboutSection.vue";
import Services from "../../components/LandingTwoComponents/mainSections/Services.vue";
import TestimonialsSection from "../../components/LandingTwoComponents/mainSections/TestimonialsSection.vue";
import CustomersSection from "../../components/LandingTwoComponents/mainSections/CustomersSection.vue";
import ContactUsSection from "../../components/LandingTwoComponents/mainSections/ContactUsSection.vue";
// END:: IMPORTING LANDING COMPONENTS

import FreeQuoteFormModal from "../../components/modals/FreeQuoteFormModal.vue";

export default {
    name: "LandingTwoContent",

    components: {
        MainLoader,
        HeroSection,
        AboutSection,
        Services,
        TestimonialsSection,
        CustomersSection,
        ContactUsSection,
        FreeQuoteFormModal,
    },

    data() {
        return {
            // START:: MODAL APPERANCE DATA
            FreeQuoteModalIsOpen: false,
            // END:: MODAL APPERANCE DATA

            // START:: PAGE CONTENT DATA
            pageContent: null,
            // END:: PAGE CONTENT DATA

            // START:: GET PAGE CONTENT
            getPageContent() {
                this.$axios({
                    method: "GET",
                    url: `home`,
                })
                    .then((res) => {
                        this.pageContent = res.data.data;
                    })
                    .catch((err) => {
                        console.log(err.response.data.message);
                    });
            },
            // END:: GET PAGE CONTENT
        };
    },

    methods: {
        // START:: TOGGLE MODAL
        toggleFreeQuoteModal() {
            this.FreeQuoteModalIsOpen = !this.FreeQuoteModalIsOpen;
        },
        // END:: TOGGLE MODAL
    },

    created() {
        // START:: FIRING METHODS
        this.getPageContent();
        // END:: FIRING METHODS
    },
};
</script>
