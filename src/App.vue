<template>
    <div class="main-header">
        <h1>Vue3-tutorial</h1>
        <p>
            This is a customizable component allowing you to propose a
            step by step tutorial on your website or your web application.
        </p>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
    <section class="nav-tutorials">
        <button
            class="btn-tutorial main-tutorial"
            @click="runMainTour"
        >
            Main tour
        </button>
        <button
            class="btn-tutorial detailed-tutorial"
            @click="runDetailTour"
        >
            Detail tour
        </button>
    </section>
    <router-view/>
    <VTutorial
        :tutorial="tutorial"
        :open="runTutorial"
    />
</template>

<script setup>
import VTutorial from 'vue3-tutorial';
import { ref } from 'vue';

let tutorial = ref({});
let runTutorial = ref(false);

function runMainTour() {
    tutorial.value = {
        steps: [{
            target: '',
            content: 'hello in the main tour',
        }, {
            target: '.main-tutorial',
            content: 'You have just clicked this button',
            options: {
                position: 'auto',
            },
        }, {
            target: '.detailed-tutorial',
            content: 'You have just clicked this button',
            options: {
                position: 'bottom',
                texts: {
                    previousButton: 'What???',
                    nextButton: 'hop',
                },
            },
        }, {
            target: '',
            content: 'Thank you',
        }]
    };
    runTutorial.value = true;
}

function runDetailTour() {
    tutorial.value = {
        steps: [{
            target: '.detailed-tutorial',
            title: 'with title',
            content: 'some other content',
            options: {
                position: 'right',
            },
        }],
        options: {
            bindings: {
                next: ['n', 'F1'],
            },
        },
    };
    runTutorial.value = true;
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 15px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    text-shadow: 0 0 20px white, 0 0 15px white, 0 0 10px white, 0 0 5px white;
}
</style>
<style scoped>
.main-header {
    color: white;
    background-color: #42b883;
    height: 150px;
    text-align: center;
    padding: 15px;
}
.main-header p {
    font-size: 0.8em;
    font-style: italic;
    max-width: 12cm;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0;
}
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
