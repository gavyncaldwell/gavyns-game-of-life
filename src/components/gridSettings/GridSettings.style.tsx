import styled from 'styled-components'

export const SettingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 400px;
  padding: 32px;
  border-radius: 16px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 7px 29px 0px;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 200px;
  align-items: center;
  margin-top: 12px;
`

export const Input = styled.input`
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid black;
  height: 40px;
  width: 40px;
  font-size: 20px;
  margin: 12px;
`

export const Title = styled.h2`
  margin: 0;
  width: 100%;
  text-align: center;
`

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  width: 100%;
  text-align: center;
`

export const PlayButton = styled.button<{ isPlaying: boolean }>`
  border: none;
  background: none;
  color: ${(props) => (props.isPlaying ? 'red' : 'green')};
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 12px;
`
