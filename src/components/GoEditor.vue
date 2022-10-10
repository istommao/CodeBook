<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, provide } from 'vue'

import { RunGoCodeRequest } from "./rungo";

import CodeEditor from "./SimpleCodeEditor.vue"

const props = defineProps({
  code: String
})


const emit = defineEmits(['change', 'delete'])

const CodeData = ref(props.code);

const OutputResult = ref("");


const {proxy} = getCurrentInstance();

const RunGoCodeAction = async (code: string) => {
    const payload = {
        "version": 2,
        "body": CodeData.value,
        "withVet": true
    }
    const resp = await RunGoCodeRequest(payload);
    return resp;
}

provide("RunGoCodeAction", RunGoCodeAction);

const Languages = ref([['go', 'Golang']]);
</script>

<template>
    <div style="width: auto;margin: 0 auto">
        <CodeEditor current_language="go" :autofocus="true" min_height="140px" v-model="CodeData" :language_selector="true" min_width="auto" :languages="Languages" />
        <div v-if="OutputResult" class="OutputBox">
            <pre>{{ OutputResult }}</pre>
        </div>
    </div>
</template>

<style scoped>
.OutputBox {
    margin-top: 24px; 
    padding: 12px 20px 12px 20px; 
    width: auto;
    color: #abb2bf;
    border-radius: 12px;
    background: #282c34;
    font-family: Monaco, monospace;
    line-height: 1.5;
    font-size: 14px;
    overflow: auto;
    max-height: 300px;

}
.OutputBox pre {
    font-family: Monaco, monospace;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5;
    color: #fbfcfa;
}
</style>
