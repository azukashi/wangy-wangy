<script lang="ts">
import Textarea from '../shared/Textarea.vue';
import Button from '../shared/Button.vue';
import * as Toast from '../funcs/toastify';

export default {
    name: 'Result',
    components: { Textarea, Button },
    props: ['result'],
    data() {
        return {
            res: '',
        };
    },
    watch: {
        result: {
            immediate: true,
            handler(newVal, oldVal) {
                this.res = newVal;
            },
        },
    },
    methods: {
        copy() {
            if (!this.result) return Toast.error('Pilih template terlebih dahulu!');
            navigator.clipboard.writeText(this.result);
            Toast.success('Teks berhasil di-copy');
            console.log(this.res);
        },
        del() {
            (document.getElementById('result') as HTMLTextAreaElement).value = null;
        },
    },
};
</script>

<template>
    <p>3. Preview (Silahkan copy)</p>
    <Textarea :text="res"></Textarea>
    <div class="btn-wrapper">
        <Button class="space" @click="del()">Hapus Hasil</Button>
        <Button @click="copy()">Copy</Button>
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
