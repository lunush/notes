import styled from 'styled-components'
import Icon from './common/Icon'
import { MOBILE_BREAKPOINT } from './common/variables'

const ToggleSidebarButton = styled(Icon)`
  position: absolute;
  font-size: 26px;
  top: 4px;
  left: 6px;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 42px;
  }
`

export default ToggleSidebarButton
