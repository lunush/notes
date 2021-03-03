import React, { memo, useContext } from 'react'
import StateContext from './tools/StateContext'
import { sortArray, removeHTMLandMarkdown } from './tools/helpers'
import useHideComponentOnClickOutside from './tools/useHideComponentOnClickOutside'

import PinIcon from './styles/PinIcon'
import NoteListBox from './styles/NoteListBox'
import NoteListMenu from './styles/NoteListMenu'
import NoteListMenuDropdownText from './styles/NoteListMenuDropdownText'
import NoteListItem from './styles/NoteListItem'
import NoteListItemTitle from './styles/NoteListItemTitle'
import NoteListItemBody from './styles/NoteListItemBody'
import NoteListMenuDropdown from './styles/NoteListMenuDropdown'
import SearchInput from './styles/SearchInput'
import CreateNoteButton from './styles/CreateNoteButton'
import NoteListMenuCurrentFolder from './styles/NoteListMenuCurrentFolder'
import { Note, State } from 'src/types'

interface localState {
  state: State
  dispatch: any
  ui: any
  updateUI: any
}

const NoteListComponent = memo(() => {
  const { state, dispatch, ui, updateUI }: localState = useContext(StateContext)
  const { ref } = useHideComponentOnClickOutside(
    updateUI,
    'set-notelist-dropdown-state'
  )

  const archivedNotes = state.notes.filter((n) => n.isArchived)
  const removeArchivedNotes = state.notes.filter((n) => !n.isArchived)
  const filteredByFolder = removeArchivedNotes.filter((n) =>
    n.folders.split(', ').includes(state.selectedFolder)
  )
  const finalArray = state.areArchivedNotesShown
    ? archivedNotes
    : filteredByFolder

  const sorted: Note[] = sortArray(finalArray, state.sortBy)

  const filteredBySearch =
    state.searchValue === ''
      ? sorted
      : sorted.filter(
          (n) =>
            n.title.toUpperCase().includes(state.searchValue.toUpperCase()) ||
            n.body.toUpperCase().includes(state.searchValue.toUpperCase())
        )
  const dropdownMenuItems = ['Date Created', 'Date Modified', 'Title']

  if (!archivedNotes.length && state.areArchivedNotesShown)
    dispatch({ type: 'select-folder', folder: 'all' })
  if (!finalArray.length && !state.areArchivedNotesShown)
    dispatch({ type: 'create-note' })

  return (
    <NoteListBox data-testid="note-list">
      <NoteListMenu>
        <NoteListMenuDropdownText>
          Sort by{' '}
          <div
            data-testid="open-notelist-dropdown"
            title="Change Sorting Method"
            onClick={() =>
              updateUI({
                type: 'set-notelist-dropdown-state',
                value: true,
              })
            }
          >
            {state.sortBy.split(',')[0].trim()}
          </div>
        </NoteListMenuDropdownText>
        <NoteListMenuCurrentFolder
          data-testid="current-folder-indicator"
          title="Current Folder"
        >
          {state.areArchivedNotesShown
            ? 'Archive'
            : state.selectedFolder === 'all'
            ? 'All Notes'
            : `${state.selectedFolder}`}{' '}
          <i
            className={
              state.areArchivedNotesShown
                ? 'far fa-folder-open'
                : state.selectedFolder === 'all'
                ? 'fas fa-inbox'
                : 'far fa-folder'
            }
          />
        </NoteListMenuCurrentFolder>
        {ui.isNoteListDropdownVisible && (
          <NoteListMenuDropdown ref={ref}>
            {dropdownMenuItems.map((item) => {
              return (
                <div
                  key={item}
                  data-testid="notelist-dropdown-item"
                  onClick={() => {
                    dispatch({ type: 'set-sortby', value: item })
                    updateUI({
                      type: 'set-notelist-dropdown-state',
                      value: false,
                    })
                  }}
                >
                  {item}
                </div>
              )
            })}
          </NoteListMenuDropdown>
        )}
        <CreateNoteButton
          data-testid="create-note-button"
          title="Create Note"
          className="fas fa-plus"
          onClick={() => {
            dispatch({ type: 'create-note' })
          }}
        />
        <SearchInput
          placeholder="Search"
          value={state.searchValue || ''}
          onChange={(e) =>
            dispatch({ type: 'set-searchvalue', value: e.target.value })
          }
        />
      </NoteListMenu>
      <div id="scrollable">
        {filteredBySearch.map((n) => (
          <NoteListItem
            data-testid="listed-note"
            key={n.id}
            onClick={() => {
              dispatch({ type: 'select-note', id: n.id })
              updateUI({ type: 'set-editor-state', value: true })
            }}
          >
            {n.isPinned === true && (
              <PinIcon data-testid="pin-icon" className="fas fa-thumbtack" />
            )}
            <NoteListItemTitle>
              {removeHTMLandMarkdown(n.title.slice(0, 50))}
            </NoteListItemTitle>
            <NoteListItemBody>
              {removeHTMLandMarkdown(n.body.slice(0, 300))}
            </NoteListItemBody>
          </NoteListItem>
        ))}
      </div>
    </NoteListBox>
  )
})

export default NoteListComponent
