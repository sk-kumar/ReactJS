import React, { useEffect, useState } from 'react'
import BasicEvents from './Events/BasicEvents';
import BasicFormHandling from './FormHandling/BasicFormHandling';
import AdvanceFormHandling from './FormHandling/AdvanceFormHandling';
import SearchHandling from './SearchHandling/SearchHandling';
import BasicReactHookForm from './FormHandling/BasicReactHookForm';

function App() {
  const name ="John Smith";
  // const [age,setAge]=useState('');
  // const [address,setAddress]=useState({
  //   city:'',
  //   state:'',
  //   pincode:''
  // });
  // useEffect(()=>{
  //   console.log('function called');
  // })
  // useEffect(()=>{
  //   console.log('function called');
  // },[])

  // const handleChange=(e)=>{
  //   setAddress((prev)=>{
  //     let data = {...prev}
  //     data[`${e.target.id}`]=e.target.value
  //     return data
  //   })
  // }

  //  const handleChange=(e)=>{
  //   // console.log(e.target);
  //   const name = e.target.name
  //   const value = e.target.value
  //   // console.log(name,value);
  //   setAddress((prev)=>{
  //     return {...prev,[name]:value}
  //   })
  //  }

  // const handleChange=(e)=>{
  //   const {name,value} = e.target
  //   // console.log(name,value);
  //   setAddress((prev)=>{
  //     return {...prev,[name]:value}
  //   });
  //  }

  //  const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(address);
  //  }
  // console.log(address);
  return (
    <div>
      {/* Name:{name} <br /> */}
      {/* <input type="text" onChange={(e)=>console.log(e.target.value)} /> */}
      {/* <input type="text" onChange={(e)=>setAge(e.target.value)}  /> */}
      {/* <p>{age}</p> */}
      {/* <button onClick={()=>console.log(age)}>Check Age</button> */}
      {/* <input type="text" onChange={handleChange} value={setAddress.city} id='city' />
      <input type="text" onChange={handleChange} value={setAddress.state} id='state' />
      <input type="text" onChange={handleChange} value={setAddress.pincode} id='pincode' /> */}

      {/* <input type="text" onChange={handleChange} name='city' id='city' />
      <input type="text" onChange={handleChange} name='state' id='state' />
      <input type="text" onChange={handleChange} name='pincode' id='pincode' /> */}

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name='city' id='city' />
        <input type="text" onChange={handleChange} name='state' id='state' />
        <input type="text" onChange={handleChange} name='pincode' id='pincode' />
        <button>Submit</button>
      </form> */}

      {/* <BasicEvents/> */}
      {/* <BasicFormHandling/> */}
      {/* <AdvanceFormHandling/> */}
      {/* <SearchHandling/> */}
      <BasicReactHookForm/>

    </div>
  )
}

export default App