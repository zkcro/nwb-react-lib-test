import React from 'react'
import PropTypes from 'prop-types'

import '../../css/Button.css'

const propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  variant: PropTypes.oneOf([ 'default', 'primary', 'secondary', 'inverted' ]),
  compact: PropTypes.bool,
  width: PropTypes.oneOf([ 'full', 'half' ]),
  className: PropTypes.string,
  buttonRef: PropTypes.func,
  children: PropTypes.node.isRequired,
}

const defaultProps = {
  variant: 'default',
  compact: false,
  disabled: false,
  processing: false,
  width: null,
  className: '',
  buttonRef: () => {},
}

function Button(props) {
  const {
    variant,
    width,
    className,
    compact,
    disabled,
    processing,
    onClick,
    buttonRef,
    children
  } = props

  const classNames = [
    'Button',
    variant !== 'default' ? `Button--${variant}` : null,
    width !== null ? `Button--${width}-width` : null,
    compact ? 'Button--compact': null,
    disabled ? 'Button--disabled': null,
    processing ? 'Button--processing': null,
  ]
  .filter(c => c !== null)
  .join(' ')

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={disabled || processing ? null : onClick}
      ref={buttonRef}
    >
      {children}
    </button>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
