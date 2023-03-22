import styled from 'styled-components'

export const SettingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  max-width: 400px;
  padding: 30px 20px;
  border-radius: 16px;
  background: white;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 7px 29px 0px;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 200px;
  align-items: center;
  margin-top: 12px;
`

export const Input = styled.input<{ hasError: boolean }>`
  padding: 0 16px;
  border-radius: 4px;
  border: 2px solid ${(props) => (props.hasError ? '#e73827' : 'black')};
  height: 40px;
  width: 40px;
  font-size: 20px;
  outline: none;
  color: ${(props) => (props.hasError ? '#e73827' : 'black')};
`

export const Title = styled.h2`
  margin: 0;
  width: 100%;
  text-align: center;
`

export const SubTitle = styled.p<{ hasError: boolean }>`
  font-size: ${(props) => (props.hasError ? 20 : 18)}px;
  font-weight: 400;
  margin: 0;
  width: 100%;
  text-align: center;
  color: ${(props) => (props.hasError ? '#e73827' : 'black')};
`

export const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`

export const PlayButton = styled(IconButton)<{ isPlaying: boolean }>`
  color: ${(props) => (props.isPlaying ? '#e73827' : '#2cac82')};
`

export const NextButton = styled(IconButton)<{ isPlaying: boolean }>`
  color: ${(props) => (props.disabled ? 'gray' : '#f8ac49')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

export const ResetButton = styled(IconButton)`
  color: #e73827;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 12px;
`
