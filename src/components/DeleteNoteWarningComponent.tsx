import React, { useContext } from 'react'
import StateContext from './tools/StateContext'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'

import DeleteNoteWarningBox from './styles/DeleteNoteWarningBox'
import Icon from './styles/common/Icon'

function DeleteNoteWarningComponent() {
  const { updateUI, dispatch, state } = useContext(StateContext)
  const { ref } = useHideComponentOnClickOutside(
    updateUI,
    'set-delete-note-warning-state'
  )

  return (
    <DeleteNoteWarningBox ref={ref}>
      <div id="header">
        <i className="fas fa-minus-circle" id="icon" />
        Delete Note
        <Icon
          className="fas fa-times"
          id="close-button"
          onClick={() =>
            updateUI({ type: 'set-delete-note-warning-state', value: false })
          }
        />
      </div>
      <div id="body">Are you sure you want to delete this note?</div>
      <div
        data-testid="delete-note-button"
        id="center-button"
        title="Permanently Delete Note"
        onClick={() => {
          dispatch({
            type: 'delete-note',
            id: state.selectedNoteId,
          })
          updateUI({ type: 'set-delete-note-warning-state', value: false })
          updateUI({ type: 'set-editor-state', value: false })
          setTimeout(() => {
            updateUI({ type: 'set-note-state', value: false })
          }, 500)
        }}
      >
        Delete
      </div>
    </DeleteNoteWarningBox>
  )
}

export default DeleteNoteWarningComponent
