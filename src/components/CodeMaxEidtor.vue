<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, provide } from 'vue'

import { RunCodeRequest } from "./runcode";

import CodeEditor from "./SimpleCodeEditor.vue"

const props = defineProps({
  code: String
})


const emit = defineEmits(['change', 'delete'])

const CodeData = ref(props.code);

const OutputResult = ref("");


// const RunPythonCode = async(payload: any) => {
//    // @ts-ignore
//    let Pyodide = await loadPyodide();

//    return Pyodide.runPythonAsync("1+1");
// }

const {proxy} = getCurrentInstance();

const RunCodeAction = async (code: string) => {
    // const payload = {
    //     "language": "python3",
    //     "code": CodeData.value,
    //     "timestamp": Date.now()
    // }
    const resp = await proxy.$RunPythonCode(code);
    return resp;
}

provide("RunCodeAction", RunCodeAction);

const Languages = ref([['python', 'Python']]);
// const Languages = ref([['python', 'Python'], ['rust', "Rust"], ['go', "Go"], ['javascript', 'JS']]);

</script>

<template>
    <div style="width: auto;margin: 0 auto">
        <CodeEditor current_language="python" :autofocus="true" min_height="140px" v-model="CodeData" :language_selector="true" min_width="auto" :languages="Languages" />
<!--         <div style="cursor:  pointer;margin: 14px 0;width: 60px;border: 1px solid #292D3F;border-radius: 4px;background: #292D3F;text-align: center;">
            <button @click="RunCodeAction" style="color: #fff">Run</button>
        </div> -->
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
