import styled from 'styled-components'
import Popup from './common/Popup'

const DeleteNoteWarningBox = styled(Popup)`
  height: 15%;

  & #icon {
    color: ${({ theme }) => theme.error};
  }

  & #center-button {
    padding: 10px 30px;
    bottom: 10px;
  }
`

export default DeleteNoteWarningBox
