import { v4 } from 'uuid'
import { sortArray, getRandomInt } from './helpers'
import { notes, folders, initialSelectedNoteId, emoji } from './data'
import { Note, State } from 'src/types'

export const initialState: State = {
  notes: [...notes],
  folders: [...folders],
  key: undefined,
  selectedNoteId: initialSelectedNoteId,
  selectedFolder: 'all',
  sortBy: 'Date Created',
  searchValue: '',
  currentlyEditedFolder: undefined,
  preparedFolderToBeDeleted: undefined,
  newlyCreatedFolderToTerminateIfEmpty: undefined,
  areArchivedNotesShown: false,
}

const noteTemplate = {
  title: '',
  body: '',
  folders: 'all',
  created: undefined,
  modified: undefined,
  isPinned: false,
  isArchived: false,
  isUsed: false,
  id: undefined,
}

type Actions =
  | 'reset-state'
  | 'create-note'
  | 'archive-note'
  | 'delete-note'
  | 'pin-note'
  | 'select-note'
  | 'edit-note'
  | 'set-searchvalue'
  | 'set-sortby'
  | 'edit-folders'
  | 'select-folder'
  | 'open-archive'
  | 'create-folder'
  | 'prepare-folder-for-deletion'
  | 'delete-folder'
  | 'make-folder-editable'
  | 'edit-folder'
  | 'set-key'

interface Action {
  type: Actions
  id?: String
  field?: 'folders' | 'body' | 'title'
  folder?: String
  prevFolder?: String
  newFolder?: String
  value?: String
  key?: String
}

