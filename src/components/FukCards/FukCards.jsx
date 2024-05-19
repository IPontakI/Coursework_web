import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { GiRobotGolem } from 'react-icons/gi'
import { GiWashingMachine } from 'react-icons/gi'
import { PiMathOperationsFill } from 'react-icons/pi'
import { SiKingstontechnology } from 'react-icons/si'

const arr = [
  { icon: <GiRobotGolem size={50} fill='#000000a6' />, title: 'Кафедра автоматики, електроніки та телекомунікацій' },
  { icon: <GiWashingMachine size={50} fill='#000000a6' />, title: 'Кафедра галузевого машинобудування та мехатроніки' },
  { icon: <PiMathOperationsFill size={50} fill='#000000a6' />, title: 'Кафедра вищої та прикладної математики' },
  {
    icon: <SiKingstontechnology size={50} fill='#000000a6' />,
    title: "Кафедра комп'ютерних та інформаційних технологій і систем"
  }
]

export const FukCards = () => {
  return (
    <div className='my-4 text-center'>
      <Row xs={1} md={2} className='g-4 '>
        {arr.map((item, idx) => (
          <Col key={idx}>
            <Card className='icon-style pt-3 bg-info'>
              {item.icon}
              <Card.Body>
                {/* <Card.Title>Card title</Card.Title> */}
                <Card.Text className='card_text_cl'>{item.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
