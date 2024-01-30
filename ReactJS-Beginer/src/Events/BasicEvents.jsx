import React from 'react'

function BasicEvents() {
    // const handleClick=()=>{
    //     console.log("button cliked");
    // }

    const handleClick=(str)=>{
        console.log(str);
    }

    const handleChange=()=>{
      console.log("input changed happened");
    }
  return (
    <div>
        {/* <button onClick={()=>console.log("button clicked")}>Click</button> */}

        {/* <button onClick={handleClick}>Click</button> */}

        {/* <button onClick={()=>handleClick()}>Click</button> */}

        <button onClick={()=>handleClick("hello world")}>Click</button>
        {/* <h1 onMouseEnter={()=>console.log("Hover...")}>Hover</h1> */}

        {/* <input type='text' onChange={()=>console.log(" text input happend")} /> */}

        <input type='text' onChange={handleChange} />

        <input type='text' onChange={(e)=> console.log(e.target.value)} />

        <input type='text' onChange={(e)=> console.log(e.target['value'])} />
    </div>
  )
}

export default BasicEvents