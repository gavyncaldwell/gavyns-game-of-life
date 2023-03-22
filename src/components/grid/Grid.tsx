import { useGridState } from '@hook/use-grid-state'
import { GridBoard, GridCell, GridContainer } from './Grid.style'
import { useEffect, useState } from 'react'
import useGetGrid, { Coord } from '@hook/use-get-grid'
import { coordsIncludes, indexOfCoord } from '@util/coord-functions'
import useGameLoop from '@hook/use-game-loop'

const Grid: React.FC = function () {
  const { gridWidth, gridHeight, isPlaying, livingCells, setLivingCells, reset } = useGridState()
  const gameLoop = useGameLoop()

  const cellCoords = useGetGrid()

  useEffect(() => {
    if (isPlaying) {
      setTimeout(gameLoop, 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, livingCells])

  const handleCellClick = (coord: Coord) => {
    const cells = [...livingCells]

    if (coordsIncludes(cells, coord)) {
      cells.splice(indexOfCoord(cells, coord), 1)
    } else {
      cells.push(coord)
    }

    setLivingCells(cells)
  }

  return (
    <GridContainer>
      <GridBoard width={gridWidth || 0} height={gridHeight || 0}>
        {cellCoords.map((coord, i) => (
          <GridCell
            isPlaying={isPlaying}
            isAlive={coordsIncludes(livingCells, coord)}
            onClick={() => {
              if (!isPlaying) {
                handleCellClick(coord)
              }
            }}
            key={`grid-item-${i}`}
            position={coord}
          />
        ))}
      </GridBoard>
    </GridContainer>
  )
}

export default Grid
