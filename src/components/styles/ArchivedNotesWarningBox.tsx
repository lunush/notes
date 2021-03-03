import styled from 'styled-components'
import Popup from './common/Popup'

const ArchivedNotesWarningBox = styled(Popup)`
  height: 15%;

  & #icon {
    color: ${({ theme }) => theme.warning};
  }

  & #left-button {
    bottom: 20px;
  }

  & #right-button {
    bottom: 20px;
  }
`

export default ArchivedNotesWarningBox
