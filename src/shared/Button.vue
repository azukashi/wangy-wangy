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
@import '../styles/variable';
@import '../styles/mixin';

button {
    &.btn {
        height: 2.1rem;
        color: $dark-text;
        background: $btn-bg;
        font-family: $lexend;
        font-size: 14px;
        outline: none;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
        &:active {
            outline: 2px solid $outline;
        }
        @include on-mobile() {
            height: 2.4rem;
        }
    }
}
</style>
