import React from 'react'

import { primary, textForeground } from '../colours'

class Button extends React.Component {
  render() {
    return (
      <button
        css={`
          padding: 10px;
          color: ${textForeground};
          border-radius: 3px;
          border: none;
          background: ${primary};
          &:focus {
            border: none;
            outline: none;
          }
        `}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button
