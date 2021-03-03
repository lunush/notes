import styled from 'styled-components'
import Dropdown from './common/Dropdown'

const SettingsThemeDropdown = styled(Dropdown)`
  position: absolute;
  top: 84px;
  background: ${({ theme }) => theme.primary};
  border-radius: 10px;
  box-shadow: 2px 2px 2px 0px ${({ theme }) => theme.shadow};
  width: calc(100% - 2px);

  & div {
    overflow: hidden;
  }
`

export default SettingsThemeDropdown
