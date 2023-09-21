<template>
    <UIModal class="home-modal">
        <div class="home-modal__content" v-click-outside="close">
            <button class="home-modal__close" @click="close">
                <UIIcon icon="close-50" />
            </button>

            <HomeModalInfo />
        </div>
    </UIModal>
</template>

<script>
import UIModal from "@/components/ui/modal/modal.vue";
import HomeModalInfo from "@/components/shared/home/modal/info.vue";
import UIIcon from "@/components/ui/icon/icon.vue";

export default {
    name: "HomeModal",
    components: {
        UIModal,
        HomeModalInfo,
        UIIcon,
    },
    emits: ["close"],
    setup(_, {emit}) {
        const close = () => {
            emit("close");
        };

        return {
            close,
        };
    },
};
</script>

<style lang="scss">
.home-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        padding: 34px 55px 22px 57px;
        border-radius: 20px;
        border: 1px solid $border-gray-150;
        background: $bg-black;
        box-shadow: $box-shadow;
        position: relative;
        max-width: 910px;
        width: 100%;
    }

    &__close {
        position: absolute;
        top: 0;
        right: -81px;
    }
}

@media screen and (max-width: 1920px) {
    .home-modal {
        &__content {
            max-width: 770px;
            padding: 34px 34px 18px 34px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .home-modal {
        &__content {
            padding: 60px 16px 29px 16px;
            max-width: 100%;
            min-height: 100vh;
            max-height: 100vh;
            border-radius: 0;
            border: none;
            overflow-y: auto;
        }

        &__close {
            top: 50%;
            right: auto;
            left: 50%;
            transform: translate(-50%, -50%);
            position: fixed;
            z-index: 1000;
        }
    }
}
</style>
