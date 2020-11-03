# Functions

    - Particular business logic called as function.

    - functions are ued to reuse the business logic.

    - we have following types of functions upto ES11.

    	1) Named Functions

    	2) Anonymous Functions /
    	   Arrow Functions /
    	   Fat Arrow Functions /
    	   CallBack Functions

    	3) Default Parameters in Functions

    	4) Optional Parameters in Functions

    	5) Rest Parameters in Functions

    	6) IIFE (Immidiate Invokable Functional Expressions)

    	7) Generators

# Named Functions

    - The function with particular name called as Named Function.

# Syntax

    //function definition
    function function_name(parameters){

          //business logic
    };

    //call the function
    function_name(arguments)

# Anonymous Function

==================

        - The function without name called as Anonymous Function.

        - Anonymous Functions also called as Arrow Functions (ES6).

        - we will represent Arrow functions by using "=>".

        - we will use Arrow Functions as "callback functions".

## Syntax

======
// function defintion
var / let / const variable_name = (parameters)=>{
//business logic
};

        //call the function
        variable_name(arguments);

# Default Parameters in Functions

    while defining functions, we will initilize parameters with default values.

    concept(default parameters) introduced in ES6

# Rest Parameters in Functions

============================

    - we will store more than one value(array) in a single argument with rest parameters in functions.

    - this concept also introduced in "ES6".

    - we will represent rest parameter by using "..." (spread operator)

    - we can have only "one rest parameter" per function.

    - occurance of rest parameters should be "last"

# Optional Parameters in functions (Microsoft)

=====================================================

    - while calling the functions, it's not mandatory to supply parameters in Optional Parameters In functions.

    - this concept also introduced in ES6

    - we will represent Optional Parameters by using "?"

    - Optional parameters will work in "TypeScript Environment".

    - we will install TypeScript by using following command.

        > npm install -g typescript@latest

    - we will save TypeScript files with ".ts" extension.

    - TypeScript is the Programming Language, so we need to transpilation.

    - "tsc" is the TypeScript Compiler, used to perform Transpilation.

    -  is transpilation success, automatically equalent javascript file will be generate in current path.

    > tsc demo.ts

        o/p

        demo.js

    > node demo.js

# Generator functions

      - with Generators, developers can control flow of execution inside function call
      - Generator functions introduced in ES6
      - Generator function should prefix with "\*"
      - Generator functions have cursor mechansim.
      - with cursor mechansim we can control flow of execution

# IIFE

      IIFE Stands for Immidiate Invokable Functional Expressions
      ES9
      Self Invokable Functions
      //Syntax.

            ((arg1,arg2,arg3,.....,argn)=>{
            //business logic
            })(data1,data2,data3,.....datan);

# Constructor Functions

- collection of variables and functions called as class
- before ES6, we will create classes by using Constructor Functions
- we will create constructor functions by using "function" keyword
- in constructor functions all the members should prefix with "this" keyword
- we will create object to the constructor functions by using "new" keyword.

# JSON

- JSON Stands for "Java Script Object Notation".

- JSON also called as "JavaScript Objects".

- JSON, used to transfer the data over the Network.

- JSON is light weight compared to XML.

- JSON parsing(Reading) is Eazy.

- JSON is Network Friendly format.

Syntax:

Objects --- {}

Arrays --- []

data --- key & value pairs

key & value separated by using ":"

key&value pairs separated by using ","

1.  freeze()

2.  seal()

3.  defineProperty()

4.  defineProperties()

5.  Object.keys()

6.  Object.values()

7.  Object.assign()

8.  Object.entries()

9.  Object.fromEntries()

10. hasOwnProperty()

11. delete

# callback

===========

passing one function to another function as an argument called as callback
callbacks plays the major role while implementing the real time applications
Ex. ajax calls, arrays manipulations (ES6),.....
we can use arrow functions as callback functions

# JSON Server

===========

- JSON Server used to develop Rest APIS.

           GET
           POST
           PUT
           DELETE
           HEAD
           ---
           ---
           ---

  - JSON Server supports only "JSON Data".

  - JSON Server is "light weight" server.

  - Default Port number of JSON Server 3000.

  - we will install JSON Server by using following command.

    > npm install -g json-server

    -g stands for global installation

  - we will run server by using following command

    > json-server --watch demo.json

# promises

    - Promises are special javascript objects
    - communication between producer and consumer called as promise
    - promises have 3 states
    1) resolve (success)
    2) reject (failure)
    3) pending

    - we will create Promises by using "Promise" class
    - we will consume the Promises by using then()
