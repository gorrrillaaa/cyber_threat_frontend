import {createStore} from "vuex";

export default createStore({
    state: {
        years: {
            "2023H1": {
                groups: [
                    {
                        key: "lazarus_group",
                        displayname: "Lazarus Group",
                        bar: 35,
                        map: ["KP"],
                        mitre: {
                            code: "G0032",
                            url: "https://attack.mitre.org/groups/G0032/",
                        },
                        reports: [
                            {
                                url: "https://securelist.com/bluenoroff-methods-bypass-motw/108383",
                                title: "BlueNoroff introduces new methods bypassing MoTW",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.qualys.com/vulnerabilities-threat-research/2023/04/03/3cxdesktopapp-backdoored-in-a-suspected-lazarus-campaign",
                                title: "3CXDesktopApp Backdoored in a Suspected Lazarus Campaign",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/trustwave-action-response-supply-chain-attack-using-3cx-pbax-software",
                                title: "Trustwave Action Response: Supply Chain Attack Using 3CX PABX Software",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.welivesecurity.com/2023/04/20/linux-malware-strengthens-links-lazarus-3cx-supply-chain-attack",
                                title: "Linux malware strengthens links between Lazarus and the 3CX supply-chain attack",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://cybersecurity.att.com/blogs/labs-research/lazarus-campaign-ttps-and-evolution",
                                title: "Lazarus campaign TTPs and evolution",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/48416",
                                title: "Lazarus attack group attack case using public certificate software vulnerability widely used in public institutions and universities",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/en/48810",
                                title: "Lazarus Group Attack Case Using Vulnerability of Certificate Software Commonly Used by Public Institutions and Universities",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/52829",
                                title: "Lazarus Group Targeting Vulnerable Web Servers",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://medium.com/@dcso_cytec/andariels-jupiter-malware-and-the-case-of-the-curious-c2-dbfe29f57499",
                                title: "Andariels Jupiter malware and the case of the curious C2",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.mandiant.com/resources/blog/lightshow-north-korea-unc2970",
                                title: "Stealing the LIGHTSHOW (Part One) North Korea's UNC2970",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/53832",
                                title: "Lazarus attack group exploiting vulnerabilities in domestic financial security solutions",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.zscaler.com/security-research/coverage-advisory-3cx-supply-chain-attack-march-2023",
                                title: "Coverage Advisory for 3CX Supply Chain Attack",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.uptycs.com/blog/3cx-supply-chain-attack",
                                title: "3CX Supply Chain Cyber Attack: An Analysis of Windows and macOS Malicious Libraries",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://cloudsek.com/blog/technical-analysis-of-files-used-in-3cx-desktop-app-malware-campaign",
                                title: "Technical Analysis of Files Used in 3CX Desktop App Malware Campaign",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.volexity.com/blog/2023/03/30/3cx-supply-chain-compromise-leads-to-iconic-incident",
                                title: "3CX Supply Chain Compromise Leads to ICONIC Incident",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.crowdstrike.com/blog/crowdstrike-detects-and-prevents-active-intrusion-campaign-targeting-3cxdesktopapp-customers",
                                title: "CrowdStrike Falcon Platform Detects and Prevents Active Intrusion Campaign Targeting 3CXDesktopApp Customers",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/50797",
                                title: "3CX DesktopApp (CVE-2023-29059)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/en/50919",
                                title: "Caution When Using 3CX DesktopApp (CVE-2023-29059)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/50965",
                                title: "3CX DesktopApp supply chain attack confirmed in Korea",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.securonix.com/blog/security-advisory-3cx-smooth-operator-attack",
                                title: "Securonix Threat Labs Security Advisory: 3CX Smooth Operator Supply Chain Attack Business Impact and Detections",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://mp.weixin.qq.com/s/w4hkbrjnwn1g32qcpannoa",
                                title: "APT-C-26 lazarus",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/en/51090",
                                title: "3CX DesktopApp Supply Chain Attack Also Detected in Korea",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://wezard4u.tistory.com/6412",
                                title: "BlueNorOff targeting North Korean officials - Questionnaire.doc (2023.04.06)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://securelist.com/the-lazarus-group-deathnote-campaign/109490",
                                title: "Following the Lazarus group by tracking DeathNote campaign",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/47820",
                                title: "Anti-forensic techniques used by the Lazarus group",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/47751",
                                title: "Distributed Malware Exploiting Vulnerable Innorix: Andariel",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://securelist.com/the-bluenoroff-cryptocurrency-hunt-is-still-on/105488/",
                                title: "The BlueNoroff cryptocurrency hunt is still on",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.qualys.com/vulnerabilities-threat-research/2022/02/08/lolzarus-lazarus-group-incorporating-lolbins-into-campaigns",
                                title: "LolZarus: Lazarus Group Incorporating Lolbins into Campaigns",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.malwarebytes.com/threat-intelligence/2022/01/north-koreas-lazarus-apt-leverages-windows-update-client-github-in-latest-campaign/",
                                title: "North Korea’s Lazarus APT leverages Windows Update client, GitHub in latest campaign",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/en/48198",
                                title: "Distribution of Malware Exploiting Vulnerable Innorix: Andariel",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.welivesecurity.com/2023/02/23/winordll64-backdoor-vast-lazarus-arsenal",
                                title: "WinorDLL64: A backdoor from the vast Lazarus arsenal?",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://wezard4u.tistory.com/6437",
                                title: "Word Malware-Interview.doc (2023.4.28) made by Lazarus that is believed to target the European Union (EU)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.sekoia.io/bluenoroffs-rustbucket-campaign",
                                title: "Bluenoroff s RustBucket campaign",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blogs.jpcert.or.jp/en/2023/05/dangerouspassword.html",
                                title: "Attack Trends Related to DangerousPassword",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/en/53132",
                                title: "Lazarus Group Targeting Windows IIS Web Servers",
                                date: "01.01.2023",
                                icon: "",
                            },
                        ],
                        aliases: [
                            "Labyrinth Chollima",
                            "Group 77",
                            "Hastati Group",
                            "Bureau 121",
                            "BeagleBoyzBureau121",
                            "Unit 121",
                            "Unit121",
                            "Whois Hacking Team",
                            "WHOis Team",
                            "NewRomanic Cyber Army Team",
                            "ZINC",
                            "APT-C-26",
                            "UNC2970",
                            "UNC577",
                            "UNC4736",
                            "Appleworm",
                            "NICKEL GLADSTONE",
                            "COVELLITE",
                            "ATK3",
                            "Hidden Cobra",
                            "Diamond Sleet",
                            "Black Artemis",
                            "Nickel Academy",
                            "LolZarus",
                            "G0032",
                        ],
                        active: "начиная с 2009",
                        countries: [
                            {
                                displayname:
                                    "Корейская Народно-Демократическая Республика",
                                code: "KP",
                                icon: "/path/to/img/icon.png",
                            },
                        ],
                        motivations: [
                            {
                                displayname: "Финансовая мотивация",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        targets:
                            "Lazarus Group атаковала организации из более чем 20 отраслей. </br>Большинство этих атак было направлено на организации промышленного сектора, работающие в финансовом, ИТ-секторе.",
                    },
                    {
                        key: "kimsuky_group",
                        displayname: "Kimsuky",
                        bar: 20,
                        map: ["KP"],
                        mitre: {
                            code: "G0094",
                            url: "https://attack.mitre.org/groups/G0094/",
                        },
                        reports: [
                            {
                                url: "https://blog.malwarebytes.com/threat-intelligence/2022/01/konni-evolves-into-stealthier-rat/",
                                title: "KONNI evolves into stealthier RAT",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.lumen.com/new-konni-campaign-targeting-russian-ministry-of-foreign-affairs",
                                title: "New Konni Campaign Kicks Off The New Year By Targeting Russian Ministry Of Foreign Affairs",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://cluster25.io/wp-content/uploads/2022/01/konni_targeting_russian_diplomatic_sector.pdf",
                                title: 'North Korean group "Konni" targets the Russian diplomatic sector with new versions of malware implants',
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/49843",
                                title: "OneNote malware disguised as reward payment (Kimsuky)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/50275",
                                title: "Kimsuky group distributes malware disguised as a profile file (GitHub)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.alyac.co.kr/5043",
                                title: "Kimsuky organization, Kakao phishing attackMalware Analysis Report",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/47147",
                                title: "Malware disguised as a normal document (KIMSUKY)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.sentinelone.com/labs/kimsuky-evolves-reconnaissance-capabilities-in-new-global-campaign",
                                title: "Kimsuky Evolves Reconnaissance Capabilities in New Global Campaign",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/52662",
                                title: "Kimsuky group using Meterpreter to attack web servers",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/48960",
                                title: "CHM malware (Kimsuky) disguised questionnaires related to North Korea",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.sentinelone.com/labs/kimsuky-ongoing-campaign-using-tailored-reconnaissance-toolkit",
                                title: "Kimsuky. Ongoing Campaign Using Tailored Reconnaissance Toolkit",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.sentinelone.com/labs/kimsuky-new-social-engineering-campaign-aims-to-steal-credentials-and-gather-strategic-intelligence",
                                title: "Kimsuky Strikes Again. New Social Engineering Campaign Aims to Steal Credentials and Gather Strategic Intelligence",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/en/50577",
                                title: "Overview of AhnLab s Response to Korea-Germany Joint Cyber Security Advice",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/en/45658",
                                title: "Malware Disguised as a Manuscript Solicitation Letter (Targeting Security-Related Workers)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://wezard4u.tistory.com/6417",
                                title: "Word malware created by Kimsuky in North Korea-personal information.doc",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.zimperium.com/blog/kimsuky-infamous-threat-actor-churns-out-more-advanced-malware",
                                title: "Kimsuky: Infamous Threat Actor Churns Out More Advanced Malware",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://inquest.net/blog/2021/08/23/kimsuky-espionage-campaign",
                                title: "Kimsuky Espionage Campaign",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/en/31089/",
                                title: "Distribution of Kimsuky Group’s xRAT (Quasar RAT) Confirmed",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.proofpoint.com/us/resources/threat-reports/triple-threat-north-korea-aligned-ta406-scams-spies-and-steals",
                                title: "Triple Threat: North Korea Aligned TA406 Scams, Spies, and Steals",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/49964",
                                title: "Status of AhnLab Response to Korea-Germany Joint Cyber Security Advisory",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://asec.ahnlab.com/ko/50394",
                                title: "Kimsuky group uses ADS to hide malware",
                                date: "01.01.2023",
                                icon: "",
                            },
                        ],
                        aliases: [
                            "Velvet Chollima",
                            "Kimsuky",
                            "Konni",
                            "Thallium",
                            "TA408",
                            "TA427",
                            "CloudDragon",
                            "TA406",
                            "SharpTongue",
                            "Crooked Pisces",
                            "Osmium",
                            "Cerium",
                            "Emerald Sleet",
                            "Black Banshee",
                            "APT43",
                            "Archipelago",
                            "Ruby Sleet",
                            "G0094",
                        ],
                        active: "начиная с 2012",
                        countries: [
                            {
                                displayname:
                                    "Корейская Народно-Демократическая Республика",
                                code: "KP",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        motivations: [
                            {
                                displayname: "Кибершпионаж",
                                icon: "/path/to/img/icon.png",
                            },
                        ],
                        targets:
                            "Правительственные учреждения, аналитические центры, отдельные эксперты из Южной Кореи, США, России, Европпы и ООН.",
                    },
                    {
                        key: "scarcruft_group",
                        displayname: "ScarCruft",
                        bar: 3,
                        map: ["CHN"],
                        mitre: {
                            code: "G0067",
                            url: "https://attack.mitre.org/groups/G0067/",
                        },
                        reports: [
                            {
                                url: "https://asec.ahnlab.com/ko/51628",
                                title: "RokRAT malware distributed through link files (*.lnk): RedEyes (ScarCruft)",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://research.checkpoint.com/2023/chain-reaction-rokrats-missing-link",
                                title: "Chain Reaction: ROKRAT s Missing Link",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://securelist.com/scarcruft-surveilling-north-korean-defectors-and-human-rights-activists/105074/",
                                title: "ScarCruft surveilling North Korean defectors and human rights activists",
                                date: "01.01.2023",
                                icon: "",
                            },
                        ],
                        aliases: [
                            "Ricochet Chollima",
                            "Group 123",
                            "ScarCruft",
                            "APT37",
                            "Red Eyes",
                            "Reaper",
                            "Venus 121",
                            "THALLIUM",
                            "G0067",
                        ],
                        active: "начиная с 2012",
                        countries: [
                            {
                                displayname:
                                    "Корейская Народно-Демократическая Республика",
                                code: "KN",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        motivations: [
                            {
                                displayname: "Кибершпионаж",
                                icon: "/path/to/img/icon.png",
                            },
                        ],
                        targets:
                            "Компании в Южной Корее, а также в Японии, Вьетнаме, России, Непале, Китае, Индии, Румынии, Кувейте и других частях Ближнего Востока.",
                    },
                    {
                        key: "transparenttribe_group",
                        displayname: "Transparent Tribe",
                        bar: 12,
                        map: ["PK"],
                        mitre: {
                            code: "G0134",
                            url: "https://attack.mitre.org/groups/G0134/",
                        },
                        reports: [
                            {
                                url: "https://www.uptycs.com/blog/cyber_espionage_in_india_decoding_apt_36_new_linux_malware",
                                title: "Cyber Espionage in India: Decoding APT-36's New Linux Malware Campaign",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.cyble.com/2022/02/11/deep-dive-analysis-caprarat/",
                                title: "Deep Dive Analysis – capraRAT",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.trendmicro.com/en_us/research/22/a/investigating-apt36-or-earth-karkaddans-attack-chain-and-malware.html",
                                title: "Investigating APT36 or Earth Karkaddans Attack Chain and Malware Arsenal",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.welivesecurity.com/2023/03/07/love-scam-espionage-transparent-tribe-lures-indian-pakistani-officials",
                                title: "Love scam or espionage? Transparent Tribe lures Indian and Pakistani officials",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.sentinelone.com/labs/transparent-tribe-apt36-pakistan-aligned-threat-actor-expands-interest-in-indian-education-sector",
                                title: "Transparent Tribe (APT36). Pakistan-Aligned Threat Actor Expands Interest in Indian Education Sector",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://lab52.io/blog/new-transparentribe-operation-targeting-india-with-weaponized-covid-19-lure-documents/",
                                title: "New TransparenTribe Operation: Targeting India with weaponized COVID-19 lure documents",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://mp.weixin.qq.com/s/lvsragnmsl3a1jeuubuvyw",
                                title: "APT-C-56 Android RlmRat Linux.",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.malwarebytes.com/threat-intelligence/2021/12/sidecopy-apt-connecting-lures-to-victims-payloads-to-infrastructure/",
                                title: "SideCopy APT: Connecting lures to victims, payloads to infrastructure",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.talosintelligence.com/2021/07/sidecopy.html",
                                title: "InSideCopy: How this APT continues to evolve its arsenal",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://ti.qianxin.com/blog/articles/analysis-of-sidecopy-group's-recent-attacks-using-indian-ministry-of-defense-documents-as-lures-en",
                                title: "Analysis of SideCopy Group's Recent Attacks Using Indian Ministry of Defense Documents as Lures",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.team-cymru.com/post/allakore-d-the-sidecopy-train",
                                title: "AllaKore(d) the SideCopy Train",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://ti.qianxin.com/blog/articles/sidecopy-group-launches-attacks-on-india-using-a-new-trojan-en",
                                title: "Sidecopy Group Launches Attacks on India Using a New Trojan",
                                date: "01.01.2023",
                                icon: "",
                            },
                        ],
                        aliases: [
                            "Mythic Leopard",
                            "ProjectM",
                            "APT36",
                            "Temp.Lapis",
                            "Copper Fieldstone",
                            "Green Havildar",
                            "APT-C-56",
                            "G0134",
                        ],
                        active: "начиная с 2013",
                        countries: [
                            {
                                displayname: "Пакистан",
                                code: "PK",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        motivations: [
                            {
                                displayname: "Политическая мотивация",
                                icon: "/path/to/img/icon.png",
                            },
                        ],
                        targets:
                            "Дипломатические, оборонные и исследовательские организации в Индии и Афганистане.",
                    },
                    {
                        key: "muddywater_group",
                        displayname: "MuddyWater",
                        bar: 8,
                        map: ["IR"],
                        mitre: {
                            code: "G0069",
                            url: "https://attack.mitre.org/groups/G0069/",
                        },
                        reports: [
                            {
                                url: "https://www.microsoft.com/en-us/security/blog/2023/04/07/mercury-and-dev-1084-destructive-attack-on-hybrid-environment",
                                title: "MERCURY and DEV-1084: Destructive attack on hybrid environment",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.group-ib.com/blog/muddywater-infrastructure",
                                title: "SimpleHarm: Tracking MuddyWater s infrastructure",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://mp.weixin.qq.com/s/aYB7W_elO4FHPUtKrUtzHQ",
                                title: "APT MuddyWater. APT organization Muddywater analysis",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.talosintelligence.com/2022/01/iranian-apt-muddywater-targets-turkey.html",
                                title: "Iranian APT MuddyWater targets Turkish users via malicious PDFs, executables",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://socradar.io/dark-web-profile-muddywater-apt-group",
                                title: "Dark Web Profile: MuddyWater APT Group",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://labs.k7computing.com/index.php/muddywater-back-with-darkbit",
                                title: "MuddyWater Back with DarkBit",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://www.sentinelone.com/labs/wading-through-muddy-waters-recent-activity-of-an-iranian-state-sponsored-threat-actor/",
                                title: "Wading Through Muddy Waters. Recent Activity of an Iranian State-Sponsored Threat Actor",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/espionage-campaign-telecoms-asia-middle-east",
                                title: "Espionage Campaign Targets Telecoms Organizations across Middle East and Asia",
                                date: "01.01.2023",
                                icon: "",
                            },
                        ],
                        aliases: [
                            "TEMP.Zagros",
                            "Seedworm",
                            "Cobalt Ulster",
                            "SectorD02",
                            "MERCURY",
                            "MuddyWater",
                            "DarkBit",
                            "Mango Sandstorm",
                            "Boggy Serpens",
                            "ATK51",
                            "Static Kitten",
                            "Yellow nix",
                            "POWERSTATS",
                            "NTSTATS",
                            "G0069",
                        ],
                        active: "начиная с 2017",
                        countries: [
                            {
                                displayname: "Иран",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        motivations: [
                            {
                                displayname: "Кибершпионаж",
                                icon: "/path/to/img/icon.png",
                            },
                        ],
                        targets:
                            "Государственные и частные организаций в различных секторах, включая телекоммуникации, органы власти, оборонную промышленность, а также нефтегазовые организации на Ближнем Востоке, в Азии, Африке, Европе и Северной Америке.",
                    },
                    {
                        key: "gamaredon_group",
                        displayname: "Gamaredon",
                        bar: 6,
                        map: ["RU"],
                        mitre: {
                            code: "G0047",
                            url: "https://attack.mitre.org/groups/G0047/",
                        },
                        reports: [
                            {
                                url: "https://unit42.paloaltonetworks.com/trident-ursa/",
                                title: "Russias Trident Ursa (aka Gamaredon APT) Cyber Conflict Operations Unwavering Since Invasion of Ukraine",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blogs.blackberry.com/en/2023/01/gamaredon-abuses-telegram-to-target-ukrainian-organizations",
                                title: "Gamaredon (Ab)uses Telegram to Target Ukrainian Organizations",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.eclecticiq.com/three-cases-of-cyber-attacks-on-the-security-service-of-ukraine-and-nato-allies-likely-by-russian-state-sponsored-gamaredon",
                                title: "Three Cases of Cyber Attacks on the Security Service of Ukraine and NATO Allies, Likely by Russian State-Sponsored Gamaredon",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/shuckworm-gamaredon-espionage-ukraine",
                                title: "Shuckworm: Inside Russia s Relentless Cyber Campaign Against Ukraine",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.talosintelligence.com/following-the-lnk-metadata-trail",
                                title: "Following the LNK metadata trail",
                                date: "01.01.2023",
                                icon: "",
                            },
                            {
                                url: "https://blog.eclecticiq.com/exposed-web-panel-reveals-gamaredon-groups-automated-spear-phishing-campaigns",
                                title: "Exposed Web Panel Reveals Gamaredon Group's Automated Spear Phishing Campaigns",
                                date: "01.01.2023",
                                icon: "",
                            },
                        ],
                        aliases: [
                            "Gamaredon Group",
                            "BlueAlpha",
                            "Shuckworm",
                            "ACTINIUM",
                            "Primitive Bear",
                            "Trident Ursa",
                            "Iron Tilden",
                            "G0047",
                        ],
                        active: "начиная с 2013",
                        countries: [
                            {
                                displayname: "Россия",
                                icon: "/path/to/img/icon2.png",
                            },
                        ],
                        motivations: [
                            {
                                displayname: "Кибершпионаж",
                                icon: "/path/to/img/icon.png",
                            },
                        ],
                        targets:
                            "Военные, неправительственные, судебные, правоохранительные и некоммерческие организации в Украине.",
                    },
                ],
            },
        },
        year: "2023H1",
        group: null,
        isModal: false,
        country: null,
        page: 0,
        map: [],
    },
    getters: {
        getYear(state) {
            return state.year;
        },

        getGroups(state) {
            const year = state.year;

            return year
                ? state.years[year].groups.sort((a, b) => b.bar - a.bar)
                : [];
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
