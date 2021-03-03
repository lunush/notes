import React, { useContext } from 'react'
import StateContext from './tools/StateContext'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'

import ArchivedNotesWarningBox from './styles/ArchivedNotesWarningBox'
import Icon from './styles/common/Icon'

function ArchivedNotesWarningComponent() {
  const { updateUI } = useContext(StateContext)
  const { ref } = useHideComponentOnClickOutside(
    updateUI,
    'set-archive-warning-state'
  )
  return (
    <ArchivedNotesWarningBox ref={ref}>
      <div id="header">
        <i className="fas fa-exclamation-triangle" id="icon" />
        Warning!
        <Icon
          className="fas fa-times"
          id="close-button"
          onClick={() =>
            updateUI({ type: 'set-archive-warning-state', value: false })
          }
        />
      </div>
      <div id="body">You have no archived notes.</div>
      <div
        id="center-button"
        onClick={() =>
          updateUI({ type: 'set-archive-warning-state', value: false })
        }
      >
        OK
      </div>
    </ArchivedNotesWarningBox>
  )
}

export default ArchivedNotesWarningComponent
