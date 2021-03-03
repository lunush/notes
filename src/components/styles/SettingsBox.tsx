import styled from 'styled-components'
import { scrollbar } from './common/css'

interface Props {
  isVisible: Boolean
}

const SettingsBox = styled.div<Props>`
  position: fixed;
  display: grid;
  gap: 0;
  grid-template-columns: auto;
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: -101%;
  z-index: 100000;
  color: ${({ theme }) => theme.textPrimary};
  background: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.shadow};
  border-left: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.5s ease-in-out;
  transform: translateX(
    ${(props) => (props.isVisible === true ? '0px' : '101%')}
  );

  & .button {
    cursor: pointer;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme }) => theme.primary};
    border-radius: 10px;
  }

  & .button:hover {
    background: ${({ theme }) => theme.hover};
  }

  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    min-width: 300px;
    max-width: 1000px;
  }

  & #select-theme {
    position: relative;
    text-align: center;
    width: 100%;
  }

  & #reset-button {
    color: ${({ theme }) => theme.error};
    border: 1px solid ${({ theme }) => theme.error};
    margin-top: 10%;
    padding: 10px 30px;
  }

  & #theme-text {
    font-size: 26px;
    margin-bottom: 10px;
  }
  & #dropdown-menu-text {
    cursor: pointer;
    padding: 10px 5px 10px 5px;
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 10px;
  }
  & #dropdown-menu-text:hover {
    background: ${({ theme }) => theme.hover};
  }

  & .password {
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    width: 100%;
    margin-top: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 30%;
    min-height: 300px;
  }

  & .password input {
    box-sizing: border-box;
    outline: none;
    color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    font-size: 16px;
    height: 40px;
    width: 50%;
    margin: 0px 25%;
    margin-bottom: 20px;
    padding: 5px 8px;
  }

  & .success {
    color: ${({ theme }) => theme.textPrimary};
    border: 1px solid ${({ theme }) => theme.border};
  }

  & .success #right {
    position: relative;
    right: 0;
    border: 1px solid ${({ theme }) => theme.border};
    height: 45px;
    width: 100px;
    margin-right: 20px;
  }

  & .success #left {
    border: 1px solid ${({ theme }) => theme.border};
    height: 45px;
    width: 100px;
  }

  & #setup-button {
    color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.border};
    height: 45px;
    width: 50%;
    margin: 0px 25%;
    min-width: 100px;
  }

  ${scrollbar}
`

export default SettingsBox
