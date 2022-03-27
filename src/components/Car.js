import React, { useState, useEffect } from "react";

import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as ImageIcon } from "../assets/image.svg";

import Modal from "./Modal";
import { getMultipleFiles } from "../data/api";

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

import { FilterBar, Select } from "../styles/Filter.style";
import { Loader, LoaderContainer } from "../styles/Loader.style";
import { ModalContainer } from "../styles/Modal.style";

function Car() {
  const [showModal, setShowModal] = useState(false);
  const [multipleFiles, setMultipleFiles] = useState(null);

  // Need this to pass images to the modal
  const [modalImages, setModalImages] = useState();

  // Filtering
  const [filterRule, setFilterRule] = useState({});

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMultipleFilesList();
  }, []);

  // Restrict scrolling when modal is open
  useEffect(() => {
    const body = document.querySelector("body");

    showModal
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }, [showModal]);

  return (
    <>
      <FilterBar>
        <label>Filter by:</label>
        <Select defaultValue="" onChange={() => {}}>
          <option value="" disabled hidden>
            Year
          </option>
          <option value="2001">2001</option>
          <option value="2005">2005</option>
        </Select>
      </FilterBar>

      <CarsWrapper>
        <h1>Latest</h1>
        {!multipleFiles && (
          <ModalContainer loader>
            <LoaderContainer>
              <Loader />
              Loading...
            </LoaderContainer>
          </ModalContainer>
        )}
        {multipleFiles
          ?.filter(() => filterRule)
          .map(
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
                          <p>{price} br.</p>
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
                          window.innerWidth < 600 ? "tel: +251 " + contact : "#"
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
      {showModal && (
        <Modal images={modalImages} closeModal={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Car;
