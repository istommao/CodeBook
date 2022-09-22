# Dict 字典

<script setup>
import CodeMaxEidtor from "../../../src/components/CodeMaxEidtor.vue"

import PythonCode from "./basic";


const DictDemo = `\
dst = {"hello": "world"}
print(dst)

dst["hello"] = "CodeMax"

print(dst)\
`
</script>

---

<CodeMaxEidtor :code="DictDemo" />
