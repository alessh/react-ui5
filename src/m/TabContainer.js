import React, { PropTypes } from 'react'
import classnames from 'classnames'

import TabStrip from './TabStrip'
import TabContainerItem from './TabContainerItem'
import _ from 'lodash'

class TabContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabContainerItems: props.children,
      currentIndex: props.currentIndex
    }
  }

  getItemHeaders(tabContainerItems) {
    let headers = []
    React.Children.forEach(tabContainerItems, (tabContainerItem) => {
      if (tabContainerItem.props.header) {
        headers.push(tabContainerItem.props.header)
      } else {
        headers.push('no name')
      }
    })
    return headers
  }

  getCurrentTabContainerItem(tabContainerItems, currentIndex) {
    return tabContainerItems[currentIndex]
  }

  render() {
    let { tabContainerItems, currentIndex } = this.state
    return (
      <div className='sapMTabContainer sapContrastPlus' style={{ height: '100%' }}>
        <TabStrip headers={this.getItemHeaders(tabContainerItems)} currentIndex={currentIndex} onTabStripClicked={(e)=>{if(currentIndex!==e.newIndex){this.setState({currentIndex:e.newIndex})}}}/>
        <div className='sapMTabContainerContent'>
          <div className='sapMTabContainerInnerContent'>
            {this.getCurrentTabContainerItem(this.props.children, currentIndex)}
          </div>
        </div>
      </div>
    )
  }
}

TabContainer.propTypes = {
  children: PropTypes.arrayOf(TabContainerItem),
  currentIndex: PropTypes.number
}

TabContainer.defaultProps = {

}

export default TabContainer
