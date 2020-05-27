import React, {Component} from 'react'
import './memes.css'

const MemePic = props => (
    <div id = "pic">
        <img 
          src = {props.url}
          height = {200}
          width = {200}
          />
    </div>
    )


export default MemePic