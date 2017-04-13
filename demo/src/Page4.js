import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import sap from '../../src'

class Page4 extends React.Component {
  render() {
    return (
      <sap.m.Page title='Page 4'>
        <sap.m.SplitContainer

          master={
            <sap.m.Page 
              title='Master Page 4'
              style={{height: '100%'}}
            >
              <sap.m.Button
                onPress={() => this.props.router.push('/page1')}
                type={sap.m.ButtonType.Emphasized}
              >
                To page 1
              </sap.m.Button>
            </sap.m.Page>
          }

          detail={
            <sap.m.Page 
              title='Table Container'
              style={{height: '100%'}}
            >
                <sap.m.TabContainer currentIndex={1}>
                  <sap.m.TabContainerItem header="to page1">
                    <sap.m.Button
                      onPress={() => this.props.router.push('/page1')}
                      type={sap.m.ButtonType.Emphasized}
                    >
                      To page 1
                    </sap.m.Button>
                  </sap.m.TabContainerItem>
                  <sap.m.TabContainerItem header="to page2">
                    <sap.m.Button
                      onPress={() => this.props.router.push('/page2')}
                      type={sap.m.ButtonType.Emphasized}
                    >
                      To page 2
                    </sap.m.Button>
                  </sap.m.TabContainerItem>
                </sap.m.TabContainer>
              
            </sap.m.Page>
          }
        />
      </sap.m.Page>
    )
  }
}

Page4.contextTypes = {
  router: React.PropTypes.object
}

export default Page4
