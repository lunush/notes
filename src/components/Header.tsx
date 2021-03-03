import React, { memo, useContext } from 'react'
import StateContext from './tools/StateContext'

import HeaderBox from './styles/HeaderBox'
import ToggleSidebarButton from './styles/ToggleSidebarButton'
import ToggleSettingsButton from './styles/ToggleSettingsButton'

const Header = memo(() => {
  const { updateUI } = useContext(StateContext)
  return (
    <HeaderBox>
      <ToggleSidebarButton
        data-testid="toggle-sidebar"
        title="Open Sidebar"
        className="fas fa-bars"
        onClick={() => updateUI({ type: 'set-sidebar-state', value: true })}
      />
      <ToggleSettingsButton
        data-testid="toggle-settings"
        title="Open Settings"
        className="fas fa-cog"
        onClick={() => {
          updateUI({ type: 'toggle-settings' })
        }}
      />
    </HeaderBox>
  )
})

export default Header
