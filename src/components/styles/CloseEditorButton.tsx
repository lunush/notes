import styled from 'styled-components'
import Icon from './common/Icon'
import { MOBILE_BREAKPOINT } from './common/variables'

interface Props {
  isVisible: Boolean
}

const CloseEditorButton = styled(Icon)<Props>`
  position: absolute;
  font-size: 28px;
  top: 3px;
  right: 12px;
  visibility: hidden;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    visibility: visible;
  }
`

export default CloseEditorButton
