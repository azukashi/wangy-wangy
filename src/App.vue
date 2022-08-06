<template>
    <Container>
        <Title />
        <NamaWaifu />
        <TemplateBtn />
        <Result />
    </Container>
</template>

<script lang="ts">
import Container from './components/Container.vue';
import Title from './components/Title.vue';
import NamaWaifu from './components/NamaWaifu.vue';
import TemplateBtn from './components/TemplateBtn.vue';
import Result from './components/Result.vue';
import NProgress from 'nprogress';

export default {
    name: 'App',
    components: { Container, Title, NamaWaifu, TemplateBtn, Result },
    mounted() {
        NProgress.start();
        window.addEventListener('load', () => NProgress.done());
    },
};
</script>

<style lang="scss"></style>
