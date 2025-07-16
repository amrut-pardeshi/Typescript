const arr = [{ name: "tim" }, { name: "joe" }, { name: "AP" }];
const el = arr.pop()?.name; // if arr.pop() is undefined then it assigns el as undefined

const nestedArr = [[{ name: "tim" }, { name: "Joe" }]];
const ele = nestedArr.pop()!.pop()!.name; // ! enforces to be NOT Undefined-may throw run time error
