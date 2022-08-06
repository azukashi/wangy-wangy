<template>
    <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link> |
        <router-link :to="{ name: 'About' }">About</router-link>
    </nav>
    <router-view></router-view>
</template>

<script lang="ts">
export default {
    name: 'App',
};
</script>

<style lang="scss">
nav {
    text-align: center;
    color: #fff;
    a {
        color: #41b883;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
            'Open Sans', 'Helvetica Neue', sans-serif;
    }
}
</style>
