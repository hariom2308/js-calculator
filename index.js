<<<<<<< HEAD

function parseCalculationString(s) {

var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-'.indexOf(ch) > -1) {
        	console.log("i =", i);
        	console.log("ch is", ch);
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                calculation.push(parseFloat(current), ch);
                current = '';
                console.log("current is", current)
            }

        } else {
            current += s.charAt(i);
        }
    }
////////////////////////////////////////////////////
    if (current != '') {
        calculation.push(parseFloat(current));
    }
    console.log("calculation is", calculation)
    return calculation;

}

function calculate(calc) {
    // --- Perform a calculation expressed as an array of operators and numbers
    var operators = [
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}
               		],
        newCalc = [],
        currentOperator;
    for (var i = 0; i < operators.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (operators[i][calc[j]]) {
                currentOperator = operators[i][calc[j]];
            } else if (currentOperator) {
                newCalc[newCalc.length - 1] = 
                    currentOperator(newCalc[newCalc.length - 1], calc[j]);
                currentOperator = null;
            } else {
                newCalc.push(calc[j]);
            }
            console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        console.log('Error: unable to resolve calculation');
        return calc;
    } else {
        return calc[0];
    }
}
for(let i=0; i < 10; i++){
  document.getElementById("button"+i).addEventListener("click", function( event ) {

   console.log(document.getElementById("input").value += i);

=======
for (let i = 0; i < 10; i++) {
  document.getElementById("button" + i).addEventListener("click", function (event) {
    document.getElementById("input").value += i ;
>>>>>>> d11ceaf2a56a34f39b9d819049d851fb4e23aad5
  })};

for (let x = 1; x < 6; x++) {
  document.getElementById("operator" + x).addEventListener("click", function (event) {
    document.getElementById("input").value += this.value ;
  })};

document.getElementById("clear").addEventListener("click", function (event) {
    document.getElementById("input").value = ''
});

<<<<<<< HEAD
document.getElementById("total").addEventListener("click", function( event ) {
    document.getElementById("input").value = calculate(parseCalculationString(document.getElementById("input").value));
=======
document.getElementById("total").addEventListener("click", function (event) {
    document.getElementById("input").value = eval(document.getElementById("input").value) ;
>>>>>>> d11ceaf2a56a34f39b9d819049d851fb4e23aad5
});
