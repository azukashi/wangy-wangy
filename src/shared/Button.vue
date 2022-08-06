<script lang="ts">
export default {
    name: 'Button',
};
</script>

<template>
    <button class="btn">
        <slot />
    </button>
</template>

<style lang="scss">
@import '../styles/mixin';

button {
    &.btn {
        height: 2.1rem;
        color: #fff;
        background: #0d6efd;
        font-family: 'Lexend', sans-serif;
        font-size: 14px;
        outline: none;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
        &:focus {
            outline: 2px solid #469fa3;
        }
        @include on-mobile() {
            height: 2.4rem;
        }
    }
}
</style>
