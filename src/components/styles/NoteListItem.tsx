import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from './common/variables'

const NoteListItem = styled.div`
  position: relative;
  padding: 10px;
  height: 65px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    height: 95px;
  }
`

export default NoteListItem
