# todo-list

1，组件化编码流程：
（1）拆分静态组件：组件要按照功能点拆分，命名不要与 html 元素冲突。
（2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是多个组件在用：
1）、一个组件在用：放在组件自身即可．
2）．多个组件在用：放在他们共同的父组件上（状态提升）
（3）实现交互：从绑定事件开始

2， props 适用于：
（1）父组件 ==> 子组件通信
（2）子组件 ==> 父组件通信（要求父先给子一个函数）

3．使用 v-model 时要切记：v-model 綁定的值不能是 props 传过来的值，因为 props 是不可以修改的！

4．props 传过来的若是对象类型的值，修改对象中的属性时 Vue 不会报错，但不推荐这样做。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
