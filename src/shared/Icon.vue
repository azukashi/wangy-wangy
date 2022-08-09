<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
    name: 'Icon',
    components: {
        Iconify: Icon,
    },
    props: ['name'],
};
</script>

<template>
    <Iconify :icon="name" width="20" height="20" />
</template>
