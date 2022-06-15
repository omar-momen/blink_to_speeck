<template>
  <nav id="navbar" class="landing_one_header">
    <!-- START:: SEARCH -->
    <div class="container">
      <div class="navbar_wrapper">
        <!-- START:: LOGO -->
        <div class="logo_wrapper">
          <router-link class="logo_wrapper" to="/">
            <img
              src="../../../assets/media/logo/logo.svg"
              alt="Langlark App Logo"
              width="81"
              height="67"
            />
          </router-link>
        </div>
        <!-- END:: LOGO -->

        <!-- START:: NAVBAR LINKS -->
        <div class="links_wrapper">
          <!-- eslint-disable  -->
          <ul class="navbar_links_wrapper">
            <li class="navbar_link">
              <button
                class="active"
                @click="scrollToSection('hero_section_one')"
              >
                {{ $t("NAVBAR.home") }}
              </button>
            </li>

            <li class="navbar_link">
              <button @click="scrollToSection('about_section_one')">
                {{ $t("NAVBAR.about_us") }}
              </button>
            </li>

            <li class="navbar_link">
              <button @click="scrollToSection('our_services_one')">
                The Book
              </button>
            </li>

            <!-- <li class="navbar_link">
              <button @click="scrollToSection('testimonials_one')">
                {{ $t("NAVBAR.customers") }}
              </button>
            </li> -->

            <li class="navbar_link">
              <button @click="scrollToSection('contact_us_one')">
                {{ $t("NAVBAR.contact_us") }}
              </button>
            </li>
          </ul>
          <!-- eslint-enable -->
        </div>
        <!-- END:: NAVBAR LINKS -->

        <!-- START:: NAVBAR BUTTONS -->
        <div class="navbar_btns_wrapper">
          <!-- <div class="search_form">
                        <form>
                            <div class="input_wrapper search_input_wrapper">
                                <input
                                    type="text"
                                    class="form-control"
                                    :placeholder="$t('PLACEHOLDERS.search')"
                                />

                                <button class="search_btn">
                                    <i class="fal fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div> -->
          <!-- END:: SEARCH FORM -->

          <!-- START:: CHANGE THEME BUTTON -->
          <!-- <button class="theme_changer" @click="changeAppTheme">
                        <i
                            class="fal fa-moon"
                            v-if="getAppTheme == 'light_theme'"
                        ></i>
                        <i class="fal fa-sun" v-else></i>
                        <span class="toolTip">
                            {{ $t("TOOLTIPS.change_theme") }}
                        </span>
                    </button> -->
          <!-- END:: CHANGE THEME BUTTON -->

          <!-- START:: LOCATION BUTTON -->
          <!-- <button class="location_button">
                        <i class="fal fa-map-marker-alt"></i>
                    </button> -->
          <!-- END:: LOCATION BUTTON -->

          <!-- START:: LANGUAGE MENU BUTTON -->
          <!-- <div class="lang_menu_wrapper">
            <button class="lang_menu_btn" @click.stop="toggleLangMenu">
              <div class="selected_lang_wrapper">
                <div class="icons_wrapper">
                  <span>
                    <i class="fal fa-globe"></i>
                  </span>
                  <span>
                    <i
                      class="fal fa-angle-down"
                      :class="{
                        rotate_arrow: langMenuIsOpen,
                      }"
                    ></i>
                  </span>
                </div>

                <div class="lang_flag_wrapper">
                  <img
                    src="../../../assets/media/flags/eng_flag.png"
                    width="30"
                    height="20"
                    v-if="getAppLocale == 'en'"
                  />
                  <img
                    src="../../../assets/media/flags/ar_flag.png"
                    width="30"
                    height="20"
                    v-else
                  />
                </div>
              </div>
            </button>

            <transition name="fadeInUp" mode="out-in">
              <ul
                class="user_profile_menu"
                v-if="langMenuIsOpen && appActiveLang == 'both'"
              >
                <li
                  class="lang_menu_item"
                  @click.stop="
                    toggleLangMenu();
                    changeAppLanguage({
                      newLang: 'en',
                      firedInMounted: false,
                    });
                  "
                >
                  <button>
                    <div class="lang_wrapper">
                      <img
                        src="../../../assets/media/flags/eng_flag.png"
                        width="30"
                        height="20"
                      />
                      <span>
                        {{ $t("NAVBAR.english") }}
                      </span>
                    </div>
                  </button>
                </li>

                <li
                  class="lang_menu_item"
                  @click.stop="
                    toggleLangMenu();
                    changeAppLanguage({
                      newLang: 'ar',
                      firedInMounted: false,
                    });
                  "
                >
                  <button>
                    <div class="lang_wrapper">
                      <img
                        src="../../../assets/media/flags/ar_flag.png"
                        width="30"
                        height="20"
                      />
                      <span>
                        {{ $t("NAVBAR.arabic") }}
                      </span>
                    </div>
                  </button>
                </li>
              </ul>
            </transition>
          </div> -->
          <!-- END:: LANGUAGE MENU BUTTON -->

          <!-- START:: SMALL SCREENS NAVBAR MENU BUTTON -->
          <button
            class="small_screens_navbar_toggeler"
            @click="toggleSmallScreensNavBar"
          >
            <i class="fal fa-bars"></i>
          </button>
          <!-- END:: SMALL SCREENS NAVBAR MENU BUTTON -->
        </div>
        <!-- START:: NAVBAR BUTTONS -->
      </div>
    </div>

    <!-- START:: SMALL SCREENS NAVBAR -->
    <div
      class="small_screens_navbar_wrapper"
      :class="{ active: smallScreensNavbarIsOpen }"
    >
      <!-- START:: CLOSE BUTTON -->
      <button class="close_btn" @click="toggleSmallScreensNavBar">
        <i class="fal fa-times"></i>
      </button>
      <!-- END:: CLOSE BUTTON -->

      <!-- START:: LINKS -->
      <ul class="small_screens_links">
        <li>
          <button
            class="active"
            @click="
              toggleSmallScreensNavBar();
              scrollToSection('hero_section_one');
            "
          >
            {{ $t("NAVBAR.home") }}
          </button>
        </li>

        <li>
          <button
            @click="
              toggleSmallScreensNavBar();
              scrollToSection('about_section_one');
            "
          >
            {{ $t("NAVBAR.about_us") }}
          </button>
        </li>

        <li>
          <button
            @click="
              toggleSmallScreensNavBar();
              scrollToSection('our_services_one');
            "
          >
            {{ $t("NAVBAR.services") }}
          </button>
        </li>

        <li>
          <button
            @click="
              toggleSmallScreensNavBar();
              scrollToSection('testimonials_one');
            "
          >
            {{ $t("NAVBAR.customers") }}
          </button>
        </li>

        <li>
          <button
            @click="
              toggleSmallScreensNavBar();
              scrollToSection('contact_us_one');
            "
          >
            {{ $t("NAVBAR.contact_us") }}
          </button>
        </li>
      </ul>
      <!-- END:: LINKS -->
    </div>
    <!-- END:: SMALL SCREENS NAVBAR -->
  </nav>
