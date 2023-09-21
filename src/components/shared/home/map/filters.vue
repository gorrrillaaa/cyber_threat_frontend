<template>
    <div class="home-map-filters">
        <div class="home-map-filters__content" ref="content">
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

        <div class="home-map-filters__shadow" v-if="isShadow"></div>
    </div>
</template>

<script>
import {computed, ref, onMounted, onBeforeUnmount} from "vue";
import {useStore} from "vuex";

const FILTERS_VALUES = {
    "2023H1": "2023H1",
};

export default {
    name: "HomeMapFilters",
    setup() {
        const store = useStore();

        const content = ref(null);
        const isShadow = ref(false);

        onMounted(() => {
            handleCheckScrollPosition();

            content.value.addEventListener("scroll", handleCheckScrollPosition);
        });

        onBeforeUnmount(() => {
            content.value.removeEventListener(
                "scroll",
                handleCheckScrollPosition
            );
        });

        const year = computed(() => {
            return store.state.year;
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

        const handleCheckScrollPosition = () => {
            if (content.value) {
                const scrollableHeight =
                    content.value.scrollWidth - content.value.clientWidth;

                isShadow.value =
                    content.value.scrollLeft >= 0 &&
                    content.value.scrollLeft < scrollableHeight;
            }
        };

        const handleFilter = (filter) => {
            store.commit("setYear", filter.value);
        };

        return {
            content,
            isShadow,
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
    position: relative;

    &__content {
        @include scrollbar-x-hidden;
        display: flex;
        align-items: center;
        grid-column-gap: 32px;
    }

    &__filter {
        @include vietnam-semi-bold;
        color: $txt-main;
        font-size: 20px;
        white-space: nowrap;

        &--active {
            color: $txt-primary;
        }
    }

    &__shadow {
        border-radius: 15px;
        background: linear-gradient(
            0deg,
            #26272f 24.6%,
            rgba(38, 39, 47, 0) 237.3%
        );
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 63px;
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
