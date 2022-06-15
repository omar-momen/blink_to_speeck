<template>
    <div class="free_quote_modal_wrapper">
        <BaseModal
            :show="modalApperanceData"
            @controleModalApperance="controleModalApperance"
        >
            <template #modal>
                <div class="free_quote_item_wrapper">
                    <!-- START:: TITLE MODAL TITLE -->
                    <div class="modal_title">
                        <h2>{{ $t("TITLES.free_quote") }}</h2>
                    </div>
                    <!-- END:: TITLE MODAL TITLE -->

                    <!-- START:: FORM -->
                    <form @submit.prevent="validateFormInputs">
                        <div class="row">
                            <!-- START:: NAME INPUT GROUP -->
                            <div class="col-lg-6 my-3">
                                <div class="input_wrapper">
                                    <input
                                        type="text"
                                        class="form-control"
                                        :placeholder="$t('PLACEHOLDERS.name')"
                                        v-model.trim="freeQuoteData.name"
                                    />
                                </div>
                            </div>
                            <!-- END:: NAME INPUT GROUP -->

                            <!-- START:: NAME INPUT GROUP -->
                            <div class="col-lg-6 my-3">
                                <div class="input_wrapper">
                                    <input
                                        type="text"
                                        class="form-control"
                                        :placeholder="
                                            $t('PLACEHOLDERS.company_name')
                                        "
                                        v-model.trim="freeQuoteData.companyName"
                                    />
                                </div>
                            </div>
                            <!-- END:: NAME INPUT GROUP -->

                            <!-- START:: EMAIL INPUT GROUP -->
                            <div class="col-lg-6 my-3">
                                <div class="input_wrapper">
                                    <input
                                        type="email"
                                        class="form-control"
                                        :placeholder="$t('PLACEHOLDERS.email')"
                                        v-model.trim="freeQuoteData.email"
                                    />
                                </div>
                            </div>
                            <!-- END:: EMAIL INPUT GROUP -->

                            <!-- START:: PHONE INPUT GROUP -->
                            <div class="col-lg-6 my-3">
                                <div class="input_wrapper">
                                    <input
                                        type="tel"
                                        class="form-control"
                                        :placeholder="$t('PLACEHOLDERS.phone')"
                                        v-model.trim="freeQuoteData.phone"
                                    />
                                </div>
                            </div>
                            <!-- END:: PHONE INPUT GROUP -->

                            <!-- START:: SERVICES INPUT GROUP -->
                            <div class="col-lg-12 my-3">
                                <div class="input_wrapper">
                                    <input
                                        type="text"
                                        class="form-control"
                                        :placeholder="
                                            $t('PLACEHOLDERS.services')
                                        "
                                        v-model.trim="freeQuoteData.service"
                                    />
                                </div>
                            </div>
                            <!-- END:: SERVICES INPUT GROUP -->

                            <!-- START:: LANGUAGE FROM INPUT GROUP -->
                            <div class="col-lg-6 my-3" v-if="langFrom">
                                <div class="input_wrapper select_wrapper">
                                    <multiselect
                                        v-model="freeQuoteData.langFrom"
                                        :open-direction="'bottom'"
                                        track-by="name"
                                        label="name"
                                        :placeholder="
                                            $t('PLACEHOLDERS.lang_from')
                                        "
                                        :options="langFrom"
                                        :searchable="true"
                                        :allow-empty="false"
                                        :show-labels="false"
                                    >
                                    </multiselect>
                                </div>
                            </div>
                            <!-- END:: LANGUAGE FROM INPUT GROUP -->

                            <!-- START:: LANGUAGE TO INPUT GROUP -->
                            <div class="col-lg-6 my-3" v-if="langTo">
                                <div class="input_wrapper select_wrapper">
                                    <multiselect
                                        v-model="freeQuoteData.langTo"
                                        :open-direction="'bottom'"
                                        track-by="name"
                                        label="name"
                                        :placeholder="
                                            $t('PLACEHOLDERS.lang_to')
                                        "
                                        :options="langTo"
                                        :searchable="true"
                                        :allow-empty="false"
                                        :show-labels="false"
                                    >
                                    </multiselect>
                                </div>
                            </div>
                            <!-- END:: LANGUAGE TO INPUT GROUP -->

                            <!-- START:: SUBMIT BUTTON WRAPPER -->
                            <div class="btn_wrapper">
                                <button>
                                    {{ $t("BUTTONS.request_quote") }}
                                    <span
                                        class="btn_loader"
                                        v-if="isWaitingRequest"
                                    ></span>
                                </button>
                            </div>
                            <!-- END:: SUBMIT BUTTON WRAPPER -->
                        </div>
                    </form>
                    <!-- END:: FORM -->
                </div>
            </template>
        </BaseModal>
    </div>
</template>

<script>
// START:: IMPORTING BASE MODAL
import BaseModal from "../ui/BaseModal.vue";
// END:: IMPORTING BASE MODAL

