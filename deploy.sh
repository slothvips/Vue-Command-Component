#!/bin/bash

# 运行构建命令
npm run build-example-page

# 进入 dist 目录
cd dist-example-page

# 初始化 git 仓库
git init

# 添加所有文件到暂存区
git add -A

# 提交更改
git commit -m "部署更新 $(date)"

# 添加远程仓库
git remote add origin git@github.com:pandavips/Vue3-Command-Dialog.git

# 强制推送到 gh-pages 分支
git push -f origin master:gh-pages

# 返回上一级目录
cd ..

echo "部署完成!"
