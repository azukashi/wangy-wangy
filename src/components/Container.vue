<script>
export default {
    name: 'Container',
};
</script>

<template>
    <div class="container">
        <slot />
    </div>
</template>

<style lang="scss">
@import '../styles/mixin';
.container {
    max-width: 1024px;
    margin: auto;
    padding: 20px 40px;
    @include on-tablet {
        padding: 20px 30px;
    }
    @include on-mobile {
        padding: 20px 20px;
    }
}
</style>
