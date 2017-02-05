import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import sap from '../../src'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

render((
  <sap.m.Shell>
    <Router history={hashHistory}>
      <Route path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route path="/page4" component={Page4} />
      <Route path="*" component={Page1} />
    </Router>
  </sap.m.Shell>
), document.querySelector('#demo'))
