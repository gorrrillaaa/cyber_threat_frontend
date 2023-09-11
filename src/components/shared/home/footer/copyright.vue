<template>
    <div class="home-footer-copyright">
        <p class="home-footer-copyright__label">
            © {{ getYear }} Технологии киберугроз.
        </p>
    </div>
</template>

<script>
import {computed} from "vue";

export default {
    name: "HomeFooterCopyright",
    setup() {
        const getYear = computed(() => {
            return new Date().getFullYear();
        });

        return {
            getYear,
        };
    },
};
</script>

<style lang="scss">
.home-footer-copyright {
    &__label {
        @include vietnam-medium;
        color: $txt-gray;
        font-size: 14px;
    }
}

@media screen and (max-width: 576px) {
    .home-footer-copyright {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        &__label {
            text-align: center;
        }
    }
}
</style>
