<template>
    <div class="home-footer">
        <div class="home-footer__container">
            <HomeFooterIntroduction />

            <HomeFooterOther
                class="home-footer__other home-footer__other--small"
            />

            <div class="home-footer__group">
                <HomeFooterSocials class="home-footer__socials" />

                <HomeFooterProducts class="home-footer__products" />
            </div>

            <HomeFooterOther class="home-footer__other" />

            <HomeFooterCopyright class="home-footer__copyright" />
        </div>
    </div>
</template>

<script>
import HomeFooterIntroduction from "@/components/shared/home/footer/introduction.vue";
import HomeFooterSocials from "@/components/shared/home/footer/socials.vue";
import HomeFooterProducts from "@/components/shared/home/footer/products.vue";
import HomeFooterOther from "@/components/shared/home/footer/other.vue";
import HomeFooterCopyright from "@/components/shared/home/footer/copyright.vue";

export default {
    name: "HomeFooter",
    components: {
        HomeFooterIntroduction,
        HomeFooterSocials,
        HomeFooterProducts,
        HomeFooterOther,
        HomeFooterCopyright,
    },
};
</script>

<style lang="scss">
.home-footer {
    border-top: 1px solid $border-gray-150;
    background: $bg-black;
    padding: 17px 0 42px 0;

    &__container {
        @include container;
        display: flex;
        align-items: center;
    }

    &__group {
        display: flex;
        align-items: center;
        margin-left: 88px;
    }

    &__products {
        margin-left: 213px;
    }

    &__other {
        margin-left: auto;

        &--small {
            display: none;
        }
    }

    &__copyright {
        display: none;
    }
}

@media screen and (max-width: 1920px) {
    .home-footer {
        &__group {
            margin-left: 73px;
        }

        &__products {
            margin-left: 103px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .home-footer {
        &__container {
            flex-direction: column;
            align-items: flex-start;
        }

        &__other {
            display: none;
            margin: 44px 0 44px 0;

            &--small {
                display: block;
            }
        }

        &__group {
            margin-left: 0;
        }

        &__products {
            margin-left: 94px;
        }

        &__copyright {
            display: block;
            margin-top: 90px;
        }
    }
}

@media screen and (max-width: 576px) {
    .home-footer {
        padding: 28px 0;
    }
}
</style>
