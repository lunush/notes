import styled from 'styled-components'

const SidebarListItem = styled.div`
  position: relative;
  height: 70px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  &:hover input {
    background: transparent;
  }
`

export default SidebarListItem
