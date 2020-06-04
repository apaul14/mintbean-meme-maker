import React, {Component} from 'react'
import axios from 'axios'
//import MemePic from './meme-pic'
import './memes.css'
import {Carousel} from 'react-bootstrap'

class Memes extends Component {
  constructor(props){
    super(props)
    this.state = {
      pics:[]
    }
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount(){
    const {data} = await axios.get(`https://api.imgflip.com/get_memes`)
    this.setState(this.state.pics = data.data.memes)
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   this.setState({selectedUrl : this.url})
  //   console.log(e.url)
  // }


  render(){
    return (
      <Carousel indicators = {false}>
        {this.state.pics &&
          this.state.pics.map(pic => (
            //<div key = {pic.id}>
              <Carousel.Item key={pic.id}>
                <img 
                  //className="d-block w-80"
                  src = {pic.url}
                  alt = {`${pic.id} meme`}
                  height = {200}
                  width = {200}
                  onClick={(pic) => this.handleClick(pic)}
                />
              </Carousel.Item>
            //</div>
          ))
        }
      </Carousel>  
     )
    }
  }     



      // <div>
      //   <Carousel>
      //     {this.state.pics && 
      //     this.state.pics.map(pic=>
      //               // <MemePic
      //               //   id = {pic.id}
      //               //   url = {pic.url}
      //               // />
      //       <div key = {pic.id}>
      //       <Carousel.Item>
      //         <img 
      //           className="d-block w-100"
      //           src = {this.state.pics.url}
      //           alt = {"hey"}
      //           height = {100}
      //           width = {100}
      //           //onClick={this.handleClick}
      //         />
      //     </Carousel.Item>
      //       </div>
      //           )    }
      //   </Carousel>
      // </div>


/* <div id = "Memes">
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
            </div> */

export default Memes