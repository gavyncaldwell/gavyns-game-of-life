import { ChangeEvent } from 'react'
import { useGridState } from '@hook/use-grid-state'
import {
  Input,
  SettingsContainer,
  InputContainer,
  Title,
  SubTitle,
  ButtonContainer,
  PlayButton,
  NextButton,
  ResetButton,
} from './GridSettings.style'
import useGameLoop from '@hook/use-game-loop'
import { Refresh, PlayCircle, StopCircle, ArrowRightCircle } from 'styled-icons/remix-fill'

const GridSettings = function () {
  const { gridWidth, gridHeight, setGridWidth, setGridHeight, isPlaying, toggleIsPlaying, reset } = useGridState()
  const isError = Boolean(
    typeof gridWidth !== 'number' || typeof gridHeight !== 'number' || gridWidth < 5 || gridHeight < 5
  )
  const gameLoop = useGameLoop()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, func: (size: number | '') => void) => {
    const value = Number(event.target.value)
    if (event.target.value === '') {
      func('')
    } else if (!Number.isNaN(value) && value <= 100) {
      func(value)
    }
  }

  return (
    <SettingsContainer>
      <Title>Board Size</Title>
      <SubTitle hasError={isError}>{isError ? 'Make sure to enter a value between 5 and 100' : '5 - 100'}</SubTitle>
      <InputContainer>
        <Input
          hasError={Boolean(typeof gridWidth !== 'number' || gridWidth < 5)}
          value={gridWidth}
          onChange={(event) => handleInputChange(event, setGridWidth)}
        />
        <h4 style={{ padding: 10 }}>X</h4>
        <Input
          hasError={Boolean(typeof gridHeight !== 'number' || gridHeight < 5)}
          value={gridHeight}
          onChange={(event) => handleInputChange(event, setGridHeight)}
        />
      </InputContainer>

      <ButtonContainer>
        <ResetButton onClick={reset}>
          <Refresh size={60} />
        </ResetButton>

        <PlayButton onClick={toggleIsPlaying} isPlaying={isPlaying}>
          {isPlaying ? <StopCircle size={60} /> : <PlayCircle size={60} />}
        </PlayButton>

        <NextButton disabled={isPlaying} isPlaying={isPlaying} onClick={gameLoop}>
          <ArrowRightCircle size={60} />
        </NextButton>
      </ButtonContainer>
    </SettingsContainer>
  )
}

export default GridSettings
