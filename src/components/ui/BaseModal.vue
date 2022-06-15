<template>
    <!-- <teleport to="body"> -->
    <transition name="fadeInUp" mode="out-in">
        <div v-if="show" class="model_container">
            <div class="main_body">
                <slot name="modal"></slot>
            </div>
            <div class="modal_overlay" @click="closeModel"></div>
        </div>
    </transition>

    <!-- </teleport> -->
</template>

<script>
export default {
    name: "Model",

    props: {
        show: {
            type: Boolean,
            required: true,
        },
    },

    emits: ["controleModalApperance"],

    methods: {
        closeModel() {
            // this.show = !this.show;
            this.$emit("controleModalApperance");
        },
    },
};
</script>
