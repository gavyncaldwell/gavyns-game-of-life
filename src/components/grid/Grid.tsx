import { useGridState } from '@hook/use-grid-state'
import { GridBoard, GridCell, GridContainer } from './Grid.style'
import { useEffect, useRef, useState } from 'react'
import useCreateGrid, { Coord } from '@hook/use-create-grid'
import { coordsIncludes, indexOfCoord, isEqual } from '@util/coord-functions'

const Grid: React.FC = function () {
  const running = useRef<any>()
  const [livingCells, setLivingCells] = useState<Coord[]>([])
  const { gridWidth, gridHeight, isPlaying } = useGridState()
  const cellCoords = useCreateGrid()

  useEffect(() => {
    const ticker = () => {
      if (!running.current) {
        return
      }
      gameLoop()
      setTimeout(ticker, 1000)
    }

    if (isPlaying && !running.current) {
      running.current = true
      ticker()
    }
  }, [isPlaying, livingCells, cellCoords])

  const handleCellClick = (coord: Coord) => {
    const cells = [...livingCells]

    if (coordsIncludes(cells, coord)) {
      cells.splice(indexOfCoord(cells, coord), 1)
    } else {
      cells.push(coord)
    }

    setLivingCells(cells)
  }

  const getNeighbors = (cell: Coord) => {
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

  const gameLoop = () => {
    const deadCells: Coord[] = cellCoords.filter((coord) => !coordsIncludes(livingCells, coord))
    const cellsToLive = [] as Coord[]
    const cellsToDie = [] as Coord[]

    deadCells.forEach((deadCell) => {
      const neighborCells = getNeighbors(deadCell)
      const livingNeighbors = livingCells.filter((coord) => coordsIncludes(neighborCells, coord))

      if (livingNeighbors.length >= 3) {
        cellsToLive.push(deadCell)
      }
    })

    livingCells.forEach((livingCell) => {
      const neighborCells = getNeighbors(livingCell)
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

  return (
    <GridContainer>
      <GridBoard width={gridWidth || 0} height={gridHeight || 0}>
        {cellCoords.map((coord, i) => (
          <GridCell
            className={coordsIncludes(livingCells, coord) ? 'isAlive' : ''}
            onClick={() => handleCellClick(coord)}
            key={`grid-item-${i}`}
            position={coord}
          />
        ))}
      </GridBoard>
    </GridContainer>
  )
}

export default Grid
