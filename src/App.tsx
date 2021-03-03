import React, { useReducer, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { reducer, initialState } from './components/tools/Reducer'
import { uiReducer, uiInitialState } from './components/tools/uiReducer'
import StateContext from './components/tools/StateContext'
import Editor from './components/Editor'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Settings from './components/Settings'
import NoteListComponent from './components/NoteListComponent'
import ArchivedNotesWarningComponent from './components/ArchivedNotesWarningComponent'
import DeleteFolderWarningComponent from './components/DeleteFolderWarningComponent'
import DeleteNoteWarningComponent from './components/DeleteNoteWarningComponent'
import TestPasswordPopupComponent from './components/TestPasswordPopupComponent'
import Grid from './components/styles/Grid'
import GlobalStyle from './components/styles/common/GlobalStyle'
import Hover from './components/styles/Hover'
import ResetDataWarningComponent from './components/ResetDataWarningComponent'
import { encryptArray, decryptArray } from './components/tools/helpers'
import ChangePasswordPopupComponent from './components/ChangePasswordPopupComponent'

const App: React.FC = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const encryptedNotes = localStorage.getItem('notes')
    const encryptedFolders = localStorage.getItem('folders')
    const encryptionKey = sessionStorage.getItem('key')

    if (encryptedNotes) {
      if (encryptionKey) {
        const decryptedNotes = decryptArray(encryptedNotes, encryptionKey)

        const decryptedFolders =
          encryptedFolders && decryptArray(encryptedFolders, encryptionKey)

        if (Array.isArray(decryptedNotes) && Array.isArray(decryptedFolders)) {
          return {
            ...initialState,
            notes: decryptedNotes,
            folders: decryptedFolders,
            key: encryptionKey,
          }
        }
        alert('bad encryption key or data is corrupted')
        return initialState
      }
      alert('encryption key is missing')
      return initialState
    }
    return initialState
  })

  const [ui, updateUI] = useReducer(uiReducer, uiInitialState, () => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme
      ? { ...uiInitialState, theme: JSON.parse(savedTheme) }
      : uiInitialState
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(ui.theme))
  }, [ui.theme])

  useEffect(() => {
    if (state.key) {
      sessionStorage.setItem('key', state.key)
      updateLocalStorageNotes()
      updateLocalStorageFolders()
    }
  }, [state.key])

  useEffect(() => {
    if (state.key) {
      updateLocalStorageNotes()
    }
  }, [state.notes])

  useEffect(() => {
    if (state.key) {
      updateLocalStorageFolders()
    }
  }, [state.folders])

  const oneOfThoseTriggers =
    ui.isSidebarVisible ||
    ui.isSettingsVisible ||
    ui.isArchiveWarningShown ||
    ui.isDeleteFolderWarningShown ||
    ui.isDeleteNoteWarningShown ||
    ui.isResetDataWarningShown ||
    ui.isTestPasswordPopupShown

  const updateLocalStorageNotes = () => {
    const encryptedNotes = encryptArray(state.notes, state.key)
    localStorage.setItem('notes', JSON.stringify(encryptedNotes))
  }

  const updateLocalStorageFolders = () => {
    const encryptedFolders = encryptArray(state.folders, state.key)
    localStorage.setItem('folders', JSON.stringify(encryptedFolders))
  }

  return (
    <ThemeProvider theme={ui.theme}>
      <StateContext.Provider value={{ state, dispatch, ui, updateUI }}>
        <Grid>
          <Header />
          <NoteListComponent />
          <Editor />
          <Footer />
        </Grid>
        <Sidebar />
        <Settings />
        {ui.isArchiveWarningShown && <ArchivedNotesWarningComponent />}
        {ui.isDeleteFolderWarningShown && <DeleteFolderWarningComponent />}
        {ui.isDeleteNoteWarningShown && <DeleteNoteWarningComponent />}
        {ui.isResetDataWarningShown && <ResetDataWarningComponent />}
        {ui.isTestPasswordPopupShown && <TestPasswordPopupComponent />}
        {ui.isChangePasswordPopupShown && <ChangePasswordPopupComponent />}
        {oneOfThoseTriggers && <Hover />}
        <GlobalStyle />
      </StateContext.Provider>
    </ThemeProvider>
  )
}

export default App
