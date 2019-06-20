/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(){
    let calculator = {};
    let memory = 0;
    let total = 0;

    calculator.validation = function(number){
        if (typeof number !== 'number'){
            throw 'Error';
        }
    };

    calculator.load = function(number){
        this.validation(number);
        total = number;
        return total;
    };

    calculator.getTotal = function(){
        return total;
    };

    calculator.add = function(number){
        this.validation(number);
        total = total + number;
        return total;
    };

    calculator.subtract = function(number){
        this.validation(number);
        total = total - number;
        return total;
    };

    calculator.multiply = function(number){
        this.validation(number);
        total = total * number;
        return total;
    };

    calculator.divide = function(number){
        this.validation(number);
        total = total / number;
        return total;
    };

    calculator.recallMemory = function(){
        return memory;
    };

    calculator.saveMemory = function(){
        memory = total;
    };

    calculator.clearMemory = function(){
        memory = 0;
    }

    return calculator;
};

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

