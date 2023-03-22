import { useGridState } from '@hook/use-grid-state'

export interface Coord {
  x: number
  y: number
}

export default function useCreateGrid(): Coord[] {
  const { gridHeight, gridWidth } = useGridState()
  const cellCoords = [] as Coord[]

  for (let x = 1; x <= gridWidth; x++) {
    for (let y = 1; y <= gridHeight; y++) {
      cellCoords.push({ x, y })
    }
  }

  return cellCoords
}
