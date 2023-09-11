<template>
    <div class="home-footer-other">
        <h4 class="home-footer-other__title">Try our new product right now</h4>

        <UILink
            label="Try Reports Hub"
            href="https://www.rstcloud.com/rst-report-hub/"
            target="_blank"
        />
    </div>
</template>

<script>
import UILink from "@/components/ui/link/link.vue";

export default {
    name: "HomeFooterOther",
    components: {
        UILink,
    },
};
</script>

<style lang="scss">
.home-footer-other {
    &__title {
        @include vietnam-medium;
        font-size: 24px;
        max-width: 274px;
        margin-bottom: 22px;
    }
}
</style>
