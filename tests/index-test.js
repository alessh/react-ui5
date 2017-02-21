import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import sap from 'src/'

describe('Page', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<sap.m.Shell><sap.m.Page>Welcome to Page component</sap.m.Page></sap.m.Shell>, node, () => {
      expect(node.innerHTML).toContain('Welcome to Page component')
    })
  })
})
