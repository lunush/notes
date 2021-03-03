import styled from 'styled-components'
import { scrollbar } from './common/css'
import {
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  MOBILE_BREAKPOINT,
  HEADER_HEIGHT_MOBILE,
} from './common/variables'

const NoteListBox = styled.div`
  border-right: 1px solid ${({ theme }) => theme.border};
  height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});

  & div#scrollable {
    height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - 20px - 80px);

    @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
      height: calc(
        100vh - ${HEADER_HEIGHT_MOBILE} - ${FOOTER_HEIGHT} - 20px - 90px
      );
    }
    ${scrollbar}
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    height: calc(100vh - ${HEADER_HEIGHT_MOBILE} - ${FOOTER_HEIGHT});
    width: 100vw;
  }
`

export default NoteListBox
