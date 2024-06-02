import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Image } from 'react-bootstrap'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import prepodPhoto1 from '../../assets/prepodi/1.jpg'
import prepodPhoto2 from '../../assets/prepodi/2.jpg'
import prepodPhoto3 from '../../assets/prepodi/3.jpg'
import prepodPhoto4 from '../../assets/prepodi/4.jpg'
import prepodPhoto5 from '../../assets/prepodi/5.jpg'
import prepodPhoto6 from '../../assets/prepodi/6.jpg'
import prepodPhoto7 from '../../assets/prepodi/7.jpg'
import prepodPhoto8 from '../../assets/prepodi/8.jpg'
import prepodPhoto9 from '../../assets/prepodi/9.jpg'
import prepodPhoto10 from '../../assets/prepodi/10.jpg'

const arr = [
  { photo: prepodPhoto2, prepodName: 'Олексій Мельник', prepodRole: 'Декан факультету' },
  { photo: prepodPhoto1, prepodName: 'Ірина Ковальчук', prepodRole: 'Заступниця декана з навчальної роботи' },
  { photo: prepodPhoto3, prepodName: 'Андрій Шевченко', prepodRole: 'Професор математики' },
  { photo: prepodPhoto5, prepodName: 'Наталія Кравчук', prepodRole: 'Доцент кафедри української мови та літератури' },
  { photo: prepodPhoto4, prepodName: 'Сергій Литвиненко', prepodRole: 'Професор фізики' },
  { photo: prepodPhoto9, prepodName: 'Олена Гончарук', prepodRole: 'Старший викладач кафедри педагогіки' },
  { photo: prepodPhoto8, prepodName: 'Володимир Петров', prepodRole: 'Старший викладач кафедри педагогіки' },
  { photo: prepodPhoto7, prepodName: 'Марія Ткаченко', prepodRole: 'Доцент кафедри англійської філології' },
  { photo: prepodPhoto6, prepodName: 'Дмитро Василенко', prepodRole: 'Завідувач кафедри інформатики' },
  { photo: prepodPhoto10, prepodName: 'Галина Романюк', prepodRole: 'Бібліотекар факультету' }
]

export const Prepodi = () => {
  return (
    <div className='my-3'>
      <Swiper
        pagination
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          }
        }}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {arr.map((item) => (
          <SwiperSlide key={item.prepodName}>
            <div className='imageInside'>
              <Image src={item.photo} alt='logo' />
              <h6>{item.prepodName}</h6>
              <p className='prepodRoleText'>{item.prepodRole}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
