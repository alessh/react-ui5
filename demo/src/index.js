import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import sap from '../../src'
import Page1 from './Page1'
import Page2 from './Page2'

render((
  <sap.m.Shell>
    <Router history={hashHistory}>
      <Route path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="*" component={Page1} />
    </Router>
  </sap.m.Shell>
), document.querySelector('#demo'))
