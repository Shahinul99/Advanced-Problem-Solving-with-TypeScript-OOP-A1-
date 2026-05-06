# Why any is Risky and unknown is Safer in TypeScript 

# Introduction
TypeScript provides different data types to make code safer and easier to manage. Two common types are any and unknown. Although both can store any value, they work differently.


# What is any?
The any type disables TypeScript’s type checking completely. Once a variable is declared as any, TypeScript allows any operation on it without showing errors.

# example
let value: any = "Hello";
value.notExistMethod();

TypeScript will not show any error, even if the method does not exist.

# Why unknown is Safer?
The unknown type is a safer alternative. It can also hold any value, but TypeScript forces you to check the type before using it.

# example
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

This makes the code safer and more reliable.

# Type Narrowing
Type narrowing means checking the type before using the value.

# example
function printValue(value: unknown) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number:", value.toFixed(2));
  }
}

TypeScript understands the exact type after checking.

# Conclusion
any removes safety
unknown improves safety
Type narrowing helps avoid errors.