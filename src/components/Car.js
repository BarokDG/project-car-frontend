import React, { useState, useEffect } from "react";

import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Image } from "../assets/image.svg";

import Modal from "./Modal";
import {getMultipleFiles} from '../data/api';
import {
  CarsWrapper,
  CarDetails,
  CarTitle,
  CarContainer,
  CarImageContainer,
  CarImage,
  CarDate,
  CarDescription,
  CarDescriptionGroup,
  CarFooter,
  ActionButton,
} from "../styles/Car.style";

function Car(props) {
  const [showModal, setShowModal] = useState(false);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const getMultipleFilesList = async () => {
    try {
        const fileslist = await getMultipleFiles();
        setMultipleFiles(fileslist);
        console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getMultipleFilesList();
  }, []);
  
  useEffect(() => {
    const body = document.querySelector("body");

    showModal
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }, [showModal]);

  return (
    <>
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
              <CarContainer key={index}>
                <CarImageContainer>
                  <CarImage src={image} />
                  <button onClick={() => setShowModal(true)}>
                    <Image />
                    <span>More pictures</span>
                  </button>
                </CarImageContainer>
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
                        window.innerWidth < 600
                          ? "tel: +251 " + number.slice(1)
                          : "#"
                      }
                      style={
                        window.innerWidth < 600
                          ? { pointerEvents: "all" }
                          : { pointerEvents: "none" }
                      }
                    >
                      <Phone />
                      {window.innerWidth < 600
                        ? "Click to call"
                        : "+251 " + number.slice(1)}
                    </ActionButton>
                    <p>
                      {commission * 100}% <br /> commission
                    </p>
                  </CarFooter>
                </CarDetails>
              </CarContainer>
            );
          }
        )}
      </CarsWrapper>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </>
  );
}

export default Car;
