import React from 'react'
import { Container } from 'react-bootstrap'
import { NewsCards } from '../NewsCards/NewsCards'
import { Prepodi } from '../Prepodi/Prepodi'

export const MainPage = () => {
  return (
    <div>
      <div className='zatemie'>
        <div className='textPositionM'></div>
        <div className='textPosition'>
          <h1>Вітаємо на нашому факультеті!</h1>
          <p>
            На нашому факультеті ви здобудете найкращі знання на відміну від усіх іншин навчальних факультетів світу!
          </p>
        </div>
      </div>
      <Container>
        <h2 className='mt-3'>Останні новини</h2>
        <NewsCards />
        <Prepodi />
      </Container>
    </div>
  )
}
