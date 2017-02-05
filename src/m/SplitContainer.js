import React, {PropTypes} from 'react'
import classnames from 'classnames'

const SplitContainer = (props) => {
  return (
    <div className='sapMSplitContainer sapMSplitContainerShowHide' style={{height: '100%'}}>
      <div className='sapMNav sapMSplitContainerMaster sapMSplitContainerMasterVisible' style={{height: '100%'}}>
        {props.master}
      </div>
      <div className='sapMNav sapMSplitContainerDetail' style={{height: '100%'}}>
        {props.detail}
      </div>
    </div>
  )
}

SplitContainer.propTypes = {

}

SplitContainer.defaultProps = {

}

export default SplitContainer
