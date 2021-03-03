import React, { useContext, useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { parseComponent, sortArray } from './tools/helpers'
import StateContext from './tools/StateContext'
import { Note, State } from '../types'

import EditorBox from './styles/EditorBox'
import EditorMenu from './styles/EditorMenu'
import ToggleNoteButton from './styles/ToggleNoteButton'
import DeleteNoteButton from './styles/DeleteNoteButton'
import ArchiveNoteButton from './styles/ArchiveNoteButton'
import PinNoteButton from './styles/PinNoteButton'
import CloseEditorButton from './styles/CloseEditorButton'
import NoteEditor from './styles/NoteEditor'
import NoteTitleInput from './styles/NoteTitleInput'
import NoteFolderInput from './styles/NoteFolderInput'
import NoteBodyInput from './styles/NoteBodyInput'
import UneditableNote from './styles/UneditableNote'
import UneditableNoteTitle from './styles/UneditableNoteTitle'

interface localState {
  state: State
  dispatch: any
  ui: any
  updateUI: any
}

function Editor() {
  const { state, dispatch, ui, updateUI }: localState = useContext(StateContext)

  const archivedNotes = state.notes.filter((n) => n.isArchived)
  const removeArchivedNotes = state.notes.filter((n) => !n.isArchived)
  const filteredByFolder = removeArchivedNotes.filter((n) =>
    n.folders.split(', ').includes(state.selectedFolder)
  )
  const finalArray = state.areArchivedNotesShown
    ? archivedNotes
    : filteredByFolder

  const sorted = sortArray(finalArray, state.sortBy)

  const noteIndex = sorted.findIndex((n: Note) => n.id === state.selectedNoteId)
  const checkedNoteIndex = noteIndex === -1 ? 0 : noteIndex
  const [editedNote, setEditedNote] = useState(sorted[checkedNoteIndex])
  const [debouncedEditedNote] = useDebounce(editedNote, 500)

  const handleFolderChange = () => {
    if (editedNote.folders === '') return
    dispatch({
      type: 'edit-note',
      field: 'folders',
      value: editedNote.folders,
    })
    dispatch({ type: 'edit-folders' })
  }

  useEffect(() => {
    if (debouncedEditedNote.body === sorted[checkedNoteIndex].body) return
    dispatch({
      type: 'edit-note',
      field: 'body',
      value: debouncedEditedNote.body,
    })
  }, [debouncedEditedNote.body])

  useEffect(() => {
    if (debouncedEditedNote.title === sorted[checkedNoteIndex].title) return
    dispatch({
      type: 'edit-note',
      field: 'title',
      value: debouncedEditedNote.title,
    })
  }, [debouncedEditedNote.title])

  useEffect(() => {
    setEditedNote({
      ...sorted[checkedNoteIndex],
      folders: sorted?.[checkedNoteIndex]?.folders.replace(
        /all,\s|,\sall|all/g,
        ''
      ),
    })
  }, [state.selectedNoteId, sorted?.[checkedNoteIndex]?.folders])

  return (
    <EditorBox isVisible={ui.isEditorVisible}>
      <EditorMenu>
        <DeleteNoteButton
          data-testid="show-delete-note-warning-button"
          title="Delete Note"
          className="far fa-trash-alt"
          onClick={() =>
            updateUI({ type: 'set-delete-note-warning-state', value: true })
          }
        />
        <ArchiveNoteButton
          data-testid="archive-note-button"
          title="Archive Note"
          className="fas fa-archive"
          onClick={() => {
            dispatch({
              type: 'archive-note',
              id: sorted[checkedNoteIndex].id,
            })
          }}
        />
        <PinNoteButton
          data-testid="pin-note-button"
          title="Pin Note"
          className="fas fa-thumbtack"
          onClick={() => {
            dispatch({
              type: 'pin-note',
              id: sorted[checkedNoteIndex].id,
            })
          }}
        />
        <ToggleNoteButton
          data-testid="make-note-editable-button"
          title="Toggle Editor"
          className="fas fa-pen-square"
          onClick={() => {
            updateUI({ type: 'set-note-state', value: !ui.isNoteEditable })
          }}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleFolderChange()
          }}
          data-testid="editor-form"
        >
          <NoteFolderInput
            placeholder="Folders"
            title="Folders this note belongs to"
            id="folders"
            value={editedNote?.folders || ''}
            onChange={(e) => {
              setEditedNote({ ...editedNote, folders: e.target.value })
            }}
            onBlur={() => handleFolderChange()}
          />
        </form>
        {ui.isEditorVisible && (
          <CloseEditorButton
            isVisible={ui.isEditorVisible}
            data-testid="make-note-editable-button"
            title="Toggle Editor"
            className="fas fa-times"
            onClick={() => {
              updateUI({ type: 'set-editor-state', value: false })
              setTimeout(() => {
                updateUI({ type: 'set-note-state', value: false })
              }, 500)
            }}
          />
        )}
      </EditorMenu>
      {ui.isNoteEditable ? (
        <NoteEditor data-testid="editable-text">
          <NoteTitleInput
            autoFocus
            placeholder="Title"
            value={editedNote?.title || ''}
            data-testid="title-input"
            onChange={(e) =>
              setEditedNote({ ...editedNote, title: e.target.value })
            }
          />
          <NoteBodyInput
            placeholder="Body"
            data-testid="body-input"
            value={editedNote?.body || ''}
            onChange={(e) =>
              setEditedNote({ ...editedNote, body: e.target.value })
            }
          />
        </NoteEditor>
      ) : (
        <UneditableNote data-testid="uneditable-text" className="markdown-body">
          <UneditableNoteTitle>
            {sorted?.[checkedNoteIndex]?.title}
          </UneditableNoteTitle>
          {parseComponent(sorted?.[checkedNoteIndex]?.body)}
        </UneditableNote>
      )}
    </EditorBox>
  )
}

export default Editor
