import { ChangeEvent } from 'react'
import { useGridState } from '@hook/use-grid-state'
import {
  Input,
  SettingsContainer,
  InputContainer,
  Title,
  SubTitle,
  PlayButton,
  ButtonContainer,
} from './GridSettings.style'
import { PlayCircleFill } from '@styled-icons/bootstrap/PlayCircleFill'
import { StopCircleFill } from '@styled-icons/bootstrap/StopCircleFill'

const GridSettings = function () {
  const { isPlaying, setIsPlaying, gridWidth, gridHeight, setGridWidth, setGridHeight } = useGridState()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, func: (size: number) => void) => {
    const value = Number(event.target.value)
    if (event.target.value === '' || !Number.isNaN(value) || value >= 5 || value <= 100) {
      func(value)
    }
  }

  return (
    <SettingsContainer>
      <Title>Board Size</Title>
      <SubTitle>5 - 100</SubTitle>
      <InputContainer>
        <Input placeholder="5 - 100" value={gridWidth} onChange={(event) => handleInputChange(event, setGridWidth)} />
        <h4>X</h4>
        <Input placeholder="5 - 100" value={gridHeight} onChange={(event) => handleInputChange(event, setGridHeight)} />
      </InputContainer>

      <ButtonContainer>
        <PlayButton onClick={() => setIsPlaying(!isPlaying)} isPlaying={isPlaying}>
          {isPlaying ? <StopCircleFill size={60} /> : <PlayCircleFill size={60} />}
        </PlayButton>
      </ButtonContainer>
    </SettingsContainer>
  )
}

export default GridSettings
