<template>
    <div class="demonstration">
        <h1>This is a page which includes interactives elements</h1>

        <section class="form">
            <h2>A tool with form</h2>
            <label id="enable-tool">
                <input
                    type="checkBox"
                    name="enabled"
                    :checked="toolEnabled"
                    @change="(evt) => toolEnabled = evt.currentTarget.checked"
                />
                Enabled the tool
            </label>
            <label id="name">
                Text value:
                <input
                    type="text"
                    name="text"
                    v-model="textValue"
                    :disabled="!toolEnabled"
                />
            </label>
            <label id="operation">
                Operation:
                <select
                    name="operation"
                    v-model="operation"
                    :disabled="!toolEnabled"
                >
                    <option value="lower">to lower case</option>
                    <option value="upper">to upper case</option>
                    <option value="sum">sum all letter</option>
                    <option value="caesar">Caesar cipher</option>
                </select>
            </label>
            <fieldset>
                <legend>Result</legend>
                {{result}}
            </fieldset>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            toolEnabled: false,
            textValue: '',
            operation: 'lower',
        };
    },

    computed: {
        result(): string {
            if (!this.toolEnabled) {
                return '';
            }
            const value = this.textValue;
            switch (this.operation) {
                case 'lower':
                    return value.toLocaleLowerCase();
                case 'upper':
                    return value.toLocaleUpperCase();
                case 'sum':
                    return Array.from(value.toLowerCase())
                        .reduce((sum, char) => sum + char.charCodeAt(0) - 97, 0)
                        .toString();
                case 'caesar':
                    return Array.from(value)
                        .map((char) => {
                            if (!/[a-z]/i.test(char)) {
                                return char;
                            }
                            const code = char.charCodeAt(0);
                            let finalCode: number;

                            if (code > 117 || (code <= 90 && code > 85)) {
                                finalCode = code - 21;
                            } else {
                                finalCode = code + 5;
                            }
                            return String.fromCharCode(finalCode);
                        })
                        .join('');
                default:
                    return '---- unknown operation ---';
            }
        },
    },
});

</script>

<style scoped>
label {
    display: block;
}
.center {
    grid-area: info;
}
.row-label {
    display: block;
    text-align: left;
}
.output {
    margin-left: 2em;
    font-style: italic;
}
</style>
