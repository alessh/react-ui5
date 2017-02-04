import React from 'react'
import classnames from 'classnames'

const mapIcon = (name) => {
  switch(name) {
    case 'nav-back': return '&#57835;'
  }
}

class IconButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)

    this.state={
      active: false
    }
  }

  handleMouseDown() {
    this.setState({
      active: true
    })
  }

  handleMouseUp() {
    this.setState({
      active: false
    })
  }

  render() {
    const buttonClass = classnames('sapMBtnBack sapMBtnHoverable sapMBtnInner sapMFocusable', {
      sapMBtnActive: this.state.active
    })

    return(
      <button
        title={this.props.title}
        className="sapMBarChild sapMBtn sapMBtnBase"
        onClick={this.props.onPress} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseOut={this.handleMouseUp}
      >
        <div className={buttonClass}>
          <span
            className="sapMBtnIcon sapMBtnIconLeft sapUiIcon sapUiIconMirrorInRTL"
            style={{fontFamily: 'SAP-icons'}}
            dangerouslySetInnerHTML={{__html: mapIcon(this.props.icon)}}
          />
        </div>
      </button>
    )
  }
}

export default IconButton
