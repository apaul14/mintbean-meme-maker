import React, {Component} from 'react'
import axios from 'axios'
import MemePic from './meme-pic'
//import './memes.css'
import {Container, Row, Col} from 'react-bootstrap'

class Memes extends Component {
  constructor(props){
    super(props)
    this.state = {
      pics:[]
    }
  }
  async componentDidMount(){
    const {data} = await axios.get(`https://api.imgflip.com/get_memes`)
    this.setState(this.state.pics = data.data.memes)
  }
  render(){
    return (
      <Container>
        <Row>
          <Col>
            <div id = "Memes">
              {this.state.pics.map(pic=> 
                <div 
                key = {pic.id} 
                id = 'Memepic' 
                >
                  <MemePic
                    id = {pic.id}
                    url = {pic.url}
                  />
                </div>
              )}     
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Memes