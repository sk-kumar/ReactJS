## Todo
```js
import React, { useState } from 'react'

function Todo() {
  const [country,setCountry]=useState('');
  const [list,setList]=useState([]);
  function addList(){
    // setList([...list,country])
    // if(country !==''){
    //   setList([...list,country])
    // }
    country && setList([...list,country])
    // console.log(list);
  }

  function deleteList(key){
    let listItem = [...list]
    listItem.splice(key,1)
    setList([...listItem])
  }
  function handleEnterKeyPress(e){
    if(e.keyCode ===13){
      addList(country);
      setCountry("");
    }
  }

  return (
    <div>
      <input type='text' value={country} 
      onChange={(e)=>setCountry(e.target.value)}
      onKeyDown={handleEnterKeyPress} 
      />
      <button onClick={()=>{
        addList(country)
        setCountry("")
      }}>add</button>
      {/* <button onClick={()=>deleteList()}>Delete</button> */}
      <ul>
        {
          list.map((item,i)=>{
            return(
              <li key={i}>
                {item}
                <button  onClick={()=>deleteList(i)}>Delete</button>
              </li>
              
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todo
```
