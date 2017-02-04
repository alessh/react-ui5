import React, {PropTypes} from 'react'
import classnames from 'classnames'

const ListItem = (props) => {
  const outerClass = classnames('sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeInactive sapMSLI sapMSLIIcon sapMSLIIconThumb', {
    sapMLIBSelected: props.checked
  })
  const checkboxClass = classnames('sapMCbActiveStateOff sapMCbBg sapMCbHoverable sapMCbMark', {
    sapMCbMarkChecked: props.checked
  })

  return (
    <li className={outerClass}>
      <div className='sapMLIBSelectM'>
        <div className='sapMCb'>
          <div className={checkboxClass}>
            <input
              type='CheckBox'
              checked={props.checked}
              onChange={e => props.onCheck(e.target.checked)}
            />
          </div>
        </div>
      </div>

    </li>
  )
}

export default ListItem
