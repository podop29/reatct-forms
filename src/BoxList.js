import {useState} from 'react'
import Box from './Box';
import NewBoxForm from './newBoxForm';
import "./boxList.css"
import {v4 as uuid} from "uuid"

function BoxList() {
    //TEMP BOXES FOR TESTING
    const TESTBOXES = [
        {
            id:uuid(),
            width:100,
            height:150,
            backgroundColor: 'blue'
        },{
            id:uuid(),
            width:120,
            height:150,
            backgroundColor: 'green'
        }
    ]
    
    //State for storing list of boxes
    const [boxes, setBoxes] = useState(TESTBOXES)

    //Removes box when X button is clicked
    const removeBox = (id) =>{
        const boxCopy = [...boxes]
        setBoxes(boxCopy.filter(b=>b.id!==id))
    }

    const createBox = ({width,height,backgroundColor}) =>{
        const newBox={
            id:uuid(),
            width,
            height,
            backgroundColor
        }
        setBoxes([...boxes, newBox])
    }


    return (
    <>
        <NewBoxForm
        createBox={createBox}
        />
        <div className='boxList'>
            {boxes.map(box=>{return(
                <Box 
                width={box.width} 
                height={box.height} 
                backgroundColor={box.backgroundColor}
                removeBox={removeBox} 
                id={box.id}
                key={box.id}
                />
            )})}
        </div>
    </>
      
    );
  }
  
  export default BoxList;
  