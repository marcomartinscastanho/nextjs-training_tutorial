"use client";

import React, { useState } from 'react'

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='text-7xl'>
      <h1 className='text-7xl font-bold mb-4'>{count}</h1>
      <button className='btn btn-primary' onClick={() => setCount(c => c + 1)}>INCREASE</button>
    </div>
  )
}

export default ClientPage