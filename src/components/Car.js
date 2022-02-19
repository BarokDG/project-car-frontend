// import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap'
import axios from "../axios"
export default function Car() {
  const [carInfo, setCarInfo] = useState([]);

  useEffect(()=>{
    axios.get("cars").then((res)=>{
      setCarInfo(res.data);
    
    })
  }, []);
 
  return (
    <>
      <Row xs={1} md={3} className="g-3">
       
          
  {carInfo.map(({
    make, year, price, transmission, comment, condition,commission
  })=>(<Col>
            <Card style={{ width: '25rem' }}>

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
                <Card.Title>{make}</Card.Title>
                <Card.Text>
                  {year}
                </Card.Text>
                <Card.Text>
                  {price}
                </Card.Text>
                <Card.Text>
                  {transmission}
                </Card.Text>
                <Card.Text>
                  {comment}
                </Card.Text>
                <Card.Text>
                  {condition}
                </Card.Text>
                <Card.Text>
                  {commission}
                </Card.Text>
                <Button variant="outline-secondary">Read more</Button>
              </Card.Body>
            </Card>
            </Col>
   ) )}
          
     
      </Row>
    </>
  );
}