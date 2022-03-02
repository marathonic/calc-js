const screen = document.querySelector('.calc-screen');
const numbers = document.querySelector('.numbers');
const noClick = document.querySelector('.no-click');

const calculatorBody = document.querySelector('.calculator-body');

calculatorBody.addEventListener('click', function(e){

    let x = 0;
    let y = 0;
    let total = 0;
    let operator = '';
    let arrX = [];
    let arrY = [];
    let xLoaded = 0;
    let yLoaded = 0;

        // xLoaded will always have a value of 1 after the first time we press any one of all the operators,
        // Because x will always contain the carryover total amount after that,
        // After each ooperation, we'll store the result in arrX.    

    //Fix outputting items to screen when div is clicked:
    if(e.target.classList.contains('no-click')){
        return false;
    }

    //CODE TO RUN WHEN A NUMBER IS PRESSED:

    if(e.target.classList.contains('num')){
        screen.textContent += e.target.textContent;
    }    

    //CODE TO RUN WHEN AN OPERATOR IS PRESSED:
    if(e.target.classList.contains('op')){
        operator = e.target.textContent;

        if(arrX.length === 0) {
            arrX.push(screen.textContent);
            screen.textContent = '';
            xLoaded = 1;
        }


        arrY.push(screen.textContent);
        screen.textContent = '';

        // xLoaded === 0 ? arrX.push(screen.textContent) : arrY.push(screen.textContent);
        // xLoaded = 1;
        console.log(`Array X is ${arrX} Array Y is ${arrY}`);


        console.log(`operator pressed: ${operator}`)
        function operate(op,num1,num2){
            yLoaded = 0;
            op = operator;
            num1 = arrX[0];
            num2 = arrY[0];
            console.log(`num1 is ${num1} operator is ${op} and num2 is ${num2}`)

            switch (op) {
                case '+':
                    add(num1,num2);
                    break;

                case '-':
                    add(num1,num2);
                    break;
            
                default:
                    break;
            }
        }
        operate();

     }

    // Defining operations:
    //If not working, replace (x,y) parameters with (num1,num2); 
    function add(x,y){
        total = x + y;
        arrX.length = 0;
        arrX.push(total);
        return x + y;
    };

    function subtract(x,y){
        total = x - y;
        arrX[0] = total;
        return x - y;
    };

    function multiply(x,y){
        total = x * y;
        arrX[0] = total;
        return x * y;
    }

    function divide(x,y){
        total = x / y;
        arrX[0] = total;
        return x / y;
    }


    }
);







        //FIRST, operate(), using whichever operator was first pressed. THAT is the current op parameter inside operate: <op,num1,num2>;
        //SECOND, operate = whichever operator was JUST clicked. If that's minus <->, 
        //So far we have: Example: 5 + 2 - 1 = (5+2)<----<executed when clicking the MINUS in - 1;

    // }
        

            
    //         let operator = e.target.textContent;
    //         x === 0 ? x = Number(screen.textContent) : y = Number(screen.textContent);

    //         console.log(`x = ${x} and y = ${y}`);

    //         function operate(num1,op, num2){
    //             op = operator;
    //             num1 = Number(x);
    //             num2 = Number(y);
    //             if(num1 !== 0 || num2 !== 0){
    //                 // switch(op) case '+' , write switch statement with different cases for each operator.
                    


    //                 total = num1 + num2;
    //                 console.log(total);
    //             }
    //         operate();            

                // console.log(total);

                
            // }

            // when pressing an operator ('+', '-', etc...), check if the string(or array) contains an operator.
            // If the string 
            // return false;
             
        // only pass to screen the numbers, do not pass the operators to the screen.

    //     screen.innerHTML += e.target.textContent;

    // })


            // remove last character when an operator is pressed, so it doensn't show up. LIke so: 
            //  if we press 123 -> press + , then we get '123+', but we want just '123'.
            // removing the last character makes it happen.

            //after we've removed the last character, we run operate(), 
            // BUT: While 3+0 = 3, notice that 3 * 0 = 0, and 3/0 = undefined.
            // for multiplications, let y start at 1, so write <if(y == 0)> y = 1 before anything else

            // NO. THE SOLUTION IS THIS: 
            // The solution is to only operate when you have BOTH numbers. BOTH x, y.

            // We could accomplish that like this:


// numbers.addEventListener('click', function(e) {


//     // e.preventDefault();
//     let index = Array.prototype.indexOf.call(numbers.children, e.target);
//     index === 10 ? index = 0 : false;

//     screen.textContent += index + 1;

// })














// ---------------------------------------------------------------------

// Observing how the calculator at calculator.net works:

// 1) give x, screen displays x. Example: 2
// 2) give operator, the first time, screen displays nothing, it's blank. Example: +
// 3) give y, screen displays the result of x + y. Example: give 3, screen displays 5 (x is 2, and 2 + 3 = 5);
//    HOwever, notice that the screen changes the result in real time if we keep typing. 
//      Example, if we type just one 3, screen displays 5, if we type another 3, screen displays 35 (2 + 33);
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 













