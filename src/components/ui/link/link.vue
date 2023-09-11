<template>
    <a class="ui-link" :href="href" :target="target">
        {{ label }}
    </a>
</template>

<script>
export default {
    name: "UILink",
    props: {
        label: {
            type: String,
            default: "",
        },
        href: {
            type: String,
            default: "",
        },
        target: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss">
.ui-link {
    @include vietnam-semi-bold;
    border-radius: 12px;
    background: $primary;
    color: $txt-main;
    font-size: 18px;
    padding: 15px 24px;
    display: inline-block;
}
</style>