export function reducer(state: State = initialState, action: Action) {
  const archivedNotes = state.notes.filter((n) => n.isArchived)
  const removeArchivedNotes = state.notes.filter((n) => !n.isArchived)
  const filteredByFolder = removeArchivedNotes.filter((n) =>
    n.folders.split(', ').includes(state.selectedFolder)
  )
  const finalArray = state.areArchivedNotesShown
    ? archivedNotes
    : filteredByFolder
  const sorted = sortArray(finalArray, state.sortBy)

  const selectedNoteIndex = sorted.findIndex((n: Note) => n.id === action.id)
  const newSelectedNoteIndex =
    selectedNoteIndex === 0 && sorted.length > 1
      ? 1
      : selectedNoteIndex === 0
      ? 0
      : selectedNoteIndex - 1

  switch (action.type) {
    case 'reset-state':
      return {
        ...initialState,
        notes: [],
        folders: [],
        selectedNoteId: undefined,
      }
    case 'create-note':
      const newNoteId = v4()
      const checkIfNotUsedNoteExists = state.notes.findIndex(
        (n) => n.isUsed === false
      )
      const newArrayOfNotes =
        checkIfNotUsedNoteExists === -1
          ? state.notes
          : state.notes.filter(
              (n) => n.id !== state.notes[checkIfNotUsedNoteExists].id
            )
      return {
        ...state,
        notes: [
          ...newArrayOfNotes,
          {
            ...noteTemplate,
            title: `${emoji[getRandomInt(0, emoji.length - 1)]} Note`,
            created: Date.now(),
            modified: Date.now(),
            folders:
              state.selectedFolder === 'all'
                ? 'all'
                : `all, ${state.selectedFolder}`,
            id: newNoteId,
          },
        ],
        selectedNoteId: newNoteId,
        areArchivedNotesShown: false,
        searchValue: '',
      }
    case 'archive-note':
      return {
        ...state,
        notes: state.notes.map((n) =>
          n.id === action.id ? { ...n, isArchived: !n.isArchived } : n
        ),
        selectedNoteId: state.notes
          .filter((n) => n.isArchived !== true)
          .filter((n) => n.folders.split(', ').includes(state.selectedFolder))[
          newSelectedNoteIndex
        ].id,
      }
    case 'delete-note':
      return {
        ...state,
        notes: state.notes.filter((n) => n.id !== action.id),
        selectedNoteId: sorted[newSelectedNoteIndex].id,
      }
    case 'pin-note':
      return {
        ...state,
        notes: state.notes.map((n) =>
          n.id === action.id ? { ...n, isPinned: !n.isPinned } : n
        ),
      }
    case 'select-note':
      return {
        ...state,
        selectedNoteId: action.id,
      }
    case 'edit-note':
      return {
        ...state,
        notes: state.notes.map((n) =>
          n.id === state.selectedNoteId
            ? {
                ...n,
                // @ts-ignore
                [action.field]: action.value,
                modified: Date.now(),
                isUsed: true,
              }
            : n
        ),
      }
    case 'set-searchvalue':
      return {
        ...state,
        searchValue: action.value,
      }
    case 'set-sortby':
      return {
        ...state,
        sortBy: action.value,
      }
    case 'edit-folders':
      const selectedNoteFolders = state.notes[
        state.notes.findIndex((n) => n.id === state.selectedNoteId)
      ].folders
        .replace(/^[, ]+|[, ]+$|[, ]+/g, ',')
        .replace(/^,+|,+$|/g, '')
        .replace(/^/g, 'all,')

      return {
        ...state,
        folders: [
          ...new Set(state.folders.concat(selectedNoteFolders.split(','))),
        ],
        notes: state.notes.map((n) =>
          n.id === state.selectedNoteId
            ? {
                ...n,
                folders: selectedNoteFolders.replace(/,/g, ', '),
                modified: Date.now(),
                isUsed: true,
              }
            : n
        ),
      }
    case 'select-folder':
      const numberOfNotes = state.notes
        .filter((n) => n.isArchived === false)
        .filter((n) => n.folders.split(', ').find((nf) => nf === action.folder))
        .length
      const folderHasNotes =
        numberOfNotes === 0
          ? undefined
          : state.notes
              .filter((n) => n.isArchived === false)
              .filter((n) =>
                n.folders.split(', ').find((f) => f === action.folder)
              )[0].id
      return {
        ...state,
        selectedFolder: action.folder,
        selectedNoteId: folderHasNotes,
        areArchivedNotesShown: false,
      }
    case 'open-archive':
      const numberOfArchivedNotes = state.notes.filter(
        (n) => n.isArchived === true
      ).length
      const firstArchivedNoteId =
        numberOfArchivedNotes === 0
          ? undefined
          : state.notes.filter((n) => n.isArchived === true)[0].id
      if (numberOfArchivedNotes === 0)
        return { ...state, isSidebarVisible: false }
      return {
        ...state,
        selectedNoteId: firstArchivedNoteId,
        areArchivedNotesShown: true,
      }
    case 'create-folder':
      const temporaryFolder = v4()
      return {
        ...state,
        folders: [...state.folders, temporaryFolder],
        currentlyEditedFolder: temporaryFolder,
        newlyCreatedFolderToTerminateIfEmpty: temporaryFolder,
      }
    case 'prepare-folder-for-deletion':
      return {
        ...state,
        preparedFolderToBeDeleted: action.folder,
      }
    case 'delete-folder':
      const validFolder =
        state.preparedFolderToBeDeleted === state.selectedFolder
          ? 'all'
          : state.selectedFolder
      return {
        ...state,
        selectedFolder: validFolder,
        selectedNoteId: state.notes.filter((n) =>
          n.folders.split(', ').find((f) => f === validFolder)
        )[0].id,
        folders: state.folders.filter(
          (f) => f !== state.preparedFolderToBeDeleted
        ),
        notes: state.notes.filter((n) => {
          return n.folders
            .split(', ')
            .includes(state.preparedFolderToBeDeleted as string)
            ? undefined
            : n
        }),
      }
    case 'make-folder-editable':
      return {
        ...state,
        currentlyEditedFolder: action.folder,
      }
    case 'edit-folder':
      if (
        (action.prevFolder === state.newlyCreatedFolderToTerminateIfEmpty &&
          action.newFolder === '') ||
        state.folders.includes(action.newFolder as string) === true
      )
        return {
          ...state,
          folders: state.folders.filter(
            (f) => f !== state.newlyCreatedFolderToTerminateIfEmpty
          ),
          currentlyEditedFolder: undefined,
          newlyCreatedFolderToTerminateIfEmpty: undefined,
        }
      else if (action.newFolder === '')
        return {
          ...state,
          currentlyEditedFolder: undefined,
        }
      return {
        ...state,
        selectedFolder:
          state.selectedFolder === action.prevFolder
            ? action.newFolder
            : state.selectedFolder,
        folders: state.folders.map((f) =>
          f === action.prevFolder ? action.newFolder : f
        ),
        notes: state.notes.map((n) => {
          return {
            ...n,
            folders: n.folders
              .split(', ')
              .map((f) => (f === action.prevFolder ? action.newFolder : f))
              .join(', '),
          }
        }),
        currentlyEditedFolder: undefined,
      }
    case 'set-key':
      return {
        ...state,
        key: action.key,
      }
    default:
      return state
  }
}
