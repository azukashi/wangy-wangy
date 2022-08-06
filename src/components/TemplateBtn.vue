<script lang="ts">
import Button from '../shared/Button.vue';

export default {
    name: 'TemplateBtn',
    components: { Button },
};
</script>

<template>
    <section class="template">
        <p>2. Pilih template</p>
        <Button>Template 1</Button>
        <Button>Template 1</Button>
        <Button>Template 1</Button>
        <Button>Template 1</Button>
        <Button>Template 1</Button>
        <Button>Template 1</Button>
        <Button>Template 1</Button>
    </section>
</template>

<style lang="scss">
@import '../styles/mixin';
.template {
    width: 50%;
    .btn {
        margin-right: 0.5rem;
        margin-top: 0.5rem;
    }
    @include on-mobile() {
        width: 100%;
    }
}
</style>
