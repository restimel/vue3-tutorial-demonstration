<template>
    <aside class="show-code">
        <button
            class="show-code__button"
            title="buttonTitle"
            @click="open = !open"
        >
            {{open ? '✖️' : '👁️'}}
        </button>
        <Teleport to="body">
            <aside v-if="open" class="code" :style="codePosition">
                <header
                    class="code__header"
                    @mousedown="startFollow"
                >
                    Show JSON
                    <span
                        class="close-button"
                        @click="open = false"
                    >
                        ✖️
                    </span>
                </header>
                <section>
                    <details>
                        <summary>Tutorial</summary>
                        <pre>{{formatedCode}}</pre>
                    </details>
                    <details open>
                        <summary>Step [{{index}}]</summary>
                        <pre>{{formatedStepCode}}</pre>
                    </details>
                </section>
                <span
                    class="resize"
                    @mousedown="startResize"
                >
                    📐
                </span>
            </aside>
        </Teleport>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'showCode',
    props: {
        code: Object,
        index: Number,
    },
    data() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const cwidth = Math.round(width * 0.4);

        return {
            open: false,
            top: 210,
            left: width - cwidth - 10,
            width: cwidth,
            height: Math.round(height * 0.3),

            offset: {x: 0, y: 0},
        };
    },
    computed: {
        stepCode() {
            return this.code?.tutorial?.steps?.[this.index ?? 0] ?? {};
        },
        formatedCode() {
            return JSON.stringify(this.code, undefined, '  ').trim();
        },
        formatedStepCode() {
            return JSON.stringify(this.stepCode, undefined, '  ').trim();
        },
        buttonTitle() {
            if (this.open) {
                return 'Close the JSON window';
            }
            return 'Show JSON related to the selected tutorial';
        },
        codePosition() {
            const position = [
                `--top: ${this.top}px;`,
                `--left: ${this.left}px;`,
                `--width: ${this.width}px;`,
                `--height: ${this.height}px;`,
            ];

            return position.join('');
        },
    },
    methods: {
        followCursor(evt: MouseEvent) {
            const offset = this.offset;
            if (!offset) {
                return;
            }
            const { clientX, clientY } = evt;
            this.top = clientY - offset.y;
            this.left = clientX - offset.x;
        },
        startFollow(evt: MouseEvent) {
            this.offset = {
                x: evt.offsetX,
                y: evt.offsetY,
            };
            const followCursor = this.followCursor.bind(this);

            window.addEventListener('mousemove', followCursor);
            window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', followCursor);
                document.body.classList.remove('moving');
            }, {
                once: true,
            });
            document.body.classList.add('moving');
        },
        resizeCursor(evt: MouseEvent) {
            const offset = this.offset;
            if (!offset) {
                return;
            }
            const { clientX, clientY } = evt;
            this.width = clientX + offset.x - this.left;
            this.height = clientY + offset.y - this.top;
        },
        startResize(evt: MouseEvent) {
            const { width, height } = (evt.currentTarget as HTMLElement).getBoundingClientRect();
            this.offset = {
                x: width - evt.offsetX,
                y: height - evt.offsetY,
            };
            const resizeCursor = this.resizeCursor.bind(this);

            window.addEventListener('mousemove', resizeCursor);
            window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', resizeCursor);
                document.body.classList.remove('moving');
            }, {
                once: true,
            });
            document.body.classList.add('moving');
        },
    },
});
</script>

<style>
.moving {
    user-select: none;
}
</style>
<style scoped>
.show-code {
    float: right;
}
.code {
    position: fixed;
    z-index: calc(var(--vue3-tutorial-zindex) + 1000);
    left: var(--left);
    top: var(--top);
    height: var(--height);
    width: var(--width);
    min-height: 2em;
    min-width: 110px;

    background: rgba(255, 255, 255, 0.8);
    box-shadow: 2px 5px 10px 0 black;

    text-align: left;
    --header-height: 25px;
}
.code__header {
    text-align: center;
    cursor: move;
    background: var(--brand-primary-color);
    padding: 5px;
    height: calc(var(--header-height) - 10px); /* padding */
}
.code > section {
    height: calc(var(--height) - var(--header-height));
    overflow-y: auto;
}

.code summary,
.close-button,
.show-code__button {
    cursor: pointer;
}

.close-button {
    float: right;
}

.code pre {
    text-wrap: balance;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
}

.code__header {
    text-align: center;
    cursor: move;
    background: var(--brand-primary-color);
    padding: 5px;
}

.resize {
    cursor: nwse-resize;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(-90deg);
}
</style>
