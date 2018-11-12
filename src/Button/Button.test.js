import Button from './Button'

import React from 'react'
import ReactDOM from 'react-dom'

it('works', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button />, div)
  ReactDOM.unmountComponentAtNode(div)
})
