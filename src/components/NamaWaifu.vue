<script lang="ts">
import Input from '../shared/Input.vue';

export default {
    name: 'NamaWaifu',
    components: { Input },
    data() {
        return {
            inputValue: null,
        };
    },
    methods: {
        handleInput(val) {
            this.inputValue = val;
        },
        sendInput(e) {
            this.$emit('sendInput', e);
        },
    },
};
</script>

<template>
    <p>1. Sebutkan nama waifu 2D mu</p>
    <Input placeholder="Keqing, Rem, etc." @input="sendInput(inputValue)" @receiveInput="handleInput" />
</template>

<style lang="scss"></style>
