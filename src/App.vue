<template>
    <div class="main-header">
        <h1>Vue3-tutorial</h1>
        <p>
            This is a customizable component allowing you to propose a
            step by step tutorial on your website or your web application.
        </p>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/demonstration">Demonstration page</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
    <TutorialMenu />
    <router-view/>
</template>

<script setup>
import TutorialMenu from './components/TutorialMenu';
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
:root {
    --brand-primary-color: #42b883;
    --brand-primary-text: white;
}
body {
    --vue3-tutorial-brand-primary: var(--brand-primary-color);
    --vue3-tutorial-step-text-color: var(--brand-primary-text);
}
</style>
<style scoped>
.main-header {
    color: var(--brand-primary-text);
    background-color: var(--brand-primary-color);
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
    border: 1px solid var(--brand-primary-color);
    margin-left: 0.5em;
    margin-right: 0.5em;
}
.btn-tutorial:hover {
    text-shadow: 0 0 20px var(--brand-primary-color), 0 0 15px var(--brand-primary-color), 0 0 10px var(--brand-primary-color), 0 0 5px var(--brand-primary-color);
}
</style>
