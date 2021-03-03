import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
} from '@testing-library/react'

afterEach(cleanup)

describe('Editor', () => {
  test(`edit note's title`, async () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('make-note-editable-button'))
    fireEvent.change(screen.getByPlaceholderText(/title/i), {
      target: { value: 'test123' },
    })
    expect(screen.getByPlaceholderText(/title/i).value).toEqual('test123')
    await waitFor(
      () =>
        expect(screen.getAllByTestId('listed-note')[8].textContent).toContain(
          'test123'
        ),
      { timeout: 600, interval: 50 }
    )
  })

  test(`edit note's body`, async () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('make-note-editable-button'))
    fireEvent.change(screen.getByPlaceholderText(/body/i), {
      target: { value: 'test123' },
    })
    expect(screen.getByPlaceholderText(/body/i).value).toEqual('test123')
    await waitFor(
      () =>
        expect(screen.getAllByTestId('listed-note')[8].textContent).toContain(
          'test123'
        ),
      { timeout: 600, interval: 50 }
    )
  })

  test('add a folder by submitting the form', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('make-note-editable-button'))
    expect(screen.getByTestId('editable-text')).toBeTruthy()
    expect(screen.getAllByTestId('listed-folder')).toHaveLength(5)
    fireEvent.change(screen.getByPlaceholderText(/folders/i), {
      target: { value: 'test123' },
    })
    fireEvent.submit(screen.getByPlaceholderText(/folders/i))
    expect(screen.getAllByTestId('listed-folder')[5].textContent).toContain(
      'test123'
    )
  })

  test('add a folder by blurring the input', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('make-note-editable-button'))
    expect(screen.getByTestId('editable-text')).toBeTruthy()
    expect(screen.getAllByTestId('listed-folder')).toHaveLength(5)
    fireEvent.change(screen.getByPlaceholderText(/folders/i), {
      target: { value: 'test123' },
    })
    fireEvent.blur(screen.getByPlaceholderText(/folders/i))
    expect(screen.getAllByTestId('listed-folder')).toHaveLength(6)
  })

  test('pin the initial note and unpin 2 notes', () => {
    render(<App />)
    expect(screen.getAllByTestId('listed-note')[8].textContent).toContain(
      'README'
    )
    fireEvent.click(screen.getByTestId('pin-note-button'))
    expect(screen.getAllByTestId('pin-icon')).toHaveLength(3)
    expect(screen.getAllByTestId('listed-note')[2].textContent).toContain(
      'README'
    )
    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getAllByTestId('listed-note')[0])
      fireEvent.click(screen.getByTestId('pin-note-button'))
    }
    expect(screen.queryAllByTestId('pin-icon')).toHaveLength(0)
  })
})

