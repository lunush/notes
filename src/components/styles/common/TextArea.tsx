import styled from 'styled-components'

const TextArea = styled.textarea`
  font-family: 'Noto Sans', sans-serif;
  width: 100%;
  height: 24px;
  resize: none;
  color: ${({ theme }) => theme.textPrimary};
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding: 7px;
  border: 1px solid transparent;
`

export default TextArea
