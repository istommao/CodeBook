# Python基础类型

---

- Int
- String
- Set
- List
- Tuple
- Dict

<script setup>
import CodeMaxEidtor from "../../src/components/CodeMaxEidtor.vue"

import PythonCode from "../../src/python/code";


import { ref, onMounted, getCurrentInstance, provide } from 'vue'

const {proxy} = getCurrentInstance();

onMounted(async() => {

    var interval;
    interval = setInterval(async function() { 
        if (!proxy.$GetPyodideObj() && window.loadPyodide) {
            clearInterval(interval);
            await proxy.$InitPyodideJS();
        }
        clearInterval(interval);
    },  100);

})
</script>

### Int

<CodeMaxEidtor :code="PythonCode.IntDemo" />

### String

<CodeMaxEidtor :code="PythonCode.StringDemo" />
