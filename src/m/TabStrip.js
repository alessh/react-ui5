import React, {PropTypes} from 'react'
import classnames from 'classnames'

const TabStripSelectedItem = (props) => {
  return (
    <div className='sapMTabStripItem sapMTabStripItemSelected'>
      <span className='sapMTabStripItemLabel'>{props.label}</span>
      <div className='sapMTSItemCloseBtnCnt'>
        <button className='sapMBtn sapMBtnBase sapMTabStripSelectListItemCloseBtn'>
          <span className='sapMBtnHoverable sapMBtnIconFirst sapMBtnInner sapMBtnTransparent sapMFocusable'>
            <span 
              className='sapMBtnCustomIcon sapMBtnIcon sapMBtnIconLeft sapUiIcon sapUiIconMirrorInRTL'
              style={{fontFamily:'SAP-icons'}}
              data-sap-ui-icon-content="">
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

class TabStrip extends React.Component {

  render() {
    return (
      <div className='sapMTabStrip'>
        <div className='sapMTSLeftOverflowButtons'></div>
        <div className='sapMTSTabsContainer'>
          <div className='sapMTSTabs'>
            <TabStripSelectedItem label={'New item'} />
          </div>
        </div>
        <div className='sapMTSRightOverflowButtons'></div>
        <div className='sapMTSTouchArea'>
          <button 
            className='sapMSlt sapMSltIconOnly sapMSltWithArrow sapMTSSlt'
            style={{maxWidth: '100%'}}
          >
            <div className='sapMSltHoverable sapMSltInner'>
              <span className='sapMSltIcon sapUiIcon sapUiIconMirrorInRTL' />
            </div>
          </button>
          <button 
            className='sapMBtn sapMBtnBase sapMTSAddNewTabBtn'
            title='Adicionar novo'
          >
            <span className='sapMBtnHoverable sapMBtnIconFirst sapMBtnInner sapMBtnTransparent sapMFocusable'>
              <span 
                className='sapMBtnCustomIcon sapMBtnIcon sapMBtnIconLeft sapUiIcon sapUiIconMirrorInRTL'
                style={{fontFamily:'SAP-icons'}}
                data-sap-ui-icon-content="" 
              />
            </span>
          </button>
        </div>
      </div>
    )    
  }
}

TabStrip.propTypes = {

}

TabStrip.defaultProps = {

}

export default TabStrip
