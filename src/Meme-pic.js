import React, {Component} from 'react'
import './memes.css'
import {Container, Row, Col} from 'react-bootstrap'


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
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <div id = "pic">
            <img 
              src = {this.props.url}
              alt = {"hey"}
              height = {200}
              width = {200}
              onClick={this.handleClick}
            />
            </div>
          </Col>
        </Row>
      
      </Container>
    )
  }
}

export default MemePic