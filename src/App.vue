<template>
  <v-app>
    <transition name="fadeInUp" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
// START:: IMPORTING VUEX HELPERS
import { mapGetters, mapActions } from "vuex";
// START:: IMPORTING VUEX HELPERS

export default {
  name: "App",

  // START:: VUE-META
  metaInfo: {
    meta: [
      {
        name: "description",
        content: "Langlark App Description Will Go Here",
      },
    ],
  },
  // END:: VUE-META

  computed: {
    // START:: VUEX GET APP THEME
    ...mapGetters("AppThemeModule", ["getAppTheme"]),
    // END:: VUEX GET APP THEME
  },

  methods: {
    // START:: VUEX  APP LANGUAGE ACTIONS
    ...mapActions("AppLangModule", ["handelAppDefaultLanguage"]),
    // END:: VUEX APP LANGUAGE ACTIONS

    // START:: VUEX  APP THEME ACTIONS
    ...mapActions("AppThemeModule", ["handelAppDefaultTheme"]),
    // END:: VUEX APP THEME ACTIONS

    // START:: STICKY NAVBAR METHOD
    stickyNavbar() {
      let theNavBar = document.querySelector("#navbar");
      let navBarHeight = theNavBar.clientHeight;
      window.addEventListener("scroll", () => {
        if (window.scrollY > navBarHeight + 5) {
          theNavBar.classList.add("sticky_navbar");
          document.querySelector("body").style.paddingTop = navBarHeight + "px";
        } else {
          theNavBar.classList.remove("sticky_navbar");
          document.querySelector("body").style.paddingTop = 0;
        }
      });
    },
    // END:: STICKY NAVBAR METHOD

    // START:: GET SELECTED DESIGN
    getSelectedAppDesign() {
      this.$route.path == "/" ? "" : this.$router.replace("/");
    },
    // END:: GET SELECTED DESIGN
  },

  created() {
    // START:: SET APP DEFAULT LANGUAGE
    this.handelAppDefaultLanguage();
    // END:: SET APP DEFAULT LANGUAGE

    // START:: SET APP DEFAULT THEME
    this.handelAppDefaultTheme();
    // END:: SET APP DEFAULT THEME

    // START:: FIRING METHODS
    this.getSelectedAppDesign();
    // END:: FIRING METHODS
  },

  mounted() {
    // START:: STICKY NAVBAR
    // this.stickyNavbar();
    // END:: STICKY NAVBAR
  },
};
</script>
