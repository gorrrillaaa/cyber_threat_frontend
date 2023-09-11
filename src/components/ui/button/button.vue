<template>
    <button class="ui-button" @click="click">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: "UIButton",
    props: {
        label: {
            type: String,
            default: "",
        },
    },
    emits: ["clicked"],
    setup(_, {emit}) {
        const click = () => {
            emit("clicked");
        };

        return {
            click,
        };
    },
};
</script>

<style lang="scss">
.ui-button {
    @include vietnam-semi-bold;
    border-radius: 12px;
    background: $primary-500;
    padding: 15px 37px;
    color: $txt-main;
    font-size: 18px;
}
</style>
