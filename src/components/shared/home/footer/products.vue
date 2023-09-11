<template>
    <div class="home-footer-products">
        <h5 class="home-footer-products__title">Products</h5>

        <div class="home-footer-products__list">
            <a
                class="home-footer-products__item"
                v-for="product in products"
                :key="product.id"
                :href="product.href"
            >
                {{ product.label }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeFooterProducts",
    setup() {
        const products = [
            {
                id: 0,
                label: "RST Threat Feed",
                href: "",
            },
            {
                id: 1,
                label: "RST Threat Hub",
                href: "",
            },
            {
                id: 2,
                label: "RST Threat API",
                href: "",
            },
        ];

        return {
            products,
        };
    },
};
</script>

<style lang="scss">
.home-footer-products {
    &__title {
        font-size: 20px;
        margin-bottom: 14px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        grid-row-gap: 8px;
    }

    &__item {
        @include vietnam-regular;
        color: rgba(255, 255, 255, 0.7);
        font-size: 18px;
    }
}

@media screen and (max-width: 576px) {
    .home-footer-products {
        &__title {
            font-size: 18px;
            margin-bottom: 16px;
        }

        &__item {
            font-size: 16px;
        }
    }
}
</style>
