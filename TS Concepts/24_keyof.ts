type PersonType = {
  name: string,
  id: number
}
type ty = keyof PersonType;
var obj:ty = "id" // or it will be "name"