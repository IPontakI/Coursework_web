import Container from 'react-bootstrap/Container'
import photo from '../../assets/main_photo.jpg'

import phGal1 from '../../assets/gal-1.jpg'
import phGal2 from '../../assets/gal-2.jpg'
import phGal3 from '../../assets/gal-3.jpg'
import phGal4 from '../../assets/gal-4.jpg'
import phGal5 from '../../assets/gal-5.webp'
import phGal6 from '../../assets/gal-6.webp'
import phGal7 from '../../assets/gal-7.jpg'
import phGal8 from '../../assets/gal-8.jpg'
import phGal9 from '../../assets/gal-9.jpeg'
import phGal10 from '../../assets/gal-10.jpg'
import phGal11 from '../../assets/gal-11.jpg'
import phGal12 from '../../assets/gal-12.jpg'
import phGal13 from '../../assets/gal-13.jpg'
import phGal14 from '../../assets/gal-14.jpeg'
import phGal15 from '../../assets/gal-15.jpg'
import phGal16 from '../../assets/gal-16.jpg'
import phGal17 from '../../assets/gal-17.jpg'
import phGal18 from '../../assets/gal-18.jpg'
import phGal19 from '../../assets/gal-19.jpg'
import phGal20 from '../../assets/gal-20.jpg'

export const Gallery = () => {
  return (
    <div className='container my-3 galery-table'>
      <div class='grid-wrapper'>
        <div class='wide'>
          <img src={phGal1} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal2} alt='' />
        </div>
        <div class='tall'>
          <img src={phGal3} alt='' />
        </div>
        <div class='big'>
          <img src={phGal4} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal5} alt='' />
        </div>
        <div class='tall'>
          <img src={phGal6} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal7} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal8} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal9} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal10} alt='' />
        </div>
        <div class='big'>
          <img src={phGal11} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal12} alt='' />
        </div>
        <div class='big'>
          <img src={phGal13} alt='' />
        </div>
        <div class='tall'>
          <img src={phGal14} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal15} alt='' />
        </div>
        <div>
          <img src={phGal16} alt='' />
        </div>
        <div class='tall'>
          <img src={phGal17} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal18} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal19} alt='' />
        </div>
        <div class='wide'>
          <img src={phGal20} alt='' />
        </div>
      </div>
    </div>
  )
}
