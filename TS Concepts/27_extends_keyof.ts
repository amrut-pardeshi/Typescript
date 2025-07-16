function getValueBack<T, K extends keyof T>(obj: T, key: K): T[K]{
  return obj[key];
}

const user= {
  id:1,
  name: "AP"
};

getValueBack(user, "id");