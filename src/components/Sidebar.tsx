import React, { useState, useEffect, useContext } from 'react'
import StateContext from './tools/StateContext'
import CurrentFolderInput from './styles/CurrentFolderInput'
import SidebarBox from './styles/SidebarBox'
import SidebarMenu from './styles/SidebarMenu'
import SidebarList from './styles/SidebarList'
import SidebarListItem from './styles/SidebarListItem'
import SidebarListItemIcon from './styles/SidebarListItemIcon'
import SidebarListItemTitle from './styles/SidebarListItemTitle'
import SidebarListItemCounter from './styles/SidebarListItemCounter'
import DeleteFolderButton from './styles/DeleteFolderButton'
import EditFolderButton from './styles/EditFolderButton'
import CreateFolderButton from './styles/CreateFolderButton'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'
import { State } from 'src/types'

interface localState {
  state: State
  dispatch: any
  ui: any
  updateUI: any
}

function Sidebar() {
  const { state, dispatch, ui, updateUI }: localState = useContext(StateContext)
  const { ref } = useHideComponentOnClickOutside(updateUI, 'set-sidebar-state')
  const [currentlyEditedFolder, setCurrentlyEditedFolder] = useState('')

  const numberOfArchivedNotes = state.notes.filter((n) => n.isArchived === true)
    .length

  const handleEditing = (prevFolder: string) => {
    dispatch({
      type: 'edit-folder',
      prevFolder,
      newFolder: currentlyEditedFolder,
    })
  }

  useEffect(() => {
    setCurrentlyEditedFolder('')
  }, [state.newlyCreatedFolderToTerminateIfEmpty])

  const checkedRef = !ui.isDeleteFolderWarningShown ? ref : undefined

  return (
    <SidebarBox isVisible={ui.isSidebarVisible} ref={checkedRef}>
      <SidebarMenu>
        <CreateFolderButton
          data-testid="create-folder-button"
          title="Create Folder"
          className="fas fa-plus"
          onClick={() => dispatch({ type: 'create-folder' })}
        />
      </SidebarMenu>
      <SidebarList data-testid="folder-list">
        <SidebarListItem
          data-testid="archive"
          title="Archived Notes"
          onClick={() => {
            dispatch({ type: 'open-archive' })
            updateUI({ type: 'set-sidebar-state', value: false })
            if (!numberOfArchivedNotes)
              updateUI({ type: 'set-archive-warning-state', value: true })
          }}
        >
          <SidebarListItemIcon className="far fa-folder-open" />
          <SidebarListItemTitle>Archive</SidebarListItemTitle>
          <SidebarListItemCounter>
            Notes: {numberOfArchivedNotes}
          </SidebarListItemCounter>
        </SidebarListItem>
        <SidebarListItem
          data-testid="listed-folder-all"
          title="All Notes"
          onClick={() => {
            dispatch({ type: 'select-folder', folder: 'all' })
            updateUI({ type: 'set-sidebar-state', value: false })
          }}
        >
          <SidebarListItemIcon className="fas fa-inbox" />
          <SidebarListItemTitle>All Notes</SidebarListItemTitle>
          <SidebarListItemCounter>
            Notes: {state.notes.filter((n) => n.isArchived === false).length}
          </SidebarListItemCounter>
        </SidebarListItem>
        {state.folders
          .filter((f) => f !== 'all')
          .sort((a, b) => {
            return a.toUpperCase().localeCompare(b.toUpperCase())
          })
          .map((f) => (
            <SidebarListItem
              key={f}
              title={f}
              data-testid="listed-folder"
              onClick={() => {
                dispatch({ type: 'select-folder', folder: f })
                updateUI({ type: 'set-sidebar-state', value: false })
              }}
            >
              <div>
                {state.currentlyEditedFolder === f ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleEditing(f)
                    }}
                  >
                    <SidebarListItemIcon className="far fa-folder" />
                    <CurrentFolderInput
                      value={currentlyEditedFolder}
                      autoFocus
                      placeholder="New Folder"
                      onFocus={(e) => {
                        e.stopPropagation()
                        setCurrentlyEditedFolder(f)
                      }}
                      onChange={(e) => {
                        e.stopPropagation()
                        setCurrentlyEditedFolder(e.target.value)
                      }}
                      onBlur={(e) => {
                        e.stopPropagation()
                        handleEditing(f)
                      }}
                    />
                  </form>
                ) : (
                  <div>
                    <SidebarListItemIcon className="far fa-folder" />
                    <SidebarListItemTitle>{f}</SidebarListItemTitle>
                  </div>
                )}
                <SidebarListItemCounter>
                  Notes:{' '}
                  {
                    state.notes
                      .filter((n) =>
                        n.folders.split(', ').find((nf) => nf === f)
                      )
                      .filter((n) => n.isArchived === false).length
                  }
                </SidebarListItemCounter>
              </div>
              <EditFolderButton
                className="far fa-edit"
                title="Change Folder Name"
                data-testid="make-folder-editable-button"
                onClick={(e) => {
                  e.stopPropagation()
                  dispatch({
                    type: 'make-folder-editable',
                    folder: f,
                  })
                }}
              />
              <DeleteFolderButton
                data-testid="show-delete-folder-warning-button"
                title="Delete Folder"
                className="far fa-trash-alt"
                onClick={(e) => {
                  e.stopPropagation()
                  dispatch({ type: 'prepare-folder-for-deletion', folder: f })
                  updateUI({
                    type: 'set-delete-folder-warning-state',
                    value: true,
                  })
                }}
              />
            </SidebarListItem>
          ))}
      </SidebarList>
    </SidebarBox>
  )
}

export default Sidebar
