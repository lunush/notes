import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from './common/variables'

const NoteListItemBody = styled.div`
  position: absolute;
  font-size: 12px;
  color: ${({ theme }) => theme.textSecondary};
  bottom: 12px;
  left: 10px;
  height: 16px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    height: 22px;
    bottom: 16px;
  }
`

export default NoteListItemBody
