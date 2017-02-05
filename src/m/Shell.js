import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

class Shell extends React.Component {
  componentWillMount() {
    document.documentElement.className += 'sap-tablet sap-desktop sap-combi sapUiMedia-Std-Tablet sapUiMedia-StdExt-Tablet sapUiTheme-sap_belize'
    document.documentElement.style.height = "100%";
    document.body.classList.add('sapUiBody','sapUiSizeCompact')
    document.body.style.height = "100%";
    ReactDOM.findDOMNode(this);  
  }

  render() {
    return (
      <div id="Shell" className='sapMShell sapMShellAppWidthLimited sapMShellGlobalOuterBackground'>
        <div className='sapMShellBG sapUiGlobalBackgroundImage sapUiGlobalBackgroundImageForce' />
        <div className='sapMShellBrandingBar' />

        <div className='sapMShellCentralBox'>
          <section className='sapMShellContent sapMShellGlobalInnerBackground'>
            {this.props.children}
          </section>
        </div>
      </div>
    )
  }


}

Shell.propTypes = {
  children: PropTypes.node
}
Shell.initialProps = {
  children: null
}

export default Shell
