// import React from 'react'
// import {useForm} from 'react-hook-form'
// function BasicReactHookForm() {
//     const {
//         register,
//         handleSubmit,
//         formState:{errors}
//     } = useForm();
//     const formSubmit=(data)=>{
//         console.log(data);
//     }
    
//   return (

//     <div>
//         <form onSubmit={handleSubmit(formSubmit)}>
//             <input type='text' {...register("name",{required:true,maxLength:30,pattern:/^[A-Za-z]+$/i})}/>
//             {errors.name && <p>Name is required</p>}
//             <input type='email' {...register("email",{required:true})}/>
//             {errors.email && <p>Email is required</p>}
//             <input type='number' {...register("mobile",{required:true},{ pattern: /\d+/ })}/>
//             {errors.mobile && <p>Mobile is required</p>}
//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default BasicReactHookForm


// import React from 'react'
// import {useForm,Controller} from 'react-hook-form'
// function BasicReactHookForm() {
//     const {
//         handleSubmit,
//         formState:{errors},
//         control
//     } = useForm({
//         defaultValues:{
//             name:''
//         }
//     });
//     const formSubmit=(data)=>{
//         console.log(data);
//     }
    
//   return (

//     <div>
//         <form onSubmit={handleSubmit(formSubmit)}>
//             <Controller name='name' control={control} rules={{required:'Name is required',pattern: /^[A-Za-z]+$/i,minLength: {
//               value: 2,
//               message: 'Name should be at least 2 characters long',
//             }}} render={({field})=> (
//                 <div>
//                     <input {...field} type='text'/>
//                     {errors.name && <p role="alert">{errors.name.message}</p>}
//                 </div>
//             )}/>
            
//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default BasicReactHookForm

import React from 'react'
import {useForm,Controller} from 'react-hook-form'
function BasicReactHookForm() {
    const {
        handleSubmit,
        formState:{errors},
        control
    } = useForm({
        defaultValues:{
            name:''
        }
    });
    const formSubmit=(data)=>{
        console.log(data);
    }
    
  return (

    <div>
        <form onSubmit={handleSubmit(formSubmit)}>
            <Controller name='name' control={control} rules={{required:true,pattern: /^[A-Za-z]+$/i,minLength: {
              value: 2,
              message: 'Name should be at least 2 characters long',
            },maxLength:{
                value:20,
                message: 'Name should be at most 20 characters long'
            }
        }} render={({field})=> (
                <div>
                    <input {...field} type='text'/>
                    {errors.name && errors.name.type === "required" && <span>This is required</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
                    {errors.name && errors.name.type === "pattern" && <span>Name should be alphabets</span> }
                </div>
            )}/>
            
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default BasicReactHookForm