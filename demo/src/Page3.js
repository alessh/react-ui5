import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import sap from '../../src'

class Page3 extends React.Component {
  render() {
    return (
      <sap.m.Page title='Page 1'>
      <sap.m.SplitContainer

        master={
          <sap.m.Page 
            title='Master Page 3'
            style={{height: '100%'}}
          >
            <sap.m.Button
              onPress={() => this.context.router.push('/page1')}
              type={sap.m.ButtonType.Emphasized}
            >
              To page 1
            </sap.m.Button>
          </sap.m.Page>
        }

        detail={
          <sap.m.Page 
            title='Detail Page 3'
            style={{height: '100%'}}
          >
              <sap.m.Button
              onPress={() => this.context.router.push('/page1')}
              type={sap.m.ButtonType.Emphasized}
            >
              To page 1
            </sap.m.Button>
            
          </sap.m.Page>
        }
      />
      </sap.m.Page>
    )
  }
}

Page3.contextTypes = {
  router: React.PropTypes.object
}

export default Page3
