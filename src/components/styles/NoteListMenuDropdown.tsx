import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from './common/variables'

const NoteListMenuDropdown = styled.div`
  position: absolute;
  left: 53px;
  top: 50px;
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  box-shadow: 2px 2px 2px 0px ${({ theme }) => theme.shadow};
  z-index: 99998;
  overflow: hidden;

  & div {
    cursor: pointer;
    height: 50px;
    font-size: 18px;
    padding: 12px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  & div:hover {
    background: ${({ theme }) => theme.hover};
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    width: 200px;
  }
`

export default NoteListMenuDropdown
