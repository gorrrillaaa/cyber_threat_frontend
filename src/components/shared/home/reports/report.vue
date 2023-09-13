<template>
    <div class="home-reports-report">
        <a
            class="home-reports-report__preview"
            :href="report.url"
            target="_blank"
        >
            <img :src="preview" alt="preview" />
        </a>

        <div class="home-reports-report__info">
            <a
                class="home-reports-report__info-title"
                :href="report.url"
                target="_blank"
            >
                {{ report.title }}
            </a>

            <a
                class="home-reports-report__info-link"
                :href="report.url"
                target="_blank"
            >
                View the report

                <UIIcon icon="arrow-right-18" />
            </a>

            <p class="home-reports-report__info-date">
                {{ report.date }}
            </p>
        </div>
    </div>
</template>

<script>
import {computed, toRefs} from "vue";

import UIIcon from "@/components/ui/icon/icon.vue";

export default {
    name: "HomeReportsReport",
    components: {
        UIIcon,
    },
    props: {
        report: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const {report} = toRefs(props);

        const preview = computed(() => {
            const icon = report.value.icon;

            return icon
                ? icon
                : require("@/assets/images/shared/home/reports/default.svg");
        });

        return {
            preview,
        };
    },
};
</script>

<style lang="scss">
.home-reports-report {
    padding: 18px;
    border-radius: 20px;
    border: 1px solid $border-gray-150;
    background: $bg-gray-500;
    display: flex;
    align-items: center;
    grid-column-gap: 27px;

    &__preview {
        border-radius: 11px;
        background: $bg-gray;
        min-width: 90px;
        min-height: 90px;
        max-width: 90px;
        max-height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__info-title {
        @include vietnam-bold;
        font-size: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: $txt-main;
    }

    &__info-link {
        @include vietnam-bold;
        color: $txt-main;
        font-size: 16px;
        font-weight: 700;
        margin: 8px 0 10px 0;
        display: inline-block;
        transition: $transition;
        stroke: $txt-main;
        display: flex;
        align-items: center;
        grid-column-gap: 2px;

        &:hover {
            color: $primary;
            stroke: $primary;
        }
    }

    &__info-date {
        @include vietnam-medium;
        color: $txt-gray;
        font-size: 14px;
    }
}

@media screen and (max-width: 1920px) {
    .home-reports-report {
        &__preview {
            min-width: 82px;
            min-height: 82px;
            max-width: 82px;
            max-height: 82px;
        }

        &__info-title {
            font-size: 16px;
        }

        &__info-link {
            font-size: 14px;
            grid-column-gap: 3px;
            margin: 8px 0;
        }
    }
}

@media screen and (max-width: 576px) {
    .home-reports-report {
        padding: 15px 18px;
        grid-column-gap: 17px;

        &__preview {
            min-width: 59px;
            min-height: 59px;
            max-width: 59px;
            max-height: 59px;
        }

        &__info-link {
            margin: 4px 0;
        }

        &__info-date {
            font-size: 12px;
        }
    }
}
</style>
