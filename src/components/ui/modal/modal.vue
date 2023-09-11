<template>
    <div class="ui-modal">
        <slot></slot>
    </div>
</template>

<script>
import {onMounted, onBeforeUnmount} from "vue";

const OVERFLOWS = {
    hidden: "hidden",
    auto: "auto",
};

export default {
    name: "UIModal",
    setup(_, {emit}) {
        onMounted(() => {
            document.documentElement.style.overflowY = OVERFLOWS.hidden;
        });

        onBeforeUnmount(() => {
            document.documentElement.style.overflowY = OVERFLOWS.auto;
        });

        return {};
    },
};
</script>

<style lang="scss">
.ui-modal {
    background: rgba(32, 32, 36, 0.34);
    backdrop-filter: blur(75px);
}
</style>
