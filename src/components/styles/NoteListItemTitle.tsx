import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from './common/variables'

const NoteListItemTitle = styled.div`
  position: absolute;
  font-weight: bold;
  color: ${({ theme }) => theme.textPrimary};
  top: 12px;
  left: 10px;
  height: 20px;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    width: 90%;
    font-size: 24px;
    height: 30px;
    top: 16px;
  }
`

export default NoteListItemTitle
