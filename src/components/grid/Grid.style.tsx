import styled from 'styled-components'

export const GridContainer = styled.div`
  border: 1px solid gray;
  display: grid;
  grid-template-columns: repeat(10, 20px);
  grid-template-rows: repeat(10, 20px);
`

export const GridItem = styled.div<{ position: { x: number; y: number } }>`
  border: 1px solid grey;
  grid-column: ${(props) => props.position.x} / span 1;
  grid-row: ${(props) => props.position.y} / span 1;
`
