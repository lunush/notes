import styled from 'styled-components'
import { EDITOR_MENU_HEIGHT } from './common/variables'

const EditorMenu = styled.div`
  position: relative;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.border};
  grid-auto-flow: column;
  height: ${EDITOR_MENU_HEIGHT};
`

export default EditorMenu
