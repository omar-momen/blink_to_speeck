<template>
    <transition name="fadeInUp" mode="in-out">
        <MainLoader v-if="!pageContent" />

        <div class="start_now_page_wrapper" v-else>
            <div class="container">
                <!-- START:: OUR  LANGUAGES SECTION -->
                <div class="our_languages_wrapper">
                    <div class="section_title">
                        <h2>{{ $t("TITLES.our_language") }}</h2>
                    </div>
                    <!-- START:: DUMMY DATA -->
                    <div class="row" v-if="!pageContent.languages">
                        <!-- START:: LANGUAGE CARD -->
                        <div
                            class="col-6 col-md-2 my-3"
                            v-for="card in langCards"
                            :key="card.id"
                        >
                            <div class="lang_card">
                                <div class="flag_wrapper">
                                    <img
                                        :src="card.flag"
                                        :alt="card.lang"
                                        width="80"
                                        height="80"
                                    />
                                </div>

                                <div class="lang_wrapper">
                                    <h3>{{ card.lang }}</h3>
                                    <h4>{{ card.trans }}</h4>
                                </div>
                            </div>
                        </div>
                        <!-- END:: LANGUAGE CARD -->
                    </div>
                    <!-- END:: DUMMY DATA -->

                    <!-- START:: API DATA -->
                    <div class="row" v-else>
                        <!-- START:: LANGUAGE CARD -->
                        <div
                            class="col-6 col-md-2 my-3"
                            v-for="card in pageContent.languages"
                            :key="card.id"
                        >
                            <div class="lang_card">
                                <!-- <div class="flag_wrapper">
                                    <img
                                        :src="card.image"
                                        :alt="card.name"
                                        width="80"
                                        height="80"
                                    />
                                </div> -->

                                <div class="lang_wrapper">
                                    <h3>{{ card.name }}</h3>
                                    <!-- <h4>{{ card.note }}</h4> -->
                                </div>
                            </div>
                        </div>
                        <!-- END:: LANGUAGE CARD -->
                    </div>
                    <!-- END:: API DATA -->
                </div>
                <!-- END:: OUR  LANGUAGES SECTION -->

                <!-- START:: INDUSTRIES WE COVER SECTION -->
                <div class="industries_we_cover_section_wrapper">
                    <div class="section_title">
                        <h2 v-if="!pageContent.our_industry_title">
                            {{ $t("TITLES.industries_we_cover") }}
                        </h2>
                        <h2 v-else>{{ pageContent.our_industry_title }}</h2>
                    </div>

                    <div class="row">
                        <!-- START:: SECTION TEXT -->
                        <div class="col-md-7 my-3 order-2 order-md-1">
                            <div
                                class="section_text_wrapper"
                                v-if="!pageContent.our_industry_desc"
                            >
                                Our specialized content offerings are completed
                                by our team of expert translators with unique
                                knowledge and experience in their specific
                                industry sectors. Our team of talented linguists
                                and elite project managers have the depth and
                                expertise needed to deliver complex, sensitive
                                and technical projects on time and within
                                budget, every time.
                            </div>
                            <div class="section_text_wrapper" v-else>
                                {{ pageContent.our_industry_desc }}
                            </div>
                        </div>
                        <!-- END:: SECTION TEXT -->

                        <!-- START:: SECTION IMAGE -->
                        <div class="col-md-5 my-3 order-1 order-md-2">
                            <div class="section_image_wrapper">
                                <img
                                    src="../../assets/media/illustrations/start_now_image.svg"
                                    alt="illustration"
                                />
                            </div>
                        </div>
                        <!-- END:: SECTION IMAGE -->
                    </div>

                    <!-- START:: DUMMY DATA -->
                    <div class="row" v-if="pageContent.categories.length == 0">
                        <!-- START:: INDUSTRIES CURD -->
                        <div
                            class="col-md-3 my-3"
                            v-for="card in fieldsCard"
                            :key="card.id"
                        >
                            <div class="field_card_wrapper">
                                <div class="icon_wrapper">
                                    <img
                                        :src="card.icon"
                                        :alt="card.title"
                                        width="70"
                                        height="70"
                                    />
                                </div>

                                <div class="title_wrapper">
                                    <h3>{{ card.title }}</h3>
                                </div>

                                <div class="desc_wrapper">
                                    {{ card.desc }}
                                </div>
                            </div>
                        </div>
                        <!-- END:: INDUSTRIES CURD -->
                    </div>
                    <!-- END:: DUMMY DATA -->

                    <!-- START:: API DATA -->
                    <div class="row" v-else>
                        <!-- START:: INDUSTRIES CURD -->
                        <div
                            class="col-md-4 my-3"
                            v-for="card in pageContent.categories"
                            :key="card.id"
                        >
                            <div class="field_card_wrapper">
                                <div class="icon_wrapper">
                                    <img
                                        :src="card.image"
                                        :alt="card.name"
                                        width="70"
                                        height="70"
                                    />
                                </div>

                                <div class="title_wrapper">
                                    <h3>{{ card.name }}</h3>
                                </div>

                                <div class="desc_wrapper">
                                    {{ card.desc }}
                                </div>
                            </div>
                        </div>
                        <!-- END:: INDUSTRIES CURD -->
                    </div>
                    <!-- END:: API DATA -->
                </div>
                <!-- END:: INDUSTRIES WE COVER SECTION -->
            </div>
        </div>
    </transition>
