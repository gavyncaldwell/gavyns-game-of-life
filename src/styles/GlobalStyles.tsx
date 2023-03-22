import styled from 'styled-components'

import { keyframes } from 'styled-components'

export const gradientbg = keyframes`
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 0% 0%;
   }
`

export const GameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding-top: 20px;
  background: linear-gradient(to bottom right, #fd746c, #5c258d, #2cac82, #00c9ff, #5c258d, #e73827);
  background-repeat: no-repeat;
  background-size: 1000% 1000%;
  animation: ${gradientbg} 200s ease infinite;
`
