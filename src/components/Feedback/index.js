import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  onClickingEmoji = () => {}

  render() {
    const {resources} = this.props
    return (
      <div>
        <div>
          <div>
            <p>How satisfied are you with our customer support performance?</p>
            <ul>
              {resources.map(resource => return (
                <li>
                  <img
                    src={resource.imageUrl}
                    alt={resource.name}
                    onClick={this.onClickingEmoji}
                  />
                  <p>{resource.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
