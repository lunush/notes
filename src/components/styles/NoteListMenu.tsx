import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from './common/variables'

const NoteListMenu = styled.div`
  position: relative;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  padding: 10px;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    height: 110px;
  }
`

export default NoteListMenu
