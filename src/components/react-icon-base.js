import { default as React, PropTypes } from 'react'

const IconBase = ({ children, color, size, style, ...props }, { reactIconBase = {} }) => {
  const computedSize = size || reactIconBase.size || '1.25em'
  return (
    <svg
      children={children}
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      height={computedSize}
      width={computedSize}
      {...reactIconBase}
      {...props}
      style={{
        verticalAlign: 'middle',
        color: color || reactIconBase.color,
        ...(reactIconBase.style || {}),
        ...style
      }}
    />
  )
}

IconBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  style: PropTypes.object
}

IconBase.contextTypes = {
  reactIconBase: PropTypes.shape(IconBase.propTypes)
}

export default IconBase
