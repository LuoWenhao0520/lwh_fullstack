# REACT

## 生命周期

  componentWillMount: 在组件渲染之前执行
  componentDidMount: 在组件渲染之后执行
  shouldComponentUpdata: 返回true和false，true:允许改变， false:不允许改变
  componentWilldUpdate: 在数据改变前执行 (state,props)
  componentDidUpdate: 在数据改变后执行 (state,props)
  componentWillReveiceProps: props发生改变执行
  componentWillUnMounted: 组件卸载前执行

## setState同步|异步

1. setState会引起视图的重绘
2. 在可控的情况下异步，在非可控的情况下是同步
