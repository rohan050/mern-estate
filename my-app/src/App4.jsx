import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App4 = () => {
    const [data, setData] = useState([])
    const getData= async()=>{
        const response =await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
        setData(response.data)
        useEffect(() => {
          getData()
        }, [])
        
    }
  return (
    <div className='p-10'>
      {/*<button onClick={getData} className='bg-teal-500 text-white active:scale-90 font-semibold rounded text-2xl px-6 py-3'>Get Data</button> */}
      <div className='p-5 bg-gray-800'>
        {data.map(function(e,idx){
          return <div key={idx} className='bg-gray-50 justify-between text-black flex items-center w-full px-7 py-6 rounded'>
            <img className='h-40' src={e.download_url} alt="" />
            <h1>{e.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App4
