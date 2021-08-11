var courseTab = (function ($,tools) {

    // 节点对象
    var $courseTab = $('.J_courseTab'),
        $listWrapper = $('.J_listWrapper'),
        $tabList = $courseTab.find('.tab-item-list'),
        $courseList = $listWrapper.find('.course-card-list');

    var $tabItemTpl = $('#J_tabItemTpl').html(),
        $cardTpl = $('#J_cardTpl').html();

    // 数据

    // console.log($('#J_courseData').html());
    var courseData = $.parseJSON($('#J_courseData').html()),
        courseFieldData = $.parseJSON($('#J_courseFieldData').html());

    var field = 'all';
    var htmlCache = {};


    var init = function () {
        // console.log(1);
        render();
        bindEvent();
    }
    
    function render() {
        $tabList.html(renderTab(courseFieldData));
        $courseList.html(renderList(courseData));
    }

    function renderTab(data) {
        list = '';
        list += tools.tplReplace($tabItemTpl, {
            StyleClass: 'tab-item-link lk-current',
            field: 'all',
            fieldName: '全部'
        });
        data.forEach(function (item,index) {
            list += tools.tplReplace($tabItemTpl,{
                StyleClass: 'tab-item-link',
                field: item.field,
                fieldName: item.field_name
            })
        });

        return list;
    }

    function renderList(data) {

        if(!htmlCache[field]){
            list = '';
            data.forEach( function (item) {
                list += tools.tplReplace($cardTpl, {
                    id: item.id,
                    priceStyle: item.price == '0' ? 'item-free' : 'item-price',
                    courseName: item.course_name,
                    price: item.price == '0' ? '免费' :  '￥' + item.price,
                    img: item.img
                })
            })
            htmlCache[field] = list;

            // console.log('from renderlist');
        }

        // console.log('from cache');
        return htmlCache[field];
    }

    function bindEvent () {
        $courseTab.on('click','.tab-item-link',onTabClick);
    }

    function onTabClick () {
        var $this = $(this),
            index = $this.parent('.tab-item').index();
            
        field = $this.attr('data-field');

        console.log(index);

        tabChange($this);
        pageChange(field);
    }

    function pageChange (field) {
        const data = _filterData(field);

        $courseList.html(renderList(data));
    }

    function tabChange(target) {
        target.addClass('lk-current')
            .parent('.tab-item')
            .siblings()
            .children('.tab-item-link')
            .removeClass('lk-current');
    }

    function _filterData (field) {
        return courseData.filter(function (item) {
            if(field === 'all')
                return true;

            return item.field === field;
        })
    }

    return {
        init: init
    }

})(jQuery,initTools);