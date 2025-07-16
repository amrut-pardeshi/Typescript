// type: alis for something that not necessary an object

type Coordinate = [number, number];

type List = string[][];

function compareCoords(p1: Coordinate, p2: Coordinate): Coordinate {
  return [p1[0], p2[1]];
}

const Cords: Coordinate[] = [[1, 2]];
