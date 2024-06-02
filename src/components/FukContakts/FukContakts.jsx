import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Map } from '../Map/Map'

export const FukContakts = () => {
  return (
    <div className='container my-3'>
      <div>
        <h2>Зв'яжіться з нами!</h2>
        <p>
          Ми серйозно ставимося до своїх зобов’язань перед нашими користувачами. Якщо вам потрібна наша допомога з вашим
          обліковим записом користувача, у вас є запитання щодо використання платформи або виникли технічні труднощі,
          будь ласка, не соромтеся зв’язатися з нами. Ми також пишаємося тим, що співпрацюємо з іншими подібними
          корпораціями та інвесторами.
        </p>
        <Map />
      </div>
      <Form>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Ваше ім'я</Form.Label>
          <Form.Control type='text' placeholder='Введіть ім♥я' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Пошта</Form.Label>
          <Form.Control type='email' placeholder='Введіть Пошту' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='subject'>
          <Form.Label>Тема</Form.Label>
          <Form.Control type='email' placeholder='Введіть тему' />
        </Form.Group>
        <FloatingLabel controlId='coment' label='Коментар' className='mb-3'>
          <Form.Control as='textarea' placeholder='Leave a comment here' style={{ height: '100px' }} />
        </FloatingLabel>
        <Button variant='primary' type='submit'>
          Відправити
        </Button>
      </Form>
    </div>
  )
}
