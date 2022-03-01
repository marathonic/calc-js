const screen = document.querySelector('.calc-screen');
const numbers = document.querySelector('.numbers');
const noClick = document.querySelector('.no-click');

const calculatorBody = document.querySelector('.calculator-body');

calculatorBody.addEventListener('click', function(e){

    // let target = e.target;
    let x = 0;
    let y = 0;
    let total = 0;

    //DO NOT OUTPUT EVERYTHING TO SCREEN WHEN CALCULATOR BODY IS CLICKED:
    if(e.target.classList.contains('no-click')){
        //figure out HOW TO DO NOTHING;
        return false;
    }

    //CODE TO RUN WHEN A NUMBER IS PRESSED:

    if(e.target.classList.contains('num')){
        console.log('NUMBER PRESSED')
    }    

    //CODE TO RUN WHEN AN OPERATOR IS PRESSED:

    if(e.target.nodeName === 'BUTTON'){
        

        if(e.target.textContent === '+' || e.target.textContent === '-') {
            
            let operator = e.target.textContent;
            x === 0 ? x = Number(screen.textContent) : y = Number(screen.textContent);

            console.log(`x = ${x} and y = ${y}`);

            function operate(num1,op, num2){
                op = operator;
                num1 = Number(x);
                num2 = Number(y);
                if(num1 !== 0 || num2 !== 0){
                    // switch(op) case '+' , write switch statement with different cases for each operator.
                    


                    total = num1 + num2;
                    console.log(total);
                }
            operate();            

                // console.log(total);

                
            }
        }

            // if(x !== 0){

            //     y = screen.textContent;
            // }

            // x = screen.textContent;

            // console.log(`x = ${x}, y = ${y}. Result = ${result});`
            


            // when pressing an operator ('+', '-', etc...), check if the string(or array) contains an operator.
            // If the string 
            // return false;
        };
             
        // only pass to screen the numbers, do not pass the operators to the screen.

        screen.innerHTML += e.target.textContent;

        // if(e.target.textContent === '+') {
        // }
    })

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













