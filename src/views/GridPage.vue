<template>
    <section class="gridPage">
        <div class="cell grid-top-left">Top left element</div>
        <div class="cell grid-top-center">Top center element</div>
        <div class="cell grid-top-right">
            <span class="grid-title">Top right element</span>
            <div class="cell sub-grid-top-right">top-right</div>
        </div>
        <div class="cell grid-middle-left">
            <span class="grid-title">Middle left element</span>
            <div class="cell grid-left">left</div>
            <div class="cell grid-center">center</div>
            <div class="cell grid-right">right</div>
        </div>
        <div class="cell grid-middle-center">Middle center element</div>
        <div class="cell grid-middle-right">
            <span class="grid-title">Middle right element</span>
            <div class="cell grid-left">left</div>
            <div class="cell grid-center">center</div>
            <div class="cell grid-right">right</div>
        </div>
        <div class="cell grid-bottom-left">Bottom left element</div>
        <div class="cell grid-bottom-center">Bottom center element</div>
        <div class="cell grid-bottom-right">Bottom right element</div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
        };
    },

    computed: {
    },
    methods: {
    },
});

</script>

<style scoped>
.gridPage {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 100vh;
}
.grid-middle-left,
.grid-middle-right {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: max-content 1fr;
    grid-template-areas:
        "title title title"
        "left center right";
}
.grid-top-right {
    display: grid;
    grid-template-columns: 1fr 1fr max-content;
    grid-template-rows: max-content 1fr 2fr 2fr;
    grid-template-areas:
        "title title title"
        "tLeft tCenter tRight"
        "mLeft mCenter mRight"
        "bLeft bCenter bRight"
}
.cell {
    border: 1px solid black;
}

.grid-title {
    grid-area: title;
}
.sub-grid-top-right {
    grid-area: tRight;
}
</style>
