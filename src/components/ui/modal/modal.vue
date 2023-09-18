<template>
    <div class="ui-modal">
        <slot></slot>
    </div>
</template>

<script>
import {onMounted, onBeforeUnmount} from "vue";

export default {
    name: "UIModal",
    setup() {
        onMounted(() => {
            scrollLock(false);
        });

        onBeforeUnmount(() => {
            scrollLock(true);
        });

        const scrollLock = (isShow) => {
            const bodyElement = document.querySelector("body");

            if (isShow) {
                bodyElement.style.removeProperty("overflow");
                bodyElement.style.removeProperty("position");
                bodyElement.style.removeProperty("top");
                bodyElement.style.removeProperty("width");
            } else {
                bodyElement.style.overflow = "hidden";
                bodyElement.style.position = "fixed";
                bodyElement.style.top = `-${window.pageYOffset}px`;
                bodyElement.style.width = "100%";
            }
        };

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
