# List 列表

<script setup>
import CodeMaxEidtor from "../../../src/components/CodeMaxEidtor.vue"

import PythonCode from "./basic";


const ListDemo = `\
lst = ['hello']
print(lst)

lst.append("world")
print(lst)\
`

const ListComprehensionsDemo = `\
# [expression for iter_val in iterable if cond_expr]
lst = [i for i in range(10)]
print(lst)\
`
</script>

---

<CodeMaxEidtor :code="ListDemo" />

##  List Comprehensions
列表解析 (列表推导)

<CodeMaxEidtor :code="ListComprehensionsDemo" />

> 列表解析可以快速构建列表（list）, 可以看下面的例子
> 把一个字符串变成 Unicode 码位的列表，一般的方式就是for循环遍历

<script>
const lstDemoForLoop = `\
symbols = '$¢£¥€¤'
codes = []
for symbol in symbols:
    codes.append(ord(symbol))
print(codes)\
`

const lstDemoComprehensions = `\
symbols = '$¢£¥€¤'
codes = [ord(symbol) for symbol in symbols]
print(codes)\
`
</script>

<CodeMaxEidtor :code="lstDemoForLoop" />

> 而使用 列表解析更简洁明了，也是更pythonic的写法

<CodeMaxEidtor :code="lstDemoComprehensions" />
