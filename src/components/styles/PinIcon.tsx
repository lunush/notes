import styled from 'styled-components'
import Icon from './common/Icon'
import { MOBILE_BREAKPOINT } from './common/variables'

const PinIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 13px;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    right: 20px;
    top: 18px;
    font-size: 20px;
  }
`

export default PinIcon
