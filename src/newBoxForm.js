import {useState} from 'react'


function NewBoxForm({createBox}) {
    const INITIAL_STATE = {
        width:'',
        height:'',
        backgroundColor:''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(formData =>({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        createBox(formData)

    }

    return (
      <div>
          <form>
              <input type="text"
              name="width"
              placeholder='Width'
              value={formData.width}
              onChange={handleChange}
              />
              <input type="text"
              name="height"
              placeholder='Height'
              value={formData.height}
              onChange={handleChange}
              />
              <input type="text"
              name="backgroundColor"
              placeholder='background Color'
              value={formData.backgroundColor}
              onChange={handleChange}
              />
              <button onClick={handleSubmit}>Make Box</button>

          </form>
      </div>
    );
  }
  
  export default NewBoxForm;
  