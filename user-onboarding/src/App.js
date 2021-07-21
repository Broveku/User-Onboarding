import './App.css';
import Form from './components/Form';
import TeamMember from './components/TeamMember';
import { useState } from 'react';
import schema from './components/formSchema'
import { reach } from 'yup';
import axios from 'axios';


const initalFormValues = {
  name: '',
  email: '',
  password: '',
}

const initalFormErrors ={
  name: '',
  email: '',
  password: '',
}






function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initalFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErrors)

  const addToTeam = newUser => {
    setTeam([newUser, ...team])
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(()=>setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
    .then(res =>{
      setTeam([res.data, ...team])
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const inputChange = (name, value) =>{
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      
    }
    postNewMember(newMember)
  }
  
  
  
  return (
    <div className="App">
     <Form 
     addToTeam={addToTeam} 
     errors={formErrors}
     change = {inputChange}
     submit ={formSubmit}
     
     />

     {team.map(member => {
       return <TeamMember teamMember={member} />
     })}
    </div>
  );
}

export default App;
