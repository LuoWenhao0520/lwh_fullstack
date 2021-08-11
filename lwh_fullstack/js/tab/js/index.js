;(function (doc,tools) {
    var Tab = function (options) {
        this.oTab = doc.querySelector(options.el);

        this.oNav = doc.createElement('div');
        this.oPage = doc.createElement('div');
        this.oNav.className = 'nav';
        this.oPage.className = 'page';

        this.navItemTpl = doc.getElementById('J_navItemTpl').innerHTML;
        this.pageItemTpl = doc.getElementById('J_pageItemTpl').innerHTML;;

        this.cityData = JSON.parse(doc.getElementById('J_cityData').innerHTML);

        this.curIndex = 0;
    }

    

    Tab.prototype.init = function () {
        this.render();
        this.binEvent();
    }


    Tab.prototype.render = function () {

        // this.oNav.innerHTML = this.renderNav(this.cityData);
        // this.oPage.innerHTML = this.renderPage(this.cityData);
        var oFrag = doc.createDocumentFragment(),
            lists = this.renderList(this.cityData);
        this.oNav.innerHTML = lists.nav;
        this.oPage.innerHTML = lists.page;
        oFrag.appendChild(this.oNav);
        oFrag.appendChild(this.oPage);

        this.oTab.appendChild(oFrag);
    }

    Tab.prototype.renderList = function (data) {
        var navList = '',
            pageList = '';

        data.forEach(function (item,index) {
            navList += tools.tplReplace(this.navItemTpl, {
                navStyleClass: !index ? 'item current' : 'item',
                navItemTitle: item.city_name
            });

            pageList += tools.tplReplace(this.pageItemTpl, {
                pageStyleClass: !index ? 'item current' : 'item',
                cityName: item.city_name,
                intro: item.intro,
                img: item.img
            });
        },this);

        return {
            nav: navList,
            page: pageList
        }
    }


    Tab.prototype.binEvent = function () {
        this.oNavItems = this.oNav.getElementsByClassName('item');
        this.oPageItems = this.oPage.getElementsByClassName('item');
        this.oNav.addEventListener('click',this.onNavClick.bind(this), false);
    }

    Tab.prototype.onNavClick = function (ev) {
        var tar = initToolsModule.getTarget(ev),
            className = tar.className;
        console.log(className);
        if (className === 'item'){
            this.setCurrent(this.curIndex,'remove');
            this.curIndex = [].indexOf.call(this.oNavItems,tar);
            this.setCurrent(this.curIndex,'add');
        }
    }

    Tab.prototype.setCurrent = function (index,field) {
        switch(field) {
            case 'add':
                this.oNavItems[index].className = 'item current';
                this.oPageItems[index].className = 'item current';
                break;
            case 'remove':
                this.oNavItems[index].className = 'item';
                this.oPageItems[index].className = 'item';
                break;
            default:
                break;

        }
    }

    window.Tab = Tab;
    // window.Tab.init();
})(document,initToolsModule);