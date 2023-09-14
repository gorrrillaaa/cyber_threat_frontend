<template>
    <div class="home-map">
        <HomeMapFilters class="home-map__filters" />

        <div class="home-map__block">
            <HomeMapThreats />

            <HomeMapLocation class="home-map__location" />
        </div>
    </div>
</template>

<script>
import HomeMapFilters from "@/components/shared/home/map/filters.vue";
import HomeMapThreats from "@/components/shared/home/map/threats.vue";
import HomeMapLocation from "@/components/shared/home/map/location.vue";

export default {
    name: "HomeMap",
    components: {
        HomeMapFilters,
        HomeMapThreats,
        HomeMapLocation,
    },
};
</script>

<style lang="scss">
.home-map {
    &__filters {
        margin-bottom: 20px;
    }

    &__block {
        display: grid;
        grid-template-columns: 755px 1fr;
        grid-column-gap: 20px;
    }
}

@media screen and (max-width: 1920px) {
    .home-map {
        &__block {
            grid-template-columns: 468px 1fr;
            grid-column-gap: 32px;
        }
    }
}

@media screen and (max-width: 1440px) {
    .home-map {
        &__block {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media screen and (max-width: 1200px) {
    .home-map {
        &__block {
            grid-template-columns: repeat(1, 1fr);
        }

        &__location {
            display: none;
        }
    }
}

@media screen and (max-width: 576px) {
    .home-map {
        &__filters {
            margin-bottom: 18px;
        }
    }
}
</style>
