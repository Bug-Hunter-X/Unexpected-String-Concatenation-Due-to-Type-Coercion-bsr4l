# Unexpected String Concatenation Due to Type Coercion

This repository demonstrates a common JavaScript error involving type coercion during addition.  The function `foo` is expected to add two numbers, but when a number and a string are provided, JavaScript's loose typing leads to string concatenation instead of numerical addition.  The solution showcases explicit type checking or conversion to prevent this behavior.

## Bug
The `bug.js` file contains the buggy function that exhibits unexpected string concatenation.  The output shows the result of adding a number and string, showcasing the unintended behavior.

## Solution
The `bugSolution.js` file provides a corrected version of the function using explicit type checking with `typeof` to ensure that both inputs are numbers before performing addition.  Alternatively, it uses `parseInt` to convert the string to a number, ensuring that the addition is performed correctly.