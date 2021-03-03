import styled from 'styled-components'
import TextInput from './common/TextInput'

const NoteFolderInput = styled(TextInput)`
  position: absolute;
  top: 6px;
  left: 120px;
  height: 18;
  width: 50%;
  font-size: 12px;
  padding: 8px 8px 10px 8px;
  border-left-color: ${({ theme }) => theme.border};
`

export default NoteFolderInput
