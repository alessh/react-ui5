import React, {PropTypes} from 'react'
import classnames from 'classnames'

class TabContainerItem extends React.Component {

  render() {
    return (
      <div className=''>
      	<div className='sapMTabContainerContent'>
        	{this.props.children}
        </div>
      </div>
    )    
  }
}

TabContainerItem.propTypes = {

}

TabContainerItem.defaultProps = {

}

export default TabContainerItem
