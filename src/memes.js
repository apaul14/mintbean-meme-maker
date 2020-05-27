import React, {Component} from 'react'
import axios from 'axios'
import MemePic from './meme-pic'

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
    console.log(this.state)
  }
  render(){
    return (
      <div>
        <h2>hi</h2>
        <div id = "Memes">
          {this.state.pics.map(pic=> 
            <div key = {this.state.pics.id} id = 'Memepic'>
              <MemePic
                id = {pic.id}
                url = {pic.url}
              />
            </div>
          )}     
        </div>
      </div>
    )
  }
}

export default Memes