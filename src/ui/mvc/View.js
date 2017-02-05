import React, {PropTypes} from 'react'
import classnames from 'classnames'

const View = (props) => {
  return (
    <div className='sapUiJSView sapUiView sapUiViewDisplayBlock' style={{width: '100%', height: '100%'}}>
      {props.children}
    </div>
  )
}

View.propTypes = {

}

View.defaultProps = {

}

export default View
