<template>
    <div v-if="isPrimitive">
        <span class="propName">
            {{name}}:
        </span>
        <span class="propValue">
            {{stringValue}}
        </span>
    </div>
    <details v-else>
       <summary>{{name}}</summary>
       <p>
            <show-object v-for="prop of innerProps"
                :name="prop"
                :value="value[prop]"
                :key="`prop-${innerId}-${prop}`"
            />
       </p>
    </details>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type ValueObject = Record<string, any>;

export default defineComponent({
    name: 'ShowObject',
    props: {
        name: String,
        value: [Object, Array, String, Number, Boolean, Function],
    },
    data() {
        return {
        };
    },
    computed: {
        innerId(): string {
            const value = Math.random() * Math.pow(2, 32);
            return value.toString();
        },
        isPrimitive(): boolean {
            const type = typeof this.value;

            switch (type) {
                case 'string':
                case 'number':
                case 'boolean':
                case 'function':
                case 'undefined':
                    return true;
                case 'object':
                    if (type === null) {
                        return true;
                    }
                    /* falls through */
                default:
                    return false;
            }
        },
        stringValue(): string {
            return String(this.value);
        },
        innerProps(): (keyof ValueObject)[] {
            const value = this.value;

            if (!value) {
                return [];
            }

            return Array.from(Object.keys(value) as Array<keyof ValueObject>);
        },
    },
});
</script>

<style scoped>
.propName {
    margin-inline-start: 1em;
}

details > p {
    margin-inline-start: 1em;
}

summary {
    cursor: pointer;
}
</style>
