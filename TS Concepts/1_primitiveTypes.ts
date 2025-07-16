// number, string, boolean, undefined, null, void, never

let n: number = 2;

let s: string = "Hello";
let y: string = `${s} world`;

let b: boolean = true;

let nul = null; // intentional assignment - I know this should be empty

let undef = undefined; // has been declared but not assigned

// function return types
function test1(): void {}

// var - function scope, redeclaration allowed, accessible outside block, default value - undefined
// let - block scope   , redeclare not allowed, not access outside block, cannot access before declare
