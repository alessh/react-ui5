import React, { Component } from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import { Shell, Page, App, Button, ButtonType, IconTabBar, IconTabSeparator, IconTabFilter, Text } from '../../src';

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
       <Page
        title='Hello World 2'
        showNavButton={true}
        navButtonPress={() => this.context.router.push('/')}
      >
        <IconTabBar
          selectedKey={this.state.show}
          select={this.handleSelect}
        >
          <IconTabFilter
            key='ALL'
            count={14}
            text='Products'
          />
          <IconTabSeparator />
          <IconTabFilter
            key='PLENTY'
            count={8}
            text='Plenty in Stock'
            icon='message-success'
            iconColor='Positive'
          />
          <IconTabFilter
            key='CRITICAL'
            count={3}
            text='Shortage'
            icon='message-warning'
            iconColor='Critical'
          />
          <IconTabFilter
            key='OUT_OF_STOCK'
            count={3}
            text='Out of Stock'
            icon='message-error'
            iconColor='Negative'
          />
        </IconTabBar>
        <Text text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus dui ac tellus tincidunt maximus. Etiam auctor nisl sed magna volutpat finibus. Nunc risus lacus, dictum ac ipsum et, tristique sodales quam. Praesent rutrum ipsum est, quis aliquet mauris iaculis non. Suspendisse eu magna volutpat libero congue ornare tempus a mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur enim at urna mollis fringilla. Fusce fermentum porta euismod. Aenean nunc ex, viverra id augue ultricies, fermentum ultrices nulla. Curabitur lobortis molestie velit id tristique.' />
        <Button
          onPress={() => this.context.router.push('/page1')}
          type={ButtonType.Emphasized}
        >
          To page 1
        </Button>
      </Page>)
    
  }
}

