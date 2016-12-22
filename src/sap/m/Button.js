import React, {PropTypes} from 'react'
import classnames from 'classnames'
import {ButtonType} from './ButtonType'

const isInverted = (type) => {
  switch (type) {
    case ButtonType.Accept:
    case ButtonType.Reject:
    case ButtonType.Emphasized:
      return true
    default:
      return false
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.setActive = this.setActive.bind(this)

    this.state={
      active: false
    }
  }

  setActive(active = true) {
    this.setState({active})
  }

  render() {
    const buttonClass = classnames('sapMBtn sapMBtnBase', {
      sapMBtnInverted: isInverted(this.props.type)
    })
    const containerClass = classnames('sapMBtnHoverable sapMBtnInner sapMBtnText sapMFocusable', {
      sapMBtnActive: this.state.active,
      sapMBtnDefault: this.props.type === ButtonType.Default,
      sapMBtnAccept: this.props.type === ButtonType.Accept,
      sapMBtnReject: this.props.type === ButtonType.Reject,
      sapMBtnEmphasized: this.props.type === ButtonType.Emphasized
    })

    return (
      <button
        className={buttonClass}
        onClick={this.props.onPress}
        onMouseDown={() => this.setActive()}
        onMouseOut={() => this.setActive(false)}
        onMouseUp={() => this.setActive(false)}
      >
        <div className={containerClass}>
          <span className='sapMBtnContent'>{this.props.children}</span>
        </div>
      </button>
    )
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string.isRequired
}
Button.defaultProps = {
  type: ButtonType.Default
}

export {Button}
