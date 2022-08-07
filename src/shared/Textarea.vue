<script lang="ts">
export default {
    name: 'Textarea',
    props: ['text'],
};
</script>

<template>
    <textarea class="textarea" disabled aria-label="Result preview" name="result" id="result" v-model="text"></textarea>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';

.textarea {
    width: 100%;
    height: 10rem;
    color: $dark-text;
    border: none;
    outline: none;
    border-radius: 0.375rem;
    padding: 0.375rem 0.75rem;
    box-sizing: border-box;
    padding-right: 0;
    background-color: $input-bg;
    font-family: $lexend;
    resize: none;
    @include on-mobile() {
        width: 100%;
        box-sizing: border-box;
    }
    @include on-tablet() {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
