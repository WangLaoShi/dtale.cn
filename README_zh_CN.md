# D-Tale

[![](https://raw.githubusercontent.com/aschonfeld/dtale-media/master/images/Title.png)](https://github.com/man-group/dtale)

## 目录
- [简介](#简介)
- [快速开始](#快速开始)
- [安装](#安装)
- [使用指南](#使用指南)
- [功能特性](#功能特性)
- [开发者指南](#开发者指南)
- [常见问题](#常见问题)
- [许可证](#许可证)

## 简介

D-Tale 是一个强大的数据分析工具，它将 Flask 后端和 React 前端完美结合，为您提供了一种简单直观的方式来查看和分析 Pandas 数据结构。它能够无缝集成到 ipython notebooks 和 python/ipython 终端中。目前支持 Pandas 的 DataFrame、Series、MultiIndex、DatetimeIndex 和 RangeIndex 等对象。

### 项目起源

D-Tale 起源于 SAS 到 Python 的转换项目。最初是一个基于 SAS `insight` 函数的 Perl 脚本包装器，现在已发展成为一个基于 Pandas 数据结构的轻量级 Web 客户端。

### 媒体报道

- [4个可以用一行Python代码执行EDA的库](https://towardsdatascience.com/4-libraries-that-can-perform-eda-in-one-line-of-python-code-b13938a06ae)
- [React Status](https://react.statuscode.com/issues/204)
- [KDNuggets](https://www.kdnuggets.com/2020/08/bring-pandas-dataframes-life-d-tale.html)
- [更多媒体报道...](#in-the-news)

## 快速开始

### 在线演示
* [实时演示](http://alphatechadmin.pythonanywhere.com)
* [美国 COVID-19 死亡数据动画](http://alphatechadmin.pythonanywhere.com/dtale/charts/3?chart_type=maps&query=date+%3E+%2720200301%27&agg=raw&map_type=choropleth&loc_mode=USA-states&loc=state_code&map_val=deaths&colorscale=Reds&cpg=false&animate_by=date)
* [3D 散点图](http://alphatechadmin.pythonanywhere.com/dtale/charts/4?chart_type=3d_scatter&query=&x=date&z=Col0&agg=raw&cpg=false&y=%5B%22security_id%22%5D)
* [曲面图](http://alphatechadmin.pythonanywhere.com/dtale/charts/4?chart_type=surface&query=&x=date&z=Col0&agg=raw&cpg=false&y=%5B%22security_id%22%5D)
* [网络分析](http://alphatechadmin.pythonanywhere.com/dtale/network/5?to=to&from=from&group=route_id&weight=)

## 安装

### 通过 conda 安装
```sh
conda install dtale -c conda-forge
# 如果需要使用图表的"导出为PNG"功能
conda install -c plotly python-kaleido
```

### 通过 pip 安装
```sh
pip install dtale
```

## 使用指南

### Python 终端使用
```python
import dtale
import pandas as pd

df = pd.DataFrame([dict(a=1,b=2,c=3)])
d = dtale.show(df)
```

### Jupyter Notebook 使用
```python
import dtale
import pandas as pd

df = pd.DataFrame([1,2,3,4,5])
dtale.show(df)
```

### 脚本方式运行
```python
import dtale
import pandas as pd

if __name__ == '__main__':
    dtale.show(pd.DataFrame([1,2,3,4,5]), subprocess=False)
```

## 功能特性

### 主要功能
- 数据查看和编辑
- 数据分析和统计
- 图表可视化
- 数据导出
- 自定义过滤
- 多语言支持

### UI 功能
- 维度/功能区菜单/主菜单
- 表头操作
- 列宽调整
- 单元格编辑
- 剪贴板复制
- 快捷键支持

## 开发者指南

### 环境设置
1. 克隆仓库
2. 安装依赖
3. 运行测试
4. 代码格式化

### 添加新功能
- 遵循代码规范
- 添加测试用例
- 更新文档

## 常见问题

### Windows 防火墙问题
如果在 Windows 上遇到浏览器查看 D-Tale 的问题，请尝试在防火墙配置中将 Python 设置为"允许的应用"。详细说明请参考：[如何允许应用通过 Windows 防火墙通信](https://www.howtogeek.com/howto/uncategorized/how-to-create-exceptions-in-windows-vista-firewall/)

## 许可证

[许可证信息]

---

1. 项目概述：
这是一个名为 dtale.cn 的数据分析工具，主要提供以下功能：

2. 主要功能模块：
- 数据导入导出
  - 支持多种格式：CSV、TSV、Parquet、HTML等
  - 支持 ArcticDB 数据库操作
  
- 数据分析功能
  - 描述性统计
  - 相关性分析
  - 时间序列分析
  - 网络分析
  - 异常值检测
  - 缺失值处理
  
- 数据可视化
  - 直方图
  - 散点图
  - 热力图
  - 树状图
  - 网络图
  
- 数据转换和清洗
  - 数据重塑（透视表、转置等）
  - 数据清理
  - 字符串处理
  - 时间序列处理

3. 用户界面特点：
- 支持中英文双语界面
- 提供网格视图展示数据
- 支持数据筛选和排序
- 支持列操作（显示/隐藏）
- 支持数据导出和复制

4. 技术特点：
- 前端使用 React 框架
- 支持多种数据格式和处理库
- 提供丰富的统计分析功能
- 支持大数据集处理

5. 特色功能：
- 支持多种时间序列分析方法
- 提供网络分析功能
- 支持数据质量分析
- 提供代码导出功能
- 支持自定义聚合操作

这个项目看起来是一个功能完整的数据分析平台，适合用于数据探索、分析和可视化。它提供了从数据导入、处理、分析到可视化的完整工作流程，并且支持中英文界面，使其更适合中文用户使用。
