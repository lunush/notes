import styled from 'styled-components'
import TextInput from './common/TextInput'
import { MOBILE_BREAKPOINT } from './common/variables'

const SearchInput = styled(TextInput)`
  position: absolute;
  cursor: pointer;
  width: 178px;
  bottom: 10px;
  left: 5%;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    height: 40px;
    font-size: 16px;
    bottom: 12px;
    width: 90vw;
  }
`

export default SearchInput
