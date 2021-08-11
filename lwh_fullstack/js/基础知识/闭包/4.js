function test() {
    var food = 'apple';

    function a() {
        console.log(food);
        food = 'banana';
    }

    function b() {
        console.log(food);
    }

    return [a,b]
}

function fruit() {
    var food = 'apple';

    var obj = {
        eatFood: function() {
            if(food != '') {
                console.log(food);
                food = '';
            }else{
                console.log('notiong');
            }
        },
        pushFood: function(myFood) {
            food = myFood;
        }
    }

    return obj;
}

var person = fruit();

person.eatFood();
person.eatFood();

