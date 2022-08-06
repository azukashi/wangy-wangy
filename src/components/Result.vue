<script lang="ts">
import Textarea from '../shared/Textarea.vue';
import Button from '../shared/Button.vue';

export default {
    name: 'Result',
    components: { Textarea, Button },
};
</script>

<template>
    <p>3. Preview (Silahkan copy)</p>
    <Textarea text=""></Textarea>
    <div class="btn-wrapper">
        <Button class="space">Hapus Hasil</Button>
        <Button>Copy</Button>
    </div>
</template>

<style lang="scss">
.btn-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    .btn {
        margin-top: 0.5rem;
        &.space {
            margin-right: 0.5rem;
        }
    }
}
</style>
