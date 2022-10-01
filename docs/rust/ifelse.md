# If else


```rust
fn main() {
    let x = 75;
    if x < 75 {
        println!("weight less than 75 kg");
    } else if x == 75 {
        println!("weight is 75 kg");
    } else {
        println!("weight greater than 75 kg");
    }
}
```


```rust
fn example() -> i32 {
    let x = 42;
    // Rust的三元表达式
    let v = if x < 42 { -1 } else { 1 };
    println!("from if: {}", v);

    let food = "hamburger";
    let result = match food {
        "hotdog" => "is hotdog",
        // 注意，当它只是一个返回表达式时，大括号是可选的
        _ => "is not hotdog",
    };
    println!("identifying food: {}", result);

    let v = {
        // 这个作用域块让我们得到一个不影响函数作用域的结果
        let a = 1;
        let b = 2;
        a + b
    };
    println!("from block: {}", v);

    // 在最后从函数中返回值的惯用方法
    v + 4
}

fn main() {
    println!("from function: {}", example());
}
```
