import { coordsIncludes, indexOfCoord, isEqual } from '@util/coord-functions'
import useGetGrid, { Coord } from './use-get-grid'
import { useGridState } from './use-grid-state'

const getNeighbors = (cellCoords: Coord[], cell: Coord) => {
  const neighbors = [] as Coord[]

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      neighbors.push({
        x: cell.x + x,
        y: cell.y + y,
      })
    }
  }

  return neighbors.filter((coord) => coordsIncludes(cellCoords, coord) && !isEqual(cell, coord))
}

export default function useGameLoop() {
  const cellCoords = useGetGrid()
  const livingCells = useGridState((state) => state.livingCells)
  const setLivingCells = useGridState((state) => state.setLivingCells)

  return () => {
    const deadCells: Coord[] = cellCoords.filter((coord) => !coordsIncludes(livingCells, coord))
    const cellsToLive = [] as Coord[]
    const cellsToDie = [] as Coord[]

    deadCells.forEach((deadCell) => {
      const neighborCells = getNeighbors(cellCoords, deadCell)
      const livingNeighbors = livingCells.filter((coord) => coordsIncludes(neighborCells, coord))

      if (livingNeighbors.length === 3) {
        cellsToLive.push(deadCell)
      }
    })

    livingCells.forEach((livingCell) => {
      const neighborCells = getNeighbors(cellCoords, livingCell)
      const livingNeighbors = livingCells.filter((coord) => coordsIncludes(neighborCells, coord))

      if (livingNeighbors.length < 2 || livingNeighbors.length > 3) {
        cellsToDie.push(livingCell)
      }
    })

    const living = [...livingCells]

    cellsToDie.forEach((cell) => {
      living.splice(indexOfCoord(living, cell), 1)
    })

    setLivingCells([...living, ...cellsToLive])
  }
}
