# 从输入Url到看到页面

http: 超文本传输协议，协议 固定格式

输入url -> 看到页面

GET www.baidu.com HTTP/1.1
user-agent: IE/Chrome...

上面的格式放到传输层(TCP, HTTP基于TCP；另一个叫UDP)去

拿到响应

http/1.1 200 ok

content-type: text/html

key: value

## 块级 行内

    块级:
    - 独占一行
    - 能设置宽高
    (BFC): 块级格式上下文

    行内:
    - 水平方向都在一行
    - 垂直方向: 以当前行的 base-line 对齐
    - 非置换元素不能设置宽高
    - 行内元素能设置宽高

    img -> 行内 -> 设置宽高

    置换元素:
    内容不受css限制
```html
<img src=""/> 
<canvas> /*宽高默认300*xxx*/
<input>
<iframe>
<script>
```

    非置换元素:

```html
<div>
    <div></div>
</div>
```

## 词法(静态)作用域: js c c++ | 动态作用域: bash
