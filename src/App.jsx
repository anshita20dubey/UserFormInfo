import { nanoid } from 'nanoid';
import React, { useState } from 'react'

export const App = () => {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newuser = { id: nanoid(), username, email, contact };
    setusers([...users, newuser]);
    console.log(newuser);
    setusername("");
    setemail("");
    setcontact("");
    localStorage.setItem("users", JSON.stringify([...users, newuser]));
  }

  return (
    <div>
      <form onSubmit={submitHandler} className='w-[35%] flex justify-between px-5 my-[2%]'>
        <input onChange={(e) => { setusername(e.target.value) }} value={username} type="text" className='px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700' placeholder='name' />
        <input onChange={(e) => { setemail(e.target.value) }} value={email} type="email" className='px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700' placeholder='email' />
        <input onChange={(e) => { setcontact(e.target.value) }} value={contact} type="number" className='px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700' placeholder='contact' />
        <button className='bg-green-300 rounded-xl'>Submit</button>
      </form>

      {/*  */}
      <ul className="list-none w-[35%]">
        {users.length > 0 ?
            users.map((index,user)=>{
              return(
                <li key={user.id}>
                    
                </li>
              )
            }) : (
              <h1>Nothing to show</h1>
            )
        }

      </ul>
      
    </div>
  )
}


export default App
