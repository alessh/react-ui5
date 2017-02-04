import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="sapMApp sapMNav sapUiGlobalBackgroundColor"
        style={{width: '100%'}}>
        <div className="sapMAppBG sapUiGlobalBackgroundImage" />
        {this.props.children}
      </div>
    )
  }
}

export default App
