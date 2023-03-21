import { GridContainer, GridItem } from './Grid.style'

const Grid = function () {
  return (
    <GridContainer>
      <GridItem position={{ x: 1, y: 1 }} />
      <GridItem position={{ x: 2, y: 1 }} />
      <GridItem position={{ x: 1, y: 2 }} />
      <GridItem position={{ x: 2, y: 2 }} />
    </GridContainer>
  )
}

export default Grid
