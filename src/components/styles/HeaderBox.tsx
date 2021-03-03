import styled from 'styled-components'
import {
  HEADER_HEIGHT,
  MOBILE_BREAKPOINT,
  HEADER_HEIGHT_MOBILE,
} from './common/variables'

const HeaderBox = styled.div`
  position: relative;
  grid-column: 1 / -1;
  height: ${HEADER_HEIGHT};
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  top: 0;

  & div#current-folder {
    position: absolute;
    bottom: 3px;
    left: 10px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    height: ${HEADER_HEIGHT_MOBILE};
  }
`

export default HeaderBox
