import styled from 'styled-components'
import Icon from './common/Icon'

const SidebarListItemIcon = styled(Icon)`
  position: absolute;
  color: ${({ theme }) => theme.textPrimary};
  left: 10px;
  top: 16px;
`

export default SidebarListItemIcon
