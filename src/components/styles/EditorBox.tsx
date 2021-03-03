import styled from 'styled-components'
import {
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  EDITOR_MENU_HEIGHT,
  MOBILE_BREAKPOINT,
} from './common/variables'

interface Props {
  isVisible: Boolean
}

const EditorBox = styled.div<Props>`
  height: calc(
    100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - ${EDITOR_MENU_HEIGHT}
  );
  width: 100%;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    position: fixed;
    display: inline-block;
    height: calc(100vh - ${EDITOR_MENU_HEIGHT});
    top: 0;
    bottom: -151%;
    left: 0;
    right: 0;
    z-index: 100000;
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme }) => theme.primary};
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.shadow};
    border-left: 1px solid ${({ theme }) => theme.border};
    transition: transform 0.5s ease-in-out;
    transform: translateY(
      ${(props) => (props.isVisible === true ? '0px' : '151%')}
    );
  }
`

export default EditorBox
