import React, { useContext, useState } from 'react'
import StateContext from './tools/StateContext'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'
import themes from './styles/common/themes'

import SettingsBox from './styles/SettingsBox'
import SettingsThemeDropdown from './styles/SettingsThemeDropdown'
import CloseSettingsButton from './styles/CloseSettingsButton'
import { generateEncryptionKey } from './tools/helpers'

function Settings() {
  const { ui, updateUI, state, dispatch } = useContext(StateContext)
  const { ref } = useHideComponentOnClickOutside(
    updateUI,
    'set-settings-theme-dropdown-state'
  )
  const [password, setPassword] = useState({
    password1: '',
    password2: '',
  })
  const availableThemes = ['light', 'dark']

  const handlePasswordSubmit = () => {
    const { password1, password2 } = password
    if (password1 !== password2 || password1 === '') {
      alert('Enter a valid password')
      return
    }
    const newKey = generateEncryptionKey(password1)

    dispatch({ type: 'set-key', key: newKey })
    setPassword({ password1: '', password2: '' })
  }

  return (
    <SettingsBox isVisible={ui.isSettingsVisible}>
      <CloseSettingsButton
        className="fas fa-times"
        onClick={() => {
          updateUI({ type: 'toggle-settings' })
        }}
      />
      <div className="container">
        <div id="select-theme">
          <div id="theme-text">Theme</div>
          <div
            id="dropdown-menu-text"
            onClick={() => {
              updateUI({
                type: 'set-settings-theme-dropdown-state',
                value: true,
              })
            }}
          >
            {ui.theme.name}
          </div>
          {ui.isSettingsThemeDropdownVisible && (
            <SettingsThemeDropdown ref={ref}>
              {availableThemes.map((item) => {
                return (
                  <div
                    key={item}
                    onClick={() => {
                      updateUI({ type: 'set-theme', value: item })
                      updateUI({
                        type: 'set-settings-theme-dropdown-state',
                        value: false,
                      })
                    }}
                  >
                    {themes[item].name}
                  </div>
                )
              })}
            </SettingsThemeDropdown>
          )}
        </div>
        {!state.key ? (
          <div className="password">
            <h2>Enter your password</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handlePasswordSubmit()
              }}
            >
              <input
                type="password"
                value={password.password1}
                onChange={(e) =>
                  setPassword({ ...password, password1: e.target.value })
                }
              />
              <input
                type="password"
                value={password.password2}
                onChange={(e) =>
                  setPassword({ ...password, password2: e.target.value })
                }
              />
              <button id="setup-button" className="button">
                Setup
              </button>
            </form>
          </div>
        ) : (
          <div className="password success">
            <h2>Password is setup</h2>
            <div>
              <button
                id="right"
                className="button"
                data-testid="show-change-password-popup"
                onClick={() => {
                  updateUI({
                    type: 'set-change-password-popup-state',
                    value: true,
                  })
                }}
              >
                Change
              </button>
              <button
                id="left"
                className="button"
                data-testid="show-test-password-popup"
                onClick={() => {
                  updateUI({
                    type: 'set-test-password-popup-state',
                    value: true,
                  })
                }}
              >
                Test
              </button>
            </div>
          </div>
        )}
        <button
          id="reset-button"
          className="button"
          data-testid="show-reset-data-warning"
          onClick={() => {
            updateUI({ type: 'set-reset-data-warning-state', value: true })
          }}
        >
          Reset all data
        </button>
      </div>
    </SettingsBox>
  )
}

export default Settings
