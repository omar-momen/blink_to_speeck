<template>
    <div id="testimonials_one" class="testimonials_one">
        <div class="container">
            <!-- START:: SECTION TITLE -->
            <div class="title_wrapper">
                <h2>{{ $t("TITLES.what_clients_say") }}</h2>
                <span></span>
            </div>
            <!-- END:: SECTION TITLE -->

            <!-- START:: TESTIMONIALS CAROUSEL -->
            <div class="carousel_wrapper" v-if="customersSay.length == 0">
                <!-- START:: IMAGES CAROUSEL -->
                <TestimonialsCarousel
                    ref="images_carousel"
                    v-bind="imagesCarouselSettings"
                    @beforeChange="syncSliderBehavior"
                >
                    <!-- START:: CLIENT IMAGE WRAPPER -->
                    <div class="client_image_wrapper">
                        <div class="image_wrapper">
                            <img
                                src="../../../assets/media/images/landing_one/client.png"
                                width="150"
                                height="150"
                                alt="Client name"
                            />
                            <span class="icon">
                                <i class="fas fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                    <!-- END:: CLIENT IMAGE WRAPPER -->

                    <!-- START:: CLIENT IMAGE WRAPPER -->
                    <div class="client_image_wrapper">
                        <div class="image_wrapper">
                            <img
                                src="../../../assets/media/images/landing_one/client.png"
                                width="150"
                                height="150"
                                alt="Client name"
                            />
                            <span class="icon">
                                <i class="fas fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                    <!-- END:: CLIENT IMAGE WRAPPER -->

                    <!-- START:: CLIENT IMAGE WRAPPER -->
                    <div class="client_image_wrapper">
                        <div class="image_wrapper">
                            <img
                                src="../../../assets/media/images/landing_one/client.png"
                                width="150"
                                height="150"
                                alt="Client name"
                            />
                            <span class="icon">
                                <i class="fas fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                    <!-- END:: CLIENT IMAGE WRAPPER -->

                    <!-- START:: CLIENT IMAGE WRAPPER -->
                    <div class="client_image_wrapper">
                        <div class="image_wrapper">
                            <img
                                src="../../../assets/media/images/landing_one/client.png"
                                width="150"
                                height="150"
                                alt="Client name"
                            />
                            <span class="icon">
                                <i class="fas fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                    <!-- END:: CLIENT IMAGE WRAPPER -->
                </TestimonialsCarousel>
                <!-- END:: IMAGES CAROUSEL -->

                <!-- START:: TESTIMONIALS BODY CAROUSEL -->
                <TestimonialsCarousel
                    ref="body_carousel"
                    v-bind="bodyCarouselSettings"
                    @beforeChange="syncSliderBehavior"
                >
                    <!-- START:: TESTIMONIAL BODY CARD -->
                    <div class="testimonial_body_card">
                        <h3 class="name">Ahmed Hussien</h3>
                        <h3 class="role">Instructor</h3>
                        <div class="body_text_wrapper">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit
                        </div>
                    </div>
                    <!-- END:: TESTIMONIAL BODY CARD -->

                    <!-- START:: TESTIMONIAL BODY CARD -->
                    <div class="testimonial_body_card">
                        <h3 class="name">Ahmed Hussien</h3>
                        <h3 class="role">Instructor</h3>
                        <div class="body_text_wrapper">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit
                        </div>
                    </div>
                    <!-- END:: TESTIMONIAL BODY CARD -->

                    <!-- START:: TESTIMONIAL BODY CARD -->
                    <div class="testimonial_body_card">
                        <h3 class="name">Ahmed Hussien</h3>
                        <h3 class="role">Instructor</h3>
                        <div class="body_text_wrapper">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit
                        </div>
                    </div>
                    <!-- END:: TESTIMONIAL BODY CARD -->

                    <!-- START:: TESTIMONIAL BODY CARD -->
                    <div class="testimonial_body_card">
                        <h3 class="name">Ahmed Hussien</h3>
                        <h3 class="role">Instructor</h3>
                        <div class="body_text_wrapper">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit
                        </div>
                    </div>
                    <!-- END:: TESTIMONIAL BODY CARD -->
                </TestimonialsCarousel>
                <!-- END:: TESTIMONIALS BODY CAROUSEL -->
            </div>
            <!-- END:: TESTIMONIALS CAROUSEL -->

            <!-- START:: TESTIMONIALS CAROUSEL -->
            <div class="carousel_wrapper" v-else>
                <!-- START:: IMAGES CAROUSEL -->
                <TestimonialsCarousel
                    ref="images_carousel"
                    v-bind="imagesCarouselSettings"
                    @beforeChange="syncSliderBehavior"
                >
                    <!-- START:: CLIENT IMAGE WRAPPER -->
                    <div
                        class="client_image_wrapper"
                        v-for="item in customersSay"
                        :key="item.id"
                    >
                        <div class="image_wrapper">
                            <img
                                :src="item.image"
                                :alt="item.fullname"
                                width="150"
                                height="150"
                            />
                            <span class="icon">
                                <i class="fas fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                    <!-- END:: CLIENT IMAGE WRAPPER -->
                </TestimonialsCarousel>
                <!-- END:: IMAGES CAROUSEL -->

                <!-- START:: TESTIMONIALS BODY CAROUSEL -->
                <TestimonialsCarousel
                    ref="body_carousel"
                    v-bind="bodyCarouselSettings"
                    @beforeChange="syncSliderBehavior"
                >
                    <!-- START:: TESTIMONIAL BODY CARD -->
                    <div
                        class="testimonial_body_card"
                        v-for="item in customersSay"
                        :key="item.id"
                    >
                        <h3 class="name">{{ item.fullname }}</h3>
                        <h3 class="role">{{ item.job }}</h3>
                        <div class="body_text_wrapper">
                            {{ item.say }}
                        </div>
                    </div>
                    <!-- END:: TESTIMONIAL BODY CARD -->
                </TestimonialsCarousel>
                <!-- END:: TESTIMONIALS BODY CAROUSEL -->
            </div>
            <!-- END:: TESTIMONIALS CAROUSEL -->
        </div>
    </div>
</template>

<script>
// START:: IMPORTING SLICK CAROUSEL
import TestimonialsCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// END:: IMPORTING SLICK CAROUSEL

export default {
    name: "LandingOneTestimonialsSection",

    components: {
        TestimonialsCarousel,
    },

    props: {
        customersSay: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            // START:: SLICK CAROUSELS SETTINGS
            imagesCarouselSettings: {
                slidesToShow: 3,
                focusOnSelect: true,
                centerMode: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },

            bodyCarouselSettings: {
                dots: true,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: true,
                edgeFriction: 0.35,
                autoplay: false,
                infinite: true,
            },
            // END:: SLICK CAROUSELS SETTINGS
        };
    },

    methods: {
        // START:: SYNC SLIDER BEHAVIOR METHOD
        syncSliderBehavior(_, nextPosition) {
            this.$refs.body_carousel.goTo(nextPosition);
            this.$refs.images_carousel.goTo(nextPosition);
        },
        // END:: SYNC SLIDER BEHAVIOR METHOD
    },
};
</script>
