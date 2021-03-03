import styled from 'styled-components'
import Popup from './common/Popup'

const TestPasswordPopupBox = styled(Popup)`
  height: 15%;

  & #body {
    top: 40%;
  }
  & #center-button {
    padding: 10px 30px;
  }

  & input {
    box-sizing: border-box;
    outline: none;
    background: ${({ theme }) => theme.primary};
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    height: 40px;
    width: 50%;
    min-width: 150px;
  }
`

export default TestPasswordPopupBox
