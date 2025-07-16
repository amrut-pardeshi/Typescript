type Theme = "dark" | "light";

function setTheme<T extends Theme>(theme: T) {
  console.log("Theme set:", theme);
}

setTheme("dark"); // allowed is only dark or light

//--------------------------------------------------------------------

function firstItem<T extends any[]>(arr: T): T[number] {
  return arr[0]
}
firstItem(["a", "b", "c"]);
firstItem([1, 2, 3]);

//--------------------------------------------------------------------

function logLength<T extends {length: number}>(val:T): number {
  return val.length;
}
logLength("Hello");
logLength([1, 2, 3]);
logLength({ length: 10 });