</template>

<script>
// START:: IMPORTING VUEX HELPERS
import { mapGetters, mapActions } from "vuex";
// END:: IMPORTING VUEX HELPERS

export default {
  name: "TheHeader",

  props: {
    appActiveLang: {
      type: String,
      required: true,
    },
  },

  computed: {
    // START:: VUEX GET APP THEME
    ...mapGetters("AppThemeModule", ["getAppTheme"]),
    // END:: VUEX GET APP THEME

    // START:: VUEX GET APP LANG
    ...mapGetters("AppLangModule", ["getAppLocale"]),
    // END:: VUEX GET APP LANG
  },

  data() {
    return {
      // START:: SMALL SCREENS NAVBAR APPERANCE DATA
      smallScreensNavbarIsOpen: false,
      // END:: SMALL SCREENS NAVBAR APPERANCE DATA

      // START:: USER PROFILE MENU APPERANCE DATA
      langMenuIsOpen: false,
      // END:: USER PROFILE MENU APPERANCE DATA
    };
  },

  methods: {
    // START:: VUEX APP LANG ACTIONS
    ...mapActions("AppLangModule", ["changeAppLanguage"]),
    // END:: VUEX APP LANG ACTIONS

    // START:: VUEX  APP THEME ACTIONS
    ...mapActions("AppThemeModule", ["changeAppTheme"]),
    // END:: VUEX APP THEME ACTIONS

    // START:: TOGGLE SMALL SCREENS NAVBAR
    toggleSmallScreensNavBar() {
      this.smallScreensNavbarIsOpen = !this.smallScreensNavbarIsOpen;
    },
    // END:: TOGGLE SMALL SCREENS NAVBAR

    // START:: TOGGLE PROFILE MENU
    toggleLangMenu() {
      this.langMenuIsOpen = !this.langMenuIsOpen;
    },
    // END:: TOGGLE PROFILE MENU

    // START:: SCROLL TO SECTION
    scrollToSection(section_id) {
      if (this.$route.path.includes("/start-now")) {
        this.$router.push("/");
      } else {
        const selected_section = document.querySelector(`#${section_id}`);
        selected_section.scrollIntoView();
      }
    },
    // END:: SCROLL TO SECTION
  },

  created() {
    window.addEventListener("click", () => {
      this.langMenuIsOpen = false;
      this.notificationsMenuIsOpen = false;
    });
  },

  mounted() {
    if (this.appActiveLang != "both") {
      this.changeAppLanguage({
        newLang: this.appActiveLang,
        firedInMounted: true,
      });
    }
  },
};
</script>
