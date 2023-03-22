import styled from 'styled-components'

export const SettingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  max-width: 300px;
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
  border: 2px solid ${(props) => (props.hasError ? 'red' : 'black')};
  height: 40px;
  width: 40px;
  font-size: 20px;
  outline: none;
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
  color: ${(props) => (props.hasError ? 'red' : 'black')};
`

export const PlayButton = styled.button<{ isPlaying: boolean }>`
  border: none;
  background: none;
  color: ${(props) => (props.isPlaying ? 'red' : 'green')};
  cursor: pointer;
`

export const NextButton = styled.button<{ isPlaying: boolean }>`
  border: none;
  background: none;
  color: ${(props) => (props.disabled ? 'gray' : 'orange')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 12px;
`
