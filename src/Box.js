import {useState} from 'react'
import './box.css'

function Box({width,height,backgroundColor, removeBox, id}) {

    return (
      <div className='box' style={{
          backgroundColor: backgroundColor,
          width: `${width}px`,
          height: `${height}px`
      }}>
          <button onClick={()=>removeBox(id)}>X</button>

      </div>
    );
  }
  
  export default Box;
  