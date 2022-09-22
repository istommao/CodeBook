# Set 集合

<script setup>
import CodeMaxEidtor from "../../../src/components/CodeMaxEidtor.vue"

import PythonCode from "./basic";


const SetDemo = `\
data = {1, 2, 3}
print(type(data))
print(data)

data.add(4)
print(data)\
`
</script>

---

<CodeMaxEidtor :code="SetDemo" />
