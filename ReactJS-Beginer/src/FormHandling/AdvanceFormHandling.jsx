import React from 'react'

function AdvanceFormHandling() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData)
        console.log(payload);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name'/>
            <input type="email" name='email' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AdvanceFormHandling