# String 字符串

<script setup>
import CodeMaxEidtor from "../../../src/components/CodeMaxEidtor.vue"


const StringDemo = `\
a = "Hello"

print(a[0])\
`


const StringSliceDemo = `\
a = "Hello"

# a[left:right:step]
print(a[0::2])

# 倒叙输出
print(a[::-1])
`

const StringContactDemo = `\
a = "hello" + " world"
print(a)   # 直接使用加号

a = "hello"
`
</script>

---

> 可以通过下标索引获取字符串的某一位字符

<CodeMaxEidtor :code="StringDemo" />


## 分片操作

string[left:right:step]

step表示每次间隔多少个元素


<CodeMaxEidtor :code="StringSliceDemo" />

## 字符串拼接


<CodeMaxEidtor :code="StringContactDemo" />
