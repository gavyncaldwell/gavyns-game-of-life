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
} from './GridSettings.style'
import { FastForwardCircleFill, PlayCircleFill, StopCircleFill } from 'styled-icons/bootstrap'
import useCreateGrid from '@hook/use-create-grid'

const GridSettings = function () {
  const { gridWidth, gridHeight, setGridWidth, setGridHeight, isPlaying, toggleIsPlaying } = useGridState()
  const cellCoords = useCreateGrid()
  const isError = Boolean(typeof gridWidth !== 'number') || Boolean(typeof gridHeight !== 'number')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, func: (size: number | '') => void) => {
    const value = Number(event.target.value)
    if (event.target.value === '') {
      func('')
    } else if (!Number.isNaN(value) || value >= 5 || value <= 100) {
      func(value)
    }
  }

  return (
    <SettingsContainer>
      <Title>Board Size</Title>
      <SubTitle hasError={isError}>{isError ? 'Make sure to enter a value between 5 and 100' : '5 - 100'}</SubTitle>
      <InputContainer>
        <Input
          hasError={Boolean(typeof gridWidth !== 'number')}
          value={gridWidth}
          onChange={(event) => handleInputChange(event, setGridWidth)}
        />
        <h4 style={{ padding: 10 }}>X</h4>
        <Input
          hasError={Boolean(typeof gridHeight !== 'number')}
          value={gridHeight}
          onChange={(event) => handleInputChange(event, setGridHeight)}
        />
      </InputContainer>

      <ButtonContainer>
        <PlayButton onClick={toggleIsPlaying} isPlaying={isPlaying}>
          {isPlaying ? <StopCircleFill size={60} /> : <PlayCircleFill size={60} />}
        </PlayButton>

        <NextButton disabled={isPlaying} isPlaying={isPlaying}>
          <FastForwardCircleFill size={60} />
        </NextButton>
      </ButtonContainer>
    </SettingsContainer>
  )
}

export default GridSettings
