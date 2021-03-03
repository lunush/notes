import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
} from '@testing-library/react'
import App from './App'
import { reducer, initialState } from './components/tools/Reducer'

global.React = React
global.render = render
global.fireEvent = fireEvent
global.cleanup = cleanup
global.waitFor = waitFor
global.screen = screen
global.App = App
global.reducer = reducer
global.initialState = initialState
