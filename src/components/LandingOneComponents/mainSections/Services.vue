<template>
  <div id="our_services_one" class="our_services_one">
    <div class="container">
      <!-- START:: SECTION TITLE -->
      <div class="title_wrapper">
        <h2>Our Book</h2>
        <span></span>
      </div>
      <!-- END:: SECTION TITLE -->

      <!-- START:: SERVICES CAROUSEL -->
      <div
        class="carousel_wrapper mt-5"
        :dir="getAppLocale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Carousel
          dir="ltr"
          :nav="false"
          :dots="true"
          :items="2"
          :margin="15"
          :loop="false"
          :autoplay="false"
          :autoplayTimeout="6000"
          :dragEndSpeed="2000"
          :smartSpeed="2000"
          :draggable="false"
          :responsive="{
            0: {
              items: 1,
            },
            750: {
              items: 2,
            },
            900: {
              items: 2,
            },
          }"
        >
          <!-- START:: SERVICE CARD -->
          <div class="service_card_wrapper">
            <a href="@/assets/Final app collection.pdf" download>
              <div class="card_icon">
                <img
                  src="../../../assets/media/icons/landing_one/transcription.svg"
                  alt="icon"
                  width="85"
                  height="85"
                />
              </div>
              <h4 class="card_header">Download</h4>
              <div class="card_text">
                provides Translation excellent quality and super fast results at
                the most competitive rates in the industry.
              </div>
            </a>
          </div>

          <div class="service_card_wrapper">
            <div class="card_icon">
              <img
                src="../../../assets/media/illustrations/start_now_image.svg"
                alt="icon"
                width="85"
                height="85"
              />
            </div>
            <h4 class="card_header">Try It Now!</h4>
            <div class="card_text">
              provides Translation excellent quality and super fast results at
              the most competitive rates in the industry.
            </div>
          </div>
          <!-- END:: SERVICE CARD -->
        </Carousel>
      </div>
      <!-- END:: SERVICES CAROUSEL -->
    </div>
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
  name: "LandingOneServicesSection",

  components: {
    Carousel,
  },

  props: {
    ourServices: {
      type: Array,
      required: true,
    },
    ourServiceTitle: {
      type: String,
      required: true,
    },
    ourServiceDesc: {
      type: String,
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
