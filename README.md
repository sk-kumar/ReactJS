## Cashcading-Dropdown
```js
import React, { useState } from 'react'

const CashcadingDropdown = () => {
    const states=['UP','DELHI','GUJRAT'];
    const cities ={
        'UP':['f','g','l'],
        'DELHI':['a','b'],
        'GUJRAT':['c','d']
    }
    const [selectState,setSelectState] = useState('');
    console.log(selectState);

  return (
    <div>
        <select onChange={(e)=>{setSelectState(e.target.value)}}>
            <option value="">State</option>
            {
                states && states!==undefined?  states.map((state, i)=>{
                    return <option value={state} key={i}>{state}</option>
                })
                :"No states"
            }
        </select>
        <select >
            <option value="">City</option>
            {selectState && cities[selectState].map((city,i)=>{
                return <option value={city} key={i}>{city}</option>
            })}
        </select>
    </div>
  )
}

export default CashcadingDropdown
```
