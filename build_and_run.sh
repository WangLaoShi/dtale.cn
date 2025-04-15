#!/bin/bash

echo "开始构建和运行 D-Tale.cn..."

# 确保在虚拟环境中
if [ -d "venv" ]; then
    source venv/bin/activate
else
    echo "创建虚拟环境..."
    python -m venv venv
    source venv/bin/activate
fi

# 安装依赖
echo "安装依赖..."
pip install -r requirements.txt
pip install -r requirements-dev.txt
pip install -r requirements-test.txt

# 清理旧的构建文件
echo "清理旧的构建文件..."
rm -rf build dist *.egg-info

# 构建前端
echo "构建前端..."
cd frontend
yarn install
yarn build
cd ..

# 安装开发模式
echo "安装开发模式..."
pip install -e .

# 运行应用
echo "启动 D-Tale..."
python run_dtale.py 