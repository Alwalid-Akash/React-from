import { useState } from 'react'
export default function Form() {

  let [name, setName] = useState('akash')

  let handleNameChange = (event) => {
    setName(event.target.value);
  }

  let handleSubmit = () => {
    alert`Hello ${name} welcome to react world`
  }
  return (
    <div className="form">
      <input type="text" placeholder="enter your name here" value={name} onChange={handleNameChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}