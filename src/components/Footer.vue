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
            <div class="author">
                <p>Made with ❤️ by <b>Azukashiic</b></p>
                <span>|</span>
                <a href="https://github.com/azukashi" target="_blank">
                    <Icon name="bxl:github" width="24" height="24" />
                </a>
            </div>
            <div class="support">
                <p>Did you like this project? Support me on</p>
                <a
                    href="https://trakteer.id/azukashiic"
                    style="height: auto !important; color: #be212f; font-weight: 700"
                    target="_blank"
                    >Trakteer</a
                >
                <span>!</span>
            </div>
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        .author {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
        .support {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
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
