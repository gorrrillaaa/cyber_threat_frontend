import {createStore} from "vuex";

import {YEARS, DEFAULT_YEAR} from "@/utils/constants";

function setYear() {
    const year = localStorage.getItem("year");

    const isYear = YEARS[year];

    if (isYear) {
        return year;
    }

    return DEFAULT_YEAR;
}

export default createStore({
    state: {
        years: YEARS,
        year: setYear(),
        group: null,
        isModal: false,
        country: null,
        page: 0,
        map: [],
    },
    getters: {
        getGroups(state) {
            const year = state.year;

            return year
                ? state.years[year].groups.sort((a, b) => b.bar - a.bar)
                : [];
        },
    },
    mutations: {
        setYear(state, year) {
            localStorage.setItem("year", year);

            window.location.reload();
        },

        setGroup(state, group) {
            state.group = group;
            state.page = 0;
        },

        setIsModal(state, isModal) {
            state.isModal = isModal;
        },

        setCountry(state, country) {
            state.country = country;
        },

        setPage(state, page) {
            state.page = page;
        },

        setMap(state, map) {
            state.map = map;
        },
    },
});
