<template>
    <div class="home-footer-introduction">
        <img
            class="home-footer-introduction__logo"
            src="@/assets/images/shared/home/footer/logo.svg"
            alt="logo"
        />

        <h5 class="home-footer-introduction__label">CyberThreatTeach</h5>

        <HomeFooterCopyright class="home-footer-introduction__copyright" />
    </div>
</template>

<script>
import HomeFooterCopyright from "@/components/shared/home/footer/copyright.vue";

export default {
    name: "HomeFooterIntroduction",
    components: {
        HomeFooterCopyright,
    },
};
</script>

<style lang="scss">
.home-footer-introduction {
    &__label {
        font-size: 20px;
        margin: 9px 0 33px 0;
    }
}

@media screen and (max-width: 1200px) {
    .home-footer-introduction {
        &__copyright {
            display: none;
        }

        &__label {
            margin-bottom: 0;
        }
    }
}

@media screen and (max-width: 576px) {
    .home-footer-introduction {
        &__logo {
            width: 95px;
        }

        &__label {
            font-size: 15px;
            margin: 10px 0 0 0;
        }
    }
}
</style>
