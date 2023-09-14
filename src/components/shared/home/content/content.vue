<template>
    <div class="home-content">
        <div class="home-content__container">
            <HomeHeader class="home-content__header" />

            <HomeMap class="home-content__map" />

            <HomeReports class="home-content__reports" />
        </div>

        <HomeFooter class="home-content__footer" />

        <transition name="modal">
            <HomeModal
                class="home-content__modal"
                v-if="isModal"
                @close="handleCloseModal"
            />
        </transition>
    </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import HomeHeader from "@/components/shared/home/header/header.vue";
import HomeMap from "@/components/shared/home/map/map.vue";
import HomeReports from "@/components/shared/home/reports/reports.vue";
import HomeFooter from "@/components/shared/home/footer/footer.vue";
import HomeModal from "@/components/shared/home/modal/modal.vue";

export default {
    name: "HomeContent",
    components: {
        HomeHeader,
        HomeMap,
        HomeReports,
        HomeFooter,
        HomeModal,
    },
    setup() {
        const store = useStore();

        const isModal = computed(() => {
            return store.state["isModal"];
        });

        const handleCloseModal = () => {
            store.commit("setIsModal", false);
        };

        return {
            isModal,
            handleCloseModal,
        };
    },
};
</script>

<style lang="scss">
.home-content {
    background-image: url("@/assets/images/shared/home/header/ellipse.svg");
    background-repeat: no-repeat;
    background-size: contain;

    &__container {
        @include container;
    }

    &__header {
        margin-bottom: 44px;
    }

    &__map {
        margin-bottom: 52px;
    }

    &__footer {
        margin-top: 100px;
    }

    &__modal {
        @include modal;
    }
}

@media screen and (max-width: 1920px) {
    .home-content {
        &__header {
            margin-bottom: 24px;
        }

        &__map {
            margin-bottom: 53px;
        }
    }
}

@media screen and (max-width: 576px) {
    .home-content {
        &__header {
            margin-bottom: 52px;
        }

        &__map {
            margin-bottom: 26px;
        }

        &__footer {
            margin-top: 60px;
        }
    }
}
</style>
