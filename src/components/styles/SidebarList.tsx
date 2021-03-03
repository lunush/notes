import styled from 'styled-components'
import { scrollbar } from './common/css'

const SidebarList = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh - 50px);

  ${scrollbar}
`

export default SidebarList
