import { Coord } from '@hook/use-get-grid'

export function isEqual(coord1: Coord, coord2: Coord): boolean {
  return coord1.x === coord2.x && coord1.y === coord2.y
}

export function indexOfCoord(array: Coord[], coord: Coord): number {
  return array.findIndex((item) => isEqual(item, coord))
}

export function coordsIncludes(array: Coord[], coord: Coord): boolean {
  return Boolean(array.find((item) => isEqual(item, coord)))
}
