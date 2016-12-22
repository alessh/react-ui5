import React, {PropTypes} from 'react'
import IconButton from './internal/IconButton'

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
    <section style={{overflowX: 'hidden', overflowY: 'auto'}}>
      {props.children}
    </section>
  </div>
)

Page.propTypes = {
  children: PropTypes.node,
  navButtonPress: PropTypes.func,
  showNavButton: PropTypes.bool,
  title: PropTypes.string
}
Page.defaultProps = {
  children: null,
  title: '',
  showNavButton: false
}

export {Page}
