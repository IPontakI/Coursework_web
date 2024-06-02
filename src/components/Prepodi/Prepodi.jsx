import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Image } from 'react-bootstrap'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import prepodPhoto from '../../assets/kent.jpg'

const arr = [
  { photo: prepodPhoto, prepodName: 'Олексій Мельник', prepodRole: 'Декан факультету' },
  { photo: prepodPhoto, prepodName: 'Ірина Ковальчук', prepodRole: 'Заступниця декана з навчальної роботи' },
  { photo: prepodPhoto, prepodName: 'Андрій Шевченко', prepodRole: 'Професор математики' },
  { photo: prepodPhoto, prepodName: 'Наталія Кравчук', prepodRole: 'Доцент кафедри української мови та літератури' },
  { photo: prepodPhoto, prepodName: 'Сергій Литвиненко', prepodRole: 'Професор фізики' },
  { photo: prepodPhoto, prepodName: 'Олена Гончарук', prepodRole: 'Старший викладач кафедри педагогіки' },
  { photo: prepodPhoto, prepodName: 'Володимир Петров', prepodRole: 'Старший викладач кафедри педагогіки' },
  { photo: prepodPhoto, prepodName: 'Марія Ткаченко', prepodRole: 'Доцент кафедри англійської філології' },
  { photo: prepodPhoto, prepodName: 'Дмитро Василенко', prepodRole: 'Завідувач кафедри інформатики' },
  { photo: prepodPhoto, prepodName: 'Галина Романюк', prepodRole: 'Бібліотекар факультету' }
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
