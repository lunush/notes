import styled from 'styled-components'
import { scrollbar } from './common/css'
import {
  MOBILE_BREAKPOINT,
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  EDITOR_MENU_HEIGHT,
} from './common/variables'
import TextArea from './common/TextArea'

const NoteBodyInput = styled(TextArea)`
  height: calc(
    100vh - 48px - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - ${EDITOR_MENU_HEIGHT}
  );
  padding: 7px 15px 7px 15px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.textPrimary};
  background: ${({ theme }) => theme.primary};
  ${scrollbar};

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    height: calc(100vh - 48px - ${EDITOR_MENU_HEIGHT});
  }
`

export default NoteBodyInput
