import styled from 'styled-components'
import { NOTE_LIST_WIDTH } from './common/variables'

const Grid = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textPrimary};
  display: grid;
  gap: 0;
  grid-template-columns: ${NOTE_LIST_WIDTH} auto;
  grid-template-rows: auto;
  position: absolute;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export default Grid
