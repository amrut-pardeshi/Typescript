type Clone<T> = {
  [K in keyof T]: T[K]
}

type TypePerson = { name: string, id: number };
type ClonedPerson = Clone<TypePerson>

//-----------------------------------------------------------

type MarkReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

type Abc = {name: string, id: number}
type newType = MarkReadonly<Abc>