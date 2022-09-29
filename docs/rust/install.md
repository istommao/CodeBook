# 安装 Rust


```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## 在线Playground

https://play.rust-lang.org/

## 在 Mac 上进行交叉编译

```bash
brew install FiloSottile/musl-cross/musl-cross
ln -s /usr/local/bin/x86_64-linux-musl-gcc /usr/local/bin/musl-gcc

# rustup 添加 musl工具链
rustup target add x86_64-unknown-linux-musl

# build
cargo build --release --target=x86_64-unknown-linux-musl
```