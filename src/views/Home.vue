<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Vue3-tutorial demonstration web-page"/>
        <p>
            The current version of
            <a href="https://github.com/restimel/vue3-tutorial" target="_blank">Vue3-tutorial</a>
            used on the demonstration site is
            <b>
                0.13.1
            </b>.
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld,
    },
});
</script>

<style>
.icon:before {
    content: '🐱';
}

</style>