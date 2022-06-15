<template>
  <div id="contact_us_one" class="contact_us_one">
    <div class="container">
      <div class="row">
        <!-- START:: SECTION IMAGE -->
        <div class="col-lg-6 my-6">
          <div class="section_image_wrapper">
            <img
              src="../../../assets/media/images/landing_one/contact.jpg"
              alt="Contact Us Section Image"
              width="180"
              height="180"
            />
          </div>
        </div>
        <!-- END:: SECTION IMAGE -->

        <!-- START:: CONTACT FORM -->
        <div class="col-lg-6 my-6">
          <div class="contact_form_wrapper">
            <!-- START:: SECTION TITLE -->
            <div class="title_wrapper">
              <h2>{{ $t("TITLES.contact_us") }}</h2>
              <span></span>
            </div>
            <!-- END:: SECTION TITLE -->

            <!-- START:: SUBTITLE -->
            <div class="subtitle mb-2" v-if="!sectionDesc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </div>

            <div class="subtitle mb-2" v-else>
              {{ sectionDesc }}
            </div>
            <!-- END:: SUBTITLE -->

            <!-- START:: CONTACT FORM -->
            <form @submit.prevent="validateContactFormInputs">
              <div class="row">
                <!-- START:: NAME INPUT GROUP -->
                <div class="col-lg-12 my-3">
                  <div class="input_wrapper">
                    <input
                      type="text"
                      class="form-control"
                      :placeholder="$t('PLACEHOLDERS.name')"
                      v-model.trim="contactFormData.name"
                    />
                  </div>
                </div>
                <!-- END:: NAME INPUT GROUP -->

                <!-- START:: PHONE INPUT GROUP -->
                <div class="col-lg-12 my-3">
                  <div class="input_wrapper">
                    <input
                      type="email"
                      class="form-control"
                      :placeholder="$t('PLACEHOLDERS.email')"
                      v-model.trim="contactFormData.email"
                    />
                  </div>
                </div>
                <!-- END:: PHONE INPUT GROUP -->

                <!-- START:: MESSAGE INPUT GROUP -->
                <div class="col-lg-12 my-3">
                  <div class="input_wrapper">
                    <textarea
                      class="form-control"
                      :placeholder="$t('PLACEHOLDERS.message')"
                      v-model.trim="contactFormData.message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <!-- END:: MESSAGE INPUT GROUP -->

                <!-- START:: SUBMIT BUTTON WRAPPER -->
                <div class="btn_wrapper">
                  <button>
                    {{ $t("BUTTONS.send") }}
                    <span class="btn_loader" v-if="isWaitingRequest"></span>
                  </button>
                </div>
                <!-- END:: SUBMIT BUTTON WRAPPER -->
              </div>
            </form>
            <!-- END:: CONTACT FORM -->
          </div>
        </div>
        <!-- END:: CONTACT FORM -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingOneContactUsSection",

  data() {
    return {
      // START:: LOADER HANDLING DATA
      isWaitingRequest: false,
      // END:: LOADER HANDLING DATA

      // START:: SECTION DESC DATA
      sectionDesc: null,
      // END:: SECTION DESC DATA

      // START:: CONTACT FORM DATA
      contactFormData: {
        name: null,
        email: null,
        message: null,
      },
      // END:: CONTACT FORM DATA
    };
  },

  methods: {
    // START:: GET SECTION DESCRIPTION
    getSectionDesc() {
      this.$axios({
        method: "GET",
        url: `footer`,
      })
        .then((res) => {
          this.sectionDesc = res.data.data.contact_title;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    // END:: GET SECTION DESCRIPTION

    // START:: VALIDATE CONTACT FORM INPUTS
    validateContactFormInputs() {
      this.isWaitingRequest = true;

      if (!this.contactFormData.name) {
        this.isWaitingRequest = false;
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("VALIDATION.name"),
          messageSize: "22",
          position: this.$t("iziToastConfigs.position"),
          rtl: this.$t("iziToastConfigs.dir"),
        });
        return;
      } else if (!this.contactFormData.email) {
        this.isWaitingRequest = false;
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("VALIDATION.email"),
          messageSize: "22",
          position: this.$t("iziToastConfigs.position"),
          rtl: this.$t("iziToastConfigs.dir"),
        });
        return;
      } else if (!this.contactFormData.message) {
        this.isWaitingRequest = false;
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("VALIDATION.message"),
          messageSize: "22",
          position: this.$t("iziToastConfigs.position"),
          rtl: this.$t("iziToastConfigs.dir"),
        });
        return;
      } else {
        this.submitContactForm();
      }
    },
    // END:: VALIDATE CONTACT FORM INPUTS

    // START:: SUBMIT CONTACT FORM
    submitContactForm() {
      this.isWaitingRequest = true;

      const theData = new FormData();
      // START:: APPEND CONTACT DATA
      theData.append("fullname", this.contactFormData.name);
      theData.append("email", this.contactFormData.email);
      theData.append("content", this.contactFormData.message);
      // END:: APPEND CONTACT DATA

      // START:: SEND REQUEST
      this.$axios({
        method: "POST",
        url: "contact",
        data: theData,
      })
        .then(() => {
          this.isWaitingRequest = false;
          this.$iziToast.success({
            timeout: 2000,
            message: this.$t("MESSAGES.sent_successfully"),
            messageSize: "22",
            position: this.$t("iziToastConfigs.position"),
            rtl: this.$t("iziToastConfigs.dir"),
          });
          this.clearContactFormData();
        })
        .catch((err) => {
          this.isWaitingRequest = false;
          this.$iziToast.error({
            timeout: 2000,
            message: err.response.data.message,
            messageSize: "22",
            position: this.$t("iziToastConfigs.position"),
            rtl: this.$t("iziToastConfigs.dir"),
          });
        });
      // END:: SEND REQUEST
    },
    // END:: SUBMIT CONTACT FORM

    // START:: CLEAR FORM INPUTS DATA
    clearContactFormData() {
      this.contactFormData.name = null;
      this.contactFormData.email = null;
      this.contactFormData.message = null;
    },
    // END:: CLEAR FORM INPUTS DATA
  },

  created() {
    // START:: FIRE METHODS
    this.getSectionDesc();
    // END:: FIRE METHODS
  },
};
</script>
