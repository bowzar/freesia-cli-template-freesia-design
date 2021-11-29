
# 目录简介

## components

用于放置 React 组件的目录

### common

项目内部公共的组件库

### framework

与业务不相关或弱相关的组件库，能够在必要的条件下可以直接发布到npm仓库被其他项目所引用，该目录中尽可能的不依赖项目内部的其他组件或函数

### main

业务入口组件

### pages

页面组件

## css

样式目录

## utils

工具函数库

# 其他说明

* 在系统规模不大的情况下不建议使用 redux，需要全局状态的场景下可直接使用App.js里面的 GlobalContext.Provider 提供的全局状态管理，当 GlobalContext 需要管理的全局状态十分复杂的时候，再考虑使用redux来进行代码层面的优化（GlobalContext 在理解和使用上比 redux 简单太多，使用示例可参考 components/main/header/index.js 中的 useContext 部分）

* 需要在系统多个地方用到的常量建议统一放置到 utils/constant.js 中，如 route 的 path

* 依赖了比较重量级的第三方库的组件建议进行分包，以防打包过后第一次进入应用耗时过长，分包方式参考 utils/loadable.js 的注释部分

* 涉及到主题颜色的应用统一去 public/color.less 中获取以及定义，主题色相关类不够用可自行在末尾添加

* 单个组件代码建议不超过300行，超过之后应思考组件分解（如将一个按钮具体的点击逻辑单独形成一个子组件）
