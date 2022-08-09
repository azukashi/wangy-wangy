<template>
    <Container>
        <Title />
        <NamaWaifu @sendInput="handleInput" />
        <TemplateBtn :waifu="waifu" @result="handleResult" />
        <Result :result="result" />
        <Footer />
    </Container>
</template>

<script lang="ts">
import Container from './components/Container.vue';
import Title from './components/Title.vue';
import NamaWaifu from './components/NamaWaifu.vue';
import TemplateBtn from './components/TemplateBtn.vue';
import Result from './components/Result.vue';
import Footer from './components/Footer.vue';
import NProgress from 'nprogress';

export default {
    name: 'App',
    components: { Container, Title, NamaWaifu, TemplateBtn, Result, Footer },
    mounted() {
        NProgress.start();
        window.addEventListener('load', () => NProgress.done());
    },
    data() {
        return {
            waifu: null,
            result: null,
        };
    },
    methods: {
        handleInput(e) {
            this.waifu = e;
        },
        handleResult(e) {
            this.result = e;
        },
    },
};
</script>

<style lang="scss"></style>
