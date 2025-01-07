import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const [notValid, setNotValid] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length < 8 && name.length < 3) {
      alert(`enter valid name`);
      setPassword("")
      setCheckPass("")
    }
    else {
      let lower = false, upper = false, digit = false, special = false;
      for (let i = 0; i < password.length; i++) {
        if (i > 0 && password[i] === password[i - 1]) return false;
        let ascii = password.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) upper = true;
        else if (ascii >= 97 && ascii <= 122) lower = true;
        else if (ascii >= 48 && ascii <= 57) digit = true;
        else special = true;
      }
      if (lower && upper && digit && special) {
        alert(`User Registered Successfully ${name}`)
        setName("")
        setEmail("")
        setPassword("")
        setCheckPass("")
      } else {
        setNotValid(!notValid)
        alert(`enter valid password`)
        setPassword("")
        setCheckPass("")
      }
    }

  }


  return (


    <div className='h-screen w-screen flex items-center justify-between bg-black'>
      <div className='  mx-auto border-2 border-slate-800  w-96'>
        <form className='flex flex-col gap-5 px-10 py-10' onSubmit={submitHandler} >
          <input required type="text" placeholder='Enter Your Name' onChange={(e) => { setName(e.target.value) }} value={name} 
          className='py-2 px-2 w-full rounded bg-gray-700 font-bold'
          />
          <input required type="email" placeholder='Enter your Email' onChange={(e) => { setEmail(e.target.value) }} value={email} 
          className='py-2 px-2 w-full rounded bg-gray-700 font-bold'
          />
          <input required type="password" placeholder='Enter your Password' onChange={(e) => { setPassword(e.target.value) }} value={password} className='focus:'
          className='py-2 px-2 w-full rounded bg-gray-700 font-bold'
          />
          <input required type="password" placeholder='Re-Enter Password' onChange={(e) => { setCheckPass(e.target.value) }} value={checkPass} className={`${notValid ? 'focus:outline-red-600' :  'focus:outline-zinc-800'}  `}  
          className='py-2 px-2 w-full rounded bg-gray-700 font-bold'
          />
          <button className='bg-slate-900 hover:bg-green-950 duration-500 active:scale-95 rounded text-white py-2 rounded'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default App