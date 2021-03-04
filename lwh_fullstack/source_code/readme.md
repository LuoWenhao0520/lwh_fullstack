# weui 源码分析，并用stylus实现

- src dist
    src 源码目录
    dist 编译过后
    weui.style 入口文件

- css框架是70%常见业务
    1. reset 样式重置
    2. stylus 变量是替换关系
    ```styl
        $weuiFontEN = -apple-system-font, "Helvetica Neue"
        $weuiFontSans = "PingFang SC", "Hiragino SansGB" "Microsoft Yahei"
        $weuiFontDefault = $weuiFontEN, $weuiFontSans
    ```
    3. stylus mixin 代码的封装及复用
        区别于函数，
        参数付初值的写法
        ```styl
        setTapColor($c=rgba(0,0,0,0))
            -webkit-tap-highlight-color $c
        ```