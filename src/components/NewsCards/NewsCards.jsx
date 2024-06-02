import { useEffect, useState } from 'react'
import axios from '../../axios'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const NewsCards = () => {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`/posts`)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.warn(err)
      })
  }, [])
  console.log(data)
  return (
    <Row xs={1} md={2} lg={3} className='g-4'>
      {data?.map((el, idx) => (
        <Col key={idx}>
          <Card className='h-full'>
            <Card.Img variant='top' src={`${el.imageUrl}`} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
