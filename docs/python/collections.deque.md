# collections.deque


<script setup>
import CodeMaxEidtor from "../../src/components/CodeMaxEidtor.vue"

import PythonCode from "../../src/python/code";
</script>


- Rotate 旋转操作
- Append
    - appendleft 在队列左边插入元素
    - append 在队列右边插入元素
- Extend
    - extendleft(iter) 把迭代器里的元素逐个添加到双向队列 的左边
    - extend(iter)
- Pop
    - popleft 从队列左边出队
    - pop 从队列右边出队


## Rotate

>  接受一个参数 n，当 n > 0 时，队列的最右边的 n 个元素会被移动到队列的左边。当 n < 0 时，最左边的 n 个元素会被 移动到右边

<CodeMaxEidtor :code="PythonCode.CollectionsDequeRotateDemo" />

## Append

<CodeMaxEidtor :code="PythonCode.CollectionsDequeAppendDemo" />


## Extend

> 把迭代器里的元素逐个添加到双向队列，因此迭代器里的元素会逆序出现在队列里

<CodeMaxEidtor :code="PythonCode.CollectionsDequeExtendDemo" />


## Pop

<CodeMaxEidtor :code="PythonCode.CollectionsDequePopDemo" />
