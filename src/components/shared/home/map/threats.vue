<template>
    <div class="home-map-threats">
        <h3 class="home-map-threats__title">TOP 20 Known threats</h3>

        <div
            class="home-map-threats__list"
            v-if="groups.length"
            ref="list"
            :class="getListViewClass"
        >
            <div
                class="home-map-threats__item"
                v-for="item in groups"
                :key="item.id"
                :style="{
                    width: item.width,
                }"
            >
                <button
                    class="home-map-threats__item-threat"
                    :class="item.class"
                    @click="handleItem(item)"
                    @mouseover="handleSetMap(item)"
                    @mouseout="handleClearMap"
                >
                    {{ item.displayname }}

                    <div class="home-map-threats__item-icons">
                        <UIIcon
                            v-for="icon in item.map"
                            :key="icon"
                            :icon="icon"
                        />
                    </div>
                </button>

                <p class="home-map-threats__item-label">
                    {{ item.bar }}
                </p>
            </div>

            <div
                class="home-map-threats__shadow"
                v-if="isShadow && hasListScrollbar"
            ></div>
        </div>
    </div>
</template>

<script>
import {computed, ref, onMounted, onBeforeUnmount} from "vue";
import {useStore} from "vuex";

import UIIcon from "@/components/ui/icon/icon.vue";

const DEFAULT_PERCENT = 100;
const DEFAULT_GAP = 30;

export default {
    name: "HomeMapThreats",
    components: {
        UIIcon,
    },
    setup() {
        const store = useStore();

        const list = ref(null);

        const isShadow = ref(false);
        const hasListScrollbar = ref(false);

        onMounted(() => {
            checkScrollPosition();

            list.value.addEventListener("scroll", checkScrollPosition);

            handleCheckScrollbar();
        });

        onBeforeUnmount(() => {
            list.value.removeEventListener("scroll", checkScrollPosition);
        });

        const group = computed(() => {
            return store.state.group;
        });

        const country = computed(() => {
            return store.state.country;
        });

        const groups = computed(() => {
            return store.getters["getGroups"].map((element, elementIndex) => {
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
                };
            });
        });

        const getListViewClass = computed(() => {
            return hasListScrollbar.value
                ? "home-map-threats__list--scroll"
                : "";
        });

        const checkScrollPosition = () => {
            handleCheckScrollbar();

            if (list.value) {
                const scrollableHeight =
                    list.value.scrollHeight - list.value.clientHeight;

                isShadow.value =
                    list.value.scrollTop >= 0 &&
                    list.value.scrollTop < scrollableHeight;
            }
        };

        const handleItem = (item) => {
            store.commit("setGroup", item);

            store.commit("setIsModal", true);
        };

        const handleSetMap = ({map}) => {
            store.commit("setMap", map);
        };

        const handleClearMap = () => {
            store.commit("setMap", []);
        };

        const handleItemStyle = (item, index) => {
            return {
                width: `calc(100% - ${item.bar}px)`,
            };
        };

        const handleCheckScrollbar = () => {
            hasListScrollbar.value =
                list.value.scrollHeight > list.value.clientHeight;
        };

        return {
            list,
            hasListScrollbar,
            isShadow,
            groups,
            getListViewClass,
            handleItem,
            handleSetMap,
            handleClearMap,
            handleItemStyle,
        };
    },
};
</script>

<style lang="scss">
.home-map-threats {
    border-radius: 20px;
    border: 1px solid $border-gray;
    background: $bg-black;
    padding: 36px 36px 0 36px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 32px;
    position: relative;
    overflow: hidden;

    &__title {
        font-size: 26px;
    }

    &__list {
        @include scrollbar;
        display: flex;
        flex-direction: column;
        grid-row-gap: 18px;
        max-height: 350px;
        overflow-y: auto;

        &--scroll {
            padding-right: 30px;
        }
    }

    &__item {
        display: flex;
        align-items: center;
        grid-column-gap: 14px;
        width: 100%;
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        grid-row-gap: 8px;
        width: 100%;

        &--active {
            background: linear-gradient(270deg, #004dfe 0%, #477fff 100%);
        }

        &:hover {
            background: linear-gradient(270deg, #004dfe 0%, #477fff 100%);
        }
    }

    &__item-icons {
        display: none;
        align-items: center;
        flex-wrap: wrap;
        grid-row-gap: 4px;
        grid-column-gap: 4px;
    }

    &__item-label {
        @include vietnam-bold;
        color: $txt-main;
        font-size: 16px;
    }

    &__shadow {
        height: 68px;
        position: absolute;
        bottom: 0;
        left: 36px;
        right: 36px;
        z-index: 100;
        background: linear-gradient(
            0deg,
            #26272f 24.6%,
            rgba(38, 39, 47, 0) 237.3%
        );
    }
}

@media screen and (max-width: 1920px) {
    .home-map-threats {
        padding: 36px 36px 24px 36px;

        &__title {
            font-size: 20px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .home-map-threats {
        &__list {
            max-height: 100%;

            &--scroll {
                padding-right: 0;
            }
        }

        &__item-icons {
            display: flex;
        }

        &__item-threat {
            justify-content: flex-start;
            grid-column-gap: 8px;
        }

        &__shadow {
            display: none;
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
