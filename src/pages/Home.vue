<template>
    <section id="content">
        <img class="img" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue Logo" />
        <h1>Hello, {{ name }}</h1>
        <h2>{{ path }}</h2>
        <h3>My personal starter for Vue.js: TS, SASS, Vue Router, Parcel, NProgress, Prettier, Git Hooks</h3>
        <p>Start editing <code>src/App.vue</code> and save to reload.</p>
    </section>
</template>

<script lang="ts">
export default {
    name: 'Home',
    data() {
        return {
            name: 'Vue',
            path: 'Home',
        };
    },
};
</script>
