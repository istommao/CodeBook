# 函数

```rust
fn add(x: i32, y: i32) -> i32 {
    return x + y;
}

fn main() {
    println!("{}", add(42, 13));
}
```

**多返回值**

```rust
fn swap(x: i32, y: i32) -> (i32, i32) {
    return (y, x);
}

fn main() {
    // 返回一个元组
    let result = swap(123, 321);
    println!("{} {}", result.0, result.1);

    // 将元组解构为两个变量
    let (a, b) = swap(result.0, result.1);
    println!("{} {}", a, b);
}

```


**返回空值**

```rust
fn make_nothing() -> () {
    return ();
}

// 返回类型隐含为 ()
fn make_nothing2() {
    // 如果没有指定返回值，这个函数将会返回 ()
}

fn main() {
    let a = make_nothing();
    let b = make_nothing2();

    // 打印a和b的debug字符串，因为很难去打印空
    println!("The value of a: {:?}", a);
    println!("The value of b: {:?}", b);
}
```
