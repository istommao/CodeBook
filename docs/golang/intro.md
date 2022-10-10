# GO笔记


## 基本语法

第一个程序 Hello world

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}
```


<script setup>
import GoEditor from "../../src/components/GoEditor.vue"

const HelloDemo = `\
package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}\
`

</script>


<!-- <GoEditor :code="HelloDemo" />
 -->