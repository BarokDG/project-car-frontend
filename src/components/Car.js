// import { Button } from 'bootstrap';
import React, { useState } from "react";

import Modal from "./Modal";
import {
  CarsWrapper,
  CarDetails,
  CarTitle,
  CarContainer,
  CarImage,
  CarDate,
  CarDescription,
  ActionButton,
} from "../styles/Car.style";

function Car(props) {
  const [active, setActive] = useState(false);

  return (
    <CarsWrapper>
      {props.cars.map(
        (
          {
            image,
            make,
            model,
            comment,
            transmission,
            price,
            year,
            number,
            commission,
          },
          index
        ) => {
          return (
            <>
              <CarContainer>
                <CarImage src={image} />
                <CarDetails>
                  <CarTitle>
                    {make} {model}
                  </CarTitle>
                  <CarDate>{year}</CarDate>
                  <CarDescription>
                    <p>{comment}</p>
                    <p>
                      <i class="fa-solid fa-tag"></i>
                      {price} br.
                    </p>
                    <p>
                      <i class="fa-solid fa-gears"></i>
                      {transmission}
                    </p>
                  </CarDescription>
                  <ActionButton onClick={() => setActive(index)}>
                    <i class="fa fa-user icon"></i> {number}
                  </ActionButton>
                </CarDetails>
                {/* <Modal
                  active={index === active}
                  hideModal={() => setActive(null)}
                  title="Modal Title"
                >
                  <Carousel>
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
                </Modal> */}
              </CarContainer>
            </>
          );
        }
      )}
    </CarsWrapper>
  );
}

export default Car;
