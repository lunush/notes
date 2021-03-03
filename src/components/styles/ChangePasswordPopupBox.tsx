import styled from 'styled-components'
import Popup from './common/Popup'

const ChangePasswordPopupBox = styled(Popup)`
  height: 15%;

  & #body {
    top: 50%;
  }
  & #center-button {
    padding: 10px 30px;
    bottom: 10px;
  }

  & input {
    display: block;
    box-sizing: border-box;
    outline: none;
    background: ${({ theme }) => theme.primary};
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    height: 40px;
    width: 50%;
    transform: translateX(50%);
    min-width: 150px;
    margin-bottom: 10px;
  }
`

export default ChangePasswordPopupBox
