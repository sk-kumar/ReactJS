## ReactJS Hooks
- useState Beginer
```js
import React, { useState } from 'react'

const ReactuseState = () => {
    const [number,setNumber]=useState(0);
    const increase=()=>{
        setNumber(number+1);
    }
    // const increaseAsync=()=>{
    //     setTimeout(()=>{
    //         setNumber(number+1)
    //     },1000)
    // }

    const increaseAsync=()=>{
        setTimeout(()=>{
            setNumber((currentNumber=>currentNumber+1))
        },1000)
    }
  return (
    <div>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsync}>IncreaseAsync</button>
        <h1>{number}</h1>
    </div>
  )
}

export default ReactuseState
```
- useState Advance
```js
import React, { useEffect, useState } from 'react'

const ReactuseState = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const [profile,setPropfile]=useState([]);
    // const changeUser=()=>{
    //     setUser(user.name=input)
    // }
    // const changeUser=()=>{
    //     setUser(pre=>pre.name=input)
    // }
    // const changeUser=()=>{
    //     setUser((prev)=>({...prev,name:input}))
    // }
    const handleChange=(e)=>{
        setUser(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleClick =(e)=>{
        e.preventDefault();
        setPropfile({...profile,user})
    }
    useEffect(()=>{
        console.log('useEffect called');
        
    },[])
    
    // console.log(user);
    console.log(profile);
  return (
    <div>
        <h1>User:</h1>
        {/* <span>Username is:{user && user.name}</span> */}
        <input type="text" name='name' onChange={handleChange} />
        <input type="text" name='email' onChange={handleChange} />
        <input type="text" name='password' onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
        <span>Username is:{user?.name}</span>
    </div>
  )
}

export default ReactuseState
```