export default {
    name: "FreeQuoteFormModal",

    components: { BaseModal },

    props: ["modalApperanceData"],

    emits: ["controleModalApperance"],

    data() {
        return {
            isWaitingRequest: false,

            // START:: SELECT OPTIONS
            services: [
                {
                    id: 1,
                    name: "Service 1",
                },
                {
                    id: 2,
                    name: "Service 2",
                },
            ],
            langFrom: null,
            langTo: null,
            // END:: SELECT OPTIONS

            // START:: FREE QUOTE DATA
            freeQuoteData: {
                name: null,
                companyName: null,
                email: null,
                phone: null,
                service: null,
                langFrom: null,
                langTo: null,
            },
            // END:: FREE QUOTE DATA
        };
    },

    methods: {
        // START:: CONTROLE MODAL APPERANCE
        controleModalApperance() {
            this.$emit("controleModalApperance");
        },
        // END:: CONTROLE MODAL APPERANCE

        // START:: GET LANGUAGES
        getLanguages() {
            this.$axios({
                method: "GET",
                url: "languages",
            })
                .then((res) => {
                    // console.log( "LANGS ==>", res.data.data.languages );
                    this.langFrom = res.data.data.languages;
                    this.langTo = res.data.data.languages;
                })
                .catch((err) => {
                    console.log(err.response.data.message);
                });
        },
        // END:: GET LANGUAGES

        // START:: VALIDATE FORM INPUTS
        validateFormInputs() {
            this.isWaitingRequest = true;

            if (!this.freeQuoteData.name) {
                this.isWaitingRequest = false;
                this.$iziToast.error({
                    timeout: 2000,
                    message: this.$t("VALIDATION.name"),
                    messageSize: "22",
                    position: this.$t("iziToastConfigs.position"),
                    rtl: this.$t("iziToastConfigs.dir"),
                });
                return;
            } else if (!this.freeQuoteData.companyName) {
                this.isWaitingRequest = false;
                this.$iziToast.error({
                    timeout: 2000,
                    message: this.$t("VALIDATION.companyName"),
                    messageSize: "22",
                    position: this.$t("iziToastConfigs.position"),
                    rtl: this.$t("iziToastConfigs.dir"),
                });
                return;
            } else if (!this.freeQuoteData.email) {
                this.isWaitingRequest = false;
                this.$iziToast.error({
                    timeout: 2000,
                    message: this.$t("VALIDATION.email"),
                    messageSize: "22",
                    position: this.$t("iziToastConfigs.position"),
                    rtl: this.$t("iziToastConfigs.dir"),
                });
                return;
            } else if (!this.freeQuoteData.phone) {
                this.isWaitingRequest = false;
                this.$iziToast.error({
                    timeout: 2000,
                    message: this.$t("VALIDATION.phone"),
                    messageSize: "22",
                    position: this.$t("iziToastConfigs.position"),
                    rtl: this.$t("iziToastConfigs.dir"),
                });
                return;
            } else if (!this.freeQuoteData.service) {
                this.isWaitingRequest = false;
                this.$iziToast.error({
                    timeout: 2000,
                    message: this.$t("VALIDATION.service"),
                    messageSize: "22",
                    position: this.$t("iziToastConfigs.position"),
                    rtl: this.$t("iziToastConfigs.dir"),
                });
                return;
            } else if (!this.freeQuoteData.langFrom) {
                this.isWaitingRequest = false;
                this.$iziToast.error({
                    timeout: 2000,
                    message: this.$t("VALIDATION.lang"),
                    messageSize: "22",
                    position: this.$t("iziToastConfigs.position"),
                    rtl: this.$t("iziToastConfigs.dir"),
                });
                return;
            } else if (!this.freeQuoteData.langTo) {
                this.isWaitingRequest = false;
                this.$iziToast.error({
                    timeout: 2000,
                    message: this.$t("VALIDATION.lang"),
                    messageSize: "22",
                    position: this.$t("iziToastConfigs.position"),
                    rtl: this.$t("iziToastConfigs.dir"),
                });
                return;
            } else {
                this.submitForm();
            }
        },
        // END:: VALIDATE FORM INPUTS

        // START:: SUBMIT FORM
        submitForm() {
            this.isWaitingRequest = true;

            const theData = new FormData();
            // START:: APPEND CONTACT DATA
            theData.append("name", this.freeQuoteData.name);
            theData.append("company", this.freeQuoteData.companyName);
            theData.append("email", this.freeQuoteData.email);
            theData.append("phone", this.freeQuoteData.phone);
            theData.append("service", this.freeQuoteData.service.id);
            theData.append("from_language_id", this.freeQuoteData.langFrom.id);
            theData.append("to_language_id", this.freeQuoteData.langTo.id);
            // END:: APPEND CONTACT DATA

            // START:: SEND REQUEST
            this.$axios({
                method: "POST",
                url: "free_quote",
                data: theData,
            })
                .then((res) => {
                    this.isWaitingRequest = false;
                    this.$iziToast.success({
                        timeout: 2000,
                        message: res.data.message,
                        messageSize: "22",
                        position: this.$t("iziToastConfigs.position"),
                        rtl: this.$t("iziToastConfigs.dir"),
                    });
                    this.clearFormInputs();
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
        // END:: SUBMIT FORM

        // START:: CLEAR FORM INPUTS
        clearFormInputs() {
            this.freeQuoteData.name = null;
            this.freeQuoteData.companyName = null;
            this.freeQuoteData.email = null;
            this.freeQuoteData.phone = null;
            this.freeQuoteData.service = null;
            this.freeQuoteData.langFrom = null;
            this.freeQuoteData.langTo = null;

            this.controleModalApperance();
        },
        // END:: CLEAR FORM INPUTS
    },

    created() {
        // START:: FIRE METHODS
        this.getLanguages();
        // END:: FIRE METHODS
    },
};
</script>
