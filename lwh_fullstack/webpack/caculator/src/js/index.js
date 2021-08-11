import Calculator from '../modules/Calculator';

;((doc) => {
    const oCalculater = doc.getElementsByClassName('J_calculator')[0];

    const init = () => {
        new Calculator(oCalculater).init();
    }

    init();
})(document)