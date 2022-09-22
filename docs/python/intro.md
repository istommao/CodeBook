# Python笔记


## 内建类型

- Int
- String
- Set
- List
- Tuple
- Dict

## Function

- 闭包
- 装饰器

## Class

- 继承
- 多态


<script setup>
import { onMounted, getCurrentInstance } from 'vue'

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
