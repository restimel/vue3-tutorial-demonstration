<template>
    <section class="nav-tutorials">
        <button v-for="tutorialName of tutorialList"
            :key="`tutorial-${tutorialName}`"
            class="btn-tutorial main-tutorial"
            @click="startTutorial(tutorialName)"
        >
            {{tutorialName}}
        </button>
    </section>
    <VTutorial
        :tutorial="tutorial"
        :open="runTutorial"
        @stop="runTutorial = false"
        @error="onError"
    />
</template>

<script setup>
import VTutorial from 'vue3-tutorial';
import { ref } from 'vue';
import tutorials from './tutorials.json';

let tutorial = ref({});
let runTutorial = ref(false);

const tutorialList = Array.isArray(tutorials) ? tutorials.map((tuto) => tuto.name) : [];

function startTutorial(name) {
    const activeTutorial = tutorials.find((tuto) => tuto.name === name);
    if (!activeTutorial) {
        return;
    }
    tutorial.value = activeTutorial;
    runTutorial.value = true;
}

if (!sessionStorage.getItem('hasAlreadyVisit')) {
    startTutorial(tutorialList[0]);
}
sessionStorage.setItem('hasAlreadyVisit', true);

function onError(err) {
    console.log('error prompted:', err);
}
</script>

<style scoped>
.nav-tutorials {
    padding-top: 5px;
}
.btn-tutorial {
    color: #2c3e50;
    cursor: pointer;
    /* border: none; */
    background: none;
    font-size: 1.2em;
    border: 1px solid #42b883;
    margin-left: 0.5em;
    margin-right: 0.5em;
}
.btn-tutorial:hover {
    text-shadow: 0 0 20px #42b883, 0 0 15px #42b883, 0 0 10px #42b883, 0 0 5px #42b883;
}
</style>
