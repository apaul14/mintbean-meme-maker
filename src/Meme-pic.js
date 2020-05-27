import React, {Component} from 'react'
import './memes.css'

// const MemePic = props => (
    
//     )

class MemePic extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick(e) {
      e.preventDefault();
      this.setState({selectedUrl : this.props.url})
      console.log(this.state)
  }

  render() {
    return(
      <div id = "pic">
        <img 
          src = {this.props.url}
          alt = {"hey"}
          height = {200}
          width = {200}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default MemePic