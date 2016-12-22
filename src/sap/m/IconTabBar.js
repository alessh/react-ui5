import React, {PropTypes} from 'react'
import classnames from 'classnames'
import BackgroundDesign from './internal/BackgroundDesign'

const IconTabBar = (props) => {
  const containerClass = classnames(
    'sapMITB sapMITBNoContentPadding',
    BackgroundDesign.getClass('sapMITBBackgroundDesign', props.backgroundDesign)
  )

  const children = React.Children.map(props.children, (child) => (
    React.cloneElement(child, child.key ? {
      upperCase: props.upperCase,
      onPress: () => props.select(child.key),
      selected: props.selectedKey === child.key
    } : {})
  ))

  return (
    <div className={containerClass}>
      <div className='sapMITBNotScrollable sapMITH'>
        <div className='sapMITBScrollContainer'>
          <div className='sapMITBHead'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

IconTabBar.propTypes = {
  children: PropTypes.node,
  backgroundDesign: PropTypes.string,
  upperCase: PropTypes.bool,
  select: PropTypes.func,
  selectedKey: PropTypes.string
}
IconTabBar.defaultProps = {
  children: null,
  backgroundDesign: 'Solid',
  upperCase: false,
  select: () => {}
}

export {IconTabBar}
