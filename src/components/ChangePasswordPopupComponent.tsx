import React, { useContext, useState } from 'react'
import StateContext from './tools/StateContext'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'

import ChangePasswordPopupBox from './styles/ChangePasswordPopupBox'
import Icon from './styles/common/Icon'
import { generateEncryptionKey } from './tools/helpers'

const initialPassword = {
  password1: '',
  password2: '',
}

function ChangePasswordPopupComponent() {
  const { updateUI, dispatch } = useContext(StateContext)
  const [password, setPassword] = useState(initialPassword)
  const { ref } = useHideComponentOnClickOutside(
    updateUI,
    'set-change-password-popup-state'
  )

  const { password1, password2 } = password

  const handlePasswordChange = () => {
    if (password1 !== password2) {
      alert('Passwords do not match')
      setPassword(initialPassword)
      return
    }
    changeKey(password1)
    alert('Changed Successfully')
    updateUI({ type: 'set-change-password-popup-state', value: false })
    setPassword(initialPassword)
  }

  const changeKey = (password: string) => {
    const newKey = generateEncryptionKey(password)
    dispatch({ type: 'set-key', key: newKey })
  }

  return (
    <ChangePasswordPopupBox ref={ref}>
      <div id="header">
        Change Password
        <Icon
          className="far fa-times-circle"
          id="close-button"
          onClick={() =>
            updateUI({ type: 'set-change-password-popup-state', value: false })
          }
        />
      </div>
      <div id="body">
        <input
          type="password"
          value={password1}
          onChange={(e) => {
            setPassword({ ...password, password1: e.target.value })
          }}
        />
        <input
          type="password"
          value={password2}
          onChange={(e) => {
            setPassword({ ...password, password2: e.target.value })
          }}
        />
      </div>
      <div
        data-testid="test-password-button"
        id="center-button"
        title="Test Password"
        onClick={() => handlePasswordChange()}
      >
        Change
      </div>
    </ChangePasswordPopupBox>
  )
}

export default ChangePasswordPopupComponent
