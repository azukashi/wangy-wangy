<script lang="ts">
export default {
    name: 'Input',
    props: ['placeholder'],
};
</script>

<template>
    <input class="input__name" type="text" name="name" id="name" :placeholder="placeholder" />
</template>

<style lang="scss">
@import '../styles/mixin';
.input {
    &__name {
        height: 1.5rem;
        width: 42%;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        border: none;
        outline: none;
        color: #fff;
        background-color: #343f53;
        font-family: 'Lexend', sans-serif;
        &:focus {
            outline: 2px solid #469fa3;
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
