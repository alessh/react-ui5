import React, {PropTypes} from 'react'
import classnames from 'classnames'
import Icon from './internal/tools/Icon'

const mapIconColor = (iconColor) => {
  switch(iconColor.toLowerCase()) {
    case 'critical': return 'sapMITBFilterCritical'
    case 'negative': return 'sapMITBFilterNegative'
    case 'neutral': return 'sapMITBFilterNeutral'
    case 'positive': return 'sapMITBFilterPositive'
    default: return 'sapMITBFilterDefault'
  }
}

const IconTabFilter = (props) => {
  const iconColor = mapIconColor(props.iconColor)
  const containerClassName = classnames('sapMITBItem sapMITBVertical', iconColor, {
    sapMITBSelected: props.selected,
    sapMITBFilter: props.icon,
    sapMITBAll: !props.icon
  })
  const iconClassName = classnames('sapMITBFilterIcon sapUiIcon', iconColor)

  return (
    <div className={containerClassName} onClick={props.onPress}>
      <div className='sapMITBTab'>
        {props.icon ?
          <span>
            <span
              className={iconClassName}
              style={{fontFamily:'SAP-icons'}}
              dangerouslySetInnerHTML={{__html: Icon(props.icon)}}
            />
            <span className='sapMITBCount'>{props.count}</span>
          </span>
        :
          <span className='sapMITBCount'>
            {props.count}
          </span>
        }
      </div>

      <div className='sapMITBText'>
        {props.upperCase && props.text ?
          props.text.toUpperCase() :
          props.text
        }
      </div>
      <div className='sapMITBContentArrow' />
    </div>
  )
}

IconTabFilter.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
  upperCase: PropTypes.bool
}

IconTabFilter.defaultProps = {
  count: null,
  icon: null,
  iconColor: 'Default',
  text: null,
  upperCase: false
}

export default IconTabFilter
