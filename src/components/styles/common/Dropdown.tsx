import styled from 'styled-components'

const Dropdown = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.border};
  border-bottom-color: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;

  & div {
    cursor: pointer;
    padding: 10px 5px 10px 5px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  & div:hover {
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme }) => theme.hover};
  }
`

export default Dropdown
