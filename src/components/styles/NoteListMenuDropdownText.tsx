import styled from 'styled-components'

const NoteListMenuDropdownText = styled.div`
  position: absolute;
  left: 12px;
  top: 32px;
  width: 150px;

  & div {
    visibility: visible !important;
    cursor: pointer;
    position: absolute;
    left: 50px;
    top: 0;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.textSecondary};
  }

  & div:hover {
    color: ${({ theme }) => theme.textPrimary};
    text-decoration-color: ${({ theme }) => theme.textPrimary};
  }

  & div:active {
    color: ${({ theme }) => theme.textSecondary};
  }
`

export default NoteListMenuDropdownText
