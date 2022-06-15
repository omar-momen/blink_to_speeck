<template>
  <footer class="landing_one_footer">
    <div class="container">
      <div class="footer_content">
        <div class="row justify-content-between">
          <div class="col-lg-2 my-3">
            <!-- START:: FOOTER LOGO -->
            <div class="logo_wrapper">
              <img
                src="../../../assets/media/logo/logo_light.svg"
                alt="Langlark App Logo"
                width="150"
                height="120"
              />
            </div>
            <!-- END:: FOOTER LOGO -->
          </div>

          <div class="col-lg-10 my-3">
            <div class="links_wrapper">
              <div class="wrapper">
                <h4>{{ $t("TITLES.essential_links") }}</h4>
                <ul class="footer_links_wrapper">
                  <li class="footer_link">
                    <button
                      class="active"
                      @click="scrollToSection('hero_section_one')"
                    >
                      {{ $t("FOOTER.home") }}
                    </button>
                  </li>

                  <li class="footer_link">
                    <button @click="scrollToSection('about_section_one')">
                      {{ $t("FOOTER.about_us") }}
                    </button>
                  </li>

                  <li class="footer_link">
                    <button @click="scrollToSection('our_services_one')">
                      {{ $t("FOOTER.services") }}
                    </button>
                  </li>
                </ul>
              </div>

              <div class="wrapper">
                <h4>{{ $t("TITLES.services") }}</h4>
                <ul class="footer_links_wrapper">
                  <li class="footer_link">
                    <a href="@/assets/Final app collection.pdf" download>
                      Download Book
                    </a>
                  </li>

                  <li class="footer_link">
                    <a href="#"> Try It </a>
                  </li>
                </ul>
              </div>

              <div class="wrapper">
                <h4>{{ $t("TITLES.contact_us") }}</h4>
                <ul class="footer_contact_data_wrapper">
                  <li class="footer_contact_item">
                    <span class="icon">
                      <i class="fal fa-phone-alt"></i>
                    </span>

                    <div class="text">+02 256- 362-07</div>
                  </li>

                  <li class="footer_contact_item">
                    <span class="icon">
                      <i class="fal fa-envelope"></i>
                    </span>

                    <div class="text">info@gmail.com</div>
                  </li>

                  <li class="footer_contact_item">
                    <span class="icon">
                      <i class="fal fa-map-marker-alt"></i>
                    </span>

                    <div class="text">Egypt , Manosura</div>
                  </li>

                  <li class="footer_contact_item">
                    <div class="social">
                      <a href="https://facebook.com">
                        <i class="fab fa-facebook-square"></i>
                      </a>

                      <a href="https://linkedin.com">
                        <i class="fab fa-linkedin"></i>
                      </a>

                      <a href="https://twitter.com">
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// START:: IMPORTING VUEX HELPERS
import { mapGetters } from "vuex";
// END:: IMPORTING VUEX HELPERS

export default {
  name: "TheFooter",

  props: {
    theFooterData: {
      type: Object,
      required: true,
    },
  },

  computed: {
    // START:: VUEX GET AUTHENTICATED USER DATA
    ...mapGetters("AuthenticationModule", ["getAuthenticatedUserData"]),
    // END:: VUEX GET AUTHENTICATED USER DATA
  },

  data() {
    return {
      // START:: CURRENT YEAR DATA
      currentYear: new Date().getFullYear(),
      // END:: CURRENT YEAR DATA
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
