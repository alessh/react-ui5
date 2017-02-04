import React, {PropTypes} from 'react'
import classnames from 'classnames'

const List = (props) => {
  return (
    <div className='sapMList sapMListBGSolid'>
      <div className='sapMIBar sapMListHdrTBar sapMTB sapMTB-Transparent-CTX sapMTBInactive sapMTBNewFlex'>
        <h2 className='sapMBarChild sapMTitle sapMTitleMaxWidth sapMTitleNoWrap sapMTitleStyleAuto sapMTitleTB sapUiSelectable sapMTBShrinkItem'>
          {props.title}
        </h2>
      </div>
      <ul className='sapMListModeNone sapMListShowSeparatorsAll sapMListUl'>
        {props.children}
      </ul>
    </div>
  )
}

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default List
