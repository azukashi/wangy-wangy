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
    <Textarea
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex minima enim vero eligendi iste rerum obcaecati pariatur natus omnis consequuntur veritatis molestiae adipisci temporibus sint culpa repellat quas, provident earum quod porro necessitatibus nesciunt fugiat incidunt! Minima alias, amet corrupti magni, accusantium asperiores dolores debitis exercitationem modi omnis, harum voluptatem dolorum nihil aut nisi obcaecati architecto. Quas, earum. Iusto corporis dicta vitae ea minima provident debitis nam tenetur ratione ipsum eum tempore cumque aliquam, itaque quo nostrum distinctio totam at aperiam vel repellat nisi! Adipisci, esse culpa illum explicabo dolorum, eos nobis, accusantium atque nesciunt commodi et repudiandae voluptate."
    ></Textarea>
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
