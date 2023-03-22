import { useGridState } from '@hook/use-grid-state'

export interface Coord {
  x: number
  y: number
}

export default function useGetGrid(): Coord[] {
  const { gridHeight, gridWidth } = useGridState()
  const cellCoords = [] as Coord[]

  for (let x = 1; x <= (gridWidth || 0); x++) {
    for (let y = 1; y <= (gridHeight || 0); y++) {
      cellCoords.push({ x, y })
    }
  }

  return cellCoords
}
