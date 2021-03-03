import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from './common/variables'

interface Props {
  isVisible: Boolean
}

const SidebarBox = styled.div<Props>`
  position: fixed;
  display: inline-block;
  width: 300px;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: -310px;
  z-index: 100000;
  color: ${({ theme }) => theme.textPrimary};
  background: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease-in-out;
  border-right: 1px solid ${({ theme }) => theme.border};
  transform: translateX(
    ${({ isVisible }) => (isVisible === true ? '310px' : '0px')}
  );

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    width: 200px;
    left: -210px;
    transform: translateX(
      ${({ isVisible }) => (isVisible === true ? '210px' : '0px')}
    );
  }
`

export default SidebarBox
