<template>
    <div class="home-reports">
        <h3 class="home-reports__title">Recent reports</h3>

        <div class="home-reports__cards" v-if="reports.length">
            <HomeReportsReport
                v-for="report in reports"
                :key="report"
                :report="report"
            />
        </div>

        <!-- <UIButton class="home-reports__more" label="More" @clicked="more" /> -->
    </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import HomeReportsReport from "@/components/shared/home/reports/report.vue";
import UIButton from "@/components/ui/button/button.vue";

export default {
    name: "HomeReports",
    components: {
        HomeReportsReport,
        UIButton,
    },
    setup() {
        const store = useStore();

        const group = computed(() => {
            return store.getters["getGroup"];
        });

        const reports = computed(() => {
            return group.value ? group.value.reports : [];
        });

        const more = () => {
            console.log("More");
        };

        return {
            reports,
            more,
        };
    },
};
</script>

<style lang="scss">
.home-reports {
    display: flex;
    flex-direction: column;
    grid-row-gap: 28px;

    &__title {
        font-size: 26px;
    }

    &__cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
    }

    &__more {
        margin: 35px auto 0 auto;
    }
}

@media screen and (max-width: 1920px) {
    .home-reports {
        grid-row-gap: 26px;

        &__title {
            font-size: 24px;
        }

        &__cards {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 30px;
        }
    }
}

@media screen and (max-width: 1440px) {
    .home-reports {
        &__cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media screen and (max-width: 768px) {
    .home-reports {
        &__cards {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}

@media screen and (max-width: 576px) {
    .home-reports {
        grid-row-gap: 16px;

        &__title {
            font-size: 20px;
        }

        &__cards {
            grid-row-gap: 16px;
        }
    }
}
</style>
