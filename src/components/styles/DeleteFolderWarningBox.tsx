import styled from 'styled-components'
import Popup from './common/Popup'
import { MOBILE_BREAKPOINT } from './common/variables'

const DeleteNoteWarningBox = styled(Popup)`
  min-height: 300px !important;

  & #icon {
    color: ${({ theme }) => theme.error};
  }

  & #body {
    top: 35%;
  }

  & input {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    width: 50%;

    @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
      font-size: 14px;
    }
  }
`

export default DeleteNoteWarningBox
