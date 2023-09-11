import {createStore} from "vuex";

export default createStore({
    state: {
        years: {
            "2023H1": {
                groups: [
                    {
                        key: "constellations",
                        displayname: "Constellations",
                        bar: 100,
                        map: ["CHN", "RUS"],
                        mitre: {
                            code: "G0032",
                            url: "https://attack.mitre.org/groups/G0032/",
                        },
                        reports: [
                            {
                                title: "Carbanak APT",
                                icon: "/path/to/img/preview1.png",
                                date: "03.08.2023",
                            },
                            {
                                title: "Gootloader",
                                icon: "/path/to/img/preview2.png",
                                date: "05.08.2023",
                            },
                        ],
                        aliases: [
                            "Labyrinth Chollima",
                            "Group 77",
                            "Hastati Group",
                            "Bureau 121",
                        ],
                        active: "2012",
                        countries: [
                            {
                                displayname: "China",
                                icon: "/path/to/img/icon2.png",
                            },
                            {
                                displayname: "Russia",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        motivations: [
                            {
                                displayname: "Financially motivated",
                                icon: "/path/to/img/icon.png",
                            },
                            {
                                displayname: "Cyber criminal",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        targets:
                            "Some very long text with <b>markup</b> </br> and </br> multiple lines",
                    },
                    {
                        key: "wizards",
                        displayname: "Wizards",
                        bar: 92,
                        map: ["USA"],
                        mitre: {
                            code: "",
                            url: "",
                        },
                        reports: [
                            {
                                title: "Gootloader",
                                icon: "/path/to/img/preview3.png",
                                date: "05.08.2023",
                            },
                        ],
                        aliases: ["Wizards"],
                        active: "2015",
                        countries: [
                            {
                                displayname: "USA",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        motivations: [],
                        targets:
                            "Some very long text with <b>markup</b> </br> and </br> multiple lines",
                    },
                ],
            },
        },
        year: null,
        group: null,
        isModal: false,
    },
    getters: {
        getYear(state) {
            return state.year;
        },

        getGroups(state) {
            const year = state.year;

            return year ? state.years[year].groups : [];
        },

        getGroup(state) {
            return state.group;
        },
    },
    mutations: {
        setYear(state, year) {
            state.year = year;
        },

        setGroup(state, group) {
            state.group = group;
        },

        setIsModal(state, isModal) {
            state.isModal = isModal;
        },
    },
    actions: {},
});
