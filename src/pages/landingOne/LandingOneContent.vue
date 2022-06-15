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
        <AboutSection />
        <!-- END:: ABOUT SECTION -->

        <!-- START:: SERVICES SECTION -->
        <Services
          :ourServices="pageContent.services"
          :ourServiceTitle="pageContent.our_service_title"
          :ourServiceDesc="pageContent.our_service_desc"
        />
        <!-- END:: SERVICES SECTION -->

        <!-- START:: TESTIMONIALS SECTION -->
        <!-- <TestimonialsSection :customersSay="pageContent.customers_say" /> -->
        <!-- END:: TESTIMONIALS SECTION -->

        <!-- START:: CONTACT US SECTION -->
        <ContactUsSection />
        <!-- END:: CONTACT US SECTION -->

        <!-- START:: FREE QUOTE BUTTON -->
        <!-- <div class="free_quote_button_wrapper">
          <button @click="toggleFreeQuoteModal">
            <img
              src="../../assets/media/images/landing_one/icons/quotes.svg"
              alt="quotes"
              width="40"
              height="40"
            />
          </button>
        </div> -->
        <!-- END:: FREE QUOTE BUTTON -->

        <!-- START:: MODAL -->
        <!-- <FreeQuoteFormModal
          :modalApperanceData="FreeQuoteModalIsOpen"
          @controleModalApperance="toggleFreeQuoteModal"
        /> -->
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
import HeroSection from "../../components/LandingOneComponents/mainSections/HeroSection.vue";
import AboutSection from "../../components/LandingOneComponents/mainSections/AboutSection.vue";
import Services from "../../components/LandingOneComponents/mainSections/Services.vue";
// import TestimonialsSection from "../../components/LandingOneComponents/mainSections/TestimonialsSection.vue";
import ContactUsSection from "../../components/LandingOneComponents/mainSections/ContactUsSection.vue";
// END:: IMPORTING LANDING COMPONENTS

// import FreeQuoteFormModal from "../../components/modals/FreeQuoteFormModal.vue";

export default {
  name: "LandingOneContent",

  components: {
    MainLoader,
    HeroSection,
    AboutSection,
    Services,
    // TestimonialsSection,
    ContactUsSection,
    // FreeQuoteFormModal,
  },

  data() {
    return {
      // START:: MODAL APPERANCE DATA
      FreeQuoteModalIsOpen: false,
      // END:: MODAL APPERANCE DATA

      // START:: PAGE CONTENT DATA
      pageContent: null,
      // END:: PAGE CONTENT DATA
    };
  },

  methods: {
    // START:: TOGGLE MODAL
    toggleFreeQuoteModal() {
      this.FreeQuoteModalIsOpen = !this.FreeQuoteModalIsOpen;
    },
    // END:: TOGGLE MODAL

    // START:: GET PAGE CONTENT
    getPageContent() {
      this.$axios({
        method: "GET",
        url: `home`,
      })
        .then((res) => {
          // console.log(res.data.data);
          this.pageContent = res.data.data;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    // END:: GET PAGE CONTENT
  },

  created() {
    // START:: FIRING METHODS
    this.getPageContent();
    // END:: FIRING METHODS
  },
};
</script>
