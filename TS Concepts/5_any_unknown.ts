let x: any; // ignores type checking
x = 1;
x = "string";

let xx: unknown = 1; // for unknow its forced to typecheck line 7
// way 1:
if (typeof xx == "number") console.log(xx + 1);
else if (typeof xx == "string") console.log(`${xx.length}`);

// way 2:
var result = (xx as number) + 1;
var result2 = (xx as number[][])[0]; //this will crash
