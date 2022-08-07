<script lang="ts">
export default {
    name: 'Input',
    props: ['placeholder'],
    data() {
        return {
            inputValue: null,
        };
    },
    methods: {
        handleInput(e) {
            if (this.inputValue == '') e = null;
            this.$emit('receiveInput', this.inputValue);
        },
    },
};
</script>

<template>
    <input
        class="input__name"
        type="text"
        name="name"
        id="name"
        v-model="inputValue"
        @input="handleInput(inputValue)"
        :placeholder="placeholder"
    />
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';

.input {
    &__name {
        height: 1.5rem;
        width: 42%;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        border: none;
        outline: none;
        color: $dark-text;
        background-color: $input-bg;
        font-family: $lexend;
        &:focus {
            outline: 2px solid $outline;
        }
        @include on-tablet() {
            height: 2rem;
            width: 100%;
            box-sizing: border-box;
        }
        @include on-mobile() {
            height: 2rem;
            width: 100%;
            box-sizing: border-box;
        }
    }
}
</style>
