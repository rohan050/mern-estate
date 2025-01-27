import React from 'react'

const Card = (props) => {
    console.log(props.user)
  return (
    <div className='mr-10 bg-white text-black inline-block p-6 text-center rounded'>
        <img className='ml-7 h-32 w-32 rounded-full mb-3' src="{props.image}" alt="" />
      <h1 className='text-2xl font-semibold mb-4'>{props.userName} </h1>
      <h2>{props.city}, {props.age}</h2>
      <h4 className='text-blue-400'>{props.prof}</h4>
      <button className='mt-5 bg-emerald-600 text-white px-4 py-2 rounded font-medium'>Add friend</button>
    </div>
  )
}

export default Card
