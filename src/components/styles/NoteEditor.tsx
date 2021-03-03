import styled from 'styled-components'
import { EDITOR_MENU_HEIGHT } from './common/variables'

const NoteEditor = styled.div`
  height: calc(100% - ${EDITOR_MENU_HEIGHT});
`

export default NoteEditor
