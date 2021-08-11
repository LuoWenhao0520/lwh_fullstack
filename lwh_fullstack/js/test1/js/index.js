;(function(doc,tool,compute){
    var oCaculator = doc.getElementsByClassName('J_calculator')[0],
        oResult = oCaculator.getElementsByClassName('result')[0],
        fInput = oCaculator.getElementsByTagName('input')[0],
        sInput = oCaculator.getElementsByTagName('input')[1],
        oBtnGroup = oCaculator.getElementsByClassName('btn-group')[0];

    var init = function() {
        bindEvent();
    }

    function bindEvent () {
        oBtnGroup.addEventListener('click',onBtnClick,false);
    }

    function onBtnClick (ev) {
        var tar = tools.getTarget(ev),
            tagName = tar.tagName.toLowerCase();

        if(tagName == 'button'){
            var method = tar.getAttribute('data-method'),
                fVal = tools.digitalize(fInput.value),
                sVal = tools.digitalize(sInput.value);
                console.log(method);
            renderResult(compute[method](fVal,sVal));
        }
    }

    function renderResult (result) {
        oResult.innerText = result;
    }

    // function compute (method,fVal,sVal) {
    //     switch(method) {
    //         case 'plus':
    //            return fVal + sVal;
    //         case 'minus':
    //             return fVal - sVal;
    //         case 'mul':
    //             return fVal * sVal;
    //         case 'div':
    //             return fVal / sVal;
    //         default:
    //             break;
    //     }
    // }

    init();
})(document,tools,compute);