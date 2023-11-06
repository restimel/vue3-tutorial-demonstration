<template>
    <button
        title="Clear log history"
        @click="resetLogs()"
    >
        🗑️
    </button>
    <label>
        <input type="checkbox" v-model="keepDebug">
        Debug
    </label>
    <label>
        <input type="checkbox" v-model="keepWarning">
        Warning
    </label>
    <label>
        <input type="checkbox" v-model="keepError">
        Error
    </label>
    <div class="logs">
        <div class="log-code">
            Code
        </div>
        <div class="log-message">
            Message
        </div>
        <div class="log-details">
            Details
        </div>
        <div class="log-details">
            Step index
        </div>
        <Log v-for="(log, index) of displayedLogs"
            :key="`log-${index}`"
            :log="log"
            :even="index%2 === 0"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Log from './Log.vue';
import type { TutorialEmittedError } from 'vue3-tutorial';

export default defineComponent({
    name: 'Logs',
    emits: ['resetLogs'],
    props: {
        logs: Array as PropType<TutorialEmittedError[]>,
    },
    data() {
        return {
            keepDebug: true,
            keepWarning: true,
            keepError: true,
        };
    },
    computed: {
        displayedLogs(): TutorialEmittedError[] {
            return (this.logs ?? []).filter((log) => {
                const code = log.code;

                if (code < 200) {
                    return this.keepDebug;
                }
                if (code < 300) {
                    return this.keepWarning;
                }
                return this.keepError;
            });
        },
    },
    methods: {
        resetLogs() {
            this.$emit('resetLogs');
        },
    },
    components: {
        Log,
    },
});
</script>

<style scoped>
.logs {
    display: grid;
    grid-template-columns: max-content max-content 1fr max-content;
}
.logs > /deep/ div {
    padding-inline-start: 2px;
    padding-inline-end: 2px;
}
</style>
