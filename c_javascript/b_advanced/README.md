# JavaScript Advanced

01. Advanced Functions
    - First Class Functions
    - Higher Order Functions
    - Currying
    - Function Expressions
    - IIFE (Immediately-Invoked Function Expressions)
    - Closure
    - Function Context (this, call, apply, bind)
02. Unit Testing
    - Error Handling
    - Exception Handling
    - Unit Testing Concepts
    - Mocha and Chai
03. Classes
    - Defining Classes
    - Inheritance
    - Unit Testing
04. Object Composition
    - Closures
    - Module and Revealing Module Patterns
    - Object Inheritance and Prototype Chain
05. jQuery
    - Overview
    - Selectors
    - DOM Manipulation
    - Handling Events
    - Plugins

00. Other
    - Hositing

---

## Advanced Functions

1. **First Class Functions**
The term "first class" suggests that functions are given the same treatment
as any other data type (such as number and string) in the language. This
means that they are treated as values and can be assigned to variables,
passed as arguments to other functions, and returned as values from other
functions. The concept is derived from functional programming.

2. **Higher Order Fuction**
A function that takes another function as an argument or return a function as
a result.

3. **Currying**
Functional programming technique, which transforms a function with multiple
arguments into a sequence of functions, each taking only one argument.

4. **Partial Application**
Pre-setting a subset of arguments, resulting to a function with reduced set
of arguments.

    ```javascript
    // Currying example
    function add(a) {
        return (b) => {
            return (c) => a + b + c;
        };
    }

    // Partial Application example
    let addFive = add(5);
    let addSix = addFive(1);
    let result = addSix(2);
    console.log(result); // 8
    ```

5. **IIFE**
Anonymous function, which is invoked immediately after declaration.

    ```javascript
    (function() {
        console.log('invoked!');
    })();
    ```

6. **Closure**
When there are nested functions, the inner function has access to the
variables in the outer function.

7. **this**
Keyword containing the object which called the function.

8. **call, apply, bind**
Functions used to manipulate **this**. **call** and **apply** invoke the
function immediately, **bind** returns new function.

---

## Unit Testing

1. **Error Handling**
    ```javascript
    // Example showing the fundamental principles of error handling.
    function divide(a, b) {
        // 2. A function should indicate a problem if it cannot
        // complete its task.
        if(b == 0) {
            throw new Error('Cannot divide by zero!');
        }
        // 1. A function should do what its name suggests.
        return a / b;
    }
    ```

2. **Exception Handling**
    - **throw**
    Lets you create custom errors.
    - **try**
    Lets you test a block of code for errors.
    - **catch**
    Lets you handle the error.

    ```javascript
    try {
        // Code that can throw exception.
        throw new Error('Fatal Error!');
        // Not executed in case of exception.
        console.log('Everything is fine.')
    } catch(ex) {
        // This code is executed in case of exception.
        console.log(ex.message); // Fatal Error!
    }
    ```

3. **Unit Testing Concepts**
    - **Definition**
    A piece of code that checks whether another piece of code works as
    expected.
    - **AAA** (Arrange, Act, Assert) Pattern
    ```javascript
    // Arrange all necessary preconditions and inputs.
    let nums = [2, 5, -2, 4];
    // Act on the object or method under test.
    sortNums(nums);
    // Assert that the obtained results are what we expect.
    if(JSON.stringify(nums) === '[-2, 2, 4, 5]') {
        console.error('They are equal!');
    }
    ```

4. **Mocha and Chai**
    - **Installation**
    `npm install --save-dev mocha`
    `npm install --save-dev chai`
    Install Moacha and Chai local and add dependencies in package.json
    - **Test structure**
    Tests are written in separate files (**solution.test.js**), and each file
    can contain one or more test suits (**describe blocks**), which can
    further contain individual test cases (**it blocks**).
    - **Assertions**
    Mocha does not include built-in assertion functions, instead it
    integrates with assertion libraries like **Chai**.
    - **Running tests**
    `mocha test.js`
    ```javascript
    // Import necessary dependencies
    const assert = require('chai').assert;
    const sum = require('./sum');
    
    // Test suite
    describe('sum(arr) -> sums an array of numbers', function() {

      // Test case
      it('should return 6, if arr = [1, 2, 3]', function() {
        // Arrange
        const arr = [1, 2, 3];
        // Act
        let result = sum(arr);
        // Assert
        assert.equal(result, 6);
      });
    
      it('should throw error, if arr is object', function() {
        let obj = {name: 'Pesho'};
        assert.throws(function() {sum(obj)}, Error);
      });
    
      it('should throw error, if arr = ["1", 2, 3]', function() {
        let arr = {'1', 2, 3};
        assert.throws(function() {sum(arr)}, Error);
      });
    });
    ```

## Classes

