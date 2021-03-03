import themes from '../styles/common/themes'

export const uiInitialState = {
  isEditorVisible: false,
  isSidebarVisible: false,
  isSettingsVisible: false,
  isNoteListDropdownVisible: false,
  isSettingsThemeDropdownVisible: false,
  isNoteEditable: false,
  isArchiveWarningShown: false,
  isDeleteNoteWarningShown: false,
  isDeleteFolderWarningShown: false,
  isResetDataWarningShown: false,
  isTestPasswordPopupShown: false,
  isChangePasswordPopupShown: false,
  theme: themes.light,
}

interface Action {
  type: string
  value: any
}

export function uiReducer(ui = uiInitialState, action: Action) {
  switch (action.type) {
    case 'set-editor-state':
      return {
        ...ui,
        isEditorVisible: action.value,
      }
    case 'set-sidebar-state':
      return {
        ...ui,
        isSidebarVisible: action.value,
      }
    case 'set-notelist-dropdown-state':
      return {
        ...ui,
        isNoteListDropdownVisible: action.value,
      }
    case 'set-settings-theme-dropdown-state':
      return {
        ...ui,
        isSettingsThemeDropdownVisible: action.value,
      }
    case 'set-archive-warning-state':
      return {
        ...ui,
        isArchiveWarningShown: action.value,
      }
    case 'set-delete-note-warning-state':
      return {
        ...ui,
        isDeleteNoteWarningShown: action.value,
      }
    case 'set-delete-folder-warning-state':
      return {
        ...ui,
        isDeleteFolderWarningShown: action.value,
      }
    case 'set-reset-data-warning-state':
      return {
        ...ui,
        isResetDataWarningShown: action.value,
      }
    case 'set-test-password-popup-state':
      return {
        ...ui,
        isTestPasswordPopupShown: action.value,
      }
    case 'set-change-password-popup-state':
      return {
        ...ui,
        isChangePasswordPopupShown: action.value,
      }
    case 'set-note-state':
      return {
        ...ui,
        isNoteEditable: action.value,
      }
    case 'toggle-settings':
      return {
        ...ui,
        isSettingsVisible: !ui.isSettingsVisible,
      }
    case 'toggle-notelist-dropdown':
      return {
        ...ui,
        isNoteListDropdownVisible: !ui.isNoteListDropdownVisible,
      }
    case 'set-theme':
      return {
        ...ui,
        theme: themes[action.value],
      }
    default:
      return ui
  }
}
