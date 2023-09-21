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

        <svg
            v-if="isIcon('MD')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_164)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 5H13V10H8V5ZM8 10L10.5 12L13 10H8ZM10 4H11V5H10V4Z"
                    fill="#AE6A3E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 8H12V9.5H9V8ZM9 9.5L10.5 10.5L12 9.5H9Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6H12V8H9V6Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 7C10.776 7 11 7.214 11 7.505V8.495C11 8.775 10.768 9 10.5 9C10.224 9 10 8.786 10 8.495V7.505C10 7.225 10.232 7 10.5 7Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_164">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MC')"
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
                d="M0 8H21V15H0V8Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('MN')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_162)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 7H3V11H2V7ZM5 7H6V11H5V7Z"
                    fill="#FFDA2C"
                />
                <path
                    d="M4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11Z"
                    fill="#FFDA2C"
                />
                <path
                    d="M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 3L5 5H3L4 3Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 0H21V15H14V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_162">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('ME')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#D4AF2C" />
            <rect x="1" y="1" width="19" height="13" fill="#AF010D" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 4.778L9.333 4L8.556 4.778H9.333L8.556 5.556L7 4.778V8.668L9.333 7.888L8.556 9.444H7.778L8.556 10.222L9.333 9.444L10.5 11V4.778ZM11.667 4L12.444 4.778H11.667L12.444 5.556L14 4.778V8.668L11.667 7.888L12.444 9.444H13.222L12.444 10.222L11.667 9.444L10.5 11V4.778L11.667 4Z"
                fill="#D4AF2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 6.505C9 5.675 9.666 5 10.5 5C11.328 5 12 5.673 12 6.505V6.162C12 6.992 11.492 8.118 10.88 8.664L10.5 9L10.12 8.664C9.503 8.114 9 6.994 9 6.162V6.505Z"
                fill="#1A47B8"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 6H12V7H9V6Z"
                fill="#AE6A3E"
            />
        </svg>

        <svg
            v-if="isIcon('MA')"
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
                d="M10.5 8.99001L9.03 9.76001L9.31 8.12501L8.122 6.96501L9.765 6.72701L10.5 5.23901L11.235 6.72601L12.878 6.96601L11.688 8.12401L11.968 9.76001"
                fill="#249F58"
            />
        </svg>

        <svg
            v-if="isIcon('MZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_159)">
                <rect width="21" height="15" rx="3" fill="#151515" />
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
                    fill="#249F58"
                />
                <path
                    opacity="0.35"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 4H21V5H0V4ZM0 10H21V11H0V10Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V15.033L10 7.5L0 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.378 8.75L1.908 9.523L2.188 7.886L1 6.726L2.643 6.489L3.378 5L4.112 6.49L5.755 6.727L4.565 7.887L4.847 9.523"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.28 6.384L2.634 6.03L4.754 8.152L4.402 8.505L2.28 6.385V6.384Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.755 6.384L4.402 6.03L2.28 8.152L2.634 8.505L4.754 6.385L4.755 6.384Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_159">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('MM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_158)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
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
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 9.75L7.855 11.14L8.36 8.195L6.22 6.11L9.177 5.68L10.5 3L11.823 5.68L14.78 6.11L12.64 8.195L13.145 11.141"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_158">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('NA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_157)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15H21V2L0 13V15Z"
                    fill="#249F58"
                />
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
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 16L21 5V1L0 12V16Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L21 4V0L0 11V15Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_157">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('NR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#232C80" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.49812 12.23L6.02812 13.003L6.30812 11.366L5.12012 10.206L6.76312 9.969L7.49812 8.479L8.23212 9.969L9.87512 10.206L8.68512 11.366L8.96712 13.002"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 7H21V8H0V7Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('NP')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_155)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L13 8H6L13 15H0V0Z"
                    fill="#003495"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 2L9 7H3L10 14H0.999954C0.999943 13.5 1 13.544 1 12.998V2Z"
                    fill="#DF0A37"
                />
                <path
                    d="M3.5 13C4.32843 13 5 12.3284 5 11.5C5 10.6716 4.32843 10 3.5 10C2.67157 10 2 10.6716 2 11.5C2 12.3284 2.67157 13 3.5 13Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.915 5C4.97 5.078 5 5.162 5 5.25C5 5.664 4.328 6 3.5 6C2.672 6 2 5.664 2 5.25C2 5.162 2.03 5.078 2.085 5C2.291 5.146 2.847 5.25 3.5 5.25C4.153 5.25 4.71 5.146 4.915 5Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_155">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('NL')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_154)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#1E448D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#B01923"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_154">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('NZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_153)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 4V5H16V4H15ZM17 6V7H18V6H17ZM13 7V8H14V7H13ZM15 11V12H16V11H15Z"
                    fill="#F93939"
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
                <clipPath id="clip0_151_153">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('NI')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_152)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10ZM0 0H21V5H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    opacity="0.4"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10ZM0 0H21V5H0V0Z"
                    fill="#3A99FF"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 9L10.5 6L12 9H9Z"
                    fill="#00B731"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_152">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('NE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_151)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#00B731"
                />
                <path
                    d="M10.5 9C11.3284 9 12 8.32843 12 7.5C12 6.67157 11.3284 6 10.5 6C9.67157 6 9 6.67157 9 7.5C9 8.32843 9.67157 9 10.5 9Z"
                    fill="#FF6C2D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#FF6C2D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_151">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('NG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_150)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0ZM14 0H21V15H14V0Z"
                    fill="#0A6A30"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_150">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('KP')"
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
                d="M0 11H21V12H0V11Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 4H21V11H0V4Z"
                fill="#F93939"
            />
            <path
                d="M5.5 10C6.88071 10 8 8.88071 8 7.5C8 6.11929 6.88071 5 5.5 5C4.11929 5 3 6.11929 3 7.5C3 8.88071 4.11929 10 5.5 10Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.49811 8.47597L4.29811 9.10597L4.52811 7.77097L3.55811 6.82697L4.89811 6.63197L5.49811 5.41797L6.09811 6.63297L7.43811 6.82897L6.46811 7.77397L6.69811 9.10997"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 3H21V4H0V3Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('MK')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_148)">
                <rect width="21" height="15" rx="3" fill="#AF010D" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L10 7H11L4 0H0ZM0 15L10 8H11L4 15H0Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 7H10L17 0H21L11 7ZM11 8H10L17 15H21L11 8ZM8 7L0 6V9L8 8V7ZM13 7L21 6V9L13 8V7ZM10 5L9 0H12L11 5H10ZM10 10L9 15H12L11 10"
                    fill="#FFDA2C"
                />
                <path
                    d="M10.5 10C11.8807 10 13 8.88071 13 7.5C13 6.11929 11.8807 5 10.5 5C9.11929 5 8 6.11929 8 7.5C8 8.88071 9.11929 10 10.5 10Z"
                    fill="#AF010D"
                />
                <path
                    d="M10.5 9C11.3284 9 12 8.32843 12 7.5C12 6.67157 11.3284 6 10.5 6C9.67157 6 9 6.67157 9 7.5C9 8.32843 9.67157 9 10.5 9Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_148">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('NO')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_147)">
                <rect width="21" height="15" rx="3" fill="#AF010D" />
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
                <clipPath id="clip0_151_147">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('OM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_146)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 10H21V15H6V10Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0H21V5H6V0ZM4.576 3.903C4.521 3.986 4.458 4.063 4.386 4.136C3.799 4.722 2.849 4.722 2.264 4.136C1.678 3.551 1.678 2.601 2.264 2.016C2.336 1.942 2.414 1.879 2.497 1.824C2.272 2.244 2.457 2.916 2.971 3.429C3.485 3.941 4.156 4.127 4.577 3.902L4.576 3.903Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.424 3.90301C2.479 3.98601 2.542 4.06301 2.614 4.13601C3.201 4.72201 4.151 4.72201 4.736 4.13601C5.322 3.55101 5.322 2.60101 4.736 2.01601C4.664 1.94201 4.586 1.87901 4.503 1.82401C4.728 2.24401 4.543 2.91601 4.029 3.42901C3.515 3.941 2.844 4.12701 2.423 3.90201L2.424 3.90301Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_146">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('PK')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_145)">
                <rect width="21" height="15" rx="3" fill="#0A6A30" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#0A6A30"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.974 5.974C15.908 6.57 15.72 7 15.5 7C15.28 7 15.092 6.57 15.026 5.974C14.43 5.908 14 5.72 14 5.5C14 5.28 14.43 5.092 15.026 5.026C15.092 4.43 15.28 4 15.5 4C15.72 4 15.908 4.43 15.974 5.026C16.57 5.092 17 5.28 17 5.5C17 5.72 16.57 5.908 15.974 5.974ZM0 0H6V15H0V0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.97 6.968C17.99 7.143 18 7.32 18 7.5C18 9.985 15.985 12 13.5 12C11.015 12 9 9.985 9 7.5C9 5.015 11.015 3 13.5 3C13.68 3 13.857 3.01 14.032 3.03C12.32 3.26 11 4.727 11 6.5C11 8.433 12.567 10 14.5 10C16.274 10 17.74 8.68 17.97 6.968Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_145">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('PW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#3A99FF" />
            <path
                d="M9.5 12C11.9853 12 14 9.98528 14 7.5C14 5.01472 11.9853 3 9.5 3C7.01472 3 5 5.01472 5 7.5C5 9.98528 7.01472 12 9.5 12Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('PS')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_143)">
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
                    d="M0 0V15.033L10 7.5L0 0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_143">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('PA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_142)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.974 11.974C15.908 12.57 15.72 13 15.5 13C15.28 13 15.092 12.57 15.026 11.974C14.43 11.908 14 11.72 14 11.5C14 11.28 14.43 11.092 15.026 11.026C15.092 10.43 15.279 10 15.5 10C15.72 10 15.908 10.43 15.974 11.026C16.57 11.092 17 11.279 17 11.5C17 11.72 16.57 11.908 15.974 11.974Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8H10V15H0V8Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.974 4.974C5.908 5.57 5.72 6 5.5 6C5.28 6 5.092 5.57 5.026 4.974C4.43 4.908 4 4.72 4 4.5C4 4.28 4.43 4.092 5.026 4.026C5.092 3.43 5.28 3 5.5 3C5.72 3 5.908 3.43 5.974 4.026C6.57 4.092 7 4.28 7 4.5C7 4.72 6.57 4.908 5.974 4.974Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0H21V8H10V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_142">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('PG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_141)">
                <rect width="21" height="15" rx="3" fill="#AF010D" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3L14 5C14 5 12 4 11 5L10 6H13L18 9L16 6H18C18 6 18 5 17 4C16 3 15 3 15 3V2L14 3H12Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L21 15H0V0Z"
                    fill="#151515"
                />
                <path
                    d="M5.5 13C5.77614 13 6 12.7761 6 12.5C6 12.2239 5.77614 12 5.5 12C5.22386 12 5 12.2239 5 12.5C5 12.7761 5.22386 13 5.5 13Z"
                    fill="white"
                />
                <path
                    d="M6.5 12C6.77614 12 7 11.7761 7 11.5C7 11.2239 6.77614 11 6.5 11C6.22386 11 6 11.2239 6 11.5C6 11.7761 6.22386 12 6.5 12Z"
                    fill="white"
                />
                <path
                    d="M7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10Z"
                    fill="white"
                />
                <path
                    d="M3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10Z"
                    fill="white"
                />
                <path
                    d="M5.5 8C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_141">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('PY')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_140)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.97 7.2C11.99 7.297 12 7.397 12 7.5C12 8.328 11.328 9 10.5 9C9.672 9 9 8.328 9 7.5C9 7.397 9.01 7.297 9.03 7.2C9.17 7.656 9.774 8 10.5 8C11.226 8 11.83 7.656 11.97 7.2Z"
                    fill="#249F58"
                />
                <path
                    d="M10.5 7C10.7761 7 11 6.77614 11 6.5C11 6.22386 10.7761 6 10.5 6C10.2239 6 10 6.22386 10 6.5C10 6.77614 10.2239 7 10.5 7Z"
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
                <clipPath id="clip0_151_140">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('PE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_139)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H7V15H0V0ZM14 0H21V15H14V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_139">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('PH')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_138)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V8H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V15.033L10 7.5L0 0Z"
                    fill="white"
                />
                <path
                    d="M2.5 11C2.77614 11 3 10.7761 3 10.5C3 10.2239 2.77614 10 2.5 10C2.22386 10 2 10.2239 2 10.5C2 10.7761 2.22386 11 2.5 11Z"
                    fill="#FFDA2C"
                />
                <path
                    d="M7.5 8C7.77614 8 8 7.77614 8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.485 7.985C5.355 7.93 6 7.735 6 7.5C6 7.266 5.355 7.07 4.485 7.015C4.43 6.145 4.235 5.5 4 5.5C3.766 5.5 3.57 6.145 3.515 7.015C2.645 7.07 2 7.265 2 7.5C2 7.734 2.645 7.93 3.515 7.985C3.569 8.855 3.765 9.5 4 9.5C4.234 9.5 4.43 8.855 4.485 7.985Z"
                    fill="#FFDA2C"
                />
                <path
                    d="M2.5 5C2.77614 5 3 4.77614 3 4.5C3 4.22386 2.77614 4 2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_138">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('PL')"
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
                d="M0 0H21V8H0V0Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('PT')"
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
                d="M0 0H7V15H0V0Z"
                fill="#249F58"
            />
            <path
                d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 8V5H5V8C5 8.552 5.895 9 7 9C8.105 9 9 8.552 9 8Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 6H8V8H6V6Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 6H7V7H6V6ZM7 7H8V8H7V7Z"
                fill="#1A47B8"
            />
        </svg>

        <svg
            v-if="isIcon('QA')"
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
                d="M5 0L8 1L5 2L8 3L5 4L8 5L5 6L8 7L5 8L8 9L5 10L8 11L5 12L8 13L5 14L8 15H0V0H5Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('RO')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_134)">
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
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_134">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('RU')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_133)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
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
                <clipPath id="clip0_151_133">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('RW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_132)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11Z"
                    fill="#0A6A30"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V7H0V0Z"
                    fill="#03BCDB"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.974 3.974C17.57 3.908 18 3.72 18 3.5C18 3.28 17.57 3.092 16.974 3.026C16.908 2.43 16.72 2 16.5 2C16.28 2 16.092 2.43 16.026 3.026C15.43 3.092 15 3.28 15 3.5C15 3.72 15.43 3.908 16.026 3.974C16.092 4.57 16.28 5 16.5 5C16.72 5 16.908 4.57 16.974 3.974Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_132">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LC')"
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
                d="M6 13L10.5 2L15 13H6Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13L10.5 4L14 13H7Z"
                fill="#151515"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 13L10.5 8L15 13H6Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('VC')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_130)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 0H21V15H15V0ZM8 7L9 5L10 7L9 9L8 7ZM11 7L12 5L13 7L12 9L11 7ZM9.5 9L10.5 7L11.5 9L10.5 11L9.5 9Z"
                    fill="#0A6A30"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H6V15H0V0Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_130">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('WS')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_129)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H11V8H0V0Z"
                    fill="#232C80"
                />
                <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 2H6V3H5V2ZM7 3H8V4H7V3ZM6 4H7V5H6V4ZM5 5H6V6H5V5ZM4 3H5V4H4V3Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_129">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SM')"
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
                d="M0 7H21V15H0V7Z"
                fill="#3A99FF"
            />
            <path
                opacity="0.2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 7H21V15H0V7Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 8.5C13 7.12 11.88 6 10.5 6C9.12 6 8 7.12 8 8.5C8 9.88 9.12 11 10.5 11C11.88 11 13 9.88 13 8.5ZM10.5 10C11.328 10 12 9.105 12 8C12 6.895 11.328 6 10.5 6C9.672 6 9 6.895 9 8C9 9.105 9.672 10 10.5 10Z"
                fill="#249F58"
            />
            <path
                d="M10.5 9C10.7761 9 11 8.55228 11 8C11 7.44772 10.7761 7 10.5 7C10.2239 7 10 7.44772 10 8C10 8.55228 10.2239 9 10.5 9Z"
                fill="#D4AF2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4H13V5L10.5 6L8 5V4Z"
                fill="#D4AF2C"
            />
        </svg>

        <svg
            v-if="isIcon('ST')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_127)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11V15H21V11H0ZM0 0V4H21V0H0Z"
                    fill="#00B731"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 8.42L9.355 9.023L9.575 7.748L8.648 6.845L9.928 6.66L10.5 5.5L11.072 6.66L12.352 6.845L11.426 7.748L11.646 9.023L10.5 8.42ZM16.5 8.42L15.355 9.023L15.575 7.748L14.648 6.845L15.928 6.66L16.5 5.5L17.072 6.66L18.352 6.845L17.426 7.748L17.646 9.023"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V15.033L7 7.5L0 0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_127">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SA')"
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
                d="M16.0001 10V9.00001H5.0001L7.0001 10H13.0001C13.0001 10.552 13.6721 11 14.5001 11C15.3281 11 16.0001 10.552 16.0001 10ZM8.7301 3.90601C8.7181 3.90601 8.7001 3.91201 8.6771 3.92601C8.62311 3.96201 8.5171 4.07301 8.5131 4.20101C8.5101 4.27401 8.49611 4.27401 8.54311 4.32101C8.57711 4.36901 8.6131 4.36501 8.6811 4.32801C8.7211 4.29801 8.73411 4.28101 8.74811 4.23201C8.7641 4.15201 8.6611 4.27201 8.6481 4.18001C8.6251 4.09601 8.69111 4.06001 8.75311 3.98001C8.75511 3.94001 8.7551 3.91001 8.7301 3.90801V3.90601ZM9.7331 3.91101C9.7131 3.91501 9.6901 3.94101 9.6571 3.99901C9.6341 4.06101 9.53311 4.15501 9.60711 4.34901C9.66511 4.47201 9.6901 4.67101 9.66311 4.89401C9.62111 4.95701 9.6131 4.97901 9.5581 5.04201C9.4821 5.12501 9.39811 5.10401 9.33611 5.07201C9.27611 5.03201 9.2301 5.01201 9.2031 4.88601C9.20811 4.68601 9.2201 4.35401 9.1831 4.28401C9.1291 4.17601 9.03911 4.21401 9.00111 4.24701C8.81811 4.41701 8.7271 4.70001 8.6711 4.92701C8.6211 5.09101 8.5661 5.04301 8.5281 4.97701C8.4351 4.88901 8.4281 4.20701 8.3161 4.32001C8.1361 4.83401 8.41911 5.39701 8.61611 5.34201C8.7561 5.40201 8.84611 5.13201 8.90411 4.83701C8.94411 4.75401 8.97411 4.74401 8.99411 4.78701C8.98911 5.17901 9.0241 5.26701 9.1241 5.38501C9.3481 5.55901 9.5341 5.40701 9.5491 5.39301L9.7241 5.21901C9.7641 5.17901 9.81411 5.17501 9.86911 5.21101C9.92311 5.26101 9.91611 5.34401 10.0291 5.40101C10.1271 5.44101 10.3321 5.41101 10.3791 5.32801C10.4441 5.21801 10.4591 5.18001 10.4891 5.13801C10.5351 5.07801 10.6141 5.10501 10.6141 5.12401C10.6071 5.15901 10.5611 5.19401 10.5921 5.25401C10.6471 5.29401 10.6601 5.26801 10.6921 5.25901C10.8061 5.20501 10.8921 4.95701 10.8921 4.95701C10.8971 4.86501 10.8451 4.87201 10.8121 4.89101C10.7671 4.91801 10.7651 4.92701 10.7221 4.95401C10.6651 4.96201 10.5571 4.99901 10.5041 4.91601C10.4491 4.81601 10.4491 4.67801 10.4071 4.57601C10.4071 4.57001 10.3341 4.41901 10.4011 4.41001C10.4341 4.41601 10.5081 4.43501 10.5191 4.37401C10.5551 4.31401 10.4421 4.14401 10.3651 4.06001C10.2991 3.98701 10.2071 3.97801 10.1181 4.05201C10.0551 4.11001 10.0651 4.17401 10.0521 4.23501C10.0371 4.30501 10.0401 4.39201 10.1121 4.48501C10.1741 4.60701 10.2871 4.76501 10.2491 4.98701C10.2491 4.98701 10.1841 5.09301 10.0691 5.07901C10.0191 5.06901 9.9411 5.04901 9.89911 4.73901C9.8691 4.50601 9.9071 4.17901 9.8091 4.02601C9.78611 3.96901 9.7671 3.91301 9.7351 3.91601L9.7331 3.91101ZM9.4151 3.93701C9.3851 3.94001 9.3521 3.97501 9.3251 4.04201C9.3021 4.09401 9.2731 4.36201 9.2781 4.36201C9.2581 4.44201 9.3611 4.47601 9.4081 4.37401C9.47811 4.18401 9.47811 4.10401 9.48211 4.02601C9.47211 3.96601 9.44511 3.93601 9.4151 3.93801V3.93701ZM10.5881 3.95701C10.5581 3.96101 10.5331 3.97901 10.5241 4.02501C10.5111 4.13101 10.5181 4.19001 10.5361 4.27901C10.5491 4.33901 10.6361 4.43701 10.6781 4.49501C10.8811 4.76801 11.0781 5.04201 11.2661 5.32501C11.2961 5.53701 11.3161 5.74301 11.3311 5.94901C11.3631 6.39901 11.3711 6.95901 11.3441 7.43401C11.4281 7.43701 11.5641 7.29701 11.6111 7.09401C11.6411 6.81001 11.6011 6.23401 11.5971 6.06601L11.5871 5.82801C11.8071 6.18801 12.0191 6.56801 12.2271 6.98401C12.3041 6.94801 12.2871 6.51901 12.2431 6.45901C12.0751 6.09901 11.8431 5.74301 11.7701 5.60601C11.7431 5.55601 11.6521 5.41901 11.5451 5.26001C11.5251 5.03201 11.5031 4.84001 11.4891 4.78201C11.4541 4.54201 11.5871 4.80901 11.5691 4.67001C11.5251 4.43001 11.3931 4.26801 11.2371 4.04801C11.1871 3.97801 11.1871 3.96201 11.1101 4.06601C11.0651 4.17101 11.0651 4.25901 11.0801 4.34101C11.0581 4.31101 11.0331 4.27701 10.9971 4.23301L10.7421 4.01701C10.7071 3.99201 10.6391 3.95401 10.5881 3.95701ZM14.0641 3.99401C14.0491 3.99201 14.0341 3.99901 14.0141 4.02601C13.9791 4.05601 13.9421 4.11301 13.9441 4.18601C13.9511 4.31101 13.9741 4.44001 13.9821 4.56601L13.9921 4.61601C13.9781 4.60001 13.9661 4.58601 13.9591 4.58001C13.7121 4.32001 14.0721 4.53601 13.9111 4.33701C13.7761 4.18701 13.7361 4.14101 13.6211 4.05101C13.5611 4.01501 13.5271 3.94301 13.5081 4.06501C13.5001 4.17201 13.4921 4.29701 13.4981 4.38701C13.4981 4.43701 13.5511 4.53201 13.5961 4.58701C13.7601 4.79001 13.9281 5.00501 14.0961 5.22901C14.1321 5.68601 14.1411 6.10501 14.1761 6.56301C14.1721 6.75901 14.1121 7.01901 14.0561 7.04301C14.0561 7.04301 13.9681 7.09301 13.9101 7.03801C13.8671 7.02101 13.6981 6.75501 13.6981 6.75501C13.6111 6.67501 13.5531 6.69801 13.4921 6.75501C13.3221 6.91901 13.2441 7.22701 13.1291 7.43901C13.0991 7.48601 13.0161 7.52701 12.9231 7.43501C12.6861 7.11101 12.8231 6.65001 12.7951 6.76901C12.5851 7.00701 12.6771 7.40101 12.7251 7.48601C12.7951 7.62601 12.8511 7.71601 12.9851 7.78301C13.1101 7.87301 13.2051 7.81801 13.2591 7.75301C13.3831 7.62501 13.3851 7.29601 13.4431 7.23101C13.4831 7.11101 13.5861 7.13101 13.6361 7.18501C13.6861 7.25501 13.7421 7.30001 13.8131 7.33801C13.9291 7.44001 14.0671 7.45801 14.2031 7.36501C14.2961 7.31301 14.3571 7.24501 14.4111 7.11101C14.4711 6.95501 14.4411 6.13501 14.4281 5.67901L14.6881 6.05501C14.7241 6.45501 14.7411 6.85001 14.7281 7.22801C14.7201 7.30301 14.9911 7.00401 14.9881 6.86201C14.9881 6.73901 14.9901 6.62601 14.9881 6.52201C15.1211 6.73201 15.2481 6.94501 15.3681 7.16201C15.4431 7.12201 15.4181 6.69901 15.3711 6.64201C15.2451 6.43001 15.0831 6.20201 14.9581 6.02401C14.9331 5.80101 14.9001 5.53801 14.8841 5.45701C14.8611 5.33101 14.8371 5.14201 14.8011 4.99301C14.7911 4.93601 14.7611 4.75001 14.7711 4.73301C14.7851 4.69001 14.8411 4.73301 14.8681 4.68501C14.9081 4.64001 14.7261 4.16501 14.6331 4.03101C14.6001 3.97101 14.5391 3.99101 14.4651 4.09101C14.3951 4.15501 14.4211 4.30301 14.4471 4.44401C14.5151 4.80401 14.5771 5.16801 14.6251 5.53401C14.5351 5.39901 14.4251 5.23701 14.3171 5.08201L14.3031 5.01201C14.3031 5.00401 14.2891 4.71701 14.2761 4.64901C14.2731 4.62101 14.2661 4.61301 14.2961 4.61701C14.3261 4.64301 14.3301 4.64401 14.3491 4.65301C14.3811 4.65701 14.4091 4.60501 14.3891 4.55601L14.0991 4.02201C14.0891 4.00901 14.0751 3.99701 14.0591 3.99501L14.0641 3.99401ZM5.0941 4.00401C5.0391 4.00201 4.98111 4.03401 5.00411 4.09901C4.99011 4.13401 5.10811 4.25201 5.12911 4.31701C5.14611 4.36401 5.10911 4.51201 5.14911 4.52701C5.18411 4.54201 5.2331 4.42301 5.2511 4.31401C5.2611 4.25401 5.2541 4.04801 5.1141 4.00601C5.1071 4.00401 5.1001 4.00401 5.0921 4.00301L5.0941 4.00401ZM15.3141 4.00401C15.3011 4.00601 15.2861 4.02401 15.2641 4.07401C15.2091 4.16401 15.1901 4.32401 15.2121 4.46401C15.3421 5.35401 15.4421 6.21601 15.4621 7.00401C15.4501 7.08001 15.4461 7.12001 15.4121 7.21401C15.3341 7.31401 15.2481 7.43801 15.1671 7.49801C15.0871 7.55801 14.9151 7.61601 14.8591 7.66001C14.6791 7.76201 14.6791 7.88001 14.8231 7.88501C15.0711 7.85501 15.3651 7.83501 15.5671 7.53001C15.6211 7.44501 15.6851 7.21301 15.6871 7.07001C15.7071 6.24001 15.6771 5.42501 15.5521 4.82401C15.5441 4.76401 15.5181 4.63101 15.5281 4.61401C15.5431 4.57201 15.6241 4.61701 15.6531 4.57001C15.6961 4.52601 15.4431 4.20301 15.3551 4.06501C15.3371 4.03101 15.3251 4.00201 15.3111 4.00501L15.3141 4.00401ZM12.7111 4.01801C12.7011 4.02001 12.6871 4.03601 12.6591 4.07301C12.5891 4.29901 12.5651 4.48301 12.5921 4.62501C12.7721 5.55501 12.9521 6.40001 12.9241 7.28501C13.0081 7.28501 13.1061 7.09201 13.1481 6.90001C13.1711 6.63501 13.1321 6.47401 13.1261 6.32001C13.1191 6.16401 12.9501 4.90401 12.9161 4.78701C12.8741 4.56501 13.0801 4.75701 13.0581 4.62901C12.9861 4.46501 12.8081 4.22901 12.7541 4.08601C12.7341 4.04801 12.7301 4.01301 12.7141 4.01601L12.7111 4.01801ZM6.3771 4.03601C6.3571 4.04001 6.33411 4.05801 6.32711 4.08601C6.32211 4.10601 6.3351 4.13901 6.3171 4.14901C6.3071 4.15901 6.2691 4.15201 6.2711 4.09901C6.2711 4.08101 6.2581 4.06301 6.2511 4.05201C6.2431 4.04801 6.2381 4.04701 6.2241 4.04701C6.2071 4.04701 6.2071 4.05201 6.1981 4.06701C6.1941 4.08101 6.18811 4.09501 6.18811 4.11101C6.18611 4.13101 6.1781 4.13601 6.1651 4.13901C6.1491 4.13901 6.1521 4.14101 6.1401 4.13201C6.1301 4.12501 6.12211 4.12201 6.12211 4.10801C6.12211 4.09301 6.1181 4.06801 6.1141 4.06001C6.1071 4.05001 6.0961 4.04601 6.08411 4.04301C6.01811 4.04301 6.01411 4.12101 6.01711 4.14901C6.01211 4.15501 6.0101 4.28901 6.1001 4.32701C6.2201 4.38501 6.4481 4.36001 6.4401 4.16501C6.4401 4.14801 6.4351 4.09001 6.4331 4.07501C6.42111 4.04501 6.3981 4.03501 6.3761 4.03801L6.3771 4.03601ZM8.00311 4.03801C7.96111 4.04001 7.92311 4.05201 7.89311 4.06801C7.81311 4.14501 7.7931 4.26801 7.8571 4.34501C7.9171 4.37501 7.9801 4.43501 7.93911 4.47001C7.76511 4.65501 7.3121 4.96601 7.2891 5.02301V5.02901H7.29311V5.03101C7.31611 5.04601 7.60011 5.04601 7.6311 5.03101H7.6331C7.7311 4.99401 8.1931 4.46601 8.1931 4.46601C8.1691 4.44601 8.1471 4.43001 8.12311 4.40901C8.09711 4.38701 8.10011 4.36501 8.12311 4.34301C8.23711 4.27701 8.2011 4.13001 8.1411 4.06301C8.0911 4.04101 8.04511 4.03301 8.00311 4.03601V4.03801ZM12.2531 4.03801C12.2411 4.04101 12.2261 4.05801 12.2031 4.10801C12.1481 4.19801 12.1111 4.35301 12.1161 4.49801C12.2341 5.31801 12.2701 6.03501 12.3481 6.85501C12.3541 6.93501 12.3421 7.04901 12.2901 7.09501C12.0941 7.29901 11.8131 7.54901 11.5071 7.66501C11.4741 7.70201 11.5891 7.85901 11.7371 7.85901C11.9851 7.82901 12.2031 7.69101 12.4071 7.32401C12.4601 7.23901 12.5551 7.05601 12.5571 6.91401C12.5771 6.08201 12.5171 5.43401 12.3911 4.83401C12.3841 4.77401 12.3891 4.70401 12.3991 4.68801C12.4151 4.66801 12.4691 4.68801 12.4991 4.64101C12.5411 4.59701 12.3851 4.23801 12.2971 4.10101C12.2791 4.06601 12.2691 4.03801 12.2531 4.03901V4.03801ZM5.6691 4.06501C5.63511 4.06901 5.6031 4.09501 5.5871 4.13501C5.5821 4.26501 5.5811 4.39501 5.5971 4.51701C5.6571 4.73001 5.6741 4.91701 5.7031 5.13401C5.7131 5.42601 5.53511 5.26001 5.54311 5.11601C5.58311 4.92801 5.57311 4.63301 5.53711 4.55801C5.50711 4.48301 5.47511 4.46501 5.40511 4.47801C5.35011 4.47401 5.2071 4.62801 5.1671 4.88801C5.1671 4.88801 5.1331 5.02001 5.1191 5.13801C5.0991 5.27101 5.0111 5.36601 4.9491 5.12001C4.8961 4.94001 4.8641 4.50001 4.7751 4.60201C4.7491 4.94601 4.71911 5.55201 5.01111 5.61401C5.36511 5.64801 5.1691 5.01601 5.2971 4.90101C5.3221 4.84601 5.3671 4.84501 5.3701 4.91601V5.45301C5.3661 5.62701 5.48011 5.67901 5.57011 5.71501C5.66311 5.70801 5.72411 5.71101 5.76011 5.80101L5.8051 6.73101C5.8051 6.73101 6.0191 6.79101 6.0291 6.20801C6.0391 5.86501 5.9591 5.57801 6.0061 5.51101C6.0081 5.44501 6.09211 5.44101 6.1501 5.47401C6.24311 5.53901 6.2841 5.61901 6.4281 5.58701C6.6481 5.52701 6.77811 5.42101 6.78111 5.25301C6.77111 5.09301 6.75111 4.93301 6.68111 4.77301C6.69111 4.74501 6.6411 4.67001 6.6511 4.64101C6.6891 4.70101 6.7491 4.69701 6.76111 4.64101C6.72511 4.51801 6.6671 4.40101 6.5731 4.35101C6.4961 4.28101 6.38311 4.29601 6.3411 4.43801C6.32111 4.60201 6.4011 4.79601 6.5211 4.95501C6.5451 5.01701 6.5811 5.12001 6.5651 5.21301C6.5021 5.24901 6.43911 5.23301 6.38511 5.17801C6.38511 5.17801 6.2121 5.04801 6.2121 5.01801C6.2591 4.72301 6.2221 4.68801 6.1971 4.60801C6.1791 4.49401 6.1251 4.45801 6.0821 4.38001C6.0381 4.33301 5.9791 4.33301 5.95211 4.38001C5.87411 4.51301 5.9101 4.80001 5.9661 4.92701C6.0061 5.04501 6.0681 5.11901 6.0391 5.11901C6.0151 5.18401 5.9651 5.16901 5.9291 5.09201C5.8791 4.93201 5.86711 4.69601 5.86711 4.58901C5.85211 4.45701 5.83511 4.17401 5.74711 4.10201C5.72411 4.07001 5.6971 4.05901 5.6701 4.06201L5.6691 4.06501ZM6.9111 4.06501C6.8941 4.06901 6.8741 4.07901 6.8511 4.08501C6.7761 4.10801 6.7061 4.17301 6.72811 4.29901C6.8181 4.83901 6.87511 5.25201 6.96411 5.79201C6.97711 5.85601 6.9241 5.93901 6.8561 5.93201C6.7401 5.85201 6.7111 5.69201 6.5131 5.70001C6.3691 5.70001 6.2051 5.85801 6.1851 6.00801C6.1611 6.12801 6.1531 6.25801 6.1851 6.36201C6.2851 6.48201 6.4071 6.47001 6.5131 6.44201C6.6001 6.40701 6.67311 6.32201 6.7031 6.34201C6.7231 6.37501 6.70111 6.65601 6.29311 6.87201C6.04111 6.98601 5.8411 7.01201 5.7331 6.80801C5.6671 6.68001 5.7391 6.19201 5.5751 6.30401C5.0891 7.55601 6.71211 7.73001 6.89311 6.35601C6.90511 6.31601 6.9401 6.27801 6.9661 6.28801C6.9761 6.29301 6.9861 6.30801 6.9901 6.33601C6.9521 7.58001 5.7341 7.66601 5.5281 7.27401C5.4761 7.18201 5.4611 6.97601 5.4561 6.85401C5.4461 6.77901 5.4281 6.73601 5.4061 6.71901C5.3561 6.68201 5.2901 6.77901 5.2761 6.94601C5.2561 7.08101 5.26111 7.11801 5.26111 7.24801C5.3271 8.23101 6.8941 7.80801 7.14911 6.99801C7.2751 6.57801 7.14611 6.26101 7.18911 6.22201L7.1921 6.22001H7.19511L7.2001 6.21801C7.3561 6.38601 7.57411 6.23801 7.62211 6.18101C7.64211 6.15101 7.6941 6.13101 7.7301 6.17101C7.8501 6.25701 8.0641 6.21601 8.1081 6.06101C8.1341 5.91101 8.15611 5.75701 8.16111 5.59601C8.08111 5.62101 8.01711 5.63901 7.99111 5.66601C7.98511 5.67301 7.98111 5.68101 7.9791 5.68901L7.95911 5.82201C7.95911 5.82701 7.9571 5.83001 7.9551 5.83201C7.9521 5.83901 7.9451 5.84401 7.9411 5.84701C7.9131 5.86201 7.8641 5.85401 7.8611 5.81301C7.82411 5.64301 7.6691 5.62101 7.5751 5.88601C7.5121 5.93601 7.39511 5.94601 7.38511 5.87001C7.40011 5.69201 7.3281 5.66801 7.1851 5.75201L7.0471 4.71201C7.1071 4.70901 7.1611 4.75201 7.2171 4.68401C7.1571 4.50001 7.0321 4.12601 6.9611 4.09001H6.95911L6.9491 4.08001C6.9491 4.07801 6.9461 4.07701 6.9441 4.07601L6.9401 4.07001C6.93611 4.07001 6.9321 4.06801 6.9301 4.06701C6.9231 4.06501 6.9171 4.06501 6.9101 4.06501H6.9111ZM11.7531 4.06901C11.6911 4.06701 11.6231 4.10601 11.6491 4.18401C11.6331 4.22701 11.7821 4.37101 11.8061 4.44901C11.8491 4.56901 11.7731 4.68601 11.8181 4.70301C11.8601 4.72101 11.9181 4.57801 11.9381 4.44501C11.9641 4.33701 11.8881 4.11701 11.7781 4.07201L11.7531 4.07001V4.06901ZM7.9801 4.20001C8.00811 4.19801 8.04211 4.22401 8.06011 4.26001C8.07711 4.30001 8.0681 4.33701 8.0401 4.34401C8.0101 4.35101 7.9721 4.32601 7.9541 4.28601C7.93611 4.24601 7.9441 4.20901 7.9741 4.20201H7.9801V4.20001ZM14.9771 4.38201C14.9201 4.38001 14.8571 4.42201 14.8831 4.50701C14.8691 4.55301 15.0031 4.70901 15.0261 4.79501C15.0461 4.85501 14.9961 5.05101 15.0361 5.06901C15.0741 5.08901 15.1261 4.93301 15.1461 4.78901C15.1581 4.70901 15.1001 4.43401 15.0011 4.38501C14.9941 4.38301 14.9861 4.38101 14.9781 4.38101L14.9771 4.38201ZM11.1071 4.47801C11.1141 4.50101 11.1191 4.52401 11.1221 4.54801C11.1341 4.59801 11.1441 4.64801 11.1541 4.70001C11.1101 4.63801 11.0741 4.58801 11.0571 4.57001C10.9571 4.45001 11.0591 4.49201 11.1071 4.47801ZM12.0001 4.91601C11.9781 4.92001 11.9571 4.93901 11.9501 4.96901C11.9441 4.98701 11.9581 5.01901 11.9401 5.02901C11.9301 5.03901 11.8901 5.03301 11.8931 4.97901C11.8931 4.96101 11.8801 4.94201 11.8731 4.93201C11.8651 4.92701 11.8601 4.92501 11.8461 4.92501C11.8291 4.92501 11.8291 4.93001 11.8201 4.94501C11.8161 4.95901 11.8101 4.97301 11.8101 4.99001C11.8101 5.01001 11.8021 5.01601 11.7881 5.02001C11.7721 5.02001 11.7751 5.02001 11.7621 5.01301C11.7541 5.00301 11.7451 5.00101 11.7451 4.98701C11.7451 4.97201 11.7421 4.94901 11.7371 4.93901C11.7301 4.92901 11.7201 4.92601 11.7071 4.92201C11.6421 4.92201 11.6371 4.99801 11.6411 5.02601C11.6371 5.03201 11.6341 5.16801 11.7241 5.20601C11.8461 5.26301 12.0741 5.23601 12.0641 5.04201C12.0641 5.02501 12.0591 4.96701 12.0581 4.95201C12.0451 4.92201 12.0221 4.91201 12.0011 4.91501L12.0001 4.91601ZM7.9301 4.95601C7.9161 4.95601 7.89611 4.96001 7.87311 4.97401C7.7661 5.03201 7.72511 5.20401 7.79311 5.30401C7.85311 5.39401 7.9531 5.36101 7.9661 5.36101C8.07111 5.37501 8.13311 5.16501 8.13311 5.16501C8.13311 5.16501 8.1361 5.10501 8.0131 5.21701C7.9591 5.22701 7.9531 5.20701 7.93911 5.17701C7.9271 5.12401 7.9291 5.06701 7.9541 5.01401C7.9661 4.98101 7.9541 4.96001 7.9301 4.95801V4.95601ZM13.6831 4.98301C13.6231 4.98001 13.5601 5.01901 13.5431 5.10001C13.5431 5.14801 13.5651 5.17401 13.5611 5.21801C13.5561 5.24301 13.5311 5.25801 13.4691 5.23001C13.4791 5.22001 13.4291 5.15201 13.4291 5.15201C13.3821 5.12201 13.3191 5.15201 13.2771 5.18001C13.2541 5.22201 13.2371 5.29301 13.2631 5.36501C13.3311 5.49201 13.5661 5.70801 13.6781 5.71001C13.6801 5.59601 13.6911 5.44401 13.6981 5.35001C13.7001 5.31401 13.7081 5.27501 13.7431 5.26601C13.7771 5.25601 13.8361 5.30001 13.8361 5.26301C13.8301 5.19101 13.8161 5.08301 13.7761 5.03301C13.7541 5.00301 13.7191 4.98501 13.6841 4.98301H13.6831ZM8.9201 5.38001L8.9171 5.38301C8.9171 5.38301 8.9151 5.38301 8.9141 5.38501C8.9021 5.39501 8.88811 5.41501 8.85711 5.43501C8.80411 5.49501 8.7951 5.53801 8.7971 5.65801C8.80111 5.67101 8.8971 5.94101 8.9801 6.13001C9.0361 6.32701 9.08711 6.55301 9.05011 6.76601C8.9201 7.04801 8.6601 7.30101 8.4071 7.43901C8.2771 7.47901 8.1671 7.46501 8.1371 7.43701C8.06311 7.38701 8.06211 7.29701 8.06711 7.28301V7.28001C8.27911 7.13201 8.5221 7.01201 8.7121 6.61301C8.76811 6.46001 8.7861 6.36801 8.7301 6.13301C8.7081 6.04301 8.6801 5.97301 8.6201 5.90901H8.6221C8.6581 5.89201 8.75211 5.96101 8.76711 5.91901C8.74411 5.80501 8.6671 5.65401 8.5821 5.57601C8.5061 5.50601 8.42211 5.49901 8.3541 5.56201C8.2761 5.60601 8.2601 5.76201 8.2971 5.89801C8.3391 6.00001 8.4521 6.01801 8.5321 6.22501C8.5341 6.23901 8.5591 6.38001 8.5191 6.43801C8.48511 6.54001 8.06411 6.87201 8.03411 6.89201L8.03111 6.89401L8.02911 6.89601H8.02711H8.0251V6.89301C8.0231 6.88501 8.0251 6.86301 8.0251 6.83001C8.0221 6.76801 8.04811 6.62701 8.0451 6.60201V6.60001C7.9051 6.69001 7.85811 6.96501 7.83311 7.04701C7.48011 7.29001 7.0801 7.47101 6.8491 7.71701C6.7291 7.90701 7.67711 7.50301 7.78711 7.45401L7.7901 7.45701C7.8121 7.48001 7.8131 7.56001 7.8761 7.63301C7.9761 7.76601 8.1841 7.84801 8.3881 7.79701C8.7301 7.67401 8.92811 7.44101 9.12811 7.18201C9.15611 7.14201 9.20111 7.10801 9.2431 7.14001C9.38011 7.44801 9.77811 7.66801 10.2911 7.69001C10.4111 7.54601 10.3541 7.47501 10.3061 7.44501C10.2911 7.43501 10.0511 7.34101 10.0131 7.24801C9.9901 7.16201 10.0471 7.08501 10.1611 7.02801C10.4911 6.98801 10.8151 6.94301 11.1291 6.84201C11.1321 6.73601 11.1941 6.57901 11.2361 6.51001C11.2661 6.46301 11.2831 6.45801 11.2901 6.45201V6.45001H11.2921V6.44701V6.43701L11.2381 6.40501L10.1851 6.40101C10.1721 6.39601 10.1631 6.39101 10.1571 6.38601L10.1551 6.38301C10.1551 6.38301 10.1531 6.38301 10.1531 6.38101C10.1531 6.37901 10.1511 6.37901 10.1511 6.37901V6.38001V6.37801V6.37601V6.37401L10.1531 6.37101C10.1581 6.36501 10.1711 6.35801 10.1861 6.35101C10.4381 6.31801 10.8841 6.24501 10.9141 5.81601C10.9091 5.59201 10.8181 5.44601 10.5441 5.40601C10.3421 5.42101 10.1981 5.61601 10.2211 5.83001C10.2111 5.88701 10.2411 6.00001 10.1811 6.01301C9.7951 6.04901 9.37311 6.29101 9.35911 6.46501H9.35711H9.3551H9.3531C9.3531 6.46701 9.35111 6.46701 9.35011 6.46701H9.3461H9.3441H9.34011C9.3151 6.45901 9.2831 6.41701 9.28811 6.36001C9.27311 6.06001 9.1751 5.72001 9.0231 5.46001C8.9681 5.40501 8.9431 5.38301 8.9291 5.38001H8.9261H8.92311H8.9211H8.9201ZM9.92811 5.53801C9.90811 5.54201 9.88511 5.56001 9.87811 5.59001C9.87311 5.61001 9.8881 5.64201 9.8701 5.65201C9.8601 5.66201 9.8201 5.65601 9.8221 5.60201C9.8221 5.58501 9.8091 5.56601 9.8021 5.55501C9.79411 5.55001 9.7891 5.54901 9.7761 5.54901C9.7591 5.54901 9.7581 5.55301 9.7491 5.56701C9.7441 5.58101 9.73911 5.59701 9.73911 5.61201C9.73711 5.63201 9.7291 5.63801 9.7161 5.64001C9.7001 5.64001 9.7041 5.64301 9.6911 5.63501C9.6831 5.62701 9.67311 5.62301 9.67311 5.60901C9.67311 5.59401 9.67011 5.56901 9.66611 5.55901C9.65911 5.55201 9.6481 5.54901 9.6361 5.54501C9.5691 5.54501 9.56611 5.62001 9.56911 5.64901C9.56411 5.65401 9.5611 5.78901 9.6511 5.82701C9.7711 5.88501 10.0611 5.85101 9.99111 5.66401C9.99111 5.64701 9.9861 5.58901 9.9851 5.57401C9.9721 5.54401 9.9491 5.53401 9.9271 5.53701L9.92811 5.53801ZM13.9931 5.70501H13.9831C13.9831 5.70501 13.4211 6.10501 13.4081 6.11901C13.3521 6.16901 13.3801 6.34201 13.4081 6.32201C13.4481 6.33701 14.0131 5.95401 14.0021 5.90901C14.0271 5.91101 14.0391 5.71201 13.9921 5.70401L13.9931 5.70501ZM10.4591 5.76501C10.4811 5.76201 10.5111 5.77001 10.5391 5.78501C10.5821 5.81101 10.6091 5.84701 10.6041 5.87501V5.87901C10.6021 5.87901 10.6021 5.87901 10.6021 5.88101V5.88301C10.6021 5.88301 10.6001 5.88301 10.6001 5.88501C10.6001 5.88701 10.5971 5.88901 10.5951 5.89101C10.5751 5.91101 10.5291 5.90701 10.4851 5.88101C10.4431 5.85801 10.4181 5.82101 10.4201 5.79501V5.79201L10.4251 5.78201C10.4251 5.78201 10.4251 5.78001 10.4271 5.77901L10.4321 5.77301C10.4391 5.76801 10.4481 5.76301 10.4591 5.76301V5.76501ZM5.5411 5.86501C5.2511 5.87101 4.82411 6.24701 4.81311 6.45501L5.7331 6.01501C5.6831 5.93901 5.7301 5.87101 5.5411 5.86501ZM6.48411 5.99501C6.51211 5.99701 6.5421 6.01101 6.5581 6.05101C6.57211 6.08801 6.5581 6.12601 6.5411 6.14501V6.14801C6.5271 6.16401 6.4851 6.15801 6.4541 6.15801C6.4171 6.15601 6.3991 6.15001 6.3771 6.12001C6.3651 6.08501 6.39711 6.05201 6.41211 6.02801L6.41911 6.01801C6.42911 6.00801 6.4491 6.00001 6.4691 5.99801L6.4821 5.99601L6.48411 5.99501ZM13.8841 6.11201C13.8311 6.11801 13.7821 6.16701 13.8041 6.24501C13.7901 6.29101 13.8741 6.45201 13.8971 6.53701C13.9171 6.59701 13.8711 6.77001 13.9121 6.78701C13.9501 6.80701 14.0491 6.68701 14.0461 6.53301C14.0561 6.45301 14.0181 6.16301 13.9191 6.11501C13.9071 6.11201 13.8951 6.11101 13.8831 6.11201H13.8841ZM7.6001 6.39601C7.5541 6.39901 7.5131 6.42301 7.5321 6.48801C7.5291 6.53401 7.66211 6.59101 7.66911 6.69801C7.6871 6.74401 7.6391 6.88801 7.6791 6.90001C7.7151 6.91501 7.7651 6.80001 7.7841 6.69601C7.7941 6.63801 7.73811 6.43601 7.6441 6.39901C7.6291 6.39501 7.6141 6.39401 7.5991 6.39501L7.6001 6.39601ZM9.4801 6.65201H9.4921C9.6101 6.68401 9.7821 6.68801 9.93211 6.70201C10.0551 6.71201 10.1151 6.80601 10.0021 6.84701C9.8881 6.88501 9.77911 6.91701 9.77911 7.07901C9.79311 7.15901 9.78911 7.20101 9.77711 7.21901C9.77711 7.22201 9.7741 7.22401 9.7731 7.22501C9.7731 7.22501 9.7731 7.22701 9.7711 7.22701V7.22901H9.7681L9.7611 7.23201H9.7561C9.7291 7.23701 9.6901 7.21201 9.66111 7.19601C9.5911 7.14601 9.3961 7.02601 9.3681 6.76601C9.3641 6.70601 9.4081 6.65601 9.4781 6.65101L9.4801 6.65201ZM4.88611 6.85201C4.87911 6.85201 4.86611 6.87401 4.84611 6.89901C4.67211 7.17401 4.6561 7.58501 4.7521 7.70901C4.8021 7.76601 4.8861 7.79201 4.9481 7.77401C5.0581 7.72701 5.1051 7.50601 5.0781 7.42601C5.0431 7.36901 5.01411 7.36001 4.97811 7.40801C4.90111 7.56301 4.8681 7.45601 4.8631 7.36801C4.8511 7.20501 4.86711 7.05301 4.88511 6.93301C4.89511 6.87301 4.89511 6.85001 4.88511 6.85001L4.88611 6.85201ZM10.7831 7.21401C10.7701 7.21401 10.7571 7.21601 10.7431 7.22401C10.7401 7.22401 10.6191 7.30401 10.5801 7.36201C10.5561 7.38001 10.5601 7.39501 10.5661 7.42701C10.5841 7.47001 10.6161 7.45701 10.6541 7.43701C10.7041 7.42901 10.7271 7.46201 10.7241 7.52101C10.7011 7.59601 10.7341 7.62301 10.7341 7.62801C10.7341 7.63201 10.7811 7.67301 10.8371 7.64101C10.9541 7.59601 11.0271 7.55101 11.1921 7.51601C11.2351 7.51601 11.2321 7.40001 11.1641 7.39601C11.0741 7.40001 10.9941 7.40601 10.9041 7.47601C10.8491 7.48801 10.8401 7.45401 10.8271 7.42401C10.8131 7.35001 10.8591 7.29801 10.8491 7.24201C10.8511 7.24501 10.8211 7.21801 10.7821 7.21601L10.7831 7.21401ZM14.5591 7.35401L14.4791 7.36201C14.4431 7.36901 14.4311 7.38501 14.4241 7.42901C14.4271 7.49401 14.4671 7.49101 14.5091 7.51701C14.5331 7.54701 14.5491 7.57501 14.5071 7.62701C14.4671 7.66201 14.4401 7.68201 14.4001 7.71701C14.3831 7.74901 14.3701 7.79701 14.4281 7.81301C14.5331 7.84301 14.7761 7.68501 14.7761 7.68301C14.8161 7.65301 14.8021 7.59601 14.7991 7.59601C14.7751 7.57001 14.7231 7.58601 14.6891 7.58101C14.6721 7.58101 14.6191 7.57301 14.6431 7.52501C14.6651 7.49501 14.6731 7.47801 14.6881 7.44101C14.7031 7.40501 14.6881 7.38101 14.6301 7.36101C14.6001 7.35501 14.5801 7.35301 14.5571 7.35401H14.5591ZM13.1061 11.214C13.3761 11.227 13.6281 11.217 13.8961 11.23C13.9401 11.266 13.9191 11.35 13.8911 11.364L13.8861 11.366H13.8831H13.8791L13.6531 11.36V11.347C13.6311 11.285 13.4811 11.289 13.4451 11.337V11.34C13.4431 11.34 13.4421 11.343 13.4421 11.344L13.4401 11.349V11.361C13.3201 11.376 13.2151 11.357 13.0971 11.353C13.0621 11.31 13.0671 11.233 13.1071 11.213L13.1061 11.214Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('SN')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_125)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 8.75L9.03 9.523L9.31 7.886L8.122 6.726L9.765 6.489L10.5 5L11.235 6.49L12.878 6.727L11.688 7.887L11.968 9.523"
                    fill="#249F58"
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
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_125">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('RS')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_124)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0ZM8 10V5H4V10C4 11.105 4.895 12 6 12C7.105 12 8 11.105 8 10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 6L4 7L6 8L5 10L6 12L7 10L6 8L8 7L7 6L6 7L5 6Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 8L4 9H8L6 8Z"
                    fill="#88605F"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 6H4V7L5 6ZM7 6H8V7L7 6Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5L4 4C4 4 5 3 6 3C7 3 8 4 8 4L7 5H5Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 3L5 4L6 5L7 4L6 3Z"
                    fill="#A75835"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_124">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SC')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_123)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L9 0H0V15Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L16 0H21V4L0 15Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L21 9V4L0 15Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15L21 9V15H0Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_123">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SL')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_122)">
                <rect width="21" height="15" rx="3" fill="white" />
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
                    fill="#00B731"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_122">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SG')"
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
                d="M0 0H21V9H0V0Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 7.863C5.71 7.953 5.4 8 5.077 8C3.377 8 2 6.657 2 5C2 3.343 3.378 2 5.077 2C5.399 2 5.709 2.048 6 2.137C4.752 2.52 3.846 3.657 3.846 5C3.846 6.343 4.752 7.48 6 7.863ZM8 3H9V4H8V3ZM10 4H11V5H10V4ZM9 6H10V7H9V6ZM6 4H7V5H6V4ZM7 6H8V7H7V6Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('SX')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_120)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path d="M21 0H0V7H21V0Z" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L10 7.5L0 15V0Z"
                    fill="white"
                />
                <path
                    d="M4 10C4.55228 10 5 9.10457 5 8C5 6.89543 4.55228 6 4 6C3.44772 6 3 6.89543 3 8C3 9.10457 3.44772 10 4 10Z"
                    fill="#3ECBF8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 7V9H4H5V7L6 9L5 10H3L2 9L3 7Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 5H3L4 6L5 5H7L5 6H3L1 5Z"
                    fill="#AE6A3E"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_120">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SK')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_119)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0ZM9.93 10H10V5H3V10H3.07C3.024 10.162 3 10.33 3 10.5C3 11.88 6.5 13 6.5 13C6.5 13 10 11.88 10 10.5C10 10.33 9.976 10.162 9.93 10Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 10V4H4V10C4 11.105 6.5 12 6.5 12C6.5 12 9 11.105 9 10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 8V7H5V6H6V5H7V6H8V7H7V8H8.5V9H7V10H6V9H4.5V8H6Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 12C6.5 12 9 11.105 9 9.99999C9 8.89499 8 8.99999 6.5 9.99999C5 8.99999 4 8.89499 4 9.99999C4 11.105 6.5 12 6.5 12Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_119">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SI')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_118)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
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
                <path
                    d="M6.5 3H4.5C3.94772 3 3.5 3.44772 3.5 4V6.5C3.5 7.05228 3.94772 7.5 4.5 7.5H6.5C7.05228 7.5 7.5 7.05228 7.5 6.5V4C7.5 3.44772 7.05228 3 6.5 3Z"
                    fill="#F93939"
                />
                <path
                    d="M6 3H5C4.44772 3 4 3.44772 4 4V6C4 6.55228 4.44772 7 5 7H6C6.55228 7 7 6.55228 7 6V4C7 3.44772 6.55228 3 6 3Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6L5.5 5.5L7 6L6 7H5L4 6Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 4H6V5H5V4Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_118">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SB')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_117)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15H21V0L0 15Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 15H21V2L2 15Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.122 5.658L4.504 6L4.622 5.276L4.122 4.764L4.812 4.658L5.122 4L5.432 4.658L6.122 4.764L5.622 5.276L5.74 6L5.122 5.658ZM3.122 3.658L2.504 4L2.622 3.276L2.122 2.764L2.812 2.658L3.122 2L3.432 2.658L4.122 2.764L3.622 3.276L3.74 4L3.122 3.658ZM7.122 3.658L6.504 4L6.622 3.276L6.122 2.764L6.812 2.658L7.122 2L7.432 2.658L8.122 2.764L7.622 3.276L7.74 4L7.122 3.658ZM7.122 7.658L6.504 8L6.622 7.276L6.122 6.764L6.812 6.658L7.122 6L7.432 6.658L8.122 6.764L7.622 7.276L7.74 8L7.122 7.658ZM3.122 7.658L2.504 8L2.622 7.276L2.122 6.764L2.812 6.658L3.122 6L3.432 6.658L4.122 6.764L3.622 7.276L3.74 8L3.122 7.658Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_117">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SO')"
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
                d="M10.502 9.33L8.412 10.43L8.812 8.103L7.122 6.456L9.458 6.116L10.502 4L11.547 6.116L13.882 6.456L12.192 8.103L12.592 10.429"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('ZA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_115)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.013 10L2 15.033H0V0H2L8 5H21V10H8.013Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.7 9L0.5 15L0 15.033V0H0.5L7.7 6H21V9H7.7Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 3L6 7.5L0 12V3Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 4L4.75 7.5L0 11V4Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_115">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('KR')"
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
                d="M14 7.5C14 9.433 12.433 11 10.5 11C8.567 11 7 9.433 7 7.5C7 6.38 9.35 5.91 11.328 6.087C11.538 6.031 11.764 6 12 6C13.105 6 14 6.672 14 7.5Z"
                fill="#232C80"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 7C10 7 10.895 6 12 6C13.105 6 14 6.672 14 7.5C14 5.567 12.433 4 10.5 4C9.103 4 7.897 4.818 7.336 6.002C7 7 7 7.292 7 7.5C7.5 8 8.056 8 8.5 8C8.944 8 9.343 7.807 9.618 7.5L10 7Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 5H17L15 3H14L15 5ZM6 5H4L6 3H7L6 5ZM15 10H17L15 12H14L15 10ZM6 10H4L6 12H7L6 10Z"
                fill="#151515"
            />
        </svg>

        <svg
            v-if="isIcon('SS')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_113)">
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
                    d="M0 5H21V10H0V5Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V4H0V0Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L12 7.5L0 15V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.73311 8.73195L3.40312 9.72495L3.42312 8.06495L2.06812 7.10495L3.65312 6.61295L4.14612 5.02795L5.10612 6.38295L6.76612 6.36295L5.77211 7.69295L6.30511 9.26495L4.73311 8.73195Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_113">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('ES')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_112)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 4H21V11H0V4Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6.22201V8.742C9 9.442 8.328 10.002 7.5 10.002H5.5C4.674 10 4 9.43701 4 8.74001V6.22C4 5.648 4.448 5.17001 5.064 5.01501C5.25 4.49501 5.822 4.96101 6.5 4.96101C7.182 4.96101 7.75 4.498 7.936 5.016C8.55 5.175 9 5.65401 9 6.22201Z"
                    fill="#D4AF2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 7H10V10H9V7ZM3 7H4V10H3V7Z"
                    fill="#CBCBCB"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 9H10V10H9V9ZM3 9H4V10H3V9Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6H10V7H9V6ZM3 6H4V7H3V6Z"
                    fill="#D4AF2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 6H6V7.5H5V6ZM7 8H8V9.5H7V8Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 8H6V9.5H5V8Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 6H8V7.5H7V6Z"
                    fill="#AE6A3E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 6L5 5H8L7 6H6Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 4H7V5H6V4Z"
                    fill="#D4AF2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_112">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('LK')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_111)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <rect width="21" height="15" fill="#FFDA2C" />
                <rect opacity="0.3" width="21" height="15" fill="#FF6C2D" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 2H19V13H9V2ZM12.535 10.616L12.593 10.572L12.617 10.616C12.65 10.676 12.741 10.674 12.801 10.616L12.848 10.569L12.888 10.614C12.938 10.674 13.032 10.674 13.092 10.614C13.136 10.572 13.142 10.571 13.17 10.604C13.186 10.622 13.235 10.644 13.278 10.651C13.356 10.665 13.358 10.664 13.403 10.573C13.443 10.497 13.448 10.467 13.439 10.393C13.433 10.343 13.426 10.265 13.424 10.218C13.422 10.132 13.422 10.131 13.516 10.088C13.566 10.064 13.626 10.032 13.649 10.016C13.686 9.99002 13.789 9.82902 13.789 9.79602C13.789 9.78802 13.749 9.77602 13.699 9.76802C13.504 9.73802 13.471 9.59802 13.599 9.33802C13.806 8.91602 13.931 8.50302 13.932 8.24002C13.932 8.12302 13.937 8.08302 13.949 8.11002C13.995 8.21302 13.912 8.65002 13.786 8.96502L13.736 9.09202L13.784 9.07702C13.81 9.06702 13.967 8.98002 14.131 8.88102C14.581 8.61102 14.736 8.55702 15.028 8.57302C15.272 8.58702 15.376 8.65002 15.548 8.89102C15.64 9.01802 15.728 9.10902 15.888 9.24302C16.232 9.52902 16.246 9.55302 16.262 9.88902C16.279 10.229 16.272 10.249 16.077 10.305C15.912 10.353 15.807 10.455 15.78 10.598C15.766 10.675 15.797 10.678 15.88 10.606L15.94 10.554L15.968 10.606C16.004 10.676 16.08 10.676 16.143 10.606L16.19 10.556L16.238 10.606C16.314 10.686 16.415 10.668 16.443 10.566C16.448 10.548 16.463 10.554 16.493 10.588C16.548 10.652 16.689 10.68 16.705 10.628C16.711 10.61 16.699 10.563 16.68 10.524C16.598 10.36 16.572 10.281 16.57 10.192C16.57 10.068 16.597 10.008 16.704 9.90602C16.834 9.78302 16.874 9.62602 16.776 9.62602C16.716 9.62602 16.654 9.55302 16.616 9.43602C16.536 9.20102 16.551 8.93602 16.67 8.49602C16.79 8.04602 16.804 7.96602 16.805 7.66602C16.805 7.42302 16.802 7.38102 16.76 7.24802C16.735 7.16802 16.683 7.04602 16.646 6.98002L16.579 6.86002L16.666 6.76202C16.933 6.46802 16.879 5.98602 16.556 5.80202C16.459 5.74402 16.434 5.73902 16.262 5.74202C16.158 5.74202 16.002 5.76002 15.912 5.78202C15.82 5.80202 15.666 5.82002 15.56 5.82002C15.392 5.82002 15.364 5.81602 15.3 5.77002C15.232 5.72202 15.22 5.70002 15.207 5.59002C15.205 5.56602 15.193 5.54402 15.181 5.54002C15.158 5.53002 15.051 5.65002 15.037 5.70602C15.029 5.73202 15.022 5.73002 15 5.69602C14.985 5.67102 14.964 5.61602 14.953 5.57402C14.926 5.46602 14.959 5.38402 15.053 5.32402L15.128 5.27802L15.086 5.24202C14.996 5.16802 14.843 5.21802 14.788 5.34202C14.772 5.37502 14.755 5.40402 14.75 5.40402C14.745 5.40402 14.715 5.37102 14.684 5.33102C14.568 5.18102 14.608 4.95702 14.764 4.88802C14.846 4.85202 14.919 4.88002 14.934 4.95302C14.957 5.06502 15.03 4.91802 15.017 4.78502C15.007 4.69702 15.007 4.69302 15.054 4.69302C15.118 4.69302 15.254 4.80502 15.297 4.89302C15.347 4.99302 15.342 5.15302 15.287 5.27102L15.247 5.36402L15.301 5.35002C15.381 5.32802 15.461 5.26002 15.501 5.18002C15.543 5.09402 15.548 4.92702 15.511 4.83602C15.474 4.74902 15.478 4.73602 15.531 4.76602C15.623 4.81602 15.671 4.87002 15.708 4.96602C15.742 5.05102 15.744 5.07202 15.726 5.16102C15.716 5.21602 15.691 5.28802 15.672 5.32102C15.642 5.37402 15.642 5.38302 15.665 5.38302C15.708 5.38302 15.8 5.32802 15.832 5.28302C15.848 5.25902 15.872 5.20302 15.885 5.15502L15.908 5.07102L15.935 5.13502C15.973 5.22502 16.045 5.30802 16.135 5.35902C16.232 5.41502 16.272 5.41902 16.222 5.36702C16.188 5.33202 16.125 5.08702 16.144 5.06402C16.154 5.05002 16.286 5.18402 16.434 5.36202C16.576 5.53202 16.664 5.58602 16.794 5.58602C16.961 5.58602 17.057 5.39402 16.984 5.21302C16.939 5.10702 16.842 5.09302 16.786 5.18302C16.76 5.22502 16.753 5.25802 16.76 5.30102C16.77 5.35502 16.766 5.36102 16.73 5.36102C16.68 5.36102 16.586 5.28102 16.418 5.09302C16.161 4.80802 15.848 4.56602 15.623 4.47802C15.478 4.42002 15.169 4.39802 15.023 4.43402C14.863 4.47202 14.673 4.59402 14.571 4.72402C14.389 4.95402 14.387 5.25902 14.564 5.53802L14.614 5.61802L14.58 5.68802C14.53 5.79202 14.534 5.93102 14.59 6.03302C14.615 6.07802 14.64 6.11502 14.646 6.11502C14.652 6.11502 14.658 6.08502 14.66 6.05002C14.665 5.96002 14.694 5.90002 14.744 5.87702C14.788 5.85502 14.817 5.86502 15.022 5.97302C15.237 6.08802 15.59 6.09502 15.966 5.99302C16.151 5.94502 16.368 5.94802 16.464 6.00102C16.639 6.09902 16.68 6.35302 16.551 6.54602C16.495 6.62802 16.441 6.66202 16.261 6.72802C16.123 6.77802 16.091 6.78202 15.778 6.77802C15.511 6.77402 15.415 6.78102 15.306 6.81102C15.188 6.84402 15.116 6.84702 14.768 6.83602L14.366 6.82202L14.411 6.87202C14.435 6.89802 14.471 6.93202 14.488 6.94502C14.518 6.96702 14.518 6.97002 14.472 6.99202C14.445 7.00602 14.387 7.01602 14.342 7.01602H14.259L14.249 7.11002C14.243 7.16202 14.243 7.22002 14.249 7.24302C14.259 7.27602 14.256 7.28002 14.229 7.26802C14.213 7.25802 14.165 7.24302 14.123 7.23102C14.081 7.21902 14.025 7.19602 13.998 7.17802C13.952 7.14802 13.948 7.14802 13.93 7.18802C13.916 7.22402 13.776 7.36202 13.755 7.36202C13.752 7.36202 13.748 7.33502 13.745 7.30202C13.745 7.27002 13.725 7.18502 13.701 7.11402C13.679 7.04402 13.655 6.96602 13.649 6.94202C13.639 6.90602 13.636 6.90402 13.624 6.93202C13.617 6.94902 13.606 6.99702 13.6 7.03902C13.595 7.07902 13.574 7.14902 13.554 7.18902L13.518 7.26302L13.495 7.19902C13.471 7.13102 13.43 7.05902 13.415 7.05902C13.41 7.05902 13.401 7.08202 13.395 7.10902C13.385 7.16402 13.288 7.31902 13.265 7.31902C13.255 7.31902 13.248 7.27502 13.248 7.22202C13.248 7.16802 13.241 7.12502 13.231 7.12502C13.223 7.12502 13.215 7.13802 13.215 7.15502C13.215 7.19502 13.132 7.31802 13.105 7.31802C13.092 7.31802 13.073 7.33202 13.061 7.35002C13.031 7.39602 13.006 7.39002 13.018 7.34002C13.025 7.31502 13.021 7.26002 13.01 7.21502L12.983 7.11002C12.979 7.09402 12.95 7.09802 12.887 7.12502C12.785 7.16802 12.751 7.16102 12.803 7.10502C12.823 7.08502 12.853 7.01702 12.868 6.95302C12.884 6.88902 12.908 6.83302 12.922 6.82602C12.94 6.82002 12.939 6.82902 12.917 6.86802C12.902 6.89602 12.889 6.93402 12.889 6.95202C12.889 6.97002 12.876 7.01202 12.862 7.04702C12.848 7.08302 12.839 7.11402 12.842 7.11702C12.846 7.12202 12.884 7.10302 12.928 7.07502L13.008 7.02502V7.07002C13.008 7.09502 13.018 7.16002 13.028 7.21602L13.05 7.31602L13.104 7.28302C13.159 7.24902 13.212 7.12802 13.212 7.03502C13.212 6.98702 13.232 6.99502 13.24 7.04502L13.268 7.16502L13.292 7.25902L13.329 7.19902C13.349 7.16602 13.376 7.10202 13.387 7.05602C13.407 6.97802 13.435 6.94402 13.435 7.00102C13.435 7.04302 13.521 7.19102 13.537 7.17902C13.545 7.17302 13.561 7.11702 13.572 7.05502C13.596 6.92502 13.634 6.83702 13.659 6.85502C13.669 6.86302 13.671 6.87502 13.666 6.88502C13.662 6.89502 13.681 6.98002 13.71 7.07302C13.74 7.16602 13.77 7.26002 13.775 7.28102C13.785 7.31602 13.795 7.31102 13.857 7.23802C13.897 7.19302 13.931 7.14302 13.935 7.12602C13.941 7.10202 13.95 7.10302 13.985 7.13202C14.035 7.17402 14.205 7.24202 14.218 7.22402C14.223 7.21802 14.228 7.15902 14.228 7.09402L14.231 6.97402L14.281 6.98702C14.308 6.99502 14.364 6.99402 14.406 6.98702L14.482 6.97202L14.415 6.91002C14.378 6.87602 14.34 6.83202 14.331 6.81202C14.321 6.79202 14.287 6.77202 14.251 6.76902C14.148 6.75702 13.967 6.62202 13.967 6.55902C13.967 6.54602 13.992 6.56602 14.023 6.60402C14.091 6.68602 14.185 6.73802 14.267 6.73802H14.329L14.291 6.67202C14.269 6.63202 14.249 6.56002 14.244 6.49902C14.237 6.40402 14.229 6.38902 14.154 6.31902C14.109 6.27702 14.052 6.21402 14.029 6.17902L13.987 6.11602L13.965 6.19102C13.953 6.23302 13.938 6.26602 13.933 6.26602C13.927 6.26602 13.903 6.24202 13.883 6.21302C13.86 6.18302 13.837 6.15902 13.833 6.15902C13.826 6.15902 13.807 6.19902 13.788 6.24902L13.755 6.33602L13.729 6.28602C13.714 6.25602 13.681 6.20802 13.654 6.17602C13.627 6.14202 13.612 6.11602 13.622 6.11602C13.632 6.11602 13.666 6.15002 13.697 6.19102L13.754 6.26702L13.777 6.21102C13.79 6.17902 13.795 6.12802 13.789 6.08702C13.779 6.02702 13.781 6.02502 13.799 6.06202C13.809 6.08602 13.842 6.13202 13.872 6.16202L13.926 6.22202L13.963 6.13202C14 6.04202 14.001 6.04202 14.017 6.09402C14.04 6.16602 14.202 6.34402 14.34 6.44602C14.36 6.46202 14.352 6.40602 14.313 6.28102C14.303 6.24802 14.293 6.18802 14.293 6.14802C14.293 6.08802 14.281 6.06102 14.223 6.00302C14.141 5.91902 14.115 5.86002 14.099 5.72502C14.093 5.67002 14.079 5.60902 14.067 5.59002C14.05 5.56002 14.047 5.57702 14.052 5.67802C14.054 5.74802 14.047 5.83202 14.036 5.86802L14.016 5.93202L14 5.87802C13.99 5.84802 13.953 5.79802 13.915 5.76302C13.875 5.73002 13.85 5.69702 13.855 5.69002C13.86 5.68402 13.9 5.71402 13.942 5.75802C14.007 5.82502 14.022 5.83202 14.03 5.80302C14.04 5.76802 14.03 5.61702 14.01 5.51302C14 5.45902 14 5.45902 14.05 5.52302C14.086 5.57302 14.105 5.62902 14.12 5.72902C14.14 5.85602 14.15 5.87902 14.238 5.97902C14.291 6.04202 14.338 6.08902 14.34 6.08502C14.344 6.08102 14.35 5.92102 14.355 5.73002C14.365 5.36502 14.355 5.27802 14.288 5.16502L14.254 5.10702L14.307 5.03002C14.377 4.93002 14.409 4.85002 14.423 4.74002L14.435 4.65002L14.375 4.72702C14.325 4.78902 14.302 4.80302 14.245 4.80302C14.188 4.80302 14.165 4.79102 14.128 4.73602C14.082 4.67102 14 4.60902 13.922 4.57802C13.892 4.56802 13.882 4.57202 13.882 4.59802C13.882 4.61802 13.867 4.67202 13.847 4.72002L13.812 4.80802L13.738 4.71002C13.692 4.65002 13.638 4.60402 13.598 4.59002C13.495 4.55402 13.49 4.55702 13.49 4.66002C13.49 4.81302 13.44 4.84202 13.35 4.74002C13.283 4.66002 13.226 4.64402 13.097 4.66302L12.997 4.67802L13.017 4.73802C13.031 4.78802 13.027 4.80802 12.995 4.86502C12.943 4.95702 12.875 4.99702 12.771 4.99702C12.723 4.99702 12.663 5.01002 12.637 5.02702C12.612 5.04202 12.549 5.06102 12.497 5.06702C12.445 5.07402 12.39 5.08702 12.374 5.09402C12.35 5.10602 12.347 5.09602 12.354 5.02202C12.367 4.90802 12.308 4.82502 12.214 4.82502C12.094 4.82502 12.039 4.96802 12.086 5.15702C12.0949 5.18897 12.1038 5.23823 12.1098 5.27198L12.112 5.28402C12.119 5.31902 12.172 5.41202 12.24 5.50102C12.304 5.58702 12.364 5.67602 12.374 5.69902C12.384 5.72202 12.417 5.75902 12.447 5.78102L12.502 5.82102L12.495 5.74402C12.487 5.65802 12.501 5.64402 12.535 5.70402C12.548 5.72702 12.579 5.76202 12.605 5.78402C12.645 5.81602 12.652 5.81702 12.652 5.78802C12.652 5.76802 12.66 5.72802 12.67 5.69402L12.69 5.63402L12.72 5.71602C12.738 5.76102 12.796 5.86402 12.848 5.94602C12.95 6.10102 13.012 6.27602 12.98 6.31602C12.967 6.33302 12.932 6.33102 12.86 6.31202C12.803 6.29802 12.733 6.29002 12.704 6.29502C12.644 6.30502 12.641 6.29502 12.677 6.23502C12.715 6.17202 12.709 6.16202 12.634 6.16202C12.547 6.16202 12.332 6.10602 12.249 6.06202C12.169 6.02202 12.149 6.03202 12.126 6.13202L12.083 6.31702L12.06 6.41702L12.147 6.40702C12.195 6.40002 12.257 6.38702 12.284 6.37502C12.312 6.36502 12.337 6.35902 12.34 6.36202C12.343 6.36602 12.33 6.40602 12.313 6.45002L12.279 6.53002L12.334 6.51602C12.364 6.50802 12.409 6.48802 12.434 6.47202C12.478 6.44402 12.481 6.44602 12.516 6.51902C12.558 6.60902 12.592 6.60602 12.599 6.50902C12.607 6.41102 12.632 6.42602 12.679 6.55702C12.722 6.68302 12.769 6.72702 12.777 6.65302C12.78 6.62902 12.803 6.58802 12.83 6.56302C12.883 6.51302 12.923 6.52902 12.945 6.60702C12.97 6.68702 12.917 6.77102 12.765 6.89502C12.455 7.14302 12.277 7.48302 12.225 7.91502C12.179 8.30502 12.323 8.70902 12.612 8.99902C12.75 9.13902 12.97 9.28402 12.956 9.22902C12.898 8.99102 12.9 8.53902 12.96 8.46202C12.97 8.45002 12.966 8.49702 12.953 8.56602C12.905 8.82402 12.926 9.02902 13.05 9.51002C13.16 9.94602 13.146 10.132 12.988 10.254C12.938 10.294 12.904 10.3 12.768 10.298C12.62 10.296 12.604 10.3 12.556 10.35C12.51 10.4 12.451 10.56 12.451 10.634C12.451 10.674 12.484 10.669 12.551 10.618L12.535 10.616ZM11.415 9.81602C11.431 9.78902 11.443 9.74602 11.443 9.72102C11.443 9.68302 11.456 9.67302 11.52 9.66102L11.597 9.64702L11.547 9.59202C11.485 9.52802 11.479 9.47802 11.533 9.47802C11.586 9.47802 11.677 9.40402 11.691 9.34802C11.698 9.32402 11.694 9.29002 11.683 9.27202C11.653 9.22702 11.596 9.23402 11.586 9.28402C11.574 9.33802 11.556 9.33902 11.513 9.28402C11.449 9.20402 11.447 9.03602 11.51 8.93802C11.538 8.89202 11.538 8.88802 11.5 8.84202C11.46 8.79002 11.43 8.68902 11.45 8.66502C11.456 8.65802 11.488 8.66502 11.52 8.67902C11.568 8.69902 11.587 8.70102 11.606 8.67902C11.666 8.61902 11.601 8.53902 11.506 8.55702C11.469 8.56402 11.454 8.55702 11.448 8.53102C11.444 8.51102 11.411 8.48402 11.373 8.47102C11.307 8.44902 11.306 8.45102 11.306 8.51102C11.306 8.57802 11.276 8.59102 11.223 8.54802C11.178 8.51302 11.135 8.54002 11.135 8.60302C11.135 8.66102 11.18 8.69002 11.259 8.68302C11.319 8.67802 11.322 8.73902 11.264 8.82502L11.222 8.88802L11.255 8.95102C11.305 9.04402 11.3 9.19902 11.245 9.27602L11.205 9.33602L11.177 9.28802C11.139 9.22102 11.087 9.22602 11.072 9.29802C11.062 9.34502 11.072 9.36602 11.115 9.41602C11.145 9.44902 11.188 9.47602 11.211 9.47602C11.269 9.47602 11.267 9.53602 11.207 9.59802L11.16 9.64602L11.234 9.66102C11.274 9.66902 11.306 9.68502 11.306 9.69602C11.306 9.73602 11.356 9.86402 11.373 9.86402C11.383 9.86402 11.403 9.84402 11.416 9.81702L11.415 9.81602ZM11.668 7.64602C11.834 7.54902 11.848 7.30202 11.692 7.23602C11.627 7.21002 11.586 7.22602 11.562 7.28302C11.542 7.32802 11.555 7.40902 11.582 7.40902C11.59 7.40902 11.597 7.42302 11.597 7.44102C11.597 7.52702 11.344 7.56602 11.241 7.49602C11.205 7.47102 11.191 7.40802 11.221 7.40802C11.241 7.40802 11.258 7.34202 11.247 7.29602C11.231 7.23402 11.183 7.21202 11.115 7.23602C10.96 7.29002 10.965 7.53202 11.122 7.63602C11.252 7.71902 11.536 7.72402 11.67 7.64602H11.668ZM11.565 7.45602C11.575 7.44602 11.571 7.42602 11.555 7.40902C11.52 7.37202 11.522 7.31702 11.56 7.25402C11.59 7.20702 11.593 7.13702 11.603 6.42802C11.62 5.20402 11.688 4.28502 11.778 4.06502C11.814 3.97702 11.808 3.97502 11.716 4.06002C11.596 4.16802 11.506 4.31002 11.426 4.51002C11.274 4.89002 11.221 5.40202 11.221 6.49402C11.221 7.11402 11.225 7.19402 11.251 7.25402C11.277 7.30802 11.278 7.32902 11.261 7.38802C11.249 7.42602 11.244 7.46302 11.249 7.46802C11.283 7.51202 11.529 7.50102 11.566 7.45502L11.565 7.45602ZM11 3H10V4H11V3ZM18 3H17V4H18V3ZM11 11H10V12H11V11ZM18 11H17V12H18V11Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 2H8V13H5V2Z"
                    fill="#FF6C2D"
                />
                <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 2H8V13H5V2Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 2H5V13H2V2Z"
                    fill="#0A6A30"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_111">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SD')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_110)">
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
                    d="M0 0H21V5H0V0Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V15.033L10 7.5L0 0Z"
                    fill="#249F58"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_110">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SR')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_109)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11ZM0 0H21V4H0V0Z"
                    fill="#0A6A30"
                />
                <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11ZM0 0H21V4H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5H21V10H0V5Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 8.75L9.03 9.523L9.31 7.886L8.122 6.726L9.765 6.489L10.5 5L11.235 6.49L12.878 6.727L11.688 7.887L11.968 9.523"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_109">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('SE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_108)">
                <rect width="21" height="15" rx="3" fill="#3A99FF" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 9H0V6H6V0H9V6H21V9H9V15H6V9Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_108">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('CH')"
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
                d="M9 6H6V9H9V12H12V9H15V6H12V3H9V6Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('SY')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_106)">
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
                    d="M6.5 8.75L5.03 9.523L5.31 7.886L4.122 6.726L5.765 6.489L6.5 5L7.235 6.49L8.878 6.727L7.688 7.887L7.968 9.523L6.5 8.75ZM14.5 8.75L13.03 9.523L13.31 7.886L12.122 6.726L13.765 6.489L14.5 5L15.235 6.49L16.878 6.727L15.688 7.887L15.968 9.523"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#AF010D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_106">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('TJ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_105)">
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
                    d="M11.97 7.2C11.99 7.297 12 7.397 12 7.5C12 8.328 11.328 9 10.5 9C9.672 9 9 8.328 9 7.5C9 7.397 9.01 7.297 9.03 7.2C9.17 7.656 9.774 8 10.5 8C11.226 8 11.83 7.656 11.97 7.2ZM10.5 7C10.776 7 11 6.776 11 6.5C11 6.224 10.776 6 10.5 6C10.224 6 10 6.224 10 6.5C10 6.776 10.224 7 10.5 7Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#AF010D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_105">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('TZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_104)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15H21V2L0 13V15Z"
                    fill="#3ECBF8"
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
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_104">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('TH')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_103)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V3H0V0ZM0 12H21V15H0V12Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5H21V10H0V5Z"
                    fill="#232C80"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_103">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('TL')"
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
                d="M0 0L14 7.5L0 15V0Z"
                fill="#FFDA2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0L10 7.5L0 15V0Z"
                fill="#151515"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.49999 8.75L2.02999 9.523L2.30999 7.886L1.12199 6.726L2.76499 6.489L3.49999 5L4.23499 6.49L5.87799 6.727L4.68799 7.887L4.96799 9.523"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('TG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_101)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 0H21V3H7V0ZM7 6H21V9H7V6ZM0 12H21V15H0V12Z"
                    fill="#0A6A30"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H9V9H0V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.44 5.897L2.932 6.69L3.22 5.01L2 3.823L3.686 3.578L4.44 2.05L5.194 3.577L6.88 3.822L5.66 5.012L5.948 6.69"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_101">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('TO')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_100)">
                <rect width="21" height="15" rx="3" fill="#AF010D" />
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H11V9H0V0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 4V2H5V4H3V6H5V8H7V6H9V4H7Z"
                    fill="#AF010D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_100">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('TT')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_99)">
                <rect width="21" height="15" rx="3" fill="#AF010D" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 0L21 15H14L0 0H7Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0L20 15H15L1 0H7H6Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_99">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('TN')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#F93939" />
            <path
                d="M10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7H13V8H12V7Z"
                fill="#F93939"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5 9C12.044 9.607 11.318 10 10.5 10C9.12 10 8 8.88 8 7.5C8 6.12 9.12 5 10.5 5C11.318 5 12.044 5.393 12.5 6H11C10.172 6 9.5 6.672 9.5 7.5C9.5 8.328 10.172 9 11 9H12.5Z"
                fill="#F93939"
            />
        </svg>

        <svg
            v-if="isIcon('TR')"
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
                d="M14.002 8.652L12.84 9.262L13.062 7.969L12.122 7.052L13.422 6.862L14.002 5.686L14.582 6.863L15.882 7.053L14.942 7.968L15.164 9.261"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.5 11C11.433 11 13 9.433 13 7.5C13 5.567 11.433 4 9.5 4C7.567 4 6 5.567 6 7.5C6 9.433 7.567 11 9.5 11ZM10.5 10C11.88 10 13 8.88 13 7.5C13 6.12 11.88 5 10.5 5C9.12 5 8 6.12 8 7.5C8 8.88 9.12 10 10.5 10Z"
                fill="white"
            />
        </svg>

        <svg
            v-if="isIcon('TM')"
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
                d="M11.236 3.014C11.323 3.004 11.411 3 11.5 3C12.88 3 14 4.12 14 5.5C14 6.88 12.88 8 11.5 8C10.12 8 9 6.88 9 5.5C9 5.41 9.005 5.323 9.014 5.236C9.13 6.23 9.974 7 11 7C12.105 7 13 6.105 13 5C13 3.975 12.23 3.13 11.236 3.014ZM10 4H11V5H10V4Z"
                fill="white"
            />
            <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4H9V5H8V4ZM10 2H11V3H10V2Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 0H3V15H2V0ZM4 0H5V15H4V0ZM6 0H7V15H6V0Z"
                fill="#D4AF2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0L7 1.5L5 3V0ZM5 3L7 4.5L5 6V3ZM5 6L7 7.5L5 9V6ZM5 9L7 10.5L5 12V9ZM5 12L7 13.5L5 15V12ZM4 0L2 1.5L4 3V0ZM4 3L2 4.5L4 6V3ZM4 6L2 7.5L4 9V6ZM4 9L2 10.5L4 12V9ZM4 12L2 13.5L4 15V12ZM4 0H5V2H4V0ZM4 13H5V15H4V13ZM4 5H5V7H4V5ZM4 3H5V4H4V3ZM4 11H5V12H4V11ZM4 8H5V10H4V8Z"
                fill="#AE6A3E"
            />
        </svg>

        <svg
            v-if="isIcon('Tuvalu')"
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
                d="M14 5V6H15V5H14ZM17 5V6H18V5H17ZM12 8V9H13V8H12ZM16 9V10H17V9H16ZM12 11V12H13V11H12ZM8 10V11H9V10H8Z"
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
            v-if="isIcon('UG')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_94)">
                <rect width="21" height="15" rx="3" fill="#FFDA2C" />
                <rect y="12" width="21" height="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 7H21V10H0V7Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 4H21V7H0V4Z"
                    fill="#F93939"
                />
                <path
                    d="M10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4C8.34315 4 7 5.34315 7 7C7 8.65685 8.34315 10 10 10Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 4L9 7L10 9L11 7V10L12 7L11 6L10 7V4Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V2H0V0Z"
                    fill="#151515"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_94">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('UA')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <rect width="21" height="15" rx="3" fill="#FFDA2C" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H21V8H0V0Z"
                fill="#3A99FF"
            />
        </svg>

        <svg
            v-if="isIcon('AE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_92)">
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
                    d="M0 0H21V5H0V0Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V15H6V0H0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_92">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('GB')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_91)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.23397 0H0V2.5L18.7539 15L21 15V12.5L2.23397 0Z"
                    fill="white"
                />
                <path
                    d="M0.745098 0L21 13.5354V15H20.2724L0 1.45056V0H0.745098Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.0001 1.52588e-05H21.0001V2.50002C21.0001 2.50002 8.00988 10.8281 2.00008 15H7.62939e-05V12.5L19.0001 1.52588e-05Z"
                    fill="white"
                />
                <path
                    d="M21 0H20.3218L0 13.5471V15H0.745098L21 1.46151V0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.63708 0H13.3804V4.62682H21V10.3701H13.3804V15H7.63708V10.3701H0V4.62682H7.63708V0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.8421 0H12.1579V5.76923H21V9.23077H12.1579V15H8.8421V9.23077H0V5.76923H8.8421V0Z"
                    fill="#F93939"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_91">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('US')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_90)">
                <rect width="21" height="15" rx="3" fill="white" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H9V7H0V0Z"
                    fill="#1A47B8"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_90">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('UY')"
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
                d="M10 3H21V5H10V3ZM10 7H21V9H10V7ZM0 11H21V13H0V11Z"
                fill="#3A99FF"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.88 6.88C6.65 8.125 6.12 9 5.5 9C4.88 9 4.35 8.126 4.12 6.88C2.875 6.65 2 6.12 2 5.5C2 4.88 2.874 4.35 4.12 4.12C4.35 2.875 4.88 2 5.5 2C6.12 2 6.65 2.874 6.88 4.12C8.125 4.35 9 4.88 9 5.5C9 6.12 8.126 6.65 6.88 6.88Z"
                fill="#D4AF2C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.187 6.187C6.123 7.79 5.84 9 5.5 9C5.16 9 4.877 7.79 4.813 6.187C3.21 6.123 2 5.84 2 5.5C2 5.16 3.21 4.877 4.813 4.813C4.877 3.21 5.16 2 5.5 2C5.84 2 6.123 3.21 6.187 4.813C7.79 4.877 9 5.16 9 5.5C9 5.84 7.79 6.123 6.187 6.187Z"
                fill="#FFDA2C"
            />
            <path
                d="M5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7Z"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('UZ')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_88)">
                <rect width="21" height="15" rx="3" fill="#F93939" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11H21V15H0V11Z"
                    fill="#00B731"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V4H0V0Z"
                    fill="#03BCDB"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5H21V10H0V5ZM5 3.915C4.844 3.97 4.675 4 4.5 4C3.672 4 3 3.328 3 2.5C3 1.672 3.672 1 4.5 1C4.675 1 4.844 1.03 5 1.085C4.417 1.291 4 1.847 4 2.5C4 3.153 4.417 3.71 5 3.915Z"
                    fill="white"
                />
                <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 2H7V3H6V2ZM7 1H8V2H7V1ZM8 2H9V3H8V2ZM9 1H10V2H9V1ZM10 2H11V3H10V2ZM9 3H10V4H9V3ZM7 3H8V4H7V3Z"
                    fill="#1A47B8"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_88">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('VU')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_87)">
                <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 9H21V15H0V9Z"
                    fill="#249F58"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V6H0V0Z"
                    fill="#AF010D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.208 9L2 15.033H0V0H2L9.2 6H21V9H9.208Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.9 8L0.5 15L0 15.033V0H0.5L8.9 7H21V8H8.9Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1L8 7.5L0 14V1Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.653 9.347C1.253 8.89 1 8.232 1 7.5C1 6.12 1.895 5 3 5C4.105 5 5 6.12 5 7.5C5 8.88 4.105 10 3 10V9C3.552 9 4 8.328 4 7.5C4 6.672 3.552 6 3 6C2.448 6 2 6.672 2 7.5C2 7.96 2.138 8.37 2.354 8.646L1.654 9.346L1.653 9.347Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_87">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('VE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_86)">
                <rect width="21" height="15" rx="3" fill="#1A47B8" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 8H7V9H6V8ZM8 7H9V8H8V7ZM12 7H13V8H12V7ZM14 8H15V9H14V8ZM10 6H11V7H10V6Z"
                    fill="#BCC9F0"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_86">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('VN')"
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
                d="M10.502 9.33L8.412 10.43L8.812 8.103L7.122 6.456L9.458 6.116L10.502 4L11.547 6.116L13.882 6.456L12.192 8.103L12.592 10.429"
                fill="#FFDA2C"
            />
        </svg>

        <svg
            v-if="isIcon('VI')"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_151_84)">
                <rect width="21" height="15" rx="3" fill="white" />
                <mask
                    id="mask0_151_84"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="21"
                    height="15"
                >
                    <path
                        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask0_151_84)">
                    <path
                        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.25 9L16 9.75L13.75 12L13 11.25L15.25 9Z"
                        fill="#3A99FF"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.75 9L6 9.75L8.25 12L9 11.25L6.75 9Z"
                        fill="#249F58"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 9H8V10L6 11L7 9Z"
                        fill="#FFDA2C"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 7H4V10H3V7ZM17 7H18V10H17V7Z"
                        fill="#3A99FF"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 4V3H9V4L10 5V7H11V4ZM4 4L8 5V8L4 5V4ZM17 4L13 5V8L17 5V4ZM8 11L10.5 12L13 11L12 10H9L8 11Z"
                        fill="#FFDA2C"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 9H13V10L15 11L14 9Z"
                        fill="#FFDA2C"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 6H13V10L10.5 11L8 10V6Z"
                        fill="#AF010D"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 7H10V10H9V7ZM11 7H12V10H11V7Z"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5H13V7H8V5Z"
                        fill="#232C80"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_151_84">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('YE')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_83)">
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
                    d="M0 0H21V5H0V0Z"
                    fill="#AF010D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_83">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('ZM')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_82)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 6H21V15H19V6Z"
                    fill="#FF6C2D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 6H19V15H17V6Z"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 6H17V15H15V6Z"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 3L17 4L18 5L19 4L22 3H18L17 2V3H14Z"
                    fill="#FF6C2D"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_82">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('ZW')"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
        >
            <g clip-path="url(#clip0_151_81)">
                <rect width="21" height="15" rx="3" fill="#249F58" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 2H21V13H0V2Z"
                    fill="#FFDA2C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 4H21V11H0V4Z"
                    fill="#F93939"
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
                    d="M1 0L12 7.5L1 15H0V0"
                    fill="#151515"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0L11 7.5L0 15V0Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.49999 8.75L3.02999 9.523L3.30999 7.886L2.12199 6.726L3.76499 6.489L4.49999 5L5.23499 6.49L6.87799 6.727L5.68799 7.887L5.96799 9.523"
                    fill="#F93939"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 9H6V8L5 7C5 7 5 6 4 6H3L4 7L3 9Z"
                    fill="#FFDA2C"
                />
            </g>
            <defs>
                <clipPath id="clip0_151_81">
                    <rect width="21" height="15" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <svg
            v-if="isIcon('financially_motivated')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7956 13.6533C10.145 14.2575 9.69752 15.2471 9.69752 16.8281V22.6563C9.69752 23.7995 9.93181 24.63 10.2982 25.2236C10.6581 25.807 11.1804 26.2191 11.8695 26.4771C12.0822 26.5543 12.2991 26.6161 12.5137 26.6505C12.5312 26.6533 12.5486 26.6566 12.5659 26.6605C12.9452 26.7458 13.3676 26.7868 13.8281 26.7868H23.7756C25.1393 26.7868 26.1461 26.4458 26.8081 25.8311C27.4588 25.2269 27.9062 24.2373 27.9062 22.6563V16.8281C27.9062 16.3631 27.8575 15.9529 27.7848 15.5354C27.578 14.5019 27.111 13.8255 26.483 13.3915C25.8347 12.9435 24.9317 12.6975 23.7756 12.6975H13.8281C12.4644 12.6975 11.4577 13.0386 10.7956 13.6533ZM9.64055 12.4094C10.7213 11.4058 12.2042 11 13.8281 11H23.7756C25.1545 11 26.43 11.2915 27.448 11.995C28.4845 12.7112 29.1709 13.7976 29.4517 15.2146L29.4552 15.2333C29.54 15.7178 29.6037 16.2329 29.6037 16.8281V22.6563C29.6037 24.5608 29.0553 26.0609 27.9632 27.075C26.8824 28.0785 25.3995 28.4844 23.7756 28.4844H13.8281C13.2792 28.4844 12.7372 28.4366 12.2188 28.3223C11.8789 28.2657 11.563 28.1719 11.286 28.0712L11.2792 28.0687L11.2792 28.0687C10.2725 27.6928 9.43228 27.0529 8.85356 26.1151C8.28062 25.1866 8 24.0253 8 22.6563V16.8281C8 14.9235 8.54843 13.4235 9.64055 12.4094Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.0218 14.778C28.2246 14.5763 28.5154 14.4902 28.7953 14.5492C30.0255 14.8082 31.1026 15.3887 31.8639 16.3745C32.6216 17.3557 33 18.652 33 20.2233V26.0514C33 27.956 32.4516 29.4561 31.3595 30.4702C30.2787 31.4737 28.7958 31.8795 27.1719 31.8795H17.2244C16.3158 31.8795 15.4512 31.7575 14.6747 31.4635C13.039 30.8576 11.9308 29.5796 11.5484 27.654C11.4924 27.3724 11.5827 27.0815 11.7883 26.881C11.9939 26.6805 12.287 26.5976 12.5672 26.6606C12.9464 26.746 13.3689 26.787 13.8294 26.787H23.7769C25.1406 26.787 26.1473 26.4459 26.8094 25.8312C27.46 25.227 27.9075 24.2374 27.9075 22.6564V16.8282C27.9075 16.345 27.8664 15.9276 27.789 15.5503C27.7315 15.2701 27.819 14.9797 28.0218 14.778ZM29.603 16.6288C29.6043 16.6946 29.605 16.7611 29.605 16.8282V22.6564C29.605 24.561 29.0566 26.061 27.9644 27.0751C26.8837 28.0786 25.4008 28.4845 23.7769 28.4845H13.8294C13.7586 28.4845 13.6879 28.4837 13.6174 28.4821C13.9912 29.1664 14.5532 29.6088 15.2667 29.8726L15.2734 29.8751L15.2734 29.8751C15.8088 30.0782 16.4595 30.182 17.2244 30.182H27.1719C28.5356 30.182 29.5424 29.841 30.2044 29.2262C30.8551 28.622 31.3025 27.6324 31.3025 26.0514V20.2233C31.3025 18.92 30.9906 18.0209 30.5204 17.4121C30.276 17.0956 29.9706 16.834 29.603 16.6288Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.7944 17.6088C17.6131 17.6088 16.6555 18.5665 16.6555 19.7477C16.6555 20.929 17.6131 21.8866 18.7944 21.8866C19.9757 21.8866 20.9333 20.929 20.9333 19.7477C20.9333 18.5665 19.9757 17.6088 18.7944 17.6088ZM14.958 19.7477C14.958 17.6289 16.6756 15.9113 18.7944 15.9113C20.9132 15.9113 22.6308 17.6289 22.6308 19.7477C22.6308 21.8665 20.9132 23.5841 18.7944 23.5841C16.6756 23.5841 14.958 21.8665 14.958 19.7477Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.323 16.4094C12.7917 16.4094 13.1717 16.7894 13.1717 17.2582V22.2376C13.1717 22.7063 12.7917 23.0863 12.323 23.0863C11.8542 23.0863 11.4742 22.7063 11.4742 22.2376V17.2582C11.4742 16.7894 11.8542 16.4094 12.323 16.4094Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.2715 16.4097C25.7402 16.4097 26.1202 16.7897 26.1202 17.2585V22.2379C26.1202 22.7067 25.7402 23.0867 25.2715 23.0867C24.8027 23.0867 24.4227 22.7067 24.4227 22.2379V17.2585C24.4227 16.7897 24.8027 16.4097 25.2715 16.4097Z"
                fill="#4CED8C"
            />
        </svg>

        <svg
            v-if="isIcon('politically_motivated')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M10 31H32"
                stroke="#4CED8C"
                stroke-width="1.7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21 9C22.6 9.73563 24.4 9.73563 26 9V12.4483C24.4 13.1839 22.6 13.1839 21 12.4483V9Z"
                stroke="#4CED8C"
                stroke-width="1.7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21 12V16"
                stroke="#4CED8C"
                stroke-width="1.7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M26.625 16H15.375C13.125 16 12 17.0714 12 19.2143V31H30V19.2143C30 17.0714 28.875 16 26.625 16Z"
                stroke="#4CED8C"
                stroke-width="1.7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M13 20H29"
                stroke="#4CED8C"
                stroke-width="1.7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M17 20V31"
                stroke="#4CED8C"
                stroke-width="1.7"
                stroke-miterlimit="10"
                stroke-linejoin="round"
            />
            <path
                d="M21 20V31"
                stroke="#4CED8C"
                stroke-width="1.7"
                stroke-miterlimit="10"
                stroke-linejoin="round"
            />
            <path
                d="M25 20V31"
                stroke="#4CED8C"
                stroke-width="1.7"
                stroke-miterlimit="10"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('government_sponsored')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M31 21C31 15.48 26.52 11 21 11C15.48 11 11 15.48 11 21C11 26.52 15.48 31 21 31"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M17 12H18C16.05 17.84 16.05 24.16 18 30H17"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M24 12C24.97 14.92 25.46 17.96 25.46 21"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12 25V24C14.92 24.97 17.96 25.46 21 25.46"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12 18C17.84 16.05 24.16 16.05 30 18"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M27.2 30.4C28.9673 30.4 30.4 28.9673 30.4 27.2C30.4 25.4327 28.9673 24 27.2 24C25.4327 24 24 25.4327 24 27.2C24 28.9673 25.4327 30.4 27.2 30.4Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M31 31L30 30"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('hacktivism')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M27 16.16C26.94 16.15 26.87 16.15 26.81 16.16C25.43 16.11 24.33 14.98 24.33 13.58C24.33 12.15 25.48 11 26.91 11C28.34 11 29.49 12.16 29.49 13.58C29.48 14.98 28.38 16.11 27 16.16Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M25.9704 23.4402C27.3404 23.6702 28.8504 23.4302 29.9104 22.7202C31.3204 21.7802 31.3204 20.2402 29.9104 19.3002C28.8404 18.5902 27.3104 18.3502 25.9404 18.5902"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M14.9704 16.16C15.0304 16.15 15.1004 16.15 15.1604 16.16C16.5404 16.11 17.6404 14.98 17.6404 13.58C17.6404 12.15 16.4904 11 15.0604 11C13.6304 11 12.4804 12.16 12.4804 13.58C12.4904 14.98 13.5904 16.11 14.9704 16.16Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16.0004 23.44C14.6304 23.67 13.1204 23.43 12.0604 22.72C10.6504 21.78 10.6504 20.24 12.0604 19.3C13.1304 18.59 14.6604 18.35 16.0304 18.59"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21.0001 23.6297C20.9401 23.6197 20.8701 23.6197 20.8101 23.6297C19.4301 23.5797 18.3301 22.4497 18.3301 21.0497C18.3301 19.6197 19.4801 18.4697 20.9101 18.4697C22.3401 18.4697 23.4901 19.6297 23.4901 21.0497C23.4801 22.4497 22.3801 23.5897 21.0001 23.6297Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M18.0897 26.7797C16.6797 27.7197 16.6797 29.2597 18.0897 30.1997C19.6897 31.2697 22.3097 31.2697 23.9097 30.1997C25.3197 29.2597 25.3197 27.7197 23.9097 26.7797C22.3197 25.7197 19.6897 25.7197 18.0897 26.7797Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('cyber_mercenary')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M18.1596 19.87C18.0596 19.86 17.9396 19.86 17.8296 19.87C15.4496 19.79 13.5596 17.84 13.5596 15.44C13.5596 12.99 15.5396 11 17.9996 11C20.4496 11 22.4396 12.99 22.4396 15.44C22.4296 17.84 20.5396 19.79 18.1596 19.87Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M25.4103 13C27.3503 13 28.9103 14.57 28.9103 16.5C28.9103 18.39 27.4103 19.93 25.5403 20C25.4603 19.99 25.3703 19.99 25.2803 20"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M13.1597 23.56C10.7397 25.18 10.7397 27.82 13.1597 29.43C15.9097 31.27 20.4197 31.27 23.1697 29.43C25.5897 27.81 25.5897 25.17 23.1697 23.56C20.4297 21.73 15.9197 21.73 13.1597 23.56Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M27.34 29C28.06 28.85 28.74 28.56 29.3 28.13C30.86 26.96 30.86 25.03 29.3 23.86C28.75 23.44 28.08 23.16 27.37 23"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('script_kiddie')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M18 31H24C29 31 31 29 31 24V18C31 13 29 11 24 11H18C13 11 11 13 11 18V24C11 29 13 31 18 31Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16 17.25C17 18.25 18.63 18.25 19.64 17.25"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M22.3594 17.25C23.3594 18.25 24.9894 18.25 25.9994 17.25"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M17.4 22H24.6C25.1 22 25.5 22.4 25.5 22.9C25.5 25.39 23.49 27.4 21 27.4C18.51 27.4 16.5 25.39 16.5 22.9C16.5 22.4 16.9 22 17.4 22Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('cyber_terrorism')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M15 13C16.67 11.75 18.75 11 21 11C26.52 11 31 15.48 31 21C31 26.52 26.52 31 21 31C15.48 31 11 26.52 11 21C11 19.19 11.48 17.49 12.33 16.02L21 21"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M15.83 17.96C15.3 18.85 15 19.89 15 21C15 24.31 17.69 27 21 27C24.31 27 27 24.31 27 21C27 17.69 24.31 15 21 15C20.09 15 19.22 15.2 18.45 15.57"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('cyber_criminal')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M28.32 19H13.69C12.21 19 11.01 17.79 11.01 16.32V13.69C11.01 12.21 12.22 11.01 13.69 11.01H28.32C29.8 11.01 31 12.22 31 13.69V16.32C31 17.79 29.79 19 28.32 19Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M28.32 31H13.69C12.21 31 11.01 29.79 11.01 28.32V25.69C11.01 24.21 12.22 23.01 13.69 23.01H28.32C29.8 23.01 31 24.22 31 25.69V28.32C31 29.79 29.79 31 28.32 31Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M15 14V16"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M19 14V16"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M15 26V28"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M19 26V28"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M23 15H27"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M23 27H27"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('cyber_espionage')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M31 20.89V21.78C31 25.34 30.11 26.22 26.56 26.22H15.44C11.89 26.22 11 25.33 11 21.78V15.44C11 11.89 11.89 11 15.44 11H17"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21 26.22V31"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M11 22H31"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16.5 31H25.5"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M26.86 18.37H22.1C20.72 18.37 20.26 17.45 20.26 16.53V13.01C20.26 11.91 21.16 11.01 22.26 11.01H26.86C27.88 11.01 28.7 11.83 28.7 12.85V16.53C28.7 17.55 27.88 18.37 26.86 18.37Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M29.91 16.92L28.7 16.07V13.31L29.91 12.46C30.51 12.05 31 12.3 31 13.03V16.36C31 17.09 30.51 17.34 29.91 16.92Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('information_theft')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M18 31H24C29 31 31 29 31 24V18C31 13 29 11 24 11H18C13 11 11 13 11 18V24C11 29 13 31 18 31Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M26.5 26.08H24.65"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21.97 26.08H15.5"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M26.5 22.32H20.97"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M18.27 22.32H15.5"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('gaining_prominence')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M28 18C28 19.45 27.57 20.78 26.83 21.89C25.75 23.49 24.04 24.62 22.05 24.91C21.71 24.97 21.36 25 21 25C20.64 25 20.29 24.97 19.95 24.91C17.96 24.62 16.25 23.49 15.17 21.89C14.43 20.78 14 19.45 14 18C14 14.13 17.13 11 21 11C24.87 11 28 14.13 28 18Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M30.25 27.47L28.6 27.86C28.23 27.95 27.94 28.23 27.86 28.6L27.51 30.07C27.32 30.87 26.3 31.11 25.77 30.48L21 25L16.23 30.49C15.7 31.12 14.68 30.88 14.49 30.08L14.14 28.61C14.05 28.24 13.76 27.95 13.4 27.87L11.75 27.48C10.99 27.3 10.72 26.35 11.27 25.8L15.17 21.9C16.25 23.5 17.96 24.63 19.95 24.92C20.29 24.98 20.64 25.01 21 25.01C21.36 25.01 21.71 24.98 22.05 24.92C24.04 24.63 25.75 23.5 26.83 21.9L30.73 25.8C31.28 26.34 31.01 27.29 30.25 27.47Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21.58 14.98L22.17 16.16C22.25 16.32 22.46 16.48 22.65 16.51L23.72 16.69C24.4 16.8 24.56 17.3 24.07 17.79L23.24 18.62C23.1 18.76 23.02 19.03 23.07 19.23L23.31 20.26C23.5 21.07 23.07 21.39 22.35 20.96L21.35 20.37C21.17 20.26 20.87 20.26 20.69 20.37L19.69 20.96C18.97 21.38 18.54 21.07 18.73 20.26L18.97 19.23C19.01 19.04 18.94 18.76 18.8 18.62L17.97 17.79C17.48 17.3 17.64 16.81 18.32 16.69L19.39 16.51C19.57 16.48 19.78 16.32 19.86 16.16L20.45 14.98C20.74 14.34 21.26 14.34 21.58 14.98Z"
                stroke="#4CED8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="isIcon('non_monetary')"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.6353 13.4871C12.9554 14.1185 12.5 15.143 12.5 16.75V22.95C12.5 23.3642 12.1642 23.7 11.75 23.7C11.3358 23.7 11 23.3642 11 22.95V16.75C11 14.8571 11.5446 13.3815 12.6147 12.3879C13.6746 11.4036 15.135 11 16.75 11H26.75C28.365 11 29.8254 11.4036 30.8853 12.3879C31.9554 13.3815 32.5 14.8571 32.5 16.75V22.75C32.5 24.643 31.9554 26.1185 30.8853 27.1121C29.8254 28.0964 28.365 28.5 26.75 28.5H18.25C17.8358 28.5 17.5 28.1642 17.5 27.75C17.5 27.3358 17.8358 27 18.25 27H26.75C28.135 27 29.1746 26.6536 29.8647 26.0129C30.5446 25.3815 31 24.357 31 22.75V16.75C31 15.143 30.5446 14.1185 29.8647 13.4871C29.1746 12.8464 28.135 12.5 26.75 12.5H16.75C15.365 12.5 14.3254 12.8464 13.6353 13.4871Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.75 18C20.7835 18 20 18.7835 20 19.75C20 20.7165 20.7835 21.5 21.75 21.5C22.7165 21.5 23.5 20.7165 23.5 19.75C23.5 18.7835 22.7165 18 21.75 18ZM18.5 19.75C18.5 17.9551 19.9551 16.5 21.75 16.5C23.5449 16.5 25 17.9551 25 19.75C25 21.5449 23.5449 23 21.75 23C19.9551 23 18.5 21.5449 18.5 19.75Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.25 16.5C28.6642 16.5 29 16.8358 29 17.25V22.25C29 22.6642 28.6642 23 28.25 23C27.8358 23 27.5 22.6642 27.5 22.25V17.25C27.5 16.8358 27.8358 16.5 28.25 16.5Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.75 22.5C12.9542 22.5 11.5 23.9542 11.5 25.75C11.5 26.3594 11.6705 26.9333 11.9684 27.4163L11.9747 27.4265L11.9746 27.4266C12.5344 28.3677 13.5641 29 14.75 29C15.9359 29 16.9656 28.3677 17.5254 27.4266L17.5315 27.4163L17.5316 27.4163C17.8295 26.9333 18 26.3594 18 25.75C18 23.9542 16.5458 22.5 14.75 22.5ZM10 25.75C10 23.1258 12.1258 21 14.75 21C17.3742 21 19.5 23.1258 19.5 25.75C19.5 26.6385 19.2517 27.4827 18.8115 28.1986C17.9906 29.5746 16.482 30.5 14.75 30.5C13.018 30.5 11.5094 29.5746 10.6885 28.1986C10.2483 27.4827 10 26.6385 10 25.75Z"
                fill="#4CED8C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.0303 22.4697C18.3232 22.7626 18.3232 23.2374 18.0303 23.5303L12.5303 29.0303C12.2374 29.3232 11.7626 29.3232 11.4697 29.0303C11.1768 28.7374 11.1768 28.2626 11.4697 27.9697L16.9697 22.4697C17.2626 22.1768 17.7374 22.1768 18.0303 22.4697Z"
                fill="#4CED8C"
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
