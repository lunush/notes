import React, { useState, useContext } from 'react'
import StateContext from './tools/StateContext'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'

import DeleteFolderWarningBox from './styles/DeleteFolderWarningBox'
import Icon from './styles/common/Icon'
import TextInput from './styles/common/TextInput'

function DeleteFolderWarningComponent() {
  const { updateUI, dispatch, state } = useContext(StateContext)
  const [confirmedFolder, setConfirmedFolder] = useState('')
  const { ref } = useHideComponentOnClickOutside(
    updateUI,
    'set-delete-folder-warning-state'
  )

  const preparedFolder = state.preparedFolderToBeDeleted

  return (
    <DeleteFolderWarningBox ref={ref}>
      <div id="header">
        <i className="fas fa-minus-circle" id="icon" />
        Delete Folder
        <Icon
          className="fas fa-times"
          id="close-button"
          onClick={() =>
            updateUI({ type: 'set-delete-folder-warning-state', value: false })
          }
        />
      </div>
      <div id="body">
        Are you sure you want to delete this folder? It will delete all notes
        this folder contains. Type the name of the folder (
        <strong>{preparedFolder}</strong>) to confirm.
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (confirmedFolder !== preparedFolder) {
            alert('Wrong folder name.')
            updateUI({ type: 'set-delete-folder-warning-state', value: false })
            return
          }
          dispatch({
            type: 'delete-folder',
          })
          updateUI({ type: 'set-delete-folder-warning-state', value: false })
        }}
      >
        <TextInput
          placeholder="Confirmation"
          autoFocus
          value={confirmedFolder}
          onChange={(e) => {
            e.stopPropagation()
            setConfirmedFolder(e.target.value)
          }}
        />
      </form>
      <div
        data-testid="delete-folder-button"
        id="center-button"
        title="Permanently Delete Folder"
        onClick={(e) => {
          e.stopPropagation()
          if (confirmedFolder !== preparedFolder) {
            alert('Wrong folder name.')
            updateUI({ type: 'set-delete-folder-warning-state', value: false })
            return
          }
          dispatch({
            type: 'delete-folder',
          })
          updateUI({ type: 'set-delete-folder-warning-state', value: false })
        }}
      >
        Delete
      </div>
    </DeleteFolderWarningBox>
  )
}

export default DeleteFolderWarningComponent
