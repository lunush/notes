import styled from 'styled-components'
import Popup from './common/Popup'

const ResetDataWarningBox = styled(Popup)`
  height: 15%;

  & #icon {
    color: ${({ theme }) => theme.error};
  }

  & #left-button {
    bottom: 20px;
  }

  & #right-button {
    bottom: 20px;
  }
`

export default ResetDataWarningBox
