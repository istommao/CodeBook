# List 列表

<script setup>
import CodeMaxEidtor from "../../../src/components/CodeMaxEidtor.vue"

import PythonCode from "./basic";


const ListDemo = `\
lst = ['hello']
print(lst)

lst.append("world")
print(lst)
`
</script>

---

<CodeMaxEidtor :code="ListDemo" />
