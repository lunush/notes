import React, { useContext } from 'react'
import StateContext from './tools/StateContext'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'

import ResetDataWarningBox from './styles/ResetDataWarningBox'
import Icon from './styles/common/Icon'

function ResetDataWarningComponent() {
  const { updateUI, dispatch } = useContext(StateContext)
  const { ref } = useHideComponentOnClickOutside(
    updateUI,
    'set-reset-data-warning-state'
  )

  return (
    <ResetDataWarningBox ref={ref}>
      <div id="header">
        <i className="fas fa-minus-circle" id="icon" />
        Reset All Data
        <Icon
          className="fas fa-times"
          id="close-button"
          onClick={() =>
            updateUI({ type: 'set-reset-data-warning-state', value: false })
          }
        />
      </div>
      <div id="body">Are you sure you want to reset all data?</div>
      <div
        data-testid="reset-data-button"
        id="center-button"
        title="Irreversibly Reset All Data"
        onClick={() => {
          dispatch({ type: 'reset-state' })
          sessionStorage.clear()
          localStorage.clear()
          window.location.reload()
        }}
      >
        Reset All Data
      </div>
    </ResetDataWarningBox>
  )
}

export default ResetDataWarningComponent
