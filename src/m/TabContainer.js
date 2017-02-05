import React, {PropTypes} from 'react'
import classnames from 'classnames'

import TabStrip from './TabStrip'
import TabContainerItem from './TabContainerItem'

class TabContainer extends React.Component {

  render() {
    return (
      <div className='sapMTabContainer sapContrastPlus' style={{height: '100%'}}>
        <TabStrip />
        <div className='sapMTabContainerContent'>
          <div className='sapMTabContainerInnerContent'>
            <TabContainerItem />
          </div>
        </div>
      </div>
    )    
  }
}

TabContainer.propTypes = {

}

TabContainer.defaultProps = {

}

export default TabContainer
