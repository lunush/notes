import styled from 'styled-components'
import TextInput from './common/TextInput'
import { MOBILE_BREAKPOINT } from './common/variables'

const CurrentFolderInput = styled(TextInput)`
  position: absolute;
  padding: 0;
  left: 34px;
  top: 12px;
  width: 60%;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: bold;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    width: 40%;
  }
`

export default CurrentFolderInput
