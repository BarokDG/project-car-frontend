// import { Button } from 'bootstrap';
import React, { useState } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import Modal from "./Modal";
import {
  CarTitle,
  CarContainer,
  CarImage,
  CarDate,
  CarDescription,
  ActionButton,
} from "../styles/Car.style";

function Car(props) {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Row md={3} xs={1} sm={2}>
        {props.cars.map((car) => {
          return (
            <>
              <Col>
                <CarContainer>
                  <CarImage src={car.image} />
                  <CarTitle>
                    {car.make} {car.model}
                  </CarTitle>
                  <CarDate>{car.year} model</CarDate>
                  <CarDescription>
                    {car.transmission} Transmission
                    <br /> {car.price} <br /> {car.commission * 100}% commission
                    <br /> {car.comment}
                  </CarDescription>
                  <ActionButton onClick={() => setActive(true)}>
                    <i class="fa fa-user icon"></i> Contact Buyer
                  </ActionButton>
                  <Modal
                    active={active}
                    hideModal={() => setActive(false)}
                    title="Modal Title"
                    car={car}
                  >
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://cdn.pixabay.com/photo/2021/10/29/12/25/toyota-gr-yaris-6751755_960_720.jpg"
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_960_720.jpg"
                          alt="Second slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://cdn.pixabay.com/photo/2019/06/29/09/51/suzuki-sx4-4305877_960_720.jpg"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                    <CarDescription>
                      Contact Number: {car.number}
                    </CarDescription>
                  </Modal>
                </CarContainer>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
}

export default Car;
