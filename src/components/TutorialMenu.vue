<template>
    <section class="nav-tutorials">
        <ShowCode
            :code={tutorial}
            :index="stepIndex"
            :logs="logs"
            @forceStep="(value) => initIndex = value"
            @resetLogs="resetLogs()"
        />
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
        :options="options"
        :step="initIndex"
        @stop="runTutorial = false"
        @error="onError"
        @changeStep="onChangeStep"
        @start="onChangeStep"
    />
</template>

<script setup>
import ShowCode from './ShowCode.vue';
import VTutorial from 'vue3-tutorial';
import { reactive, ref } from 'vue';
import tutorials from './tutorials.json';

let tutorial = ref({});
let runTutorial = ref(false);
let stepIndex = ref(0);
let initIndex = ref(undefined);
let logs = reactive([]);

const tutorialList = Array.isArray(tutorials) ? tutorials.map((tuto) => tuto.name) : [];

const options = {
    debug: true,
    maskMargin: 5,
    messageLog: null,
};

function startTutorial(name) {
    resetLogs();
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
    if (err.code >= 200) {
        console.log('error prompted:', err);
    }
    logs.push(err);
}

function onChangeStep(index) {
    stepIndex.value = index;
}

function resetLogs() {
    logs.splice(0, Infinity);
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
    border: 1px solid var(--brand-primary-color);
    margin-left: 0.5em;
    margin-right: 0.5em;
}
.btn-tutorial:hover {
    text-shadow: 0 0 20px var(--brand-primary-color), 0 0 15px var(--brand-primary-color), 0 0 10px var(--brand-primary-color), 0 0 5px var(--brand-primary-color);
}
</style>
