# Install

## 使用Pyenv 安装

https://github.com/pyenv/pyenv

```bash
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
 
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
```

`pyenv-virtualenv`

```bash
git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv

echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc
```

## Pyenv 安装 python

```bash
pyenv install {version}

pyenv virtualenv {version} envname
```

`国内下载慢的问题可以选择使用 以下方法`

```bash
v={version}; wget https://npm.taobao.org/mirrors/python/$v/Python-$v.tar.xz -P ~/.pyenv/cache/; pyenv install $v
```
