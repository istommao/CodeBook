# Rust笔记


> 代码来源 https://tourofrust.com/00_zh-cn.html

## 基本语法

第一个程序 Hello world

```rust
fn main() {
    println!("Hello 🦀 world!")
}
```


## 变量赋值

```rust
fn main() {
    let a = "Go";
    println!("{}", a);

    let pi: f64 = 3.14159;
    println!("{}", pi);

    let value;
    value = 0;
    println!("{}", value);
}
```

## 可变变量

rust变量默认不可变，想要改变需要使用 `mut` 关键字

```rust
fn main() {
    let mut lucky = 12;
    println!("{}", lucky);
    lucky = 19;
    println!("{}", lucky);
}
```

## 基础数据类型

```rust
fn main() {
    let i32num = 12; // default is i32
    let u8num = 12u8;
    let f64num = 4.3; // default is f64
    let f32num = 4.3f32;
    let boolv = true;
    let tuple = (13, false);
    let string = "hello world!";
    println!(
        "{} \n{} \n{} \n{} \n{} \n{} \n{} \n{}",
        i32num, u8num, f64num, f32num, boolv, tuple.0, tuple.1, string
    );
}
```


## 基本类型转换

```rust
fn main() {
    let u8num = 13u8;
    let u32num = 7u32;
    let result = u8num as u32 + u32num;
    println!("{}", result);

    let boolv = true;
    println!("{}", boolv as u8);
}
```


## 常量

全大写字母的蛇形命名法

```rust
const PI: f32 = 3.14159;

fn main() {
    println!("PI is {}.", PI);
}
```
