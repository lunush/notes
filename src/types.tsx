export type Note = {
  title: string
  body: string
  folders: string
  created: number
  modified: number
  isPinned: Boolean
  isArchived: Boolean
  isUsed: Boolean
  id: string
}

export interface State {
  notes: Note[]
  folders: string[]
  key: undefined | string
  selectedNoteId: string
  selectedFolder: string
  sortBy: 'Date Created' | 'Date Modified' | 'Title'
  searchValue: string
  currentlyEditedFolder: undefined | string
  preparedFolderToBeDeleted: undefined | string
  newlyCreatedFolderToTerminateIfEmpty: undefined | string
  areArchivedNotesShown: Boolean
}
