import React, {PropTypes} from 'react'
import TextDirection from './internal/TextDirection'
import classnames from 'classnames'

const Text = (props) => {
  const style = {textAlign: 'left'}
  if(props.maxLines) style['WebkitLineClamp'] = props.maxLines
  if(props.width) style['width'] = props.width
  let textDirection = null
  if(props.textDirection) {
    textDirection = TextDirection(props.textDirection)
    if(textDirection === 'rtl') style.textAlign = 'right'
  }
  // textAlign property overrides textDirection
  if(props.textAlign) style.textAlign = props.textAlign

  const containerClass = classnames('sapMText sapMTextMaxWidth sapUiSelectable', {
    sapMTextNoWrap: !props.wrapping
  })

  return (
    <span
      className={containerClass}
      style={style}
      dir={textDirection}
    >
      {props.text}
    </span>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  maxLines: PropTypes.number,
  width: PropTypes.string,
  textDirection: PropTypes.string,
  wrapping: PropTypes.bool,
  textAlign: PropTypes.string
}
Text.defaultProps = {
  text: null,
  maxLines: null,
  width: null,
  textDirection: null,
  wrapping: true,
  textAlign: null
}

export default Text
