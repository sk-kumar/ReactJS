# Registration form
```js
import React, { useState } from 'react'

const RegistrationForm = () => {
    const [details,setDetails]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setDetails((prev)=>{
            return(
                {...prev,[name]:value}
            )
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(details);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' onChange={handleChange} autoComplete='off' /><br />
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' onChange={handleChange} autoComplete='off'/><br />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' onChange={handleChange} autoComplete='off' /><br />
        <button>Submit</button>
    </form>
  )
}
export default RegistrationForm
```