1. **Defining Classes**
    Classes are the structure of the objects. They contain data and behaviour.
    - **Declaration**
    ```javascript
    class Rectangle {
        
        constructor(width, height) {
            // Private properties
            this._width = width;
            this._height = height;
        }

        // Accessor properties
        get width() { return this._width };
        set width(value) { this._width = value }
    
        get height() { return this.heigh };
        set height(value) { this.height = value }

        getArea() {
            return this.width * this.height;
        }
    
        // Static method
        static getArea(width, height) {
            return width * height;
        }
    }
    ```
    - **Class Expressions**
    Besides the convenient class declaration, in JS classes can be
    expressions.
    ```javascript
    let Square = class {
        constructor(side) {
            this.side = side;
        }

        getArea() {
            return side ^ 2;
        }
    }

    let sq = new Square(7);

    console.log(sq.getArea()); // Output: 49
    ```
    - **Hosting**
    Function declarations are hoisted and class declarations are not.
    ```javascript
    let rect = new Rectangle(); // Reference error
    class Rectangle {}
    ```

2. **Inheritance**
    Using the **extends** keyword child classes inherit data and behaviour
    from parent classes.
    ```javascript
    class Person {
        
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Teacher extends Person {

        constructor (name, age, subject) {
            super(name, age);
            this.subject = subject;
        }
    }
    ```

3. **Unit Testing**
    ```javascript
    class SortedList {

        constructor() {
            this.list = [];
        }

        add(el) { this.list.push(el); }
        remove(index) { this.list.splice(index, 1); }
        get size() { return this.list.length; }
    }

    describe('Sorted List', function () {

        let sortedList;
        beforeEach(function () {
            sortedList = new SortedList();
        });

        it('must initialize data to an empty array', function () {
            assert.equal(Array.isArray(sortedList.list), true);
        });
    });
    ```

## Object Composition

1. **Closure**
    Nested functions, where a state is maintained in the outer function.

2. **Module and Revealing Module Patterns**
    **Module pattern** is a design pattern used to encapsulate and organize
    code by createing private and public members within a single scope.
    ```javascript
    // Module Pattern
    let module = (function() {

        let count = 0;                  // private

        return {
            increase: (num) => count += num,
            decrease: (num) => count -= num,
            value: () => count
        };
    })

    console.log(module.value);          // 0
    console.log(module.increase(5));    // 5
    console.log(module.decrease(3));    // 2
    console.log(module.count)           // undefined (not accessible)
    ```

    **Revealing Module Pattern** is a variation of the Module pattern which
    aims to simplify the syntax of creating modules.
    ```javascript
    // Revealing Module Pattern
    let module = (function() {

        let count = 0;                  // private

        function increase(num) => count += num;
        function decrease(num) => count -= num;
        function getValue() => count;

        return {
            increase: increase,
            decrease: decrease,
            value: getValue
        };
    })

    console.log(module.value);          // 0
    console.log(module.increase(5));    // 5
    console.log(module.decrease(3));    // 2
    console.log(module.count)           // undefined (not accessible)
    ```

3. **Object Inheritance and Prototype Chain**
Object inheritance refers to the ability for object to inherit properties
and methods from other objects. Every object has an internal link to another
object called its prototype.
Using **Object.create()** you can explicitly set the prototype of a new
object, enabling prototype-based inheritance without the need of constructor
functions or classes.

    ```javascript
    const animal = {
        makeSound() {
            console.log('Generic animal sound.');
        }
    }

    let dog = Object.create(animal);
    dog.breed = 'Labrador';

    dog.makeSound();    // Generic animal sound.
    ```

## jQuery

01. **Overview**
    - **Definition**
    Free and open-source JS library, which provides functionality to simplify
    commont tasks like DOM manipulation, event handling, ajax calls, working
    with arrays, objects, strings etc... Includes wide range of filtering
    selectors.
    - **CDN**
    `<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>`

02. **DOM Manipulation**
    ```javascript
    // Get all element text
    let textValues = $('ul li').toArray().map(x => x.innerText);

    // Match text
    let searchString = 'hello';
    let matches = $(`ul li:contains('${searchString}')`)

    // Create element
    let div = $('<div>I am a new div</div>');

    // Add element style
    div.css('background', 'blue');
    div.css('color', 'white');

    // Add child
    let p = $('<p>Some text</p>');
    p.appendTo(div);
    ```

03. **Handling Events**
    ```javascript
    // Add event
    $('a.button').on('click', btnClicked);

    // Remove event
    $('a.button').off('click', btnClicked);

    function btnClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('.selected');
    }
    ```
    ```javascript
    // Add event to multiple elements
    $('ul').on('click', 'li', liClick);

    function liClick() {
        // TODO
    }
    ```

04. **Plugins**
    jQuery has many ready to use plugins, which can be found at jqueryui.com
    ```javascript
    (function($) {

        function highlight(className) {

            $(this).on('mouseover', function() {
                $(this).addClass(className)
            });

            $(this).on('mouseout', function() {
                $(this).removeClass(className)
            });
        }

        $.fn.highlight = highlight;
    })(jQuery);

    $('item').highlight('big');
    ```


## Other

01. Hoisting
JS hoists variable and function declarations to the top of their scope.
This is not true for class declarations, let etc...
    ```javascript
    console.log(a); // undefined
    console.log(b); // ReferenceError

    var a;
    let b;
    ```