var courseTab = (function($,tools) {
    var $courseTab = $('.J_courseTab'),
        $listWrapper = $('.J_listWrapper'),
        $tabList = $courseTab.find('.tab-item-list'),
        $courseList = $listWrapper.find('.course-card-list');

    var courseFieldData = $.parseJSON($('#J_courseFieldData').html()),
        courseData = $.parseJSON($('#J_courseData').html());

    var tapItemTpl = $('#J_tabItemTpl').html(),
        cardTpl = $('#J_cardTpl').html();


    var field = 'all';
    var htmlCache = {};


    function init() {
        render();
        bindEvnent();
    }

    function render() {
        console.log(courseFieldData);
        $tabList.html(renderTab(courseFieldData));
        $courseList.html(renderPage(courseData));
    }

    function renderTab(data) {
        list = '';
        list += tools.tplReplace(tapItemTpl,{
            StyleClass: 'tab-item-link lk-current',
            field: 'all',
            fieldName: '全部'
        });
        data.forEach(function(item,index) {
            list += tools.tplReplace(tapItemTpl,{
                StyleClass: 'tab-item-link',
                field: item.field,
                fieldName: item.field_name
            })
        });
        return list;
    }

    function renderPage(data) {

        if(!htmlCache[field]){

            list = '';
            data.forEach(function (item,index) {
                list += tools.tplReplace(cardTpl,{
                    id: item.id,
                    courseName: item.course_name,
                    img: item.img,
                    price: item.price
                });
            });

            htmlCache[field] = list;
        }

        return htmlCache[field];
    }

    function bindEvnent() {
        $courseTab.on('click','.tab-item-link',onTabClick);
    }

    function onTabClick() {
        var $this = $(this),
            index = $this.parent('.tab-item').index();

        field = $this.attr('data-field');
        console.log($this);
        tabChange($this);
        pageChange(field);
    }

    function pageChange(field){
        var data = __filterData(field);

        $courseList.html(renderPage(data));
    }

    function tabChange(target) {
        target.addClass('lk-current')
              .parent('.tab-item')
              .siblings()
              .children('.tab-item-link')
              .removeClass('lk-current');
    }

    function __filterData(field){
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