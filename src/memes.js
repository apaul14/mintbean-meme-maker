import React, {Component} from 'react'
import axios from 'axios'

class Memes extends Component {
  constructor(props){
    super(props)
    this.state = {
      pics:[]
    }
  }
  async componentDidMount(){
    const {data} = await axios.get(`https://api.imgflip.com/get_memes`)
    this.setState(this.state.pics = data.memes)
    console.log(data)
  }
  render(){
    return (
      <h2>Hello</h2>
    )
  }
}

export default Memes