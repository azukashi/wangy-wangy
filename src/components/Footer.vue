<script lang="ts">
import Container from './Container.vue';
import Icon from '../shared/Icon.vue';

export default {
    name: 'Footer',
    components: { Container, Icon },
};
</script>

<template>
    <footer>
        <div class="separator"></div>
        <Container>
            <p>Made with ❤️ by <b>Gifaldy Azka</b></p>
            <span>|</span>
            <a href="https://github.com/gifaldyazkaa" target="_blank">
                <Icon name="bxl:github" width="24" height="24" />
            </a>
        </Container>
    </footer>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';

footer {
    color: $dark-text;
    padding: 50px 0 0;
    margin-top: auto;
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .separator {
        border-top: 1px solid $dark-text;
    }
    p {
        text-align: center;
    }
    span {
        font-weight: 700;
    }
    a {
        color: white;
        display: block !important;
        height: 24px;
    }
}
</style>
