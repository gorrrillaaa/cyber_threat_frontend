<template>
    <div class="home-map-filters">
        <button
            class="home-map-filters__filter"
            v-for="filter in filters"
            :key="filter.id"
            :class="filter.class"
            @click="handleFilter(filter)"
        >
            {{ filter.label }}
        </button>
    </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

const FILTERS_VALUES = {
    "2023H1": "2023H1",
};

export default {
    name: "HomeMapFilters",
    setup() {
        const store = useStore();

        const year = computed(() => {
            return store.getters["getYear"];
        });

        const filters = computed(() => {
            return [
                {
                    id: 0,
                    label: "2023 H1",
                    value: FILTERS_VALUES["2023H1"],
                    class:
                        year.value === FILTERS_VALUES["2023H1"]
                            ? "home-map-filters__filter--active"
                            : "",
                },
            ];
        });

        const handleFilter = (filter) => {
            store.commit("setYear", filter.value);
        };

        return {
            year,
            filters,
            handleFilter,
        };
    },
};
</script>

<style lang="scss">
.home-map-filters {
    border-radius: 20px;
    border: 1px solid $border-gray-150;
    background: $bg-black;
    padding: 38px 36px 37px 36px;
    display: flex;
    align-items: center;
    grid-column-gap: 32px;

    &__filter {
        @include vietnam-semi-bold;
        color: $txt-main;
        font-size: 20px;

        &--active {
            color: $txt-primary;
        }
    }
}

@media screen and (max-width: 1920px) {
    .home-map-filters {
        padding: 31px 36px 32px 36px;

        &__filter {
            font-size: 18px;
        }
    }
}

@media screen and (max-width: 576px) {
    .home-map-filters {
        padding: 23px 22px 22px 22px;

        &__filter {
            font-size: 16px;
        }
    }
}
</style>