</template>

<script>
// START:: IMPORTING MAIN LOADER
import MainLoader from "@/components/ui/loaders/MainLoader.vue";
// END:: IMPORTING MAIN LOADER

// START:: IMPORTING FLAGS
import ArabicFlag from "@/assets/media/icons/langs/arabic.svg";
import EnglishFlag from "@/assets/media/icons/langs/english.svg";
import FrenshFlag from "@/assets/media/icons/langs/frensh.svg";
import GermanFlag from "@/assets/media/icons/langs/german.svg";
import HindiFlag from "@/assets/media/icons/langs/hindi.svg";
import ItalianFlag from "@/assets/media/icons/langs/italian.svg";
import JabaneseFlag from "@/assets/media/icons/langs/jabanese.svg";
import KoreanFlag from "@/assets/media/icons/langs/korean.svg";
import RussianFlag from "@/assets/media/icons/langs/russian.svg";
import SpanishFlag from "@/assets/media/icons/langs/spanish.svg";
import SwedishFlag from "@/assets/media/icons/langs/swedish.svg";
import TurkeshFlag from "@/assets/media/icons/langs/turkesh.svg";
// END:: IMPORTING FLAGS

// START:: IMPORTING ICONS
import Icon1 from "@/assets/media/icons/start_now_page/medical.svg";
import Icon2 from "@/assets/media/icons/start_now_page/commerce .svg";
import Icon3 from "@/assets/media/icons/start_now_page/it.svg";
import Icon4 from "@/assets/media/icons/start_now_page/legal.svg";
// END:: IMPORTING ICONS

export default {
    name: "StartNowPage",

    components: {
        MainLoader,
    },

    data() {
        return {
            // START:: DUMMY LANGUAGES CARDS DATA
            langCards: [
                {
                    id: 1,
                    flag: ArabicFlag,
                    lang: "Arabic",
                    trans: "مرحبا",
                },
                {
                    id: 2,
                    flag: EnglishFlag,
                    lang: "English",
                    trans: "Hello",
                },
                {
                    id: 3,
                    flag: FrenshFlag,
                    lang: "French",
                    trans: "Bonjour",
                },
                {
                    id: 4,
                    flag: GermanFlag,
                    lang: "German",
                    trans: "Hallo",
                },
                {
                    id: 5,
                    flag: HindiFlag,
                    lang: "Hindi",
                    trans: "नमस्ते",
                },
                {
                    id: 6,
                    flag: ItalianFlag,
                    lang: "Italian",
                    trans: "Italian",
                },
                {
                    id: 7,
                    flag: JabaneseFlag,
                    lang: "Japanese",
                    trans: "こんにちは",
                },
                {
                    id: 8,
                    flag: KoreanFlag,
                    lang: "korean",
                    trans: "안녕하세요",
                },
                {
                    id: 9,
                    flag: RussianFlag,
                    lang: "Russian ",
                    trans: "Привет",
                },
                {
                    id: 10,
                    flag: SpanishFlag,
                    lang: "Spanish",
                    trans: "Bienvenidos",
                },
                {
                    id: 11,
                    flag: SwedishFlag,
                    lang: "Swedish",
                    trans: "Välkommen",
                },
                {
                    id: 12,
                    flag: TurkeshFlag,
                    lang: "Turkish",
                    trans: "Hoş geldin",
                },
            ],
            // END:: DUMMY LANGUAGES CARDS DATA

            // START:: DUMMY FIELDS CARDS DATA
            fieldsCard: [
                {
                    id: 1,
                    icon: Icon1,
                    title: "Tourism medical",
                    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
                },
                {
                    id: 2,
                    icon: Icon2,
                    title: "E-Commerce  Translation",
                    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
                },
                {
                    id: 3,
                    icon: Icon3,
                    title: "Technology & IT Translation",
                    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
                },
                {
                    id: 4,
                    icon: Icon4,
                    title: "Legal Translation",
                    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
                },
                {
                    id: 5,
                    icon: Icon1,
                    title: "Tourism medical",
                    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
                },
                {
                    id: 6,
                    icon: Icon2,
                    title: "E-Commerce  Translation",
                    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
                },
                {
                    id: 7,
                    icon: Icon3,
                    title: "Technology & IT Translation",
                    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
                },
                {
                    id: 8,
                    icon: Icon4,
                    title: "Legal Translation",
                    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
                },
            ],
            // END:: DUMMY FIELDS CARDS DATA

            // START:: API PAGE CONTENT DATA
            pageContent: null,
            // END:: API PAGE CONTENT DATA
        };
    },

    methods: {
        // START:: START NOW PAGE CONTENT
        getStartNowPageContent() {
            this.$axios({
                method: "GET",
                url: `start_now_page`,
            })
                .then((res) => {
                    // console.log( res.data.data );
                    this.pageContent = res.data.data;
                })
                .catch((err) => {
                    console.log(err.response.data.message);
                });
        },
        // END:: START NOW PAGE CONTENT
    },

    created() {
        // START:: FIRING METHODS
        this.getStartNowPageContent();
        // END:: FIRING METHODS
    },
};
</script>
