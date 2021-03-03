import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from './common/variables'

const SidebarListItemTitle = styled.div`
  position: absolute;
  left: 35px;
  top: 15px;
  font-weight: bold;

  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    width: 40%;
  }
`

export default SidebarListItemTitle
