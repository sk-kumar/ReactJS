# Print Page 
```js
import React, { useEffect, useState } from 'react'

function PrintPage() {
    const [isPrinted,setIsPrinted]=useState(false);
    const printArea = ()=>{
        window.print()
        setIsPrinted(true);
    }
    useEffect(()=>{
        // THIS FUNCTION WILL SHOW OR HIDE
        const showhide = ()=>{
            setIsPrinted(false);
        }
        window.addEventListener("afterprint",showhide)
        return ()=>{
            window.addEventListener("afterprint",showhide)
        }
    },[]);
    
  return (
    <div>
        <style>
            {
                `
                @media print{
                    .hide-on-print{
                        display: none
                    }
                }
                `
            }
        </style>
        <p>
            lorem ipsum dolor sit amet lorem, consectetur adipiscing elit 
        </p>
        {!isPrinted && (
        <button style={{backgroundColor:'yellow'}} className='hide-on-print' onClick={printArea}>print this page and hide button</button>

        )}
        
    </div>
  )
}
export default PrintPage
```
