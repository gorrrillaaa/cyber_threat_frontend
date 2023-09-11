<template>
    <div class="home-modal-info">
        <div class="home-modal-info__header">
            <h4 class="home-modal-info__header-title">
                {{ group.displayname }}
            </h4>

            <a
                class="home-modal-info__header-link"
                :href="group.mitre.url"
                target="_blank"
            >
                {{ group.mitre.code }}

                <UIIcon icon="arrow-right-26" />
            </a>
        </div>

        <div class="home-modal-info__content">
            <h5 class="home-modal-info__content-title">Aliases</h5>

            <div class="home-modal-info__content-info">
                <p class="home-modal-info__content-label">
                    {{ aliases }}
                </p>
            </div>
        </div>

        <div class="home-modal-info__content">
            <h5 class="home-modal-info__content-title">Active</h5>

            <div class="home-modal-info__content-info">
                <p class="home-modal-info__content-label">{{ group.active }}</p>
            </div>
        </div>

        <div class="home-modal-info__content">
            <div class="home-modal-info__content-header">
                <h5 class="home-modal-info__content-title">
                    Country of origin
                </h5>

                <div class="home-modal-info__content-icons">
                    <UIIcon icon="flag-33" />
                </div>
            </div>

            <div class="home-modal-info__content-info">
                <div
                    class="home-modal-info__content-group home-modal-info__content-group--country"
                    v-for="country in group.countries"
                    :key="country.displayname"
                >
                    <p class="home-modal-info__content-label">
                        {{ country.displayname }}
                    </p>

                    <UIIcon
                        class="home-modal-info__content-icon"
                        icon="flag-33"
                    />
                </div>
            </div>
        </div>

        <div class="home-modal-info__content">
            <div class="home-modal-info__content-header">
                <h5 class="home-modal-info__content-title">Motivation</h5>

                <div class="home-modal-info__content-icons">
                    <UIIcon icon="money-25" />
                </div>
            </div>

            <div class="home-modal-info__content-info">
                <div
                    class="home-modal-info__content-group home-modal-info__content-group--motivation"
                    v-for="motivation in group.motivations"
                    :key="motivation.displayname"
                >
                    <p class="home-modal-info__content-label">
                        {{ motivation.displayname }}
                    </p>

                    <UIIcon
                        class="home-modal-info__content-icon"
                        icon="money-25"
                    />
                </div>
            </div>
        </div>

        <div class="home-modal-info__content">
            <h5 class="home-modal-info__content-title">Targets of attacks</h5>

            <div class="home-modal-info__content-info">
                <div class="home-modal-info__content-textarea">
                    <p
                        class="home-modal-info__content-label"
                        v-html="group.targets"
                    ></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import UIIcon from "@/components/ui/icon/icon.vue";

export default {
    name: "HomeModalInfo",
    components: {
        UIIcon,
    },
    setup() {
        const store = useStore();

        const group = computed(() => {
            return store.getters["getGroup"];
        });

        const aliases = computed(() => {
            return group.value.aliases.join(", ");
        });

        return {
            group,
            aliases,
        };
    },
};
</script>

<style lang="scss">
.home-modal-info {
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 21px;
    }

    &__header-title {
        font-size: 24px;
    }

    &__header-link {
        @include vietnam-bold;
        color: $txt-main;
        font-size: 24px;
        display: flex;
        align-items: center;
        grid-column-gap: 2px;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        padding: 28px 0 24px 0;
        border-top: 1px solid $border-gray;
    }

    &__content-info {
        display: flex;
        flex-direction: column;
        grid-row-gap: 8px;
        width: 436px;
    }

    &__content-group {
        display: flex;
        align-items: center;
    }

    &__content-group--country {
        grid-column-gap: 10px;
    }

    &__content-group--motivation {
        grid-column-gap: 12px;
    }

    &__content-title {
        @include vietnam-regular;
        color: $txt-main;
        font-size: 20px;
    }

    &__content-label {
        @include vietnam-medium;
        color: $txt-main;
        font-size: 16px;
    }

    &__content-textarea {
        @include scrollbar;
        max-height: 200px;
        overflow-y: auto;
    }

    &__content-icons {
        display: none;
    }
}

@media screen and (max-width: 1200px) {
    .home-modal-info {
        &__header {
            padding-bottom: 26px;
        }

        &__header-title {
            font-size: 20px;
        }

        &__header-link {
            font-size: 20px;
        }

        &__content {
            display: flex;
            flex-direction: column;
            grid-row-gap: 8px;
            padding-top: 22px;
        }

        &__content-header {
            display: flex;
            align-items: center;
            grid-column-gap: 16px;
        }

        &__content-textarea {
            max-height: 100%;
        }

        &__content-icons {
            display: block;
        }

        &__content-icon {
            display: none;
        }

        &__content-info {
            width: 100%;
        }
    }
}
</style>
