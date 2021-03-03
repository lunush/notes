import styled from 'styled-components'
import { FOOTER_HEIGHT } from './common/variables'

const FooterBox = styled.div`
  position: relative;
  grid-column: 1 / -1;
  height: ${FOOTER_HEIGHT};
  margin: 0;
  background: ${({ theme }) => theme.primary};
  border-top: 1px solid ${({ theme }) => theme.border};
  bottom: 0;
`

export default FooterBox
