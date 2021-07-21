import React, { useState } from 'react';


function Form({addToTeam, errors, change, submit}) {
    
    
    const [formData, setFormdata] = useState({name: '', email: '', password: '', checkbox: false})
    
    const handleInput = (evt =>{
        const target = evt.target
        const value = target.value 
        const name = target.name
        if (name === 'checkbox'){
            setFormdata({...formData, checkbox: !formData.checkbox})
            return  change('checkbox', formData.checkbox)

        }

        setFormdata({...formData, [name]: value })
        change(name, value)
    })
    
    
    
    
    
    
    return (
       <form onSubmit={(evt)=> {
           evt.preventDefault()
           const {name, email, password} = formData
           let newUser = {name, email, password}
           addToTeam(newUser)
           setFormdata({name: '', email: '', password: '', checkbox: false})
           submit()


       }}>
        <div className='labels'>
            <h1>Onboarding</h1>
            <label>
            Name:<input
                type='text'
                name ='name'
                value={formData.name}
                onChange={handleInput}
                />
            </label>
            <label>
            Email:<input
                type='text'
                name ='email'
                value={formData.email}
                onChange={handleInput}
            
                />
            </label>
            <label>
            Password:<input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInput}
            
                />
            </label>
            <label>
              Terms of Service  <input
                type='checkbox'
                name='checkbox'
                value={formData.checkbox}
                checked={formData.checkbox}
                onChange={handleInput}
            
                />
            </label>   
            <button type='submit'>submit</button>
            
            </div>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.checkbox}</div>
            </div>
        </form> 

    );
}

export default Form;