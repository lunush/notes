import styled from 'styled-components'
import TextInput from './common/TextInput'

const NoteTitleInput = styled(TextInput)`
  height: 48px;
  font-size: 20px;
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.primary};
  padding: 19px 15px 19px 15px;
  border-bottom-color: ${({ theme }) => theme.border};
`

export default NoteTitleInput
