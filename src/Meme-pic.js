import React, {Component} from 'react'

const MemePic = props => (
    <div>
        <img 
          src = {props.url}
          height = {200}
          width = {200}
          mode='fit'
          />
        
    </div>
    )


export default MemePic