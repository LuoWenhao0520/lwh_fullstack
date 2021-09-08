# css

## css 盒模型

标准盒模型宽度: width
IE盒模型宽度: width + padding + border + margin

## 画一个0.5px的线

transform: scale(0.5);

## link 和 @import的区别

link标签是html标签，@import是css提供的
link会在页面加载的时候加载，@import引入的css会在页面加载完成后再加载
link没有兼容性，@import必须在IE5以上
link的权重高于@import

## transition 和 animation的区别

transition需要触发一个时间，animation不需要

transition需要两帧两帧的运行，animation是一帧一帧的来

## flex布局

传统布局： 依赖display + postion + float，这种在特殊布局非常不方便，比如垂直居中

flex-direction: row | column 决定主轴的方向

flex-wrap: nowrap | wrap 决定换行规则

## BFC

块级格式化上下文，是一个独立的渲染区域，有一定的布局规则

BFC区域不会与float box重叠

BFC是页面上的一个独立容器，子元素不会影响外面

计算BFC区域的高度时，浮动元素的高度也会参与计算

### 怎么生成BFC

float不为none

position为felx和absoult

display为inline-block, flex, table-cell

overflow不为visible

## 垂直居中

position

flex

margin负值(知道父容器的宽高)

table-cell(父) vertical-align: center(子)

## js动画和css动画的差异

渲染线程分为 main thread 和 compositor thread

如果css动画只改变transform和opacity，这时css动画得以在compositor thread完成
而js动画一定会在main thread执行
区别:
  js比css大
  css比js更简单，性能更好
  对帧表现不好的低版本浏览器 css3可以做到自然降级
  css动画有天然的时间支持
  css3有兼容性问题

## 块级元素和行内元素

块级：独占一行，自动填满父元素，可以设置margin,padding,width,height
行内：不能独占一行，width,height会实现，并且垂直方向的margin和padding会失效
