# 字节

## css属性优先级

!important > id > class > tag

## 三栏布局

```css
*{
  margin: 0;
  padding: 0;
}
.container{
  position: relative;
  width: 100%;
  height: 300px;
}
.left{
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: cadetblue;
}

.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background-color: cyan;
}

.main {
  margin: 0 200px;
  width: calc(100% - 400px);
  height: 100%;
  background-color: darkgray;
}
```

```css
*{
  margin: 0;
  padding: 0;
}

.container{
  display: flex;
  height: 300px;
}
.left{
  display: block;
  flex: left;
  width: 200px;
  height: 300px;
  background-color: cyan;
}
.right{
  display: block;
  flex: right;
  width: 200px;
  height: 300px;
  background-color: cyan;
}
.main {
  flex: 1;
  background-color: darkgray;
  height: 300px;
}
```

## postion常用的值

absoult relative

## 粘性定位有什么特点，绝对定位是相对什么边界进行定位

绝对定位是相对父元素中第一个pos不为默认值的元素进行定位

绝对定位是相对于该元素的一个包含块来定位

绝对定位的包含块:
最近的pos属性不为static的祖先元素
transform不为none

## 隐藏一个元素有哪些方法

display: none
opacty: 0
visibility: hidden

display: 会引起回流和重构，隐藏后元素位置空出来
其他:隐藏后元素位置还在
