<template>
    <div class="home-map-tooltip" :style="style">
        <p class="home-map-tooltip__label">
            {{ label }}
        </p>
    </div>
</template>

<script>
import {computed, toRefs} from "vue";

export default {
    name: "HomeMapTooltip",
    props: {
        label: {
            type: String,
            default: "",
        },
        x: {
            type: Number,
            required: true,
        },
        y: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const {x, y} = toRefs(props);

        const style = computed(() => {
            return {
                top: `${y.value}px`,
                left: `${x.value}px`,
            };
        });

        return {
            style,
        };
    },
};
</script>

<style lang="scss">
.home-map-tooltip {
    position: fixed;
    border-radius: 12px;
    background: $primary-500;
    padding: 5px;
    border-radius: 4px;
    z-index: 999;
    font-size: 14px;

    &__label {
        color: $txt-main;
    }
}
</style>
