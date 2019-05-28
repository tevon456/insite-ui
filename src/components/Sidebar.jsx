import React from 'react'
import { textForeground, secondary, primary } from '../colours'

class Sidebar extends React.Component {
  render() {
    return (
      <div
        css={`
          @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap');
          width: 200px;
          padding: 20px;
          height: 100vh;
          font-family: 'Roboto Slab', serif;
          color: ${textForeground};
          border: none;
          background: ${secondary};
          &:focus {
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={`
            width: auto;
            padding-top: 22px;
            margin: -20px;
            background: ${primary};
            height: 70px;
            text-align: center;
            font-size: 32px;
            font-weight: 500;
          `}
        >
          insite
        </div>
        <ul
          css={`
            margin-top: 90px;
          `}
        >
          <li
            css={`
              list-style: none;
            `}
          >
            <h3>Dashboard</h3>
          </li>
          {this.props.links.map(sideUrls => (
            <li
              css={`
                list-style: none;
                padding-top: 8px;
                font-weight: 400;
              `}
              key={sideUrls}
            >
              <a href="#">{sideUrls}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Sidebar
