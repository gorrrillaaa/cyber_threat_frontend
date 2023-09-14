<template>
    <div class="ui-icon">
        <svg
            v-if="isIcon('arrow-right-18')"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.06934 4.49231L13.5075 4.49231L13.5075 10.9305"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M4.49219 13.5079L13.4176 4.58242"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('arrow-right-26')"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
        >
            <path
                d="M10.2119 6.48877L19.5115 6.48877L19.5115 15.7884"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M6.48926 19.5113L19.3816 6.61894"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('close-50')"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
        >
            <rect
                width="50"
                height="50"
                rx="15"
                transform="matrix(-1 0 0 1 50 0)"
                fill="#26272F"
            />
            <rect
                x="-0.5"
                y="0.5"
                width="49"
                height="49"
                rx="14.5"
                transform="matrix(-1 0 0 1 49 0)"
                stroke="#98B7FF"
                stroke-opacity="0.15"
            />
            <path
                d="M32.6456 17.3665C32.5333 17.254 32.4 17.1648 32.2532 17.1039C32.1064 17.043 31.949 17.0116 31.79 17.0116C31.6311 17.0116 31.4737 17.043 31.3269 17.1039C31.1801 17.1648 31.0467 17.254 30.9344 17.3665L25 23.2888L19.0656 17.3544C18.9532 17.242 18.8198 17.1529 18.673 17.0921C18.5262 17.0313 18.3689 17 18.21 17C18.0511 17 17.8937 17.0313 17.7469 17.0921C17.6001 17.1529 17.4667 17.242 17.3544 17.3544C17.242 17.4667 17.1529 17.6001 17.0921 17.7469C17.0313 17.8937 17 18.0511 17 18.21C17 18.3689 17.0313 18.5262 17.0921 18.673C17.1529 18.8198 17.242 18.9532 17.3544 19.0656L23.2888 25L17.3544 30.9344C17.242 31.0468 17.1529 31.1802 17.0921 31.327C17.0313 31.4738 17 31.6311 17 31.79C17 31.9489 17.0313 32.1063 17.0921 32.2531C17.1529 32.3999 17.242 32.5333 17.3544 32.6456C17.4667 32.758 17.6001 32.8471 17.7469 32.9079C17.8937 32.9687 18.0511 33 18.21 33C18.3689 33 18.5262 32.9687 18.673 32.9079C18.8198 32.8471 18.9532 32.758 19.0656 32.6456L25 26.7112L30.9344 32.6456C31.0468 32.758 31.1802 32.8471 31.327 32.9079C31.4738 32.9687 31.6311 33 31.79 33C31.9489 33 32.1063 32.9687 32.2531 32.9079C32.3999 32.8471 32.5333 32.758 32.6456 32.6456C32.758 32.5333 32.8471 32.3999 32.9079 32.2531C32.9687 32.1063 33 31.9489 33 31.79C33 31.6311 32.9687 31.4738 32.9079 31.327C32.8471 31.1802 32.758 31.0468 32.6456 30.9344L26.7112 25L32.6456 19.0656C33.1068 18.6044 33.1068 17.8277 32.6456 17.3665Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('flag-33')"
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="23"
            viewBox="0 0 33 23"
            fill="none"
        >
            <rect width="33" height="23" rx="3" fill="#1A47B8" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 16.8667H33V18.4H0V16.8667Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.13333H33V16.8667H0V6.13333Z"
                fill="#F93939"
            />
            <path
                d="M8.64244 15.3333C10.8121 15.3333 12.571 13.6171 12.571 11.5C12.571 9.38291 10.8121 7.66667 8.64244 7.66667C6.47275 7.66667 4.71387 9.38291 4.71387 11.5C4.71387 13.6171 6.47275 15.3333 8.64244 15.3333Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.64037 12.9965L6.75465 13.9625L7.11608 11.9155L5.5918 10.468L7.69751 10.169L8.64037 8.30756L9.58323 10.1706L11.6889 10.4711L10.1647 11.9201L10.5261 13.9686"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 4.60001H33V6.13334H0V4.60001Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('money-25')"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.79562 2.9829C2.14496 3.58707 1.69752 4.57668 1.69752 6.15769V11.9859C1.69752 13.1291 1.93181 13.9596 2.29816 14.5532C2.65814 15.1366 3.18042 15.5487 3.86954 15.8067C4.08221 15.8838 4.29907 15.9457 4.51368 15.98C4.53119 15.9828 4.5486 15.9862 4.5659 15.9901C4.94518 16.0754 5.36762 16.1164 5.82813 16.1164H15.7756C17.1393 16.1164 18.1461 15.7754 18.8081 15.1606C19.4588 14.5565 19.9062 13.5669 19.9062 11.9859V6.15769C19.9062 5.69265 19.8575 5.28252 19.7848 4.86501C19.578 3.83144 19.111 3.15509 18.483 2.72113C17.8347 2.27312 16.9317 2.02711 15.7756 2.02711H5.82813C4.46442 2.02711 3.45767 2.36815 2.79562 2.9829ZM1.64055 1.73896C2.72128 0.735435 4.20422 0.32959 5.82813 0.32959H15.7756C17.1545 0.32959 18.43 0.621116 19.448 1.32459C20.4845 2.04083 21.1709 3.12718 21.4517 4.5442L21.4552 4.56287C21.54 5.0474 21.6037 5.56249 21.6037 6.15769V11.9859C21.6037 13.8904 21.0553 15.3905 19.9632 16.4046C18.8824 17.4081 17.3995 17.814 15.7756 17.814H5.82813C5.27916 17.814 4.73715 17.7661 4.21881 17.6519C3.87887 17.5953 3.563 17.5015 3.28605 17.4008L3.27924 17.3983L3.27925 17.3983C2.27254 17.0224 1.43228 16.3825 0.853564 15.4447C0.280621 14.5162 0 13.3549 0 11.9859V6.15769C0 4.25313 0.548426 2.75307 1.64055 1.73896Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.022 4.1076C20.2248 3.90586 20.5155 3.81983 20.7954 3.87876C22.0256 4.13775 23.1028 4.71828 23.8641 5.70415C24.6218 6.68529 25.0002 7.98163 25.0002 9.55286V15.381C25.0002 17.2856 24.4517 18.7856 23.3596 19.7998C22.2789 20.8033 20.796 21.2091 19.172 21.2091H9.22458C8.31592 21.2091 7.45132 21.0871 6.67485 20.7931C5.03916 20.1872 3.93097 18.9092 3.5485 16.9836C3.49255 16.702 3.58284 16.4111 3.78846 16.2106C3.99407 16.0101 4.28713 15.9272 4.56731 15.9902C4.94659 16.0756 5.36903 16.1166 5.82955 16.1166H15.777C17.1407 16.1166 18.1475 15.7755 18.8095 15.1608C19.4602 14.5566 19.9076 13.567 19.9076 11.986V6.15783C19.9076 5.6746 19.8665 5.25724 19.7891 4.87987C19.7317 4.59966 19.8192 4.30934 20.022 4.1076ZM21.6031 5.95836C21.6045 6.02423 21.6051 6.09072 21.6051 6.15783V11.986C21.6051 13.8905 21.0567 15.3906 19.9646 16.4047C18.8839 17.4082 17.4009 17.8141 15.777 17.8141H5.82955C5.75874 17.8141 5.68806 17.8133 5.61752 17.8117C5.99135 18.496 6.55331 18.9384 7.2669 19.2022L7.27358 19.2047L7.27357 19.2047C7.80899 19.4078 8.45965 19.5116 9.22458 19.5116H19.172C20.5357 19.5116 21.5425 19.1706 22.2045 18.5558C22.8552 17.9516 23.3027 16.962 23.3027 15.381V9.55286C23.3027 8.24963 22.9907 7.35053 22.5206 6.74169C22.2761 6.42515 21.9708 6.16355 21.6031 5.95836Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7944 6.93841C9.61315 6.93841 8.65552 7.89604 8.65552 9.0773C8.65552 10.2586 9.61315 11.2162 10.7944 11.2162C11.9757 11.2162 12.9333 10.2586 12.9333 9.0773C12.9333 7.89604 11.9757 6.93841 10.7944 6.93841ZM6.95801 9.0773C6.95801 6.95852 8.67563 5.2409 10.7944 5.2409C12.9132 5.2409 14.6308 6.95852 14.6308 9.0773C14.6308 11.1961 12.9132 12.9137 10.7944 12.9137C8.67563 12.9137 6.95801 11.1961 6.95801 9.0773Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.32337 5.73897C4.79212 5.73897 5.17213 6.11897 5.17213 6.58773V11.5671C5.17213 12.0359 4.79212 12.4159 4.32337 12.4159C3.85461 12.4159 3.47461 12.0359 3.47461 11.5671V6.58773C3.47461 6.11897 3.85461 5.73897 4.32337 5.73897Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.2716 5.73932C17.7404 5.73932 18.1204 6.11932 18.1204 6.58808V11.5675C18.1204 12.0362 17.7404 12.4162 17.2716 12.4162C16.8029 12.4162 16.4229 12.0362 16.4229 11.5675V6.58808C16.4229 6.11932 16.8029 5.73932 17.2716 5.73932Z"
                fill="#4CED8C"
            />
        </svg>

        <svg
            v-if="isIcon('AF')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_280)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 10C11.88 10 13 8.88 13 7.5C13 6.12 11.88 5 10.5 5C9.12 5 8 6.12 8 7.5C8 8.88 9.12 10 10.5 10ZM10.5 9C11.328 9 12 8.105 12 7C12 5.895 11.328 5 10.5 5C9.672 5 9 5.895 9 7C9 8.105 9.672 9 10.5 9ZM10.5 8C10.776 8 11 7.552 11 7C11 6.448 10.776 6 10.5 6C10.224 6 10 6.448 10 7C10 7.552 10.224 8 10.5 8Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_280">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AL')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_279)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 4L9 3L8 4H9L8 5L6 4V9L9 8L8 10H7L8 11L9 10L10.5 12V4ZM12 3L13 4H12L13 5L15 4V9L12 8L13 10H14L13 11L12 10L10.5 12V4L12 3Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_279">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('DZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_278)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H10V15H0V0Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.052 10.263C12.23 11.32 10.944 12 9.5 12C7.015 12 5 9.985 5 7.5C5 5.015 7.015 3 9.5 3C10.944 3 12.23 3.68 13.052 4.737C12.417 4.275 11.618 4 10.75 4C8.68 4 7 5.567 7 7.5C7 9.433 8.68 11 10.75 11C11.618 11 12.417 10.725 13.052 10.263Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 7.5L14 7L14.5 6L15 7L16 7.5L15 8L14.5 9L14 8L13 7.5Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_278">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AD')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_277)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.936 9.935C12.55 9.748 13 9.177 13 8.5V5.5C13 4.665 12.328 4 11.5 4H9.5C8.674 4 8 4.67 8 5.5V8.5C8 9.182 8.448 9.75 9.064 9.936C9.25 10.556 9.822 11 10.5 11C11.182 11 11.75 10.55 11.936 9.935Z"
                    fill="#D4AF2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 5H10V6.5H9V5ZM11 7H12V8.5H11V7Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 5H12V6.5H11V5ZM9 7H10V8.5H9V7Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_277">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AO')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_276)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8H21V15H0V8Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.451 9.58598C12.885 9.00398 13.141 8.28198 13.141 7.49998C13.141 6.03298 12.238 4.77698 10.958 4.25598L10.353 5.10298C11.387 5.40998 12.141 6.36698 12.141 7.49998C12.141 8.09398 11.934 8.63998 11.588 9.06798L8.141 6.99998L10.837 9.69598C10.482 9.88998 10.074 9.99998 9.641 9.99998C8.801 9.99998 8.058 9.58598 7.605 8.94998L7 9.79698C7.641 10.534 8.586 11 9.641 11C10.351 11 11.013 10.788 11.565 10.424L12.141 11L13.141 9.99998L12.451 9.58598ZM8.141 4.99998H9.141V5.99998H8.141V4.99998Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_276">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_275)">
                <rect width="21" height="15" rx="3" fill="#151515" />
                <rect width="21" height="15" fill="#151515" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 9H21V15H0V9Z"
                    fill="white"
                />
                <path
                    d="M10.5 9C12.433 9 14 7.433 14 5.5C14 3.567 12.433 2 10.5 2C8.567 2 7 3.567 7 5.5C7 7.433 8.567 9 10.5 9Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 6H21V9H0V6Z"
                    fill="#3A99FF"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 15H0V0L11 15Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 15H21V0L10 15Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_275">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AU')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_274)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#1A47B8"
                />
                <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 11.5L5 11L5.5 10L6 11L7 11.5L6 12L5.5 13L5 12L4 11.5ZM14 3V4H15V3H14ZM17 4V5H18V4H17ZM13 6V7H14V6H13ZM16 7V8H17V7H16ZM15 10V11H16V10H15Z"
                    fill="white"
                />
                <path
                    d="M9 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55228 1.44772 8 2 8H9C9.55229 8 10 7.55228 10 7V2C10 1.44772 9.55229 1 9 1Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5H2V4H5V2H6V4H9V5H6V7H5V5ZM7.5 6V7H9V6H7.5ZM7.5 2V3H9V2H7.5ZM2 6V7H3.5V6H2ZM2 2V3H3.5V2H2Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_274">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_273)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10ZM0 0H21V5H0V0Z"
                    fill="#3ECBF8"
                />
                <path
                    d="M10.5 9C11.3284 9 12 8.32843 12 7.5C12 6.67157 11.3284 6 10.5 6C9.67157 6 9 6.67157 9 7.5C9 8.32843 9.67157 9 10.5 9Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_273">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_272)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_272">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_271)">
                <rect width="21" height="15" rx="3" fill="#3ECBF8" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#3ECBF8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 9H21V10H0V9ZM0 11H21V12H0V11Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.485 4.485C5.355 4.43 6 4.235 6 4C6 3.766 5.355 3.57 4.485 3.515C4.43 2.645 4.235 2 4 2C3.766 2 3.57 2.645 3.515 3.515C2.645 3.57 2 3.765 2 4C2 4.234 2.645 4.43 3.515 4.485C3.57 5.355 3.765 6 4 6C4.234 6 4.43 5.355 4.485 4.485Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.485 4.485C5.355 4.43 6 4.235 6 4C6 3.766 5.355 3.57 4.485 3.515C4.43 2.645 4.235 2 4 2C3.766 2 3.57 2.645 3.515 3.515C2.645 3.57 2 3.765 2 4C2 4.234 2.645 4.43 3.515 4.485C3.57 5.355 3.765 6 4 6C4.234 6 4.43 5.355 4.485 4.485ZM4.515 4.985L4.985 4.515C4.91 5.713 4.66 6.5 4 6.5C3.34 6.5 3.09 5.712 3.016 4.516L3.484 4.984C2.288 4.91 1.5 4.66 1.5 4C1.5 3.34 2.288 3.09 3.484 3.016L3.016 3.484C3.09 2.288 3.34 1.5 4 1.5C4.66 1.5 4.91 2.288 4.984 3.484L4.516 3.016C5.712 3.09 6.5 3.34 6.5 4C6.5 4.66 5.712 4.91 4.516 4.984L4.515 4.985Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_271">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AT')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_270)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10ZM0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_270">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('AZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_269)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 7H13V8H12V7Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5 9C12.044 9.607 11.318 10 10.5 10C9.12 10 8 8.88 8 7.5C8 6.12 9.12 5 10.5 5C11.318 5 12.044 5.393 12.5 6H11C10.172 6 9.5 6.672 9.5 7.5C9.5 8.328 10.172 9 11 9H12.5Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#3ECBF8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_269">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BS')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_268)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10ZM0 0H21V5H0V0Z"
                    fill="#3ECBF8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V15.033L11 7.5L0 0Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_268">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BH')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#F93939" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H7V15H0V0ZM7 0L9 1.5L7 3V0ZM7 3L9 4.5L7 6V3ZM7 6L9 7.5L7 9V6ZM7 9L9 10.5L7 12V9ZM7 12L9 13.5L7 15V12Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('BD')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_266)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#249F58"
                />
                <path
                    d="M9.5 12C11.9853 12 14 9.98528 14 7.5C14 5.01472 11.9853 3 9.5 3C7.01472 3 5 5.01472 5 7.5C5 9.98528 7.01472 12 9.5 12Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_266">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BB')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_265)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0ZM14 0H21V15H14V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 10H11V11H10V10ZM12 8H13V9H12V8ZM8 8H9V9H8V8Z"
                    fill="#AE6A3E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 8V4H10V8H9V9H10V10H11V9H12V8H11ZM12 5H13V8H12V5ZM8 5H9V8H8V5Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_265">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BY')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_264)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 11H21V15H5V11Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 0L5 1.5L3 3V0ZM3 3L5 4.5L3 6V3ZM3 6L5 7.5L3 9V6ZM3 9L5 10.5L3 12V9ZM3 12L5 13.5L3 15V12ZM2 0L0 1.5L2 3V0ZM2 3L0 4.5L2 6V3ZM2 6L0 7.5L2 9V6ZM2 9L0 10.5L2 12V9ZM2 12L0 13.5L2 15V12ZM2 0H3V2H2V0ZM2 13H3V15H2V13ZM2 5H3V7H2V5ZM2 3H3V4H2V3ZM2 11H3V12H2V11ZM2 8H3V10H2V8Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_264">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_263)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_263">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_262)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    d="M10.5 12C12.9853 12 15 9.98528 15 7.5C15 5.01472 12.9853 3 10.5 3C8.01472 3 6 5.01472 6 7.5C6 9.98528 8.01472 12 10.5 12Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.5 8H12.5V9H8.5V8Z"
                    fill="#CBCBCB"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 5H9V6H8V5ZM10 4H11V5H10V4ZM12 5H13V6H12V5ZM13 7H14V8H13V7ZM12 9H13V10H12V9Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 7H12V8H11V7Z"
                    fill="#AE6A3E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 7H10V8H9V7Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 10H11V11H10V10ZM8 9H9V10H8V9ZM7 7H8V8H7V7Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 6H12V7H11V6Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6H10V7H9V6Z"
                    fill="#AE6A3E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 13H21V15H0V13ZM0 0H21V2H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_262">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BJ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_261)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 8H21V15H8V8Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H8V15H0V0Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_261">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BT')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_260)">
                <rect width="21" height="15" rx="3" fill="#FF6C2D" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FF6C2D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L21 0H0V15Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 10L3.5 11.5L5.5 12L6 11L10 11.5L9 9H11L14 10L15 9L12 8L13 7H16L16.5 6H14V5H16L17 4L13 3L11 5L10 6L11 7L8 6.5L6 10L5 11L3 10Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_260">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BO')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_259)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 7H10V8H9V7ZM11 7H12V8H11V7Z"
                    fill="#03BCDB"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 7H13V9H12V7ZM11 6H12V7H11V6ZM9 6H10V7H9V6ZM8 7H9V9H8V7Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 8H11V9H10V8Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 8H12V9H11V8ZM9 8H10V9H9V8Z"
                    fill="#D4AF2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 7H11V8H10V7Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 6H11V7H10V6Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_259">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_258)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L21 14L20.877 15.1L0 15V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 3H2V4H1V3ZM4 5H5V6H4V5ZM7 7H8V8H7V7ZM10 9H11V10H10V9ZM13 11H14V12H13V11ZM16 13H17V14H16V13Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_258">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#3ECBF8" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 9H21V10H0V9Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6H21V9H0V6Z"
                fill="#151515"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 5H21V6H0V5Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('BV')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_256)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 9H0V6H6V0H9V6H21V9H9V15H6V9Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 8H0V7H7V0H8V7H21V8H8V15H7V8Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_256">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#249F58" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 2L18 7.5L10.5 13L3 7.5"
                fill="#FFDA2C"
            />
            <path
                d="M10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11Z"
                fill="#1A47B8"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 9V10H10V9H9ZM11 9V10H12V9H11Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 6C8 6 10.264 6.4 11.896 7.098L14 8"
                fill="white"
            />
            <path d="M8 6C8 6 10.264 6.4 11.896 7.098L14 8" stroke="white" />
        </svg>

        <svg
            v-if="isIcon('BN')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_254)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L21 10V14L0 4V0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 3L21 13V15L0 5V3Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 7L9 8V12L7 11V9L5 7L7 5L8 6V7ZM9 9H12V10H9V9ZM13 7L12 8V12L14 11V9L16 7L14 5L13 6V7ZM9 6H12L10.5 3L9 6Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_254">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_253)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_253">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BF')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_252)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8H21V15H0V8Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 9.25L8.443 10.332L8.836 8.042L7.17 6.417L9.47 6.083L10.5 4L11.53 6.084L13.83 6.418L12.164 8.041L12.557 10.333"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_252">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('BI')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_251)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L10 8L0 15V0ZM21 0L11 8L21 15V0Z"
                    fill="#00B731"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.158 6.456L0 1.5V0H1.5L8.347 4.74C8.94 4.276 9.687 4 10.5 4C11.312 4 12.06 4.276 12.653 4.74L19.5 0H21V1.5L13.842 6.456C13.945 6.786 14 7.136 14 7.5C14 7.864 13.945 8.214 13.842 8.544L21 13.5V15H19.5L12.653 10.26C12.059 10.724 11.313 11 10.5 11C9.688 11 8.94 10.724 8.347 10.26L1.5 15H0V13.5L7.158 8.544C7.055 8.214 7 7.864 7 7.5C7 7.136 7.055 6.786 7.158 6.456Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 6H11V7H10V6ZM11 8H12V9H11V8ZM9 8H10V9H9V8Z"
                    fill="#AF010D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_251">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('KH')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_250)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 5H8.5L9 6H8V5ZM9 6H10V7H9V6ZM8 7H9V8H8V7ZM7 8H8V9H7V8ZM7 9H8V10H7V9ZM6.5 9H7V10H6L6.5 9ZM9 8H11V10H9V8ZM13 5H12.5L12 6H13V5ZM12 6H11V7H12V6ZM13 7H12V8H13V7ZM14 8H13V9H14V8ZM14 9H13V10H14V9ZM14.5 9H14V10H15L14.5 9ZM12 8H11V10H12V8Z"
                    fill="white"
                />
                <path
                    opacity="0.7"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 7H10V8H9V7ZM8 8H9V10H8V8ZM8 6H9V7H8V6ZM7.5 7H8V8H7L7.5 7ZM12 7H11V8H12V7ZM13 8H12V10H13V8ZM13 6H12V7H13V6ZM13.5 7H13V8H14L13.5 7ZM11 6H10V8H11V6Z"
                    fill="white"
                />
                <path
                    opacity="0.7"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 5H11V6H10V5Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V4H0V0ZM0 11H21V15H0V11Z"
                    fill="#232C80"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_250">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_249)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 8.75L9.03 9.523L9.31 7.886L8.122 6.726L9.765 6.489L10.5 5L11.235 6.49L12.878 6.727L11.688 7.887L11.968 9.523"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_249">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_248)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    d="M10.7059 11.6176H10.2941L10.3971 9.97059C10.3912 9.88385 10.3496 9.86105 10.1912 9.86765L8.54412 10.0735C8.54412 10.0735 8.85294 9.66176 8.85294 9.45588C8.85294 9.25 7 7.91176 7 7.91176C7 7.91176 7.41176 7.80882 7.51471 7.70588C7.61765 7.60294 7.10294 6.47059 7.10294 6.47059C7.10294 6.47059 8.14906 6.88235 8.23529 6.77941C8.32153 6.67647 8.44118 6.26471 8.44118 6.26471C8.44118 6.26471 9.26471 7.19118 9.47059 7.19118C9.67647 7.19118 9.05882 4.92647 9.05882 4.92647C9.05882 4.92647 9.57353 5.33824 9.77941 5.33824C9.98529 5.33824 10.5 4 10.5 4C10.5 4 11.0147 5.33824 11.1176 5.33824C11.2206 5.33824 11.9412 4.92647 11.9412 4.92647C11.9412 4.92647 11.4265 7.08824 11.5294 7.19118C11.6324 7.29412 12.5588 6.26471 12.5588 6.26471C12.5588 6.26471 12.6618 6.67647 12.7647 6.77941C12.8676 6.88235 13.8971 6.47059 13.8971 6.47059C13.8971 6.47059 13.3824 7.60294 13.4853 7.70588C13.5882 7.80882 14 7.91176 14 7.91176C14 7.91176 12.1471 9.25 12.1471 9.45588C12.1471 9.66176 12.3529 10.0735 12.3529 10.0735L10.8088 9.86765C10.6847 9.83206 10.6417 9.85907 10.6029 9.97059L10.7059 11.6176Z"
                    fill="#F93939"
                />
                <rect x="16" width="5" height="15" fill="#F93939" />
                <rect width="5" height="15" fill="#F93939" />
            </g>
            <defs>
                <clipPath id="clip0_151_248">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CV')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#1A47B8" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10H21V11H0V10Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 9H21V10H0V9Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8H21V9H0V8Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 7H6V8H5V7ZM7 6H8V7H7V6ZM9 7H10V8H9V7ZM10 9H11V10H10V9ZM4 9H5V10H4V9ZM9 11H10V12H9V11ZM7 12H8V13H7V12ZM5 11H6V12H5V11Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('CF')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_246)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8H21V11H0V8Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 2H4V3H3V2Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 2H3V3H2V2ZM4 2H5V3H4V2ZM3 3H4V4H3V3ZM3 1H4V2H3V1Z"
                    fill="#D4AF2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 0H12V15H9V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_246">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('TD')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_245)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#232C80"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_245">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CL')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_244)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8H21V15H0V8Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H9V8H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 5.22701L3.03 6.00001L3.31 4.36401L2.122 3.20401L3.765 2.96601L4.5 1.47601L5.235 2.96601L6.878 3.20601L5.688 4.36401L5.97 6.00001"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_244">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CN')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_243)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.49812 7.23L4.02812 8.003L4.30812 6.366L3.12012 5.206L4.76312 4.969L5.49812 3.479L6.23212 4.969L7.87512 5.206L6.68512 6.366L6.96712 8.002L5.49812 7.23ZM9.00012 3H10.0001V4H9.00012V3ZM10.0001 5H11.0001V6H10.0001V5ZM10.0001 7H11.0001V8H10.0001V7ZM9.00012 9H10.0001V10H9.00012V9Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_243">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CO')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_242)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V7H0V0Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_242">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('KM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_241)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11Z"
                    fill="#232C80"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 7.5H21V11H0V7.5Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V4H0V0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L12 7.5L0 15V0Z"
                    fill="#00B731"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 10.84C5.71 10.944 5.4 11 5.077 11C3.377 11 2 9.433 2 7.5C2 5.567 3.378 4 5.077 4C5.399 4 5.709 4.056 6 4.16C4.752 4.606 3.846 5.933 3.846 7.5C3.846 9.067 4.752 10.394 6 10.84ZM6 5H7V6H6V5ZM6 7H7V8H6V7ZM6 9H7V10H6V9Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_241">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_240)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 15L19 0H21V15H6Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 15L21 0H14L0 15H7Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_240">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#1A47B8" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10H21V12H0V10Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 5H21V10H0V5Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 3H21V5H0V3Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('HR')"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="21" height="15" rx="3" fill="white" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10H21V15H0V10Z"
                fill="#1A47B8"
            />
            <mask
                id="mask0_151_238"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="8"
                y="5"
                width="5"
                height="6"
            >
                <path
                    d="M13 8.5C13 9.88 11.88 11 10.5 11C9.12 11 8 9.88 8 8.5V5H13V8.5Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_151_238)">
                <path
                    d="M13 8.5C13 9.88 11.88 11 10.5 11C9.12 11 8 9.88 8 8.5V5H13V8.5Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 10H10V11H9V10ZM11 10H12V11H11V10ZM10 9H11V10H10V9ZM9 8H10V9H9V8ZM11 8H12V9H11V8ZM10 7H11V8H10V7ZM9 6H10V7H9V6ZM11 6H12V7H11V6ZM10 5H11V6H10V5ZM12 5H13V6H12V5ZM12 7H13V8H12V7ZM12 9H13V10H12V9ZM8 9H9V10H8V9ZM8 7H9V8H8V7ZM8 5H9V6H8V5Z"
                    fill="white"
                />
            </g>
        </svg>

        <svg
            v-if="isIcon('CU')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_237)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 6H21V9H0V6ZM0 12H21V15H0V12Z"
                    fill="#1A47B8"
                />
                <rect width="21" height="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L12 7.5L0 15V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.378 8.75L2.908 9.523L3.188 7.886L2 6.726L3.643 6.489L4.378 5L5.113 6.49L6.756 6.727L5.566 7.887L5.846 9.523"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_237">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#1A47B8" />
            <path d="M21 9H0V11H21V9Z" fill="#FFDA2C" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 5H4.49539C4.21575 5 4 5.22386 4 5.5C4 5.76807 4.22179 6 4.49539 6H5V6.50461C5 6.78425 5.22386 7 5.5 7C5.76807 7 6 6.77821 6 6.50461V6H6.50461C6.78425 6 7 5.77614 7 5.5C7 5.23193 6.77821 5 6.50461 5H6V4.49539C6 4.21575 5.77614 4 5.5 4C5.23193 4 5 4.22179 5 4.49539V5ZM3 3H4V4H3V3Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('CY')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="white" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 9L10 11V12L4 10L5 9ZM16 9L11 11V12L17 10L16 9ZM10 11H11V13H10V11Z"
                fill="#0A6A30"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 6C5 6 6 9 9 9C12 9 15 6 15 6H13L16 3L10 5L8 3L7 5L5 6Z"
                fill="#FF6C2D"
            />
        </svg>

        <svg
            v-if="isIcon('CZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_234)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V7H0V0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L10 7.5L0 15V0Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_234">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CD')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_233)">
                <rect width="21" height="15" rx="3" fill="#3A99FF" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.49812 5.23L3.02812 6.003L3.30812 4.366L2.12012 3.206L3.76312 2.969L4.49812 1.479L5.23212 2.969L6.87512 3.206L5.68512 4.366L5.96712 6.002"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 14L21 3V-1L0 10V14Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 16L21 5V1L0 12V16Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L21 4V0L0 11V15Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_233">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('DK')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_232)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 9H0V6H6V0H9V6H21V9H9V15H6V9Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_232">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('DJ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_231)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V8H0V0Z"
                    fill="#3ECBF8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L12 7.5L0 15V0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.49999 8.75L3.02999 9.523L3.30999 7.886L2.12199 6.726L3.76499 6.489L4.49999 5L5.23499 6.49L6.87799 6.727L5.68799 7.887L5.96799 9.523"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_231">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('DM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_230)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 7H0V8H10V15H11V8H21V7H11V0H10V7Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6V7H10V0H9V6H0V7H10V6H9ZM10 7H21V6H9V7H10V6H9V15H10V7Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 9V8H11V15H12V9H21V8H11V9H12ZM0 8H13V9H0V8ZM11 0H12V9H11V0Z"
                    fill="white"
                />
                <path
                    d="M10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6H10V7H9V6ZM11 6H12V7H11V6ZM11 8H12V9H11V8ZM9 8H10V9H9V8Z"
                    fill="#0A6A30"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 6H11V8H10V6Z"
                    fill="#955DCC"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_230">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('DO')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_229)">
                <rect width="21" height="15" rx="3" fill="white" />
                <rect x="12" y="9" width="9" height="6" fill="#1A47B8" />
                <rect y="9" width="9" height="6" fill="#F93939" />
                <circle cx="10.5" cy="7.5" r="1.5" fill="#249F58" />
                <circle
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    transform="matrix(-1 0 0 1 12 8)"
                    fill="#232C80"
                />
                <circle
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    transform="matrix(-1 0 0 1 10 8)"
                    fill="#F93939"
                />
                <circle cx="10.5" cy="7.5" r="0.5" fill="white" />
                <circle cx="11.5" cy="6.5" r="0.5" fill="#F93939" />
                <circle cx="9.5" cy="6.5" r="0.5" fill="#232C80" />
                <rect x="12" width="9" height="6" fill="#F93939" />
                <rect width="9" height="6" fill="#1A47B8" />
            </g>
            <defs>
                <clipPath id="clip0_151_229">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('EC')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_228)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V8H0V0Z"
                    fill="#FFDA2C"
                />
                <path
                    d="M10.5 10C11.3284 10 12 9.10457 12 8C12 6.89543 11.3284 6 10.5 6C9.67157 6 9 6.89543 9 8C9 9.10457 9.67157 10 10.5 10Z"
                    fill="#3ECBF8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 7V9L10 10H11L13 9V7L14 9L13 10L11 11H10L8 10L7 9L8 7Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 4H9L10.5 5L12 4H15L12 5L11 6H10L9 5L6 4Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_228">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('EG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_227)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 7L9 6L8 7L9 9L10 8H11L12 9L13 7L12 6L10.5 7Z"
                    fill="#D4AF2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_227">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SV')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_226)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10ZM0 0H21V5H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    d="M10.5 9C11.3284 9 12 8.32843 12 7.5C12 6.67157 11.3284 6 10.5 6C9.67157 6 9 6.67157 9 7.5C9 8.32843 9.67157 9 10.5 9Z"
                    fill="#1A47B8"
                />
                <path
                    d="M10.5 8C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7C10.2239 7 10 7.22386 10 7.5C10 7.77614 10.2239 8 10.5 8Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 7L9 8L10.5 9L12 8L13 7L12 9H9L8 7Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_226">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GQ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_225)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5 8C11.776 8 12 7.776 12 7.5C12 7.224 11.776 7 11.5 7C11.224 7 11 7.224 11 7.5C11 7.776 11.224 8 11.5 8ZM13.5 8C13.776 8 14 7.776 14 7.5C14 7.224 13.776 7 13.5 7C13.224 7 13 7.224 13 7.5C13 7.776 13.224 8 13.5 8Z"
                    fill="#00B731"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 7H13V9H12V7Z"
                    fill="#AE6A3E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 7C10.776 7 11 6.776 11 6.5C11 6.224 10.776 6 10.5 6C10.224 6 10 6.224 10 6.5C10 6.776 10.224 7 10.5 7ZM12.5 7C12.776 7 13 6.776 13 6.5C13 6.224 12.776 6 12.5 6C12.224 6 12 6.224 12 6.5C12 6.776 12.224 7 12.5 7ZM14.5 7C14.776 7 15 6.776 15 6.5C15 6.224 14.776 6 14.5 6C14.224 6 14 6.224 14 6.5C14 6.776 14.224 7 14.5 7Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#00B731"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V15.033L7 7.5L0 0Z"
                    fill="#3A99FF"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_225">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('ER')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_224)">
                <rect width="21" height="15" rx="3" fill="#3A99FF" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#3A99FF"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V8H0V0Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L21 7.5L0 15V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 7.50001C9 6.12001 7.88 5.00001 6.5 4.50001C5.12 5.00001 4 6.12001 4 7.50001C4 8.71001 4.86 9.71801 6 9.95001V6.49801C6 6.22301 6.232 6.00001 6.5 6.00001C6.776 6.00001 7 6.21501 7 6.49801V9.95001C8.14 9.71801 9 8.71001 9 7.50001ZM10 7.50001C10 5.56701 8.433 4.00001 6.5 4.50001C4.567 4.00001 3 5.56701 3 7.50001C3 9.43301 4.567 11 6.5 11C8.433 11 10 9.43301 10 7.50001Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_224">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('EE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_223)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#3A99FF"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_223">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_222)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 12H21V15H0V12ZM0 0H21V3H0V0Z"
                    fill="#4769C1"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 4H21V11H0V4Z"
                    fill="#BC0A33"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 8H17V9H4V8ZM6 6H16V7H6V6Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 6H18V7H16V6Z"
                    fill="#CBCBCB"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 10C12.985 10 15 7.5 15 7.5C15 7.5 12.985 5 10.5 5C8.015 5 6 7.5 6 7.5C6 7.5 8.015 10 10.5 10Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 7H14V8H13V7Z"
                    fill="#151515"
                    stroke="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 10C11 10 12 7.5 12 7.5C12 7.5 11 5 10.5 5C8.015 5 6 7.5 6 7.5C6 7.5 8.015 10 10.5 10Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 7H9V8H8V7ZM10 7H11V8H10V7Z"
                    fill="#CBCBCB"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_222">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('ET')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_221)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#249F58"
                />
                <path
                    d="M10.5 12C12.9853 12 15 9.98528 15 7.5C15 5.01472 12.9853 3 10.5 3C8.01472 3 6 5.01472 6 7.5C6 9.98528 8.01472 12 10.5 12Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4981 8.75002L9.02812 9.52302L9.30812 7.88602L8.12012 6.72602L9.76312 6.48902L10.4981 4.99902L11.2321 6.48902L12.8751 6.72602L11.6851 7.88602L11.9671 9.52202"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_221">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('FJ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#3ECBF8" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 10V6.5C18 5.665 17.328 5 16.5 5H14.5C13.674 5 13 5.67 13 6.5V10C13 10.182 14 12 15.5 12C17 12 18 10.177 18 10Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 8V9.118H18V10.08H16V12H15V10.08H13V9.118H15V8H13V5H18V8H16Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 6H17V7H14V6Z"
                fill="#FFDA2C"
            />
            <path
                d="M9 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55228 1.44772 8 2 8H9C9.55229 8 10 7.55228 10 7V2C10 1.44772 9.55229 1 9 1Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 5H2V4H5V2H6V4H9V5H6V7H5V5ZM7.5 6V7H9V6H7.5ZM7.5 2V3H9V2H7.5ZM2 6V7H3.5V6H2ZM2 2V3H3.5V2H2Z"
                fill="#F93939"
            />
        </svg>

        <svg
            v-if="isIcon('FI')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_219)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 9H0V6H6V0H9V6H21V9H9V15H6V9Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_219">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('FR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_218)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_218">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_217)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#3A99FF"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_217">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_216)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 6H21V9H0V6Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_216">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_215)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 9H0V6H9V0H12V6H21V9H12V15H9V9Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 11H14V12H15V13H16V12H17V11H16V10H15V11ZM15 3H14V4H15V5H16V4H17V3H16V2H15V3ZM5 3H4V4H5V5H6V4H7V3H6V2H5V3ZM5 11H4V12H5V13H6V12H7V11H6V10H5V11Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_215">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('DE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_214)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_214">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GH')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_213)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 8.75L9.03 9.523L9.31 7.886L8.122 6.726L9.765 6.489L10.5 5L11.235 6.49L12.878 6.727L11.688 7.887L11.968 9.523"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_213">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="white" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H4V4H0V0ZM6 0H10V4H6V0ZM0 6H4V10H0V6ZM6 6H10V10H6V6ZM10 0H21V2H10V0ZM10 4H21V6H10V4Z"
                fill="#1A47B8"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8H21V10H0V8ZM4 8H6V10H4V8ZM0 12H21V14H0V12Z"
                fill="#1A47B8"
            />
        </svg>

        <svg
            v-if="isIcon('GD')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#F93939" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3H18V12H3V3Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3L10.5 7.5L3 12V3Z"
                fill="#249F58"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 7H5V8H4V7Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 3L10.5 7.5L18 12V3Z"
                fill="#249F58"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 1H8V2H7V1ZM10 1H11V2H10V1ZM13 1H14V2H13V1ZM7 13H8V14H7V13ZM10 13H11V14H10V13ZM13 13H14V14H13V13Z"
                fill="#FFDA2C"
            />
            <path
                d="M10.5 10C11.8807 10 13 8.88071 13 7.5C13 6.11929 11.8807 5 10.5 5C9.11929 5 8 6.11929 8 7.5C8 8.88071 9.11929 10 10.5 10Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 8.75L9.02999 9.523L9.30999 7.886L8.12199 6.726L9.76499 6.489L10.5 5L11.235 6.49L12.878 6.727L11.688 7.887L11.968 9.523"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('GT')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_210)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    d="M10.5 8C10.7761 8 11 7.55228 11 7C11 6.44772 10.7761 6 10.5 6C10.2239 6 10 6.44772 10 7C10 7.55228 10.2239 8 10.5 8Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 7.5C13 6.12 11.88 5 10.5 5C9.12 5 8 6.12 8 7.5C8 8.88 9.12 10 10.5 10C11.88 10 13 8.88 13 7.5ZM10.5 9C11.328 9 12 8.105 12 7C12 5.895 11.328 5 10.5 5C9.672 5 9 5.895 9 7C9 8.105 9.672 9 10.5 9Z"
                    fill="#249F58"
                />
                <rect x="15" width="6" height="15" fill="#3ECBF8" />
                <rect width="6" height="15" fill="#3ECBF8" />
            </g>
            <defs>
                <clipPath id="clip0_151_210">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GN')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_209)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_209">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_208)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8H21V15H0V8Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H8V15H0V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 8.75L3.03 9.523L3.31 7.886L2.122 6.726L3.765 6.489L4.5 5L5.235 6.49L6.878 6.727L5.688 7.887L5.968 9.523"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_208">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GY')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_207)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15V0H3L21 6V9L3 15H0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L21 7.5L0 15V0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15V0H1L11 7.5L1 15H0Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L10 7.5L0 15V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_207">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('HT')"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="21" height="15" rx="3" fill="#F93939" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H21V8H0V0Z"
                fill="#1A47B8"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 5H14.3333V10H6V5Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.33344 6.66663H11.0001V9.99996H9.33344V6.66663Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.66656 7.5C7.66656 6.12 8.77656 5 10.1666 5C11.5466 5 12.6666 6.11 12.6666 7.5V10H7.66656V7.5ZM9.33323 7.50833C9.33323 7.04167 9.7199 6.66667 10.1666 6.66667C10.6266 6.66667 10.9999 7.02333 10.9999 7.50833V10H9.33323V7.50833Z"
                fill="#249F58"
            />
        </svg>

        <svg
            v-if="isIcon('VA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_205)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 0H14C15.1046 0 16 0.895431 16 2V13C16 14.1046 15.1046 15 14 15H8V0Z"
                    fill="white"
                />
                <path d="M10 6L13 9" stroke="#CBCBCB" />
                <path opacity="0.6" d="M11.5 7.5V10" stroke="#FF6C2D" />
                <path d="M13 6L10 9" stroke="#D4AF2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 6H13L11.5 4L10 6Z"
                    fill="#D4AF2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H8V15H0V0Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_205">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('HN')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_204)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10ZM7 6H8V7H7V6ZM7 8H8V9H7V8ZM13 6H14V7H13V6ZM13 8H14V9H13V8ZM10 7H11V8H10V7ZM0 0H21V5H0V0Z"
                    fill="#3ECBF8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_204">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('HK')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#F93939" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.155 7.51401C7.443 6.36601 8.645 2.83001 11.24 3.00601C10.714 3.27601 10.638 3.78001 10.938 4.24601C11.274 4.77001 10.908 5.61101 10.454 5.81601C9.708 6.15101 9.559 7.04601 10.154 7.51401H10.155ZM10.382 7.39201C10.635 4.45901 14.372 4.50901 15.002 7.03001C14.584 6.61501 14.082 6.69801 13.73 7.12801C13.337 7.60801 12.424 7.51801 12.09 7.15101C11.54 6.54701 10.64 6.68101 10.382 7.39301V7.39201ZM10.474 7.68501C13.354 7.07001 14.398 10.657 12.171 11.999C12.447 11.476 12.221 11.019 11.707 10.809C11.133 10.573 10.951 9.67401 11.205 9.24701C11.623 8.54401 11.231 7.72401 10.475 7.68401L10.474 7.68501ZM6.75 10.98C7.33 11.08 7.695 10.723 7.736 10.17C7.783 9.55001 8.581 9.10001 9.066 9.21001C9.864 9.39001 10.523 8.76401 10.326 8.03201C11.802 10.582 8.713 12.682 6.749 10.979L6.75 10.98ZM6.153 5.50001C6.268 6.07801 6.731 6.29001 7.263 6.13001C7.858 5.95201 8.565 6.53601 8.636 7.03001C8.754 7.83801 9.574 8.22801 10.186 7.78401C8.336 10.074 5.266 7.94401 6.153 5.49901V5.50001Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('HU')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_202)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_202">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('IS')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_201)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 9H0V6H6V0H9V6H21V9H9V15H6V9Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 7H0V8H7V15H8V8H21V7H8V0H7V7Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_201">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('IN')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_200)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 10C11.88 10 13 8.88 13 7.5C13 6.12 11.88 5 10.5 5C9.12 5 8 6.12 8 7.5C8 8.88 9.12 10 10.5 10ZM10.5 9C11.328 9 12 8.328 12 7.5C12 6.672 11.328 6 10.5 6C9.672 6 9 6.672 9 7.5C9 8.328 9.672 9 10.5 9Z"
                    fill="#1A47B8"
                />
                <path
                    d="M10.5 8C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7C10.2239 7 10 7.22386 10 7.5C10 7.77614 10.2239 8 10.5 8Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#FF6C2D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_200">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('ID')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="white" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H21V8H0V0Z"
                fill="#F93939"
            />
        </svg>

        <svg
            v-if="isIcon('IR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_198)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 9C11.88 9 13 8.328 13 7.5C13 6.672 11.88 6 10.5 6C9.12 6 8 6.672 8 7.5C8 8.328 9.12 9 10.5 9ZM10.5 8.25C11.328 8.25 12 7.746 12 7.125C12 6.505 11.328 6 10.5 6C9.672 6 9 6.504 9 7.125C9 7.745 9.672 8.25 10.5 8.25Z"
                    fill="#F93939"
                />
                <path
                    d="M10.5 8C10.7761 8 11 7.55228 11 7C11 6.44772 10.7761 6 10.5 6C10.2239 6 10 6.44772 10 7C10 7.55228 10.2239 8 10.5 8Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#00B731"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_198">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('IQ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_197)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 8H11V8.495C11 8.785 11.224 9 11.5 9C11.768 9 12 8.774 12 8.495V6.495C12 6.222 12.232 6 12.5 6C12.776 6 13 6.216 13 6.495V8H14.49C14.772 8 15 8.232 15 8.5C15 8.776 14.778 9 14.49 9H6.51C6.228 9 6 8.768 6 8.5C6 8.288 6.13 8.107 6.32 8.034C6.345 7.97 6.383 7.909 6.436 7.857L7.856 6.437C8.05 6.243 8.371 6.25 8.561 6.439C8.757 6.634 8.763 6.944 8.565 7.142L7.707 8H9V7.505C9 7.225 9.232 7 9.5 7C9.776 7 10 7.214 10 7.505V8Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_197">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('IE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_196)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#FF6C2D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_196">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('IL')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="white" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 11H21V13H0V11ZM0 2H21V4H0V2ZM9.875 9H8L8.938 7.5L8 6H9.875L10.5 5L11.125 6H13L12.062 7.5L13 9H11.125L10.5 10L9.875 9ZM9.5 7.5L10.5 6.5L11.5 7.5L10.5 8.5L9.5 7.5Z"
                fill="#1A47B8"
            />
        </svg>

        <svg
            v-if="isIcon('IT')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_194)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_194">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CI')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_193)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#FF6C2D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_193">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('JM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_192)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L10 8L0 15V0ZM21 0L11 8L21 15V0Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.667 7.5L0 1.5V0H1.5L10.5 6.23L19.5 0H21V1.5L12.333 7.5L21 13.5V15H19.5L10.5 8.77L1.5 15H0V13.5L8.667 7.5Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_192">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('JP')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="white" />
            <path
                d="M10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11Z"
                fill="#F93939"
            />
        </svg>

        <svg
            v-if="isIcon('JO')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_190)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V15.033L13 7.5L0 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 7.5L4 7L4.5 6L5 7L6 7.5L5 8L4.5 9L4 8L3 7.5Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_190">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('KZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#03BCDB" />
            <path
                d="M11.5 9C12.8807 9 14 7.88071 14 6.5C14 5.11929 12.8807 4 11.5 4C10.1193 4 9 5.11929 9 6.5C9 7.88071 10.1193 9 11.5 9Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 7L9 9L11.5 10L14 9L15 7V10L11.5 11L8 10V7Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 2.495C2 2.222 2.232 2 2.5 2C2.776 2 3 2.216 3 2.495V4.505C3 4.778 2.768 5 2.5 5C2.224 5 2 4.784 2 4.505V2.495ZM3 4.495C3 4.222 3.232 4 3.5 4C3.776 4 4 4.216 4 4.495V6.505C4 6.778 3.768 7 3.5 7C3.224 7 3 6.784 3 6.505V4.495ZM3 8.495C3 8.222 3.232 8 3.5 8C3.776 8 4 8.216 4 8.495V10.505C4 10.778 3.768 11 3.5 11C3.224 11 3 10.784 3 10.505V8.495ZM2 10.495C2 10.222 2.232 10 2.5 10C2.776 10 3 10.216 3 10.495V12.505C3 12.778 2.768 13 2.5 13C2.224 13 2 12.784 2 12.505V10.495ZM2 6.5C2 6.224 2.232 6 2.5 6C2.776 6 3 6.232 3 6.5C3 6.776 2.768 7 2.5 7C2.224 7 2 6.768 2 6.5ZM3 2.5C3 2.224 3.232 2 3.5 2C3.776 2 4 2.232 4 2.5C4 2.776 3.768 3 3.5 3C3.224 3 3 2.768 3 2.5ZM2 7.5C2 7.224 2.232 7 2.5 7C2.776 7 3 7.232 3 7.5C3 7.776 2.768 8 2.5 8C2.224 8 2 7.768 2 7.5ZM3 12.5C3 12.224 3.232 12 3.5 12C3.776 12 4 12.232 4 12.5C4 12.776 3.768 13 3.5 13C3.224 13 3 12.768 3 12.5ZM2 8.5C2 8.224 2.232 8 2.5 8C2.776 8 3 8.232 3 8.5C3 8.776 2.768 9 2.5 9C2.224 9 2 8.768 2 8.5Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('KE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#151515" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 11H21V15H0V11Z"
                fill="#0A6A30"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10H21V11H0V10Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 5H21V10H0V5Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 4H21V5H0V4Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.414 5.914C12.486 5.914 12.914 5.244 12.914 4.414C12.914 3.586 12.486 2.914 12.414 2.914C12.344 2.914 11.914 3.586 11.914 4.414C11.914 5.244 12.344 5.914 12.414 5.914ZM9.475 5.475C9.425 5.525 8.645 5.355 8.061 4.768C7.476 4.182 7.304 3.404 7.355 3.354C7.405 3.304 8.183 3.474 8.769 4.061C9.355 4.647 9.526 5.425 9.476 5.476L9.475 5.475ZM11.354 10.008C11.404 9.961 12.184 10.121 12.769 10.668C13.354 11.218 13.526 11.945 13.476 11.992C13.426 12.039 12.646 11.879 12.06 11.332C11.475 10.782 11.303 10.055 11.354 10.008ZM9.475 10.008C9.425 9.961 8.645 10.121 8.061 10.668C7.476 11.218 7.304 11.945 7.355 11.992C7.405 12.039 8.183 11.879 8.769 11.332C9.355 10.782 9.526 10.055 9.476 10.008H9.475Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 12C10.857 12 13 9.985 13 7.5C13 5.015 10.857 3 10.5 3C10.143 3 8 5.015 8 7.5C8 9.985 10.143 12 10.5 12Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.5 9C8.57 9 9 8.328 9 7.5C9 6.672 8.57 6 8.5 6C8.43 6 8 6.672 8 7.5C8 8.328 8.43 9 8.5 9ZM12.5 9C12.57 9 13 8.328 13 7.5C13 6.672 12.57 6 12.5 6C12.43 6 12 6.672 12 7.5C12 8.328 12.43 9 12.5 9Z"
                fill="#151515"
            />
            <path
                d="M11 7.5C11 6.67157 10.7761 6 10.5 6C10.2239 6 10 6.67157 10 7.5C10 8.32843 10.2239 9 10.5 9C10.7761 9 11 8.32843 11 7.5Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('KI')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#F93939" />
            <path
                d="M10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8H21V15H0V8Z"
                fill="#232C80"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8H21V9H0V8ZM0 10H21V11H0V10ZM0 12H21V13H0V12Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 2L10.5 3L13 2H8Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('KW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_186)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15.033V0L7 5V10L0 15.033Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_186">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('KG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#F93939" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.206 9.485C10.303 9.495 10.401 9.5 10.5 9.5C10.6 9.5 10.697 9.495 10.794 9.485L10.5 8.75L10.206 9.485ZM8.85 8.94C8.327 8.526 8 7.922 8 7.25C8 6.457 8.456 5.76 9.144 5.36L10 7.5L8.85 8.94ZM11.856 5.36C12.544 5.76 13 6.457 13 7.25C13 7.923 12.672 8.527 12.15 8.94L11 7.5L11.856 5.36ZM11.756 5.304C11.386 5.11 10.958 5 10.5 5C10.042 5 9.613 5.11 9.244 5.304L10.5 6.874L11.756 5.304Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 12C12.985 12 15 9.985 15 7.5C15 5.015 12.985 3 10.5 3C8.015 3 6 5.015 6 7.5C6 9.985 8.015 12 10.5 12ZM10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('LA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_184)">
                <rect width="21" height="15" rx="3" fill="#232C80" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 10C11.88 10 13 8.88 13 7.5C13 6.12 11.88 5 10.5 5C9.12 5 8 6.12 8 7.5C8 8.88 9.12 10 10.5 10Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11ZM0 0H21V4H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_184">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LV')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_183)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 9H21V15H0V9ZM0 0H21V6H0V0Z"
                    fill="#AF010D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_183">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LB')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_182)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11ZM0 0H21V4H0V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 4L7 10H9L10.5 11L12 10H14L10.5 4Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_182">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LS')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_181)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.1 5.8L9 8H12L10.9 5.8C10.963 5.716 11 5.613 11 5.5C11 5.224 10.776 5 10.5 5C10.224 5 10 5.224 10 5.5C10 5.613 10.037 5.716 10.1 5.8ZM13 9C13 9.552 11.88 10 10.5 10C9.12 10 8 9.552 8 9V8H13V9Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V4H0V0Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_181">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_180)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 0H21V1H7V0ZM7 2H21V3H7V2ZM7 4H21V5H7V4ZM7 6H21V7H7V6ZM0 8H21V9H0V8ZM0 10H21V11H0V10ZM0 12H21V13H0V12Z"
                    fill="#F93939"
                />
                <path d="M21 14H0V15H21V14Z" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V7H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.44 4.89699L1.932 5.68999L2.22 4.00999L1 2.82299L2.686 2.57799L3.44 1.04999L4.194 2.57699L5.88 2.82199L4.66 4.01199L4.948 5.68999"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_180">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LY')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_179)">
                <rect width="21" height="15" rx="3" fill="#151515" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 7H13V8H12V7Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5 9C12.044 9.607 11.318 10 10.5 10C9.12 10 8 8.88 8 7.5C8 6.12 9.12 5 10.5 5C11.318 5 12.044 5.393 12.5 6H11C10.172 6 9.5 6.672 9.5 7.5C9.5 8.328 10.172 9 11 9H12.5Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V4H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_179">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LI')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#F93939" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H21V7H0V0Z"
                fill="#1A47B8"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5H8V6H4V5Z"
                fill="#D4AF2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.01 3.142C4.702 3.062 4.35 3 4 3C3 3 3 3.5 3 4C3 4.5 4 5 4 5H8C8 5 9 4.5 9 4C9 3.5 9 3 8 3C7.65 3 7.298 3.062 6.99 3.142C6.997 3.095 7 3.048 7 3C7 2.448 6.552 2 6 2C5.448 2 5 2.448 5 3C5 3.048 5.003 3.095 5.01 3.142Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('LT')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_177)">
                <rect width="21" height="15" rx="3" fill="#0A6A30" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_177">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LU')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_176)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#3ECBF8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_176">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_175)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8H21V15H0V8Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H8V15H0V0Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_175">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_174)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.242 4C13.435 2.794 12.06 2 10.5 2C8.94 2 7.565 2.794 6.758 4H14.242Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_174">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MY')"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="21" height="15" rx="3" fill="white" />
            <rect y="12.9231" width="21" height="1.07692" fill="#AF010D" />
            <rect y="10.7692" width="21" height="1.07692" fill="#AF010D" />
            <rect y="8.61539" width="21" height="1.07692" fill="#AF010D" />
            <rect y="6.46155" width="21" height="1.07692" fill="#AF010D" />
            <rect y="4.30768" width="21" height="1.07692" fill="#AF010D" />
            <rect y="2.15384" width="21" height="1.07692" fill="#AF010D" />
            <rect width="21" height="1.07692" fill="#AF010D" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H11V8.62H0V0Z"
                fill="#1A47B8"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 4H8V5H7V4Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 6C7.044 6.607 6.318 7 5.5 7C4.12 7 3 5.88 3 4.5C3 3.12 4.12 2 5.5 2C6.318 2 7.044 2.393 7.5 3H6C5.172 3 4.5 3.672 4.5 4.5C4.5 5.328 5.172 6 6 6H7.5Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('MV')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#AF010D" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 4H17V11H4V4Z"
                fill="#249F58"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.125 9.92C10.925 9.973 10.715 10 10.5 10C9.12 10 8 8.88 8 7.5C8 6.12 9.12 5 10.5 5C10.716 5 10.925 5.027 11.125 5.08C10.478 5.355 10 6.334 10 7.5C10 8.666 10.478 9.644 11.125 9.92Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('ML')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_171)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#00B731"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_171">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MT')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#AF010D" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H11V15H0V0Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3H2V4H3V5H4V4H5V3H4V2H3V3Z"
                fill="#CBCBCB"
            />
        </svg>

        <svg
            v-if="isIcon('MH')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_169)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    d="M5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L21 6V3L0 15Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L21 0V3L0 15Z"
                    fill="#FF6C2D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_169">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_168)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <rect y="13" width="21" height="2" fill="#AF010D" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4981 7.25002L9.02812 8.02302L9.30812 6.38602L8.12012 5.22602L9.76312 4.98902L10.4981 3.49902L11.2321 4.98902L12.8751 5.22602L11.6851 6.38602L11.9671 8.02202"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.965 5.93801C14.988 6.12201 15 6.31001 15 6.50001C15 8.98501 12.985 11 10.5 11C8.015 11 6 8.98501 6 6.50001C6 6.31001 6.012 6.12201 6.035 5.93701C6.312 7.66501 8.205 9.00001 10.5 9.00001C12.795 9.00001 14.688 7.66401 14.965 5.93701V5.93801Z"
                    fill="#FFDA2C"
                />
                <rect width="21" height="2" fill="#AF010D" />
            </g>
            <defs>
                <clipPath id="clip0_151_168">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MU')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_167)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11Z"
                    fill="#00B731"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 4H21V8H0V4Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V4H0V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_167">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MX')"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_151_166)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.9806 7.28181C12.9933 7.38403 13 7.48847 13 7.59403C13 8.97458 11.8806 10.094 10.5 10.094C9.11944 10.094 8 8.97458 8 7.59403C8 7.48847 8.00667 7.38403 8.01944 7.28125C8.17333 8.24125 9.225 8.98292 10.5 8.98292C11.775 8.98292 12.8267 8.24069 12.9806 7.28125V7.28181Z"
                    fill="#249F58"
                />
                <circle cx="10.5" cy="6.5" r="1.5" fill="#AE6A3E" />
                <rect x="15" width="6" height="15" fill="#F93939" />
                <rect width="6" height="15" fill="#249F58" />
            </g>
            <defs>
                <clipPath id="clip0_151_166">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('FM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#3A99FF" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 4H9.495C9.215 4 9 4.224 9 4.5C9 4.768 9.222 5 9.495 5H10V5.505C10 5.785 10.224 6 10.5 6C10.768 6 11 5.778 11 5.505V5H11.505C11.785 5 12 4.776 12 4.5C12 4.232 11.778 4 11.505 4H11V3.495C11 3.215 10.776 3 10.5 3C10.232 3 10 3.222 10 3.495V4ZM14 7H13.495C13.215 7 13 7.224 13 7.5C13 7.768 13.222 8 13.495 8H14V8.505C14 8.785 14.224 9 14.5 9C14.768 9 15 8.778 15 8.505V8H15.505C15.785 8 16 7.776 16 7.5C16 7.232 15.778 7 15.505 7H15V6.495C15 6.215 14.776 6 14.5 6C14.232 6 14 6.222 14 6.495V7ZM10 10H9.495C9.215 10 9 10.224 9 10.5C9 10.768 9.222 11 9.495 11H10V11.505C10 11.785 10.224 12 10.5 12C10.768 12 11 11.778 11 11.505V11H11.505C11.785 11 12 10.776 12 10.5C12 10.232 11.778 10 11.505 10H11V9.495C11 9.215 10.776 9 10.5 9C10.232 9 10 9.222 10 9.495V10ZM6 7H5.495C5.215 7 5 7.224 5 7.5C5 7.768 5.222 8 5.495 8H6V8.505C6 8.785 6.224 9 6.5 9C6.768 9 7 8.778 7 8.505V8H7.505C7.785 8 8 7.776 8 7.5C8 7.232 7.778 7 7.505 7H7V6.495C7 6.215 6.776 6 6.5 6C6.232 6 6 6.222 6 6.495V7Z"
                fill="white"
            />
        </svg>
    </div>
</template>

<script>
import {toRefs} from "vue";

export default {
    name: "UIIcon",
    props: {
        icon: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        const {icon} = toRefs(props);

        const isIcon = (name) => {
            return icon.value === name;
        };

        return {
            isIcon,
        };
    },
};
</script>
