<template>
    <div class="home-header">
        <div class="home-header__logos">
            <a
                class="home-header__logos-link"
                target="_blank"
                href="https://rstcloud.com"
            >
                <img
                    class="home-header__logos-logo"
                    src="@/assets/images/shared/home/header/logo.svg"
                    alt="logo"
                />
            </a>

            <img
                class="home-header__logos-icon"
                src="@/assets/images/shared/home/header/x.svg"
                alt="x"
            />

            <p class="home-header__logos-label">CyberThreatTeach</p>
        </div>

        <div class="home-header__info">
            <h1 class="home-header__info-title">Cyber Threat Index</h1>

            <p class="home-header__info-label">
                Following the investigation of this incident, in the summer of
                2014, Kaspersky Lab identified the same Carberp-like malware in
                another investigation involving a bank, where criminals.
            </p>

            <UILink
                label="Try Reports Hub"
                href="https://www.rstcloud.com/rst-report-hub/"
                target="_blank"
            />
        </div>
    </div>
</template>

<script>
import UILink from "@/components/ui/link/link.vue";

export default {
    name: "HomeHeader",
    components: {
        UILink,
    },
};
</script>

<style lang="scss">
.home-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 77px;
    padding: 38px 0 22px 0;

    &__logos {
        display: flex;
        align-items: center;
        grid-column-gap: 27px;
    }

    &__logos-label {
        @include vietnam-medium;
        color: $txt-main;
        font-size: 20px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    &__info-title {
        font-size: 64px;
    }

    &__info-label {
        color: $txt-main;
        font-size: 20px;
        max-width: 635px;
        margin: 12px 0 22px 0;
    }
}

@media screen and (max-width: 1920px) {
    .home-header {
        padding-bottom: 42px;
        grid-row-gap: 86px;

        &__info-title {
            font-size: 48px;
        }

        &__info-label {
            font-size: 18px;
        }
    }
}

@media screen and (max-width: 576px) {
    .home-header {
        padding: 32px 0 0 0;
        grid-row-gap: 53px;

        &__logos {
            grid-column-gap: 17px;
        }

        &__logos-logo {
            width: 80px;
        }

        &__logos-icon {
            width: 10px;
        }

        &__logos-label {
            font-size: 15px;
        }

        &__info-title {
            font-size: 24px;
        }

        &__info-label {
            font-size: 16px;
            margin-bottom: 28px;
        }
    }
}
</style>
