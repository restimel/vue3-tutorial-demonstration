<template>
    <div class="log-code" :class="colorLog">
        {{log.code}}
    </div>
    <div class="log-message" :class="colorLog">
        {{log.message}}
    </div>
    <div class="log-details" :class="colorLog">
        <ShowObject v-if="log.details"
            name="Details"
            :value="log.details"
        />
    </div>
    <div class="log-details" :class="colorLog">
        {{log.stepIndex}}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ShowObject from './ShowObject.vue';
import { errorStatus, TutorialEmittedError } from 'vue3-tutorial';

export default defineComponent({
    name: 'Log',
    props: {
        log: Object as PropType<TutorialEmittedError>,
        even: Boolean,
    },
    data() {
        return {
        };
    },
    computed: {
        colorLog(): string {
            const code = this.log?.code;

            if (code === undefined) {
                return '';
            }

            const state = errorStatus(code);
            const rowEven = this.even ? 'even' : 'odd';

            return `${state} ${rowEven}`;
        },
    },
    components: {
        ShowObject,
    },
});
</script>

<style scoped>
.log.even {
    background-color: #EEDDFF;
}
.log.odd {
    background-color: #EECCFF;
}
.info.even {
    background-color: #DDEEFF;
}
.info.odd {
    background-color: #CCEEFF;
}
.warning.even {
    background-color: #FFEECC;
}
.warning.odd {
    background-color: #FFEEAA;
}
.error.even {
    background-color: #FFCCCC;
}
.error.odd {
    background-color: #FFBBBB;
}
</style>
