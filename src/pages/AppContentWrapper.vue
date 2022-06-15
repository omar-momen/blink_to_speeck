<template>
    <div class="content_wrapper_wrapper">
        <!-- START:: APP ROUTER VIEW -->
        <section class="main-content">
            <transition name="fadeInUp" mode="out-in">
                <router-view />
            </transition>
        </section>
        <!-- END:: APP ROUTER VIEW -->
    </div>
</template>

<script>
export default {
    name: "AppContentWrapper",
};
</script>
