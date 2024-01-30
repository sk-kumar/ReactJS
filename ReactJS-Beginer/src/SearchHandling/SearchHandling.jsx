import React, { startTransition, useState, useTransition } from 'react'
const users=['aman','amit','mayank']

function SearchHandling() {
    const [searchTerm,setSearchTerm]=useState('');
    const [filterData,setFilterData]=useState(users);
    const [isPending,setIsPending]=useTransition();

    const handleChange=({target:{value}})=>{
        setSearchTerm(value);
        startTransition(()=>{
            setFilterData(users.filter((item)=>item.includes(value)))
        })
    }
  return (
    <div>
        <input type='text' onChange={handleChange} value={searchTerm}/>
        {
            isPending ? "Loading..." : filterData.map((item,index)=>{
                return <p key={index}>{item}</p>
            })
        }
    </div>
  )
}

export default SearchHandling