import React,{useState} from 'react'
import axios from 'axios'

function ReadyToWork() {
    const [state,setState]= useState({name:'',surname:'',email:'',physical_address:''})

    // const submit = async (e) => {
    //     try {
        
    //       const { data } = await axios.get('http://localhost:5000/person')
    //     setState(data)
    //     } catch (e) {
    //       console.log(e)
    //     }
    //   }
    return (
        <div>
            <input type='text' name="name"  value={state.name}placeholder="name" onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
            <input type='text' name='surname' value={state.surname} placeholder='surname' onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
            <input type='email' name='email' value={state.email} placeholder='email' onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
            <input type='text' name='physical_address' value={state.physical_address} placeholder='physical_address' onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
            <input type='submit' onClick={submit}/>
        </div>
    )
}

export default ReadyToWork
