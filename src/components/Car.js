import React, { useState, useEffect } from "react";

import Modal from "./Modal";

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

import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as ImageIcon } from "../assets/image.svg";

function Car({ cars }) {
  const [showModal, setShowModal] = useState(false);

  // Need this to pass images to the modal
  const [modalImages, setModalImages] = useState();

  // Restrict scrolling when modal is open
  useEffect(() => {
    const body = document.querySelector("body");

    showModal
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }, [showModal]);

  return (
    <>
      {/* // cars.length on it's own displays 0 when empty, !! makes it boolean */}
      {!!cars.length && (
        <>
          <CarsWrapper>
            <h1>Latest</h1>

            {cars.map(
              (
                {
                  files: images,
                  make,
                  model,
                  comment,
                  transmission,
                  price,
                  year,
                  contact,
                  commission,
                  loan,
                },
                index
              ) => {
                return (
                  <CarContainer key={index}>
                    <CarImageContainer>
                      <CarImage
                        src={
                          "http://localhost:5000/" +
                          images[0].filePath.replace("\\", "/")
                        }
                      />
                      <button
                        onClick={() => {
                          setModalImages(images);
                          setShowModal(true);
                        }}
                      >
                        <ImageIcon />
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
                            <p>
                              {new Intl.NumberFormat("en-GB", {
                                style: "currency",
                                currency: "ETB",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              }).format(price)}
                            </p>
                          </div>
                          <div>
                            <label>Loan</label>
                            <p>
                              {loan
                                ? `${new Intl.NumberFormat("en-GB", {
                                    style: "currency",
                                    currency: "ETB",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                  }).format(loan)}`
                                : "Not available!"}
                            </p>
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
                              ? "tel: +251 " + contact
                              : "#"
                          }
                          style={
                            window.innerWidth < 600
                              ? { pointerEvents: "all" }
                              : { pointerEvents: "none" }
                          }
                        >
                          <PhoneIcon />
                          {window.innerWidth < 600
                            ? "Click to call"
                            : "+251 " + contact}
                        </ActionButton>
                        <p>
                          {commission.split(" ")[0]} <br /> commission
                        </p>
                      </CarFooter>
                    </CarDetails>
                  </CarContainer>
                );
              }
            )}
          </CarsWrapper>
        </>
      )}
      {showModal && (
        <Modal images={modalImages} closeModal={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Car;
