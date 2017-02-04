import React, {PropTypes} from 'react'
import IconButton from './internal/IconButton'

import sap from '../../';

const Page = (props) => (
  <div className="sapMNavItem sapMPage sapMPageBgStandard sapMPageBusyCoversAll sapMPageWithHeader">
    <header className="sapMBar sapMBar-CTX sapMContent-CTX sapMHeader-CTX sapMIBar sapMIBar-CTX sapMPageHeader">
      <div className="sapMBarContainer sapMBarLeft">
        {props.showNavButton ?
          <IconButton
            title='Back'
            icon='nav-back'
            onPress={props.navButtonPress}
          />
          : null
        }
      </div>
      <div className="sapMBarMiddle">
        <div className="sapMBarContainer sapMBarPH" style={{width: '100%'}}>
          <div className='sapMBarChild sapMTitle sapMTitleMaxWidth sapMTitleNoWrap sapMTitleStyleAuto sapUiSelectable'>
            <span>{props.title}</span>
          </div>
        </div>
      </div>
      <div className="sapMBarContainer sapMBarRight" />
    </header>
    <section>
      {props.children}
    </section>
  </div>
)

Page.propTypes = {
  title: PropTypes.string,
  titleLevel: PropTypes.instanceOf(sap.ui.core.TitleLevel),
  showNavButton: PropTypes.bool,
  children: PropTypes.node,
  navButtonPress: PropTypes.func,
}

Page.defaultProps = {
  title: null,
  //titleLevel: sap.ui.core.TitleLevel.Auto, // defaultValue: sap.ui.core.TitleLevel.Auto
  showNavButton: false,
  children: null,
}

export default Page
