import React, {PropTypes} from 'react'

import '../../m_bluecrystal.css';
import '../../ui_bluecrystal.css';
import '../../ui_layout_bluecrystal.css';
import '../../font_belize_theme.css';

const Shell = (props) => (
  <div id='html' className="sap-tablet  sap-desktop sap-combi sapUiTheme-sap_bluecrystal sapUiMedia-Std-Desktop sapUiMedia-StdExt-Desktop">
  <div id='app-root' className="sapUiBody" style={{height: '100%'}} >
    <div className='sapMShell sapMShellAppWidthLimited sapMShellGlobalOuterBackground'>
      <div className='sapMShellBG sapUiGlobalBackgroundImage sapUiGlobalBackgroundImageForce' />
      <div className='sapMShellBrandingBar' />

      <div className='sapMShellCentralBox'>
        <section className='sapMShellContent sapMShellGlobalInnerBackground'>
          {props.children}
        </section>
      </div>
    </div>
  </div>
  </div>
)

Shell.propTypes = {
  children: PropTypes.node
}
Shell.initialProps = {
  children: null
}

export {Shell}
