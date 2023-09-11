<template>
    <div class="home-map-location">
        <h3 class="home-map-location__title">Groups location</h3>
    </div>
</template>

<script>
export default {
    name: "HomeMapLocation",
};
</script>

<style lang="scss">
.home-map-location {
    border-radius: 20px;
    border: 1px solid $border-gray-150;
    background: $bg-black;
    padding: 36px;

    &__title {
        font-size: 26px;
    }
}

@media screen and (max-width: 1920px) {
    .home-map-location {
        &__title {
            font-size: 20px;
        }
    }
}
</style>