describe('Note List', () => {
  test('create 2 notes and delete 19 notes', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('create-note-button'))
    fireEvent.click(screen.getByTestId('create-note-button'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(16)
    for (let i = 0; i < 18; i++) {
      fireEvent.click(screen.getByTestId('show-delete-note-warning-button'))
      fireEvent.click(screen.getByTestId('delete-note-button'))
    }
    expect(screen.getAllByTestId('listed-note')).toHaveLength(1)
  })

  test('create a note and then select the initial one', () => {
    render(<App />)
    expect(screen.getByTestId('uneditable-text').textContent).toContain(
      'README'
    )
    expect(screen.getByTestId('uneditable-text').textContent).toContain(
      'One Paragraph'
    )
    fireEvent.click(screen.getByTestId('create-note-button'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(16)
    expect(screen.getByTestId('uneditable-text').textContent).toContain('Note')
    fireEvent.click(screen.getAllByTestId('listed-note')[8])
    expect(screen.getByTestId('uneditable-text').textContent).toContain(
      'README'
    )
    expect(screen.getByTestId('uneditable-text').textContent).toContain(
      'One Paragraph'
    )
  })

  test('create a note, select a folder, and then display all notes back', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('create-note-button'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(16)
    expect(screen.getAllByTestId('listed-folder')[0].textContent).toContain(
      'Business'
    )
    fireEvent.click(screen.getAllByTestId('listed-folder')[0])
    fireEvent.click(screen.getByTestId('create-note-button'))

    expect(screen.getByPlaceholderText(/folders/i).value).toContain('Business')
    expect(screen.getAllByTestId('listed-note')).toHaveLength(2)
    fireEvent.click(screen.getByTestId('listed-folder-all'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(16)
  })
  test('test the search', () => {
    render(<App />)
    fireEvent.change(screen.getByPlaceholderText(/Search/i), {
      target: { value: 'readme' },
    })
    expect(screen.getAllByTestId('listed-note')[0].textContent).toContain(
      'One Paragraph'
    )
    fireEvent.change(screen.getByPlaceholderText(/Search/i), {
      target: { value: 'griLled' },
    })
    expect(screen.getAllByTestId('listed-note')[0].textContent).toContain(
      'Chicken'
    )
  })

  test('test the sorting', () => {
    render(<App />)
    expect(screen.getAllByTestId('listed-note')[8].textContent).toContain(
      'README'
    )
    expect(screen.getAllByTestId('listed-note')[3].textContent).toContain(
      'Grilled Chicken'
    )
    fireEvent.click(screen.getByTestId('open-notelist-dropdown'))
    fireEvent.click(screen.getAllByTestId('notelist-dropdown-item')[1])
    expect(screen.getAllByTestId('listed-note')[8].textContent).toContain(
      'README'
    )
    expect(screen.getAllByTestId('listed-note')[14].textContent).toContain(
      'Grilled Chicken'
    )
    fireEvent.click(screen.getByTestId('open-notelist-dropdown'))
    fireEvent.click(screen.getAllByTestId('notelist-dropdown-item')[2])
    expect(screen.getAllByTestId('listed-note')[12].textContent).toContain(
      'README'
    )
    expect(screen.getAllByTestId('listed-note')[6].textContent).toContain(
      'Grilled Chicken'
    )
    fireEvent.click(screen.getByTestId('open-notelist-dropdown'))
    fireEvent.click(screen.getAllByTestId('notelist-dropdown-item')[0])
    expect(screen.getAllByTestId('listed-note')[8].textContent).toContain(
      'README'
    )
    expect(screen.getAllByTestId('listed-note')[3].textContent).toContain(
      'Grilled Chicken'
    )
  })

  test('test the current folder indicator', () => {
    render(<App />)
    expect(
      screen.getByTestId('current-folder-indicator').textContent
    ).toContain('All Notes')
    fireEvent.click(screen.getByTestId('archive'))
    expect(
      screen.getByTestId('current-folder-indicator').textContent
    ).toContain('Archive')
    fireEvent.click(screen.getAllByTestId('listed-folder')[0])
    expect(
      screen.getByTestId('current-folder-indicator').textContent
    ).toContain('Business')
  })
})

describe('Footer', () => {})

describe('Sidebar', () => {
  test('select a folder and create a note', () => {
    render(<App />)
    expect(screen.getAllByTestId('listed-folder')[0].textContent).toContain(
      'Business'
    )
    fireEvent.click(screen.getAllByTestId('listed-folder')[0])
    fireEvent.click(screen.getByTestId('create-note-button'))
    expect(screen.getByPlaceholderText(/folders/i).value).toContain('Business')
  })

  test('delete a folder', () => {
    render(<App />)
    expect(screen.getAllByTestId('listed-folder')).toHaveLength(5)
    fireEvent.click(
      screen.getAllByTestId('show-delete-folder-warning-button')[0]
    )
    fireEvent.change(screen.getByPlaceholderText(/Confirmation/i), {
      target: { value: 'Business' },
    })
    fireEvent.click(screen.getByTestId('delete-folder-button'))
    expect(screen.getAllByTestId('listed-folder')[4])
    expect(screen.getAllByTestId('listed-folder')[0].textContent).not.toContain(
      'Business'
    )
  })

  test('select a folder, create a note, delete the folder', () => {
    render(<App />)
    fireEvent.click(screen.getAllByTestId('listed-folder')[0])
    fireEvent.click(screen.getByTestId('create-note-button'))
    expect(screen.getByPlaceholderText(/folders/i).value).toContain('Business')
    expect(screen.getAllByTestId('listed-note')).toHaveLength(2)
    fireEvent.click(
      screen.getAllByTestId('show-delete-folder-warning-button')[0]
    )
    fireEvent.change(screen.getByPlaceholderText(/Confirmation/i), {
      target: { value: 'Business' },
    })
    fireEvent.click(screen.getByTestId('delete-folder-button'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(14)
    fireEvent.click(screen.getByTestId('create-note-button'))
    expect(screen.getByPlaceholderText(/folders/i).value).toBe('')
  })

  test('select archive with 0 notes', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('archive'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(1)
    fireEvent.click(screen.getByTestId('show-delete-note-warning-button'))
    fireEvent.click(screen.getByTestId('delete-note-button'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(15)
    fireEvent.click(screen.getByTestId('archive'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(15)
  })

  test('archive the initially selected note, open archive, edit that note, open all notes back', async () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('archive-note-button'))
    fireEvent.click(screen.getByTestId('archive'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(2)
    fireEvent.click(screen.getByTestId('show-delete-note-warning-button'))
    fireEvent.click(screen.getByTestId('delete-note-button'))
    fireEvent.click(screen.getByTestId('make-note-editable-button'))
    expect(screen.getByPlaceholderText(/title/i).value).toContain('README')
    fireEvent.change(screen.getByPlaceholderText(/title/i), {
      target: { value: 'test123' },
    })
    await waitFor(
      () =>
        expect(screen.getAllByTestId('listed-note')[0].textContent).toContain(
          'test123'
        ),
      { timeout: 600, interval: 50 }
    )
    fireEvent.click(screen.getByTestId('archive-note-button'))
    expect(screen.getAllByTestId('listed-note')[8].textContent).toContain(
      'test123'
    )
    expect(screen.getAllByTestId('listed-note')).toHaveLength(15)
  })

  test('trigger creating a new folder and send an existing folder name', () => {
    render(<App />)
    expect(screen.getAllByTestId('listed-folder')[0].textContent).toContain(
      'Business'
    )
    fireEvent.click(screen.getByTestId('create-folder-button'))
    fireEvent.change(screen.getByPlaceholderText(/New\sFolder/i), {
      target: { value: 'Business' },
    })
    fireEvent.submit(screen.getByPlaceholderText(/New\sFolder/i))
    expect(screen.getAllByTestId('listed-folder')).toHaveLength(5)
  })

  test('trigger creating a new folder and send an empty string', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('create-folder-button'))
    fireEvent.change(screen.getByPlaceholderText(/New\sFolder/i), {
      target: { value: '' },
    })
    fireEvent.submit(screen.getByPlaceholderText(/New\sFolder/i))
    expect(screen.getAllByTestId('listed-folder')).toHaveLength(5)
  })

  test('trigger editing a folder and send an empty string', () => {
    render(<App />)
    fireEvent.click(screen.getAllByTestId('make-folder-editable-button')[0])
    fireEvent.change(screen.getByPlaceholderText(/New\sFolder/i), {
      target: { value: '' },
    })
    fireEvent.submit(screen.getByPlaceholderText(/New\sFolder/i))
    expect(screen.getAllByTestId('listed-folder')[0].textContent).toContain(
      'Business'
    )
  })

  test('create a new folder', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('create-folder-button'))
    fireEvent.change(screen.getByPlaceholderText(/New\sFolder/i), {
      target: { value: 'test123' },
    })
    fireEvent.submit(screen.getByPlaceholderText(/New\sFolder/i))
    expect(screen.getAllByTestId('listed-folder')[5].textContent).toContain(
      'test123'
    )
  })

  test('create a new folder and select it', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('create-folder-button'))
    fireEvent.change(screen.getByPlaceholderText(/New\sFolder/i), {
      target: { value: 'test123' },
    })
    fireEvent.submit(screen.getByPlaceholderText(/New\sFolder/i))
    fireEvent.click(screen.getAllByTestId('listed-folder')[5])
    expect(screen.getByPlaceholderText(/folders/i).value).toContain('test123')
  })

  test('edit a folder', () => {
    render(<App />)
    expect(screen.getAllByTestId('listed-folder')[0].textContent).toContain(
      'Business'
    )
    fireEvent.click(screen.getAllByTestId('make-folder-editable-button')[0])
    fireEvent.change(screen.getByPlaceholderText(/New\sFolder/i), {
      target: { value: 'Business-test123' },
    })
    fireEvent.submit(screen.getByPlaceholderText(/New\sFolder/i))
    expect(screen.getAllByTestId('listed-folder')[0].textContent).toContain(
      'Business-test123'
    )
  })

  test('select a folder, create a note, edit the folder', () => {
    render(<App />)
    fireEvent.click(screen.getAllByTestId('listed-folder')[0])
    fireEvent.click(screen.getByTestId('create-note-button'))
    expect(screen.getByPlaceholderText(/folders/i).value).toContain('Business')
    expect(screen.getAllByTestId('listed-note')).toHaveLength(2)
    fireEvent.click(screen.getAllByTestId('make-folder-editable-button')[0])
    fireEvent.change(screen.getByPlaceholderText(/New\sFolder/i), {
      target: { value: 'test123' },
    })
    fireEvent.submit(screen.getByPlaceholderText(/New\sFolder/i))
    expect(screen.getByPlaceholderText(/folders/i).value).toContain('test123')
  })
})

describe('Settings', () => {
  // test('change theme', () => {})

  // test('close settings', () => {})

  test('reset data', () => {
    render(<App />)
    expect(screen.getAllByTestId('listed-note')).toHaveLength(15)
    expect(screen.queryAllByTestId('listed-folder')).toHaveLength(5)
    fireEvent.click(screen.getByTestId('show-reset-data-warning'))
    fireEvent.click(screen.getByTestId('reset-data-button'))
    expect(screen.getAllByTestId('listed-note')).toHaveLength(1)
    expect(screen.getAllByTestId('listed-note')[0].textContent).toContain(
      'Note'
    )
    expect(screen.queryAllByTestId('listed-folder')).toHaveLength(0)
  })
})

//add encryption tests
//add localStorage and sessionStorage tests
