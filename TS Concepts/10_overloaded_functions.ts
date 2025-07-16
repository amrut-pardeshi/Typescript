function getItemLength(name: string): number;
function getItemLength(names: string[]): number;
function getItemLength(nameOrNames: unknown): number { // this is for overload
  if (typeof nameOrNames === "string") {
    return nameOrNames.length;
  } else if (Array.isArray(nameOrNames)) {
    return nameOrNames.length;
  }
  return 0;
}

getItemLength("Amrut");
getItemLength(["1","2","3"])

//----------------------To return number|string--------------------------------------

function getItemLength2(name: string): number;
function getItemLength2(names: string[]): string;
function getItemLength2(nameOrNames: unknown): unknown { // this is for overload
  if (typeof nameOrNames === "string") {
    return nameOrNames.length;
  } else if (Array.isArray(nameOrNames)) {
    return `Lenght is: ${nameOrNames.length}`
  }
  return 0;
}

getItemLength2("Amrut");
getItemLength2(["1","2","3"])