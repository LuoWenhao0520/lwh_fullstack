;(function(doc) {
    var Tab = function() {
        var oTab = doc.getElementsByClassName('J_tab')[0];
        this.oNav = oTab.getElementsByClassName('nav')[0];
        this.oPage = oTab.getElementsByClassName('page')[0];
        this.oNavItems = oTab.getElementsByClassName('nav-item');
        this.oPageItems = oTab.getElementsByClassName('page-item');

        this.currIndex = 0;
    }

    Tab.prototype.init = function () {
        this.bindEvent();
    }

    Tab.prototype.bindEvent = function () {
        this.oNav.addEventListener('click', this.onNavClick.bind(this),false);
    }

    Tab.prototype.onNavClick = function (ev) {
        var e = ev || window.event,
            tar = e.target || e.srcElement,
            className = tar.className;

        if(className === 'nav-item') {
            this.oNavItems[this.currIndex].className = 'nav-item';
            this.oPageItems[this.currIndex].className = 'page-item';
            this.currIndex = [].indexOf.call(this.oNavItems,tar);
            this.oNavItems[this.currIndex].className += ' current';
            this.oPageItems[this.currIndex].className += ' current';
        }
    }

    window.Tab = Tab;

})(document);