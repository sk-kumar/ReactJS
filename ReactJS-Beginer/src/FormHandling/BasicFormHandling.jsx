import React, { useState } from 'react'

function BasicFormHandling() {
    const [name,setName]=useState('');
    const [gender,setGender]=useState('');
    const [city,setCity]=useState('');
    const [tnc,setTnc]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,tnc,city);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <select onChange={(e)=>setCity(e.target.value)}>
                <option>Select City</option>
                <option>New Delhi</option>
                <option>Patna</option>
                <option>Bengaluru</option>
            </select>
            <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>Accept T&C</span>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default BasicFormHandling