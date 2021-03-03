import styled from 'styled-components'
import { scrollbar } from './common/css'
import {
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  EDITOR_MENU_HEIGHT,
  MOBILE_BREAKPOINT,
} from './common/variables'

const UneditableNote = styled.div`
  padding: 25px;
  height: calc(
    100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - ${EDITOR_MENU_HEIGHT}
  );
  width: calc(100vw - 200px);

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 15px;
    height: calc(100vh - ${EDITOR_MENU_HEIGHT});
    width: calc(100vw);
  }

  ${scrollbar}
`

export default UneditableNote
