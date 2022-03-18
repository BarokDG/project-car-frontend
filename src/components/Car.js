import React, { useState, useEffect } from "react";

import { ReactComponent as Phone } from "../assets/phone.svg";

import Modal from "./Modal";
import {
  CarsWrapper,
  CarDetails,
  CarTitle,
  CarContainer,
  CarImage,
  CarDate,
  CarDescription,
  CarDescriptionGroup,
  CarFooter,
  ActionButton,
} from "../styles/Car.style";

function Car(props) {
  const [active, setActive] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
  });

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
            loan,
          },
          index
        ) => {
          return (
            <>
              <CarContainer>
                <CarImage src={image} />
                <CarDetails>
                  <CarTitle>
                    {make} {model.toLowerCase()}
                  </CarTitle>
                  <CarDate>{year}</CarDate>
                  <CarDescription>
                    <p>{comment}</p>
                    <CarDescriptionGroup>
                      <div>
                        <label>Price</label>
                        <p>{price.split(".")[0]} br.</p>
                      </div>
                      <div>
                        <label>Loan</label>
                        <p>{loan ? `${loan} br.` : "Not available!"}</p>
                      </div>
                      <div>
                        <label>Transmission</label>
                        <p>{transmission}</p>
                      </div>
                    </CarDescriptionGroup>
                  </CarDescription>
                  <CarFooter>
                    <ActionButton
                      href={
                        windowSize < 600 ? "tel: +251 " + number.slice(1) : "#"
                      }
                      style={
                        windowSize < 600
                          ? { pointerEvents: "all" }
                          : { pointerEvents: "none" }
                      }
                    >
                      <Phone />
                      {windowSize < 600
                        ? "Click to call"
                        : "+251 " + number.slice(1)}
                    </ActionButton>
                    <p>
                      {commission * 100}% <br /> commission
                    </p>
                  </CarFooter>
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
