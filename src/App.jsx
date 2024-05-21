import { nanoid } from 'nanoid';
import React, { useState } from 'react'

export const App = () => {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newuser = { id: nanoid(), username, email, contact };
    console.log(newuser);
    setusers([...users, newuser]);
    setusername("");
    setemail("");
    setcontact("");
    localStorage.setItem("users", JSON.stringify([...users, newuser]));
  }
  const deleteHandler = (id) => {
      setusers(users.filter((t)=> t.id != id ));
      localStorage.setItem("users", JSON.stringify(users.filter((t)=> t.id != id )))
  }

  return (
    <div className='flex items-center mt-48 justify-center'>
      <form onSubmit={submitHandler} className='w-[35%] justify-between px-5 my-[2%]'>
        <input onChange={(e) => { setusername(e.target.value) }} value={username} type="text" className='px-5 mb-4 py-3 text-white outline-none w-[80%] rounded-xl bg-zinc-700' placeholder='name' />
        <input onChange={(e) => { setemail(e.target.value) }} value={email} type="email" className='px-5 mb-4 py-3 text-white outline-none w-[80%] rounded-xl bg-zinc-700' placeholder='email' />
        <input onChange={(e) => { setcontact(e.target.value) }} value={contact} type="number" className='px-5 mb-4 py-3 text-white outline-none w-[80%] rounded-xl bg-zinc-700' placeholder='contact' />
        <button className='bg-green-300 outline-none text-xl font-bold flex justify-center items-center w-[6vmax] h-[3vmax] rounded-xl'>Submit</button>
      </form>

      {/*  */}

      <ul className="list-none w-[35%]">
        {users.length > 0 ?
          users.map((user,index) => {
            return (
              <li key={user.id} className='mb-5 flex justify-between items-center border outline rounded-xl p-5'>
                    {user.username} , {user.email} , {user.contact}
                    <i onClick={()=>deleteHandler(user.id)} class="ri-delete-bin-line cursor-pointer"></i>
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

export default App;