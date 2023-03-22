import Grid from '@component/grid/Grid'
import GridSettings from '@component/gridSettings/GridSettings'
import { GameWrapper } from '@style/GlobalStyles'
import { Normalize } from 'styled-normalize'

const Home = function () {
  return (
    <GameWrapper>
      <GridSettings />
      <Grid />
    </GameWrapper>
  )
}

export default Home
