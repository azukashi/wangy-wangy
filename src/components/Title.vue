<script lang="ts">
export default {
    name: 'Title',
};
</script>

<template>
    <section class="title">
        <h1>Wangy-wangy Generator</h1>
        <p>Generator Tools that created and designed for weebs. #wgs</p>
        <div class="separator"></div>
    </section>
</template>

<style lang="scss">
@import '../styles/variable';

.title {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.12rem;
    .separator {
        border-top: 1px solid $dark-text;
    }
}
</style>
