import styled from 'styled-components'

const TextInput = styled.input`
  font-family: 'Noto Sans', sans-serif;
  width: 100%;
  height: 24px;
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.primary};
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding: 15px 7px 15px 7px;
  border: 1px solid transparent;
`

export default TextInput
