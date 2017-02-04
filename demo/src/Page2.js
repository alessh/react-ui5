import React, { Component } from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import sap from '../../src';

export default class Page2 extends React.Component {
	constructor(props) {
    super(props)

    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      show: 'ALL'
    }
  }

  handleSelect(id) {
    this.setState({show: id})
  }

  render() {
    return ( 
       <sap.m.Page
        title='Page 2'
        showNavButton={true}
        navButtonPress={() => this.context.router.push('/')}
      >
        <sap.m.IconTabBar
          selectedKey={this.state.show}
          select={this.handleSelect}
        >
          <sap.m.IconTabFilter
            key='ALL'
            count={14}
            text='Products'
          />
          <sap.m.IconTabSeparator />
          <sap.m.IconTabFilter
            key='PLENTY'
            count={8}
            text='Plenty in Stock'
            icon='message-success'
            iconColor='Positive'
          />
          <sap.m.IconTabFilter
            key='CRITICAL'
            count={3}
            text='Shortage'
            icon='message-warning'
            iconColor='Critical'
          />
          <sap.m.IconTabFilter
            key='OUT_OF_STOCK'
            count={3}
            text='Out of Stock'
            icon='message-error'
            iconColor='Negative'
          />
        </sap.m.IconTabBar>
        <sap.m.Text text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus dui ac tellus tincidunt maximus. Etiam auctor nisl sed magna volutpat finibus. Nunc risus lacus, dictum ac ipsum et, tristique sodales quam. Praesent rutrum ipsum est, quis aliquet mauris iaculis non. Suspendisse eu magna volutpat libero congue ornare tempus a mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur enim at urna mollis fringilla. Fusce fermentum porta euismod. Aenean nunc ex, viverra id augue ultricies, fermentum ultrices nulla. Curabitur lobortis molestie velit id tristique.' />
        <sap.m.Button
          onPress={() => this.context.router.push('/page1')}
          type={sap.m.ButtonType.Emphasized}
        >
          To page 1
        </sap.m.Button>
      </sap.m.Page>)
    
  }
}

