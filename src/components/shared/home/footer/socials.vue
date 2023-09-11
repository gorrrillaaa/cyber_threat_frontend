<template>
    <div class="home-footer-socials">
        <a v-for="social in socials" :key="social.id" :href="social.href">
            <img
                class="home-footer-socials__social-image"
                :src="social.src"
                alt="social"
            />
        </a>
    </div>
</template>

<script>
export default {
    name: "HomeFooterSocials",
    setup() {
        const socials = [
            {
                id: 0,
                href: "",
                src: require("@/assets/images/shared/home/footer/facebook.svg"),
            },
            {
                id: 0,
                href: "",
                src: require("@/assets/images/shared/home/footer/medium.svg"),
            },
            {
                id: 0,
                href: "",
                src: require("@/assets/images/shared/home/footer/linkedin.svg"),
            },
            {
                id: 0,
                href: "",
                src: require("@/assets/images/shared/home/footer/twitter.svg"),
            },
        ];

        return {
            socials,
        };
    },
};
</script>

<style lang="scss">
.home-footer-socials {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-row-gap: 17px;
}

@media screen and (max-width: 576px) {
    .home-footer-socials {
        grid-row-gap: 16px;
    }
}
</style>
