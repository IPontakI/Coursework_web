import React from 'react'
import { NewsCards } from '../NewsCards/NewsCards'

export const News = () => {
  return (
    <div className='container my-3'>
      <h2>Всі новини</h2>
      <NewsCards />
    </div>
  )
}
