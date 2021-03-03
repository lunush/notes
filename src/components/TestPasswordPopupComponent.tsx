import React, { useContext, useState } from 'react'
import StateContext from './tools/StateContext'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'

import TestPasswordPopupBox from './styles/TestPasswordPopupBox'
import Icon from './styles/common/Icon'
import { generateEncryptionKey } from './tools/helpers'

function TestPasswordPopupComponent() {
  const { updateUI, state } = useContext(StateContext)
  const [password, setPassword] = useState('')
  const { ref } = useHideComponentOnClickOutside(
    updateUI,
    'set-test-password-popup-state'
  )

  const handlePasswordTest = () => {
    if (generateEncryptionKey(password) !== state.key) {
      alert('Passwords do not match')
      setPassword('')
      return
    }
    alert('Password is correct!')
    updateUI({ type: 'set-test-password-popup-state', value: false })
    setPassword('')
  }

  return (
    <TestPasswordPopupBox ref={ref}>
      <div id="header">
        Test Password
        <Icon
          className="fas fa-times"
          id="close-button"
          onClick={() =>
            updateUI({ type: 'set-test-password-popup-state', value: false })
          }
        />
      </div>
      <div id="body">
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div
        data-testid="test-password-button"
        id="center-button"
        title="Test Password"
        onClick={() => handlePasswordTest()}
      >
        Test
      </div>
    </TestPasswordPopupBox>
  )
}

export default TestPasswordPopupComponent
