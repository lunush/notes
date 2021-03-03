import styled from 'styled-components'
import { clickable } from './css'
import { MOBILE_BREAKPOINT } from './variables'

const Popup = styled.div`
  position: fixed;
  z-index: 100001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 35vh;
  min-height: 200px;
  width: 60vw;
  text-align: center;
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textPrimary};

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 14px;
  }

  & #header {
    position: relative;
    top: 6px;
    height: 20px;
    width: 100%;
    font-size: 14px;
  }

  & #icon {
    position: absolute;
    top: 1px;
    left: 8px;
  }

  & #close-button {
    position: absolute;
    top: 1px;
    right: 8px;
  }

  & #body {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & #left-button {
    position: absolute;
    bottom: 30px;
    left: 50px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    padding: 5px;
    ${clickable}
  }

  & #right-button {
    position: absolute;
    bottom: 30px;
    right: 50px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    padding: 5px;
    ${clickable}
  }

  & #center-button {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px 30px;
    bottom: 10px;
    ${clickable}
  }
`

export default Popup
