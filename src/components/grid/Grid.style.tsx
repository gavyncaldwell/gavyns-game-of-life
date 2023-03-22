import styled from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 20%;
`

export const GridBoard = styled.div<{ width: number; height: number }>`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(${(props) => props.width}, ${(props) => 500 / props.width}px);
  grid-template-rows: repeat(${(props) => props.height}, ${(props) => 500 / props.height}px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 16px;
  overflow: hidden;
  background: white;
`

export const GridCell = styled.div<{ position: { x: number; y: number } }>`
  cursor: pointer;
  border: 1px solid grey;
  grid-column: ${(props) => props.position.x} / span 1;
  grid-row: ${(props) => props.position.y} / span 1;

  &.isAlive {
    background: red;
  }

  &:hover {
    background: pink;
  }
`
