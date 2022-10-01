# For while loop

> Rust的循环有while和loop 以及 for 三种形式

## Loop 循环

```rust
fn main() {
    let mut x = 0;
    loop {
        x += 1;
        if x == 75 {
            break;
        }
    }
    println!("{}", x);
}
```


**loop 可以被中断以返回一个值。**

从循环中返回值

```rust
fn main() {
    let mut x = 0;
    let v = loop {
        x += 1;
        if x == 30 {
            break "found the 30";
        }
    };
    println!("from loop: {}", v);
}
```



## While 循环

```rust
fn main() {
    let mut x = 0;
    while x != 75 {
        x += 1;
    }

    println!("{}", x)
}
```

## For 循环

> for循环可以更方便的实现便利元素

```rust
fn main() {
    for x in 0..5 {
        println!("{}", x);
    }

    for x in 0..=5 {
        println!("{}", x);
    }
}
```
