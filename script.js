const screen = document.querySelector('.calc-screen');
const numbers = document.querySelector('.numbers');
const add = document.querySelector('add');

const calculatorBody = document.querySelector('.calculator-body');

calculatorBody.addEventListener('click', function(e){
    if(e.target.nodeName === 'BUTTON'){
        screen.innerHTML += e.target.textContent;

        if(e.target.textContent === '9') console.log(screen.textContent);
    }

})




// numbers.addEventListener('click', function(e) {


//     // e.preventDefault();
//     let index = Array.prototype.indexOf.call(numbers.children, e.target);
//     index === 10 ? index = 0 : false;

//     screen.textContent += index + 1;

// })

