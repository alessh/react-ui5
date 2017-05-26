import React, { PropTypes } from 'react'
import classnames from 'classnames'
import _ from 'lodash'

const TabStripSelectedItem = (props) => {
  let tabStripClass = props.selected ? 'sapMTabStripItem sapMTabStripItemSelected' : 'sapMTabStripItem'
  return (
    <div className={tabStripClass} onClick={() => props.onClick({ newIndex: props.index })}>
      <span className='sapMTabStripItemLabel'>{props.label}</span>
      <div className='sapMTSItemCloseBtnCnt'>
        <button className='sapMBtn sapMBtnBase sapMTabStripSelectListItemCloseBtn'>
          <span className='sapMBtnHoverable sapMBtnIconFirst sapMBtnInner sapMBtnTransparent sapMFocusable'>
            <span
              className='sapMBtnCustomIcon sapMBtnIcon sapMBtnIconLeft sapUiIcon sapUiIconMirrorInRTL'
              style={{ fontFamily: 'SAP-icons' }}
              data-sap-ui-icon-content="">
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

class TabStrip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      headers: props.headers,
      currentIndex: props.currentIndex
    }
  }

  handleTabStripClicked(e, onTabStripClicked) {
    this.setState({ currentIndex: e.newIndex })
    onTabStripClicked(e)
  }

  renderHeadersDom(headers, currentIndex, onTabStripClicked) {
    var index = 0
    let headersDom = _.map(headers, (header) => {
      let headerDom = (index === currentIndex) ? (
        <TabStripSelectedItem selected={true} label={header} index={index} onClick={(e) => { this.handleTabStripClicked(e, onTabStripClicked) }} />
      ) : (
          <TabStripSelectedItem label={header} index={index} onClick={(e) => { this.handleTabStripClicked(e, onTabStripClicked) }} />
        )
      index++
      return headerDom
    })
    return headersDom
  }

  render() {
    var { headers, currentIndex } = this.state
    var { onTabStripClicked } = this.props
    return (
      <div className='sapMTabStrip'>
        <div className='sapMTSLeftOverflowButtons'></div>
        <div className='sapMTSTabsContainer'>
          <div className='sapMTSTabs'>
            {this.renderHeadersDom(headers, currentIndex, onTabStripClicked)}
          </div>
        </div>
        <div className='sapMTSRightOverflowButtons'></div>
        <div className='sapMTSTouchArea'>
          <button
            className='sapMSlt sapMSltIconOnly sapMSltWithArrow sapMTSSlt'
            style={{ maxWidth: '100%' }}
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
                style={{ fontFamily: 'SAP-icons' }}
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
  headers: PropTypes.arrayOf(PropTypes.string),
  currentIndex: PropTypes.number,
  onTabStripClicked: PropTypes.func
}

TabStrip.defaultProps = {

}

export default TabStrip
