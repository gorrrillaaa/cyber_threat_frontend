<template>
    <div class="home-map-threats">
        <h3 class="home-map-threats__title">TOP 20 Known threats</h3>

        <div class="home-map-threats__list" v-if="list.length">
            <div
                class="home-map-threats__item"
                v-for="item in list"
                :key="item.id"
            >
                <button
                    class="home-map-threats__item-threat"
                    :class="item.class"
                    :style="item.style"
                    @click="handleItem(item)"
                >
                    {{ item.displayname }}
                </button>

                <p class="home-map-threats__item-label">
                    {{ item.bar }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

const DEFAULT_PERCENT = 100;
const COLUMN_GAP = 14;
const LABEL_WIDTH = 30;

export default {
    name: "HomeMapThreats",
    setup() {
        const store = useStore();

        const group = computed(() => {
            return store.getters["getGroup"];
        });

        const country = computed(() => {
            return store.state.country;
        });

        const list = computed(() => {
            return store.getters["getGroups"].map((element) => {
                const difference = DEFAULT_PERCENT - element.bar;

                const findCountry = element.map.find(
                    (item) => item === country.value
                );

                return {
                    ...element,
                    class:
                        (group.value && group.value.key === element.key) ||
                        findCountry
                            ? "home-map-threats__item-threat--active"
                            : "",
                    style: {
                        width: `calc(${DEFAULT_PERCENT}% - ${COLUMN_GAP}px - ${LABEL_WIDTH}px - ${difference}px)`,
                    },
                };
            });
        });

        const handleItem = (item) => {
            store.commit("setGroup", item);

            store.commit("setIsModal", true);
        };

        return {
            list,
            handleItem,
        };
    },
};
</script>

<style lang="scss">
.home-map-threats {
    border-radius: 20px;
    border: 1px solid $border-gray;
    background: $bg-black;
    padding: 36px 36px 24px 36px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 32px;

    &__title {
        font-size: 26px;
    }

    &__list {
        @include scrollbar;
        display: flex;
        flex-direction: column;
        grid-row-gap: 18px;
        max-height: 631px;
        overflow-y: auto;
        padding-right: 59px;
    }

    &__item {
        display: flex;
        align-items: center;
        grid-column-gap: 14px;
    }

    &__item-threat {
        @include vietnam-bold;
        border-radius: 12px;
        background: linear-gradient(
            270deg,
            rgba(0, 77, 254, 0.28) 0%,
            rgba(71, 127, 255, 0.28) 100%
        );
        color: $txt-main;
        font-size: 20px;
        padding: 10px 18px;
        text-align: left;
        transition: 0.3s;

        &--active {
            background: linear-gradient(270deg, #004dfe 0%, #477fff 100%);
        }

        &:hover {
            background: linear-gradient(270deg, #004dfe 0%, #477fff 100%);
        }
    }

    &__item-label {
        @include vietnam-bold;
        color: $txt-main;
        font-size: 16px;
    }
}

@media screen and (max-width: 1920px) {
    .home-map-threats {
        &__title {
            font-size: 20px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .home-map-threats {
        &__list {
            max-height: 100%;
            padding-right: 0;
        }
    }
}

@media screen and (max-width: 576px) {
    .home-map-threats {
        padding: 28px 22px;
        grid-row-gap: 22px;

        &__title {
            font-size: 18px;
        }

        &__item {
            grid-column-gap: 12px;
        }

        &__item-threat {
            padding: 10px 14px;
            font-size: 14px;
        }

        &__item-label {
            font-size: 14px;
        }
    }
}
</style>
