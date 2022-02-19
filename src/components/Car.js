// import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap'
export default function Car() {
  const [carInfo, setCarInfo] = useState([]);

  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>

            <Carousel variant="dark">
            <Carousel.Item>
                  <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/gumushane-turkey-25-september-pistachio-260nw-1520035418.jpg" />

                </Carousel.Item>
  <Carousel.Item>
  <Card.Img variant="top" src="https://pictures.topspeed.com/IMG/crop_webp/200705/2007-hyundai-getz-11_1920x1080.webp" />

  </Carousel.Item>
  <Carousel.Item>
  <Card.Img variant="top" src="https://carsalesbase.com/wp-content/uploads/2014/02/Hyundai-Getz-auto-sales-statistics-Europe.png" />
             
               
                </Carousel.Item>
              </Carousel>



              <Card.Body>
                <Card.Title>Toyota</Card.Title>
                <Card.Text>
                  2021
                  800,000
                  Excellent Condition
                  2% commission
                </Card.Text>
                <Button variant="outline-secondary">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}