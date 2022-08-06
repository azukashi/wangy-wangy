<template>
    <section id="content">
        <img class="img" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue Logo" />
        <h1>Hello, {{ name }}</h1>
        <h2>{{ path }}</h2>
        <h3>About page</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id esse veritatis cumque officia omnis distinctio,
            excepturi a ab nihil in!
        </p>
    </section>
</template>

<script lang="ts">
export default {
    name: 'About',
    data() {
        return {
            name: 'Vue',
            path: 'About',
        };
    },
};
</script>
