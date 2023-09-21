import {createStore} from "vuex";

import {YEARS} from "@/utils/constants";

export default createStore({
    state: {
        years: YEARS,
        year: "2023H1",
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
            state.year = year;
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
