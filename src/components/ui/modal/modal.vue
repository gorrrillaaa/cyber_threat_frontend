<template>
    <div class="ui-modal">
        <slot></slot>
    </div>
</template>

<script>
import {onMounted, onBeforeUnmount} from "vue";
import {useStore} from "vuex";

export default {
    name: "UIModal",
    setup() {
        const store = useStore();

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

                window.scrollTo(0, store.state.scrollPosition);
            } else {
                store.commit("setScrollPosition");

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
