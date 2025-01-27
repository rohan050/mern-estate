import React,{useState} from 'react'

const App = () => {
  const [username, setUsername] = useState('');
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(username)
    setUsername('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }} className='px-4 py-3 text-xl m-5 rounded' type="text" placeholder='Enter your name' />
        <button className='px-4 py-3 m-5 text-xl text-white font-semibold bg-emerald-500 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App
