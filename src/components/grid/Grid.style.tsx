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
  grid-template-columns: repeat(
    ${(props) => props.width},
    ${(props) =>
      props.width > 50 || props.height > 50
        ? 10
        : props.width > 25 || props.height > 25
        ? 20
        : props.width > 10 || props.height > 10
        ? 40
        : 80}px
  );
  grid-template-rows: repeat(
    ${(props) => props.height},
    ${(props) =>
      props.width > 50 || props.height > 50
        ? 10
        : props.width > 25 || props.height > 25
        ? 20
        : props.width > 10 || props.height > 10
        ? 40
        : 80}px
  );

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => props.width},
      ${(props) =>
        props.width > 50 || props.height > 50
          ? 5
          : props.width > 25 || props.height > 25
          ? 10
          : props.width > 10 || props.height > 10
          ? 20
          : 40}px
    );
    grid-template-rows: repeat(
      ${(props) => props.height},
      ${(props) =>
        props.width > 50 || props.height > 50
          ? 5
          : props.width > 25 || props.height > 25
          ? 10
          : props.width > 10 || props.height > 10
          ? 20
          : 40}px
    );
  }
`

export const GridCell = styled.div.attrs(
  (props: { position: { x: number; y: number }; isAlive: boolean; isPlaying: boolean }) => ({
    style: {
      background: props.isAlive ? 'white' : props.isPlaying ? 'none' : 'rgba(0, 0, 0, 0.2)',
      gridColumn: `${props.position.x} / span 1`,
      gridRow: `${props.position.y} / span 1`,
    },
  })
)<{ position: { x: number; y: number }; isAlive: boolean; isPlaying: boolean }>`
  cursor: ${(props) => (props.isPlaying ? 'default' : 'pointer')};
  border: ${(props) => (props.isPlaying ? 'none' : '1px solid black')};
  border-radius: 50%;

  &:hover {
    background: ${(props) => (props.isAlive ? 'green' : 'lightgreen')};
  }
`
