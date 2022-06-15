<template>
  <div id="hero_section_one" class="hero_section_one">
    <!-- START:: HERO SECTION CONTENT -->
    <div class="container">
      <div class="row">
        <!-- START:: TEXT SECTION -->
        <div class="col-md-6 order-2 order-md-1">
          <div class="hero_text_wrapper">
            <!-- ********** START:: TITLE ********** -->
            <h1 class="hero_title">Blink To Live</h1>
            <!-- ********** END:: TITLE ********** -->

            <!-- ********** START:: DESC ********** -->

            <div class="text_wrapper">
              our app comes to help those people listen and communicate by
              providing a portable and affordable solution for understanding
              sign language by developing a mobile application that precedes a
              way for sign language recognition using computer vision tech
              nology to translate signs into arabic language.
            </div>
            <!-- ********** END:: DESC ********** -->

            <!-- ********** START:: BUTTON ********** -->
            <!-- <div class="start_btn_wrapper">
              <button
                style="width: max-content"
                class="start_btn"
                @click="$router.push('/start-now')"
              >
                <template v-if="startNowText.length == 0">{{
                  $t("BUTTONS.start_now")
                }}</template>
                <template v-else>{{ startNowText }}</template>
              </button>
              <span>{{ $t("TITLES.translation") }}</span>
            </div> -->
            <!-- ********** END:: BUTTON ********** -->
          </div>
        </div>
        <!-- END:: TEXT SECTION -->

        <!-- START:: IMAGE SECTION -->
        <!-- <div class="col-md-6 order-1 order-md-2">
                    <div class="hero_image_wrapper">
                        <img
                            src="../../../assets/media/images/landing_one/hero_section_image.png"
                            alt="Hero Section Image"
                        />
                    </div>
                </div> -->
        <!-- END:: IMAGE SECTION -->
      </div>
    </div>
    <!-- END:: HERO SECTION CONTENT -->

    <!-- START:: SECTION SHAPES -->
    <span
      class="section_rectangle_shape"
      v-for="element in 10"
      :key="element"
    ></span>
    <!-- END:: SECTION SHAPES -->

    <!-- START:: MOUSE WRAPPER -->
    <div class="mouse_wrapper">
      <button class="scroll_btn" @click="scrollToSection('about_section_one')">
        <img
          src="../../../assets/media/icons/mouse.svg"
          width="30"
          height="40"
        />
      </button>
    </div>
    <!-- END:: MOUSE WRAPPER -->
  </div>
</template>

<script>
export default {
  name: "LandingOneHeroSection",

  props: {
    mainTitle: {
      type: String,
      required: true,
    },
    mainTitleDesc: {
      type: String,
      required: true,
    },
    startNowText: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      // START:: MODAL APPERANCE DATA
      FreeQuoteModalIsOpen: false,
      // END:: MODAL APPERANCE DATA
    };
  },

  methods: {
    // START:: SCROLL TO SECTION
    scrollToSection(section_id) {
      const selected_section = document.querySelector(`#${section_id}`);
      selected_section.scrollIntoView();
    },
    // END:: SCROLL TO SECTION
  },
};
</script>
