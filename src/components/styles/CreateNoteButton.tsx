import styled from 'styled-components'
import Icon from './common/Icon'
import { MOBILE_BREAKPOINT } from './common/variables'

const CreateNoteButton = styled(Icon)`
  position: absolute;
  font-size: 24px;
  top: 10px;
  right: 12px;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 38px;
    top: 10px;
    right: 12px;
  }
`

export default CreateNoteButton
