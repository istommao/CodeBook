# 方法

方法与函数不同，是与特定类型关联的函数。有点类似 其他语言的类函数

- 静态方法 — 属于某个类型，调用时使用 :: 运算符。
- 实例方法 — 属于某个类型的实例，调用时使用 . 运算符。

```rust
fn main() {
    // 使用静态方法来创建一个String实例
    let s = String::from("Hello world!");
    // 使用实例来调用方法
    println!("{} is {} characters long.", s, s.len());
}

```